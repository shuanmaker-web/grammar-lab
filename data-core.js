/* Grammar Lab — 通用句庫格式(步驟示範用)
 *
 * 一個主題:GL.topic({ id, no, name, groups: [ { id, name, tip, items: [ item… ] } ] })
 * 一個 item:GL.item(id, [ 步驟… ])
 * 一個步驟:GL.st('步驟名稱', '方塊寫法', '講解', ['也可以這樣說…'], '整句中文翻譯(選填,開「中文」開關才顯示)')
 *
 * 方塊寫法:用 " | " 分開每個方塊,每個方塊 = 角色:文字
 *   S 主詞  V 動詞  O 受詞  C 補語  M 修飾語  X 助動詞  N 否定  J 連接詞  Q 疑問詞
 *   S(形式主詞):it      → 括號內是自訂標籤
 *   *N:not              → 前面加 * 代表「這一步新出現/有變化」,會加上外框提醒
 *   M:yesterday,        → 文字結尾的逗號:這個方塊不在句尾時才顯示
 *   [副詞子句: J:when | S:I | V:got | M:home],   → 中括號 = 一個可整組拖曳的框(子句/片語)
 *   結尾加 " ?" 或 " !" → 句尾標點(預設是句點)
 */
(function () {
  var LABEL = { S: '主詞', V: '動詞', O: '受詞', C: '補語', M: '修飾語', X: '助動詞', N: '否定', J: '連接詞', Q: '疑問詞' };

  function splitTop(s) {
    var out = [], depth = 0, cur = '', i, ch;
    for (i = 0; i < s.length; i++) {
      ch = s.charAt(i);
      if (ch === '[') depth++;
      if (ch === ']') depth--;
      if (ch === '|' && depth === 0) { out.push(cur); cur = ''; }
      else cur += ch;
    }
    out.push(cur);
    return out.map(function (x) { return x.trim(); }).filter(function (x) { return x; });
  }

  function parseNodes(s) {
    return splitTop(s).map(function (tok) {
      var chg = false, p = '';
      if (tok.charAt(0) === '*') { chg = true; tok = tok.slice(1).trim(); }
      if (tok.charAt(0) === '[') {
        if (tok.charAt(tok.length - 1) === ',') { p = ','; tok = tok.slice(0, -1).trim(); }
        if (tok.charAt(tok.length - 1) !== ']') throw new Error('GL: 中括號沒有關好 → ' + tok);
        var inner = tok.slice(1, -1), ci = inner.indexOf(':');
        return { k: 'cl', label: inner.slice(0, ci).trim(), kids: parseNodes(inner.slice(ci + 1)), p: p, chg: chg };
      }
      var m = /^([A-Z])(?:\(([^)]*)\))?:(.+)$/.exec(tok);
      if (!m || !LABEL[m[1]]) throw new Error('GL: 看不懂的方塊 → ' + tok);
      var t = m[3].trim();
      if (t.charAt(t.length - 1) === ',') { p = ','; t = t.slice(0, -1).trim(); }
      return { r: m[1], t: t, l: m[2] || LABEL[m[1]], p: p, chg: chg };
    });
  }

  function st(label, spec, note, also, tr) {
    var end = '.';
    spec = spec.trim();
    var last = spec.charAt(spec.length - 1);
    if ((last === '?' || last === '!') && spec.charAt(spec.length - 2) === ' ') { end = last; spec = spec.slice(0, -2); }
    return { label: label, nodes: parseNodes(spec), end: end, note: note || '', also: also || [], tr: tr || '' };
  }

  window.GL_TOPICS = window.GL_TOPICS || [];
  window.GL = {
    LABEL: LABEL,
    st: st,
    item: function (id, steps) { return { id: id, steps: steps }; },
    topic: function (t) { t.kind = 'steps'; window.GL_TOPICS.push(t); }
  };
})();
