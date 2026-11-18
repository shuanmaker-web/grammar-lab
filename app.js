/* Grammar Lab — 教學示範板
 * 兩種句庫:
 *   rel   關係子句(data.js):兩句合一句 + 自由排列
 *   steps 其他主題(data-*.js):步驟示範 + 自由排列
 */
(function () {
  'use strict';
  var D = window.GL_DATA;
  var ROLE_LABEL = { S: '主詞', V: '動詞', O: '受詞', C: '補語', M: '修飾語', X: '助動詞', N: '否定', J: '連接詞', Q: '疑問詞', ante: '先行詞', pron: '代名詞' };
  var $ = function (id) { return document.getElementById(id); };
  var uid = 0;

  var TOPICS = (window.GL_TOPICS || []).slice();
  TOPICS.push({ id: 'rel', no: D.no || 12, kind: 'rel', name: D.topic, groups: D.groups });
  TOPICS.sort(function (a, b) { return a.no - b.no; });

  var st = {
    mode: 'compose', topic: 0, cur: 0, labels: true, colors: true, font: 1,
    A: [], B: [], rows: [], endA: '.', step: 0, fstep: 0, popRow: -1,
    hl: false, moved: false, flash: null, targets: null, sideView: 'items'
  };
  var idx = {};          // id -> {n, list, owner, i}
  var flatList = [];     // 目前主題的 {g, s}

  function buildFlat() {
    flatList = [];
    TOPICS[st.topic].groups.forEach(function (g) { g.items.forEach(function (s) { flatList.push({ g: g, s: s }); }); });
  }
  function isRel() { return TOPICS[st.topic].kind === 'rel'; }
  function curItem() { return flatList[st.cur].s; }

  /* ---------- 小工具 ---------- */
  function h(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }
  function ucfirst(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function save() {
    try {
      localStorage.setItem('gl_state', JSON.stringify({
        mode: st.mode, topic: TOPICS[st.topic].id, item: curItem().id,
        labels: st.labels, colors: st.colors, font: st.font
      }));
    } catch (e) {}
  }
  function load() {
    try {
      var o = JSON.parse(localStorage.getItem('gl_state') || 'null');
      if (!o || !o.topic) st.sideView = 'topics';   // 第一次開(或舊版存檔):先顯示主題清單
      if (!o) return;
      if (o.mode === 'compose' || o.mode === 'free') st.mode = o.mode;
      if (typeof o.labels === 'boolean') st.labels = o.labels;
      if (typeof o.colors === 'boolean') st.colors = o.colors;
      if (typeof o.font === 'number' && o.font >= 0.7 && o.font <= 1.8) st.font = o.font;
      TOPICS.forEach(function (t, i) { if (t.id === o.topic) st.topic = i; });
      buildFlat();
      flatList.forEach(function (f, i) { if (f.s.id === o.item) st.cur = i; });
    } catch (e) {}
  }

  /* ---------- 關係子句:資料 → 節點 ---------- */
  function mkChunk(def) {
    var n = { k: 'c', id: 'n' + (++uid), r: def.r, t: def.t, rel: null };
    if (def.rel) n.rel = { opts: def.rel.opts, fn: def.rel.fn, front: def.rel.front, omit: def.rel.omit, i: -1, origIdx: 0 };
    return n;
  }
  function buildBase(s) {
    var A = s.A.map(mkChunk);
    var kids = s.B.map(mkChunk);
    kids.forEach(function (n, i) { if (n.rel) n.rel.origIdx = i; });
    return { A: A, cl: { k: 'cl', id: 'n' + (++uid), kids: kids, comma: !!s.comma } };
  }
  function setRel(n, list, i) {
    var was = n.rel.i;
    n.rel.i = i;
    if (!n.rel.front) return;
    var from = list.indexOf(n);
    if (from < 0) return;
    if (was === -1 && i >= 0) { list.splice(from, 1); list.unshift(n); }
    else if (i === -1 && was >= 0) { list.splice(from, 1); list.splice(Math.min(n.rel.origIdx, list.length), 0, n); }
  }
  // 完整句子(關係子句已放進正確位置);relIdx 指定關代用哪一個 opts(opts.length = 省略)
  function freeTree(s, relIdx) {
    var b = buildBase(s);
    var pr = b.cl.kids.filter(function (n) { return n.rel; })[0];
    setRel(pr, b.cl.kids, relIdx == null ? 0 : relIdx);
    var ai = 0;
    b.A.forEach(function (n, i) { if (n.r === 'ante') ai = i; });
    b.A.splice(ai + 1, 0, b.cl);
    return b.A;
  }

  /* ---------- 步驟示範:資料 → 節點 ---------- */
  function mkGen(def) {
    if (def.k === 'cl') return { k: 'cl', gen: true, id: 'n' + (++uid), kids: def.kids.map(mkGen), label: def.label, p: def.p, chg: def.chg, comma: false };
    return { k: 'c', id: 'n' + (++uid), r: def.r, t: def.t, l: def.l, p: def.p, chg: def.chg, rel: null };
  }
  function buildGen(step) { return step.nodes.map(mkGen); }
  // 節點或原始定義都可以用(欄位相同)
  function gText(list, end) {
    var out = [];
    (function walk(l) {
      l.forEach(function (n, i) {
        var notLast = i < l.length - 1;
        if (n.k === 'cl') {
          var before = out.length;
          walk(n.kids);
          if (n.p && notLast && out.length > before) out[out.length - 1] += n.p;
        } else out.push(n.t + (n.p && notLast ? n.p : ''));
      });
    })(list);
    if (!out.length) return '';
    return ucfirst(out.join(' ')) + (end || '');
  }

  /* ---------- 文字化(關係子句) ---------- */
  function leafText(n) {
    if (n.rel) {
      if (n.rel.i < 0) return n.t;
      if (n.rel.i >= n.rel.opts.length) return null;
      return n.rel.opts[n.rel.i];
    }
    return n.t;
  }
  function words(list, relMode) {
    var out = [];
    list.forEach(function (n, i) {
      if (n.k === 'c') {
        if (n.rel && n.rel.i >= 0) {
          var t = leafText(n);
          if (t === null) return;
          out.push(relMode === 'token' ? 'REL' : t);
        } else out.push(n.t);
      } else {
        if (n.comma) out.push(',');
        words(n.kids, relMode).forEach(function (w) { out.push(w); });
        if (n.comma && i < list.length - 1) out.push(',');
      }
    });
    return out;
  }
  function sentenceText(list) {
    var w = words(list, 'text');
    if (!w.length) return '';
    return ucfirst(w.join(' ').replace(/ ,/g, ',')) + '.';
  }
  function norm(s) { return s.toLowerCase().replace(/[.,?!]/g, '').replace(/\s+/g, ' ').trim(); }
  function relOf(s) { return s.B.filter(function (c) { return c.rel; })[0].rel; }
  function variants(s) {
    var out = [], base = sentenceText(freeTree(s, 0)), rel = relOf(s), j;
    for (j = 1; j < rel.opts.length; j++) out.push(sentenceText(freeTree(s, j)));
    if (rel.omit) out.push(sentenceText(freeTree(s, rel.opts.length)));
    (s.also || []).forEach(function (x) { out.push(x); });
    return out.filter(function (x, i) { return x !== base && out.indexOf(x) === i; });
  }
  function calcTargets(s) {
    var set = {}, rel = relOf(s);
    set[words(freeTree(s, 0), 'token').join(' ').toLowerCase()] = 1;
    if (rel.omit) set[words(freeTree(s, rel.opts.length), 'token').join(' ').toLowerCase()] = 1;
    var also = {};
    (s.also || []).forEach(function (x) { also[norm(x)] = 1; });
    return { tok: set, also: also };
  }
  function arrangementOk() {
    if (st.targets.gen) return !!st.targets.gen[norm(gText(st.A, ''))];
    var key = words(st.A, 'token').join(' ').toLowerCase();
    if (st.targets.tok[key]) return true;
    return !!st.targets.also[norm(words(st.A, 'text').join(' '))];
  }
  function itemTitle(s) {
    if (s.steps) { var sp = s.steps[s.steps.length - 1]; return gText(sp.nodes, sp.end); }
    return sentenceText(freeTree(s, 0));
  }

  /* ---------- 索引 ---------- */
  function buildIndex() {
    idx = {};
    function walk(list, owner) {
      list.forEach(function (n, i) {
        idx[n.id] = { n: n, list: list, owner: owner, i: i };
        if (n.k === 'cl') walk(n.kids, n.id);
      });
    }
    walk(st.A, 'A');
    walk(st.B, 'B');
    st.rows.forEach(function (r, i) { walk(r, 'R' + i); });
  }
  function getList(owner) {
    if (owner === 'A') return st.A;
    if (owner === 'B') return st.B;
    if (/^R\d+$/.test(owner)) return st.rows[Number(owner.slice(1))];
    return idx[owner].n.kids;
  }
  function firstLeaf(list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].k === 'c') return list[i];
      var f = firstLeaf(list[i].kids);
      if (f) return f;
    }
    return null;
  }

  /* ---------- 載入句子 ---------- */
  function loadFreeGen() {
    var sp = curItem().steps[st.fstep];
    st.A = buildGen(sp); st.B = []; st.rows = []; st.endA = sp.end;
    var set = {};
    set[norm(gText(sp.nodes, ''))] = 1;
    sp.also.forEach(function (x) { set[norm(x)] = 1; });
    st.targets = { gen: set };
    st.moved = false;
  }
  function loadSentence(keepStep) {
    var s = curItem();
    st.hl = false; st.moved = false; st.flash = null; st.popRow = -1;
    st.A = []; st.B = []; st.rows = []; st.endA = '.';
    if (isRel()) {
      st.targets = calcTargets(s);
      if (st.mode === 'compose') {
        var b = buildBase(s);
        st.A = b.A; st.B = [b.cl];
      } else st.A = freeTree(s, 0);
    } else if (st.mode === 'compose') {
      st.step = 0;
      st.rows = [buildGen(s.steps[0])];
      st.targets = { gen: {} };
    } else {
      if (keepStep !== true || st.fstep >= s.steps.length) st.fstep = s.steps.length - 1;
      loadFreeGen();
    }
    render();
    save();
  }
  function setStep(k) {
    var s = curItem();
    k = Math.max(0, Math.min(k, s.steps.length - 1));
    if (st.mode === 'free') { st.fstep = k; loadFreeGen(); render(); return; }
    while (st.rows.length <= k) st.rows.push(buildGen(s.steps[st.rows.length]));
    st.rows.length = k + 1;
    st.step = k; st.popRow = k;
    render();
  }

  /* ---------- 繪製 ---------- */
  function chunkEl(n, cap, anteHl, pronHl) {
    var el = h('div', 'blk chunk');
    el.dataset.id = n.id;
    var role = n.r, text = n.t, label = n.l || ROLE_LABEL[n.r];
    if (n.rel) {
      if (n.rel.i < 0) { role = 'pron'; label = '代名詞'; }
      else {
        var t = leafText(n);
        role = 'relpron';
        if (t === null) { text = '(' + n.rel.opts[0] + ')'; label = '關代·省略'; el.classList.add('omit'); }
        else { text = t; label = '關代·' + n.rel.fn; }
      }
      el.classList.add('tap');
    }
    if (cap && role !== 'relpron') text = ucfirst(text);
    el.classList.add('r-' + role);
    if (n.chg) el.classList.add('chg');
    if ((n.r === 'ante' && anteHl) || (n.rel && n.rel.i < 0 && pronHl)) el.classList.add('hl');
    if (st.flash === n.id) el.classList.add('pop');
    el.appendChild(h('span', 'tx', text));
    el.appendChild(h('span', 'lab', label));
    return el;
  }
  function clauseEl(n, list, i, hl) {
    var el = h('div', 'blk clause');
    el.dataset.id = n.id;
    el.appendChild(h('div', 'tab', '關係子句'));
    var kids = h('div', 'row kids');
    kids.dataset.owner = n.id;
    var inA = list === st.A;   // 逗號只在合進主要句之後才出現
    if (n.comma && inA) kids.appendChild(h('span', 'cm', ','));
    n.kids.forEach(function (k) { kids.appendChild(chunkEl(k, false, false, hl.pron)); });
    if (n.comma && inA && i < list.length - 1) kids.appendChild(h('span', 'cm', ','));
    el.appendChild(kids);
    if (st.flash === n.id) el.classList.add('pop');
    return el;
  }
  function rowEl(list, owner, hl) {
    var row = h('div', 'row top');
    row.dataset.owner = owner;
    var first = firstLeaf(list);
    list.forEach(function (n, i) {
      if (n.k === 'c') row.appendChild(chunkEl(n, n === first, hl.ante, hl.pron));
      else row.appendChild(clauseEl(n, list, i, hl));
    });
    if (list.length) row.appendChild(h('span', 'dot', '.'));
    return row;
  }
  // 步驟示範用
  function appendNodes(row, list, first) {
    list.forEach(function (n, i) {
      row.appendChild(n.k === 'c' ? chunkEl(n, n === first, false, false) : boxEl(n, first));
      if (n.p && i < list.length - 1) row.appendChild(h('span', 'cm', n.p));
    });
  }
  function boxEl(n, first) {
    var el = h('div', 'blk clause gen');
    el.dataset.id = n.id;
    if (n.chg) el.classList.add('chg');
    el.appendChild(h('div', 'tab', n.label));
    var kids = h('div', 'row kids');
    kids.dataset.owner = n.id;
    appendNodes(kids, n.kids, first);
    el.appendChild(kids);
    if (st.flash === n.id) el.classList.add('pop');
    return el;
  }
  function gRowEl(list, owner, end) {
    var row = h('div', 'row top');
    row.dataset.owner = owner;
    appendNodes(row, list, firstLeaf(list));
    if (list.length) row.appendChild(h('span', 'dot', end));
    return row;
  }

  function findAll() {
    var all = Object.keys(idx).map(function (k) { return idx[k].n; });
    return {
      ante: all.filter(function (n) { return n.r === 'ante'; })[0],
      pron: all.filter(function (n) { return n.rel; })[0],
      cl: all.filter(function (n) { return n.k === 'cl'; })[0]
    };
  }

  var NUM = ['①', '②', '③', '④', '⑤', '⑥'];
  function render() {
    buildIndex();
    var rel = isRel(), compose = st.mode === 'compose';
    var rowsS = $('rowsS');
    rowsS.replaceChildren();
    if (rel) {
      var f = findAll();
      var replaced = f.pron.rel.i >= 0;
      var hl = { ante: compose && st.hl && !replaced, pron: compose && st.hl };
      $('wrapA').hidden = false;
      $('rowA').replaceChildren(rowEl(st.A, 'A', hl));
      var showB = compose && st.B.length > 0;
      $('wrapB').hidden = !showB;
      if (showB) $('rowB').replaceChildren(rowEl(st.B, 'B', hl));
      else $('rowB').replaceChildren();
      if (compose) {
        $('labA').textContent = st.B.length ? '句子 ①(主要句)' : '合成一句';
        $('labB').textContent = '句子 ②(要變成關係子句的句子)';
      } else $('labA').textContent = '完整句子(拖曳方塊重新排列)';
      renderInfo(f);
    } else {
      var s = curItem();
      $('wrapB').hidden = true;
      $('rowB').replaceChildren();
      if (compose) {
        $('wrapA').hidden = true;
        $('rowA').replaceChildren();
        st.rows.forEach(function (r, i) {
          var w = h('div', 'rowwrap');
          w.appendChild(h('div', 'rowlab', (s.steps.length > 1 ? (NUM[i] || (i + 1)) + ' ' : '') + s.steps[i].label));
          w.appendChild(gRowEl(r, 'R' + i, s.steps[i].end));
          rowsS.appendChild(w);
        });
        if (st.popRow >= 0 && rowsS.children[st.popRow]) {
          var pw = rowsS.children[st.popRow];
          Array.prototype.forEach.call(pw.querySelectorAll('.chg'), function (e) { e.classList.add('pop'); });
          if (st.popRow > 0 && pw.scrollIntoView) pw.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        st.popRow = -1;
      } else {
        $('wrapA').hidden = false;
        $('rowA').replaceChildren(gRowEl(st.A, 'A', st.endA));
        $('labA').textContent = s.steps[st.fstep].label + '(拖曳方塊重新排列)';
      }
      renderGenInfo(s);
    }
    var stage = $('stage');
    stage.classList.toggle('nolabel', !st.labels);
    stage.classList.toggle('nocolor', !st.colors);
    document.documentElement.style.setProperty('--zoom', st.font);
    $('tLabel').classList.toggle('on', st.labels);
    $('tColor').classList.toggle('on', st.colors);
    Array.prototype.forEach.call(document.querySelectorAll('#modeTabs .tab'), function (b) {
      b.classList.toggle('on', b.dataset.mode === st.mode);
      if (b.dataset.mode === 'compose') b.textContent = rel ? '兩句合一句' : '步驟示範';
    });
    $('bShuffle').hidden = st.mode !== 'free';
    $('bReset').textContent = st.mode === 'free' ? '還原' : '重設';
    $('topicName').textContent = TOPICS[st.topic].name;
    renderLegend();
    renderSide();
    if (st.flash) { var fl = st.flash; setTimeout(function () { if (st.flash === fl) st.flash = null; }, 500); }
  }

  /* ---------- 說明 / 引導 / 訊息 ---------- */
  function renderTip() {
    var cur = flatList[st.cur];
    $('tip').replaceChildren(h('b', null, cur.g.name), h('span', null, cur.g.tip), h('span', 'cnt', (st.cur + 1) + ' / ' + flatList.length));
  }
  function addAlso(msg, list) {
    if (list.length) msg.appendChild(h('div', 'var', '也可以這樣說:' + list.join('  /  ')));
  }
  function renderGenInfo(s) {
    renderTip();
    var guide = $('guide'), msg = $('msg'), n = s.steps.length;
    var free = st.mode === 'free', at = free ? st.fstep : st.step;
    msg.className = 'msg';
    msg.replaceChildren();
    guide.hidden = false;
    var steps = h('div', 'steps');
    s.steps.forEach(function (sp, i) {
      var cls = 'step';
      if (free) cls += i === at ? ' cur' : '';
      else cls += i < at ? ' done' : (i === at ? ' cur' : '');
      var b = h('button', cls);
      b.dataset.gstep = String(i);
      b.appendChild(h('b', null, String(i + 1)));
      b.appendChild(document.createTextNode(sp.label));
      steps.appendChild(b);
    });
    var text = '';
    if (!free && at < n - 1) {
      var nb = h('button', 'step next', '下一步 ▶');
      nb.dataset.gnext = '1';
      steps.appendChild(nb);
      text = '按「下一步」看句子怎麼變。方塊都可以拖曳。';
    } else if (!free && n > 1) text = '外框標出的方塊,是和上一步不一樣的地方。';
    else if (free && n > 1) text = '點上面的句型,選一個句子來排列。';
    guide.replaceChildren(steps);
    if (text) guide.appendChild(h('div', 'steptext', text));

    var sp = s.steps[at];
    if (!free) {
      msg.appendChild(h('span', 'big', gText(sp.nodes, sp.end)));
      msg.appendChild(h('span', 'note', sp.note));
      addAlso(msg, sp.also);
      return;
    }
    if (arrangementOk()) {
      msg.classList.add('ok');
      msg.appendChild(h('span', 'big', (st.moved ? '✓ 排對了!' : '正確語序') + ' ' + gText(st.A, st.endA)));
      msg.appendChild(h('span', 'note', sp.note));
      addAlso(msg, sp.also);
    } else {
      msg.appendChild(h('span', 'big', gText(st.A, st.endA)));
      msg.appendChild(h('span', 'note', '拖曳方塊,排出正確的語序。按「還原」可以看答案。'));
    }
  }
  function renderInfo(f) {
    var cur = flatList[st.cur], s = cur.s;
    renderTip();

    var guide = $('guide');
    var msg = $('msg');
    msg.className = 'msg';
    msg.replaceChildren();
    if (st.mode === 'free') {
      guide.hidden = true;
      var ok = arrangementOk();
      if (ok) {
        msg.classList.add('ok');
        var big = h('span', 'big', (st.moved ? '✓ 排對了!' : '正確語序') + ' ' + sentenceText(st.A));
        msg.appendChild(big);
        msg.appendChild(h('span', 'note', s.note));
        addAlso(msg, variants(s));
      } else {
        msg.appendChild(h('span', 'big', sentenceText(st.A)));
        msg.appendChild(h('span', 'note', '關係子句要緊接在先行詞後面,關代在子句最前面。拖曳方塊試試看,按「還原」回到正確語序。'));
      }
      return;
    }

    guide.hidden = false;
    var loc = idx[f.cl.id], aloc = idx[f.ante.id];
    var replaced = f.pron.rel.i >= 0;
    var merged = loc.list === st.A;
    var pos = merged && aloc.list === st.A && loc.i === aloc.i + 1;
    var success = merged && replaced && arrangementOk();
    var done = [st.hl || replaced || merged, replaced, success];
    var curStep = done.indexOf(false);
    var labels = ['找出相同的人/物', '換成關代', '拖進主要句'];

    var steps = h('div', 'steps');
    labels.forEach(function (lb, i) {
      var b = h('button', 'step' + (done[i] ? ' done' : (i === curStep ? ' cur' : '')));
      b.dataset.step = String(i + 1);
      b.appendChild(h('b', null, String(i + 1)));
      b.appendChild(document.createTextNode(lb));
      steps.appendChild(b);
    });
    var rel = f.pron.rel, text;
    if (success) text = '完成!看看關係子句放在哪裡、關代換成了什麼。';
    else if (curStep === 0) text = '「' + f.ante.t + '」和「' + f.pron.t + '」指的是同一個人/物。(點上面的 1 可標出來)';
    else if (curStep === 1) text = '點一下「' + f.pron.t + '」,換成關係代名詞:' + rel.opts.join(' / ') + (rel.omit ? ' / 省略' : '') + '。' + (rel.front ? ' 關代會自動移到子句最前面。' : '');
    else text = '把整個「關係子句」(抓住虛線框)拖到先行詞「' + f.ante.t + '」後面。';
    guide.replaceChildren(steps, h('div', 'steptext', text));

    if (success) {
      msg.classList.add('ok');
      msg.appendChild(h('span', 'big', '✓ ' + sentenceText(st.A)));
      msg.appendChild(h('span', 'note', s.note));
      addAlso(msg, variants(s));
    } else if (merged && !replaced) {
      msg.classList.add('warn');
      msg.appendChild(h('span', 'note', '子句放進去了,但「' + f.pron.t + '」還沒換成關代 → 點一下它。'));
    } else if (merged && !pos) {
      msg.classList.add('warn');
      msg.appendChild(h('span', 'note', '關係子句要放在先行詞「' + f.ante.t + '」的後面,才能修飾它。'));
    } else if (merged) {
      msg.classList.add('warn');
      msg.appendChild(h('span', 'note', '子句裡的順序不對:關代要放在關係子句的最前面。'));
    } else {
      var sa = ucfirst(s.A.map(function (c) { return c.t; }).join(' ')) + '.';
      var sb = ucfirst(s.B.map(function (c) { return c.t; }).join(' ')) + '.';
      msg.appendChild(h('span', 'note', '兩個句子 → 一個句子:' + sa + '  +  ' + sb));
    }
  }

  /* ---------- 側邊選單 ---------- */
  var topicsBuilt = false, listTopic = -1;
  function renderSide() {
    var tp = $('sideTopics'), list = $('sideList');
    if (!topicsBuilt) {
      topicsBuilt = true;
      tp.appendChild(h('div', 'gh', '文法主題'));
      TOPICS.forEach(function (t, i) {
        var cnt = 0;
        t.groups.forEach(function (g) { cnt += g.items.length; });
        var b = h('button', 'item topic');
        b.dataset.t = String(i);
        b.appendChild(h('span', 'no', String(i + 1)));
        b.appendChild(h('span', 'tx', t.name));
        b.appendChild(h('span', 'n', cnt + ' 句'));
        tp.appendChild(b);
      });
    }
    if (listTopic !== st.topic) {
      listTopic = st.topic;
      list.replaceChildren();
      var n = 0;
      TOPICS[st.topic].groups.forEach(function (g) {
        list.appendChild(h('div', 'gh', g.name));
        g.items.forEach(function (s) {
          var i = n++;
          var b = h('button', 'item');
          b.dataset.i = String(i);
          b.appendChild(h('span', 'no', String(i + 1)));
          b.appendChild(h('span', 'tx', itemTitle(s)));
          list.appendChild(b);
        });
      });
    }
    $('sideBack').textContent = '‹ 所有主題(目前:' + TOPICS[st.topic].name + ')';
    tp.hidden = st.sideView !== 'topics';
    $('sideItems').hidden = st.sideView === 'topics';
    Array.prototype.forEach.call(tp.querySelectorAll('.topic'), function (b) {
      b.classList.toggle('on', Number(b.dataset.t) === st.topic);
    });
    Array.prototype.forEach.call(list.querySelectorAll('.item'), function (b) {
      b.classList.toggle('on', Number(b.dataset.i) === st.cur);
    });
  }

  /* ---------- 操作 ---------- */
  function go(i) {
    st.cur = (i + flatList.length) % flatList.length;
    loadSentence();
  }
  function setTopic(i) {
    st.topic = i; st.cur = 0;
    buildFlat();
    loadSentence();
  }
  function tapNode(n) {
    if (!n.rel) return;
    var info = idx[n.id];
    var cnt = n.rel.opts.length + (n.rel.omit ? 1 : 0);
    var nx = n.rel.i + 1;
    if (nx >= cnt) nx = st.mode === 'compose' ? -1 : 0;
    setRel(n, info.list, nx);
    st.flash = n.id;
    render();
  }
  function shuffle() {
    function rnd(list) {
      for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = list[i]; list[i] = list[j]; list[j] = t;
      }
      list.forEach(function (n) { if (n.k === 'cl') rnd(n.kids); });
    }
    for (var tries = 0; tries < 30; tries++) {
      rnd(st.A);
      if (!arrangementOk()) break;
    }
    st.moved = true;
    render();
  }
  function moveNode(id, toOwner, toIdx) {
    var src = idx[id];
    var node = src.n;
    var dest = getList(toOwner);
    src.list.splice(src.i, 1);
    dest.splice(Math.max(0, Math.min(toIdx, dest.length)), 0, node);
    st.moved = true;
    st.flash = id;
    render();
  }

  /* ---------- 拖曳 ---------- */
  var drag = null;
  var insEl = $('ins');

  function subtreeOwners(node) {
    var s = {};
    (function walk(n) { s[n.id] = 1; if (n.k === 'cl') n.kids.forEach(walk); })(node);
    return s;
  }

  function findTarget(x, y) {
    var els = document.elementsFromPoint(x, y), i;
    for (i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.classList && el.classList.contains('row') && !drag.ban[el.dataset.owner]) return el;
    }
    var rows = Array.prototype.slice.call(document.querySelectorAll('.row.top')).filter(function (r) {
      return !r.closest('[hidden]') && !drag.ban[r.dataset.owner];
    });
    var best = null, bd = 120;
    rows.forEach(function (r) {
      var b = r.getBoundingClientRect();
      var d = y < b.top ? b.top - y : y > b.bottom ? y - b.bottom : 0;
      if (d < bd) { bd = d; best = r; }
    });
    return best;
  }
  function insertIndex(row, x, y) {
    var kids = Array.prototype.filter.call(row.children, function (el) {
      return el.classList.contains('blk') && el.dataset.id !== drag.id;
    });
    var k;
    for (k = 0; k < kids.length; k++) {
      var r = kids[k].getBoundingClientRect();
      if (y >= r.bottom) continue;
      if (x < r.left + r.width / 2) return { i: k, kids: kids };
    }
    return { i: kids.length, kids: kids };
  }
  function showIns(row, pos) {
    var kids = pos.kids, r;
    if (kids.length === 0) {
      var rb = row.getBoundingClientRect();
      insEl.style.left = (rb.left + 10) + 'px'; insEl.style.top = (rb.top + 8) + 'px'; insEl.style.height = Math.max(30, rb.height - 16) + 'px';
    } else if (pos.i < kids.length) {
      r = kids[pos.i].getBoundingClientRect();
      insEl.style.left = (r.left - 8) + 'px'; insEl.style.top = r.top + 'px'; insEl.style.height = r.height + 'px';
    } else {
      r = kids[kids.length - 1].getBoundingClientRect();
      insEl.style.left = (r.right + 4) + 'px'; insEl.style.top = r.top + 'px'; insEl.style.height = r.height + 'px';
    }
    insEl.style.display = 'block';
  }
  function clearHot() {
    Array.prototype.forEach.call(document.querySelectorAll('.drop-hot'), function (e) { e.classList.remove('drop-hot'); });
    insEl.style.display = 'none';
  }
  function startDrag(e) {
    var el = drag.el, r = el.getBoundingClientRect();
    var clone = el.cloneNode(true);
    clone.classList.add('drag-clone');
    clone.classList.remove('hl', 'pop');
    clone.style.width = r.width + 'px';
    clone.style.fontSize = getComputedStyle(el).fontSize;
    document.body.appendChild(clone);
    drag.clone = clone;
    drag.off = { x: e.clientX - r.left, y: e.clientY - r.top };
    drag.ban = subtreeOwners(drag.node);
    drag.started = true;
    el.classList.add('dragging');
  }
  function moveDrag(e) {
    drag.clone.style.transform = 'translate(' + (e.clientX - drag.off.x) + 'px,' + (e.clientY - drag.off.y) + 'px)';
    clearHot();
    var row = findTarget(e.clientX, e.clientY);
    drag.row = row;
    if (!row) { drag.pos = null; return; }
    row.classList.add('drop-hot');
    drag.pos = insertIndex(row, e.clientX, e.clientY);
    showIns(row, drag.pos);
  }
  function endDrag(commit) {
    var d = drag;
    drag = null;
    if (!d) return;
    clearHot();
    if (d.clone && d.clone.parentNode) d.clone.parentNode.removeChild(d.clone);
    if (d.el) d.el.classList.remove('dragging');
    if (!d.started) { if (commit) tapNode(d.node); return; }
    if (commit && d.row && d.pos) moveNode(d.id, d.row.dataset.owner, d.pos.i);
  }

  document.addEventListener('pointerdown', function (e) {
    if (e.button > 0) return;
    var el = e.target.closest ? e.target.closest('.blk') : null;
    if (!el || !$('board').contains(el)) return;
    var info = idx[el.dataset.id];
    if (!info) return;
    drag = { id: el.dataset.id, el: el, node: info.n, sx: e.clientX, sy: e.clientY, pid: e.pointerId, started: false };
  });
  window.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.pid) return;
    if (!drag.started) {
      if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 6) return;
      startDrag(e);
    }
    moveDrag(e);
  });
  window.addEventListener('pointerup', function (e) { if (drag && e.pointerId === drag.pid) endDrag(true); });
  window.addEventListener('pointercancel', function (e) { if (drag && e.pointerId === drag.pid) endDrag(false); });

  /* ---------- 事件綁定 ---------- */
  function setSide(open) {
    $('side').classList.toggle('closed', !open);
    $('scrim').hidden = !(open && window.innerWidth < 1000);
  }
  $('btnMenu').addEventListener('click', function () { setSide($('side').classList.contains('closed')); });
  $('scrim').addEventListener('click', function () { setSide(false); });
  $('sideList').addEventListener('click', function (e) {
    var b = e.target.closest('.item');
    if (!b) return;
    go(Number(b.dataset.i));
    if (window.innerWidth < 1000) setSide(false);
  });
  $('sideTopics').addEventListener('click', function (e) {
    var b = e.target.closest('.topic');
    if (!b) return;
    st.sideView = 'items';
    setTopic(Number(b.dataset.t));
    $('side').scrollTop = 0;
  });
  $('sideBack').addEventListener('click', function () { st.sideView = 'topics'; renderSide(); $('side').scrollTop = 0; });
  $('modeTabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab');
    if (!b || b.dataset.mode === st.mode) return;
    st.mode = b.dataset.mode;
    loadSentence();
  });
  $('guide').addEventListener('click', function (e) {
    var b = e.target.closest('.step');
    if (!b) return;
    if (isRel()) { if (b.dataset.step === '1') { st.hl = !st.hl; render(); } return; }
    if (b.dataset.gnext) setStep(st.step + 1);
    else if (b.dataset.gstep != null) setStep(Number(b.dataset.gstep));
  });
  $('tLabel').addEventListener('click', function () { st.labels = !st.labels; render(); save(); });
  $('tColor').addEventListener('click', function () { st.colors = !st.colors; render(); save(); });
  $('fPlus').addEventListener('click', function () { st.font = Math.min(1.8, Math.round((st.font + 0.1) * 10) / 10); render(); save(); });
  $('fMinus').addEventListener('click', function () { st.font = Math.max(0.7, Math.round((st.font - 0.1) * 10) / 10); render(); save(); });
  $('bPrev').addEventListener('click', function () { go(st.cur - 1); });
  $('bNext').addEventListener('click', function () { go(st.cur + 1); });
  $('bReset').addEventListener('click', function () { loadSentence(true); });
  $('bShuffle').addEventListener('click', shuffle);

  /* ---------- 圖例 ---------- */
  var legendKind = null;
  function renderLegend() {
    var kind = TOPICS[st.topic].kind;
    if (kind === legendKind) return;
    legendKind = kind;
    var items = kind === 'rel'
      ? [['ante', '先行詞'], ['relpron', '關代'], ['pron', '代名詞'], ['S', '主詞'], ['V', '動詞'], ['O', '受詞'], ['C', '補語'], ['M', '修飾語']]
      : [['S', '主詞'], ['V', '動詞'], ['O', '受詞'], ['C', '補語'], ['M', '修飾語'], ['X', '助動詞'], ['N', '否定'], ['J', '連接詞'], ['Q', '疑問詞']];
    var lg = $('legend');
    lg.replaceChildren();
    items.forEach(function (it) {
      var chip = h('span', 'chip');
      var i = h('i');
      if (it[0] === 'pron') { i.style.background = '#fff'; i.style.borderStyle = 'dashed'; i.style.borderColor = 'var(--rel-l)'; }
      else {
        var key = it[0] === 'relpron' ? 'rel' : it[0];
        i.style.background = 'var(--' + key + '-b)'; i.style.borderColor = 'var(--' + key + '-l)';
      }
      chip.appendChild(i); chip.appendChild(document.createTextNode(it[1]));
      lg.appendChild(chip);
    });
    var cc = h('span', 'chip'); var ci = h('i'); ci.style.borderStyle = 'dashed'; ci.style.borderColor = 'var(--accent)'; ci.style.background = 'rgba(232,112,94,.08)';
    cc.appendChild(ci); cc.appendChild(document.createTextNode(kind === 'rel' ? '關係子句' : '子句/片語')); lg.appendChild(cc);
    if (kind !== 'rel') {
      var rc = h('span', 'chip'); var ri = h('i', 'ring');
      rc.appendChild(ri); rc.appendChild(document.createTextNode('和上一步不同')); lg.appendChild(rc);
    }
  }

  /* ---------- 啟動 ---------- */
  buildFlat();
  load();
  buildFlat();
  if (st.cur >= flatList.length) st.cur = 0;
  $('ver').textContent = 'Grammar Lab v' + (self.APP_VERSION || '?');
  setSide(window.innerWidth >= 1000);
  loadSentence();

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
