/* Grammar Lab — 句庫
 * 每一句 = 句子 A(主要句,含先行詞 ante)+ 句子 B(要變成關係子句的句子,含一個 pron 代名詞/片語)
 * chunk 順序 = 該句的「原始語序」;pron 的 rel 設定:
 *   opts  可替換的關代(第一個為主要答案,其餘可接受)
 *   fn    關代在子句中的功能(顯示在標籤上)
 *   front 換成關代後要不要移到子句最前面
 *   omit  關代可否省略
 * also: 無法由 opts 自動產生、但也可接受的其他說法
 * comma: 非限定用法(前後加逗號)
 * 角色:S 主詞 / V 動詞 / O 受詞 / C 補語 / M 修飾語 / ante 先行詞 / pron 代名詞
 */
(function () {
  function c(r, t, extra) { return Object.assign({ r: r, t: t }, extra || {}); }
  var S = function (t) { return c('S', t); };
  var V = function (t) { return c('V', t); };
  var O = function (t) { return c('O', t); };
  var C = function (t) { return c('C', t); };
  var M = function (t) { return c('M', t); };
  var ANT = function (t) { return c('ante', t); };
  function P(t, opts, fn, f) {
    f = f || {};
    return c('pron', t, { rel: { opts: opts, fn: fn, front: !!f.front, omit: !!f.omit } });
  }

  window.GL_DATA = {
    topic: '關係代名詞與關係子句',
    groups: [
      {
        id: 'subj',
        name: '主格 who / which / that',
        tip: '主格:關代在子句中當「主詞」。先行詞是人 → who;是物 → which;兩者都可以用 that。關代後面直接接動詞。',
        items: [
          { id: 'r01', A: [ANT('the man'), V('is'), C('my teacher')],
            B: [P('he', ['who', 'that'], '主詞'), V('lives'), M('next door')],
            note: 'He 指的就是 the man。he 是子句的主詞,換成 who 後仍然當主詞,所以後面直接接動詞 lives。' },
          { id: 'r02', A: [S('I'), V('know'), ANT('the girl')],
            B: [P('she', ['who', 'that'], '主詞'), V('sits'), M('next to me')],
            note: '先行詞 the girl 是人,主格關代用 who。關係子句放在先行詞後面,修飾 the girl。' },
          { id: 'r03', A: [ANT('the book'), V('is'), C('very interesting')],
            B: [P('it', ['which', 'that'], '主詞'), V('is'), M('on the desk')],
            note: '先行詞 the book 是物,主格關代用 which(也可用 that)。注意主要動詞 is 在關係子句後面。' },
          { id: 'r04', A: [ANT('the students'), V('are'), M('in the library')],
            B: [P('they', ['who', 'that'], '主詞'), V('study'), M('for the exam')],
            note: '關係子句的動詞要和先行詞一致:the students 是複數,所以用 study(不加 s)。' },
          { id: 'r05', A: [S('I'), V('bought'), ANT('a car')],
            B: [P('it', ['which', 'that'], '主詞'), V('was made'), M('in Germany')],
            note: '關係子句放在句尾時,緊接在先行詞 a car 後面。' }
        ]
      },
      {
        id: 'obj',
        name: '受格 whom / which / that(可省略)',
        tip: '受格:關代在子句中當「受詞」,換成關代後要移到子句最前面。人 → whom(口語常用 that);物 → which / that。受格關代可以省略。',
        items: [
          { id: 'r06', A: [ANT('the man'), V('is'), C('my uncle')],
            B: [S('you'), V('met'), P('him', ['whom', 'that'], '受詞', { front: true, omit: true })],
            note: 'him 是 met 的受詞。換成 whom 後要移到子句最前面:whom you met。受格關代可以省略 → The man you met is my uncle.' },
          { id: 'r07', A: [ANT('the book'), V('is'), C('mine')],
            B: [S('I'), V('bought'), P('it', ['which', 'that'], '受詞', { front: true, omit: true })],
            note: 'it 是 bought 的受詞,換成 which 後移到子句最前面。which 可以省略,也可以換成 that。' },
          { id: 'r08', A: [S('she'), V('lost'), ANT('the watch')],
            B: [S('her father'), V('gave'), P('it', ['which', 'that'], '受詞', { front: true, omit: true }), M('to her')],
            note: '關代移到最前面後,子句剩下 her father gave to her。注意關代後面是「主詞 + 動詞」,不是直接接動詞。' },
          { id: 'r09', A: [ANT('the movie'), V('was'), C('boring')],
            B: [S('we'), V('watched'), P('it', ['which', 'that'], '受詞', { front: true, omit: true }), M('yesterday')],
            note: '比較主格和受格:主格關代後面接「動詞」,受格關代後面接「主詞 + 動詞」。' }
        ]
      },
      {
        id: 'poss',
        name: '所有格 whose',
        tip: '所有格:whose + 名詞,代替 his / her / its 這類所有格,不能單獨使用。',
        items: [
          { id: 'r10', A: [ANT('the girl'), V('is'), C('my friend')],
            B: [P('her', ['whose'], '所有格'), S('father'), V('is'), C('a doctor')],
            note: 'Her father 的 Her 換成 whose,whose 和後面的名詞 father 一起當子句主詞。' },
          { id: 'r11', A: [S('I'), V('have'), ANT('a friend')],
            B: [P('his', ['whose'], '所有格'), S('mother'), V('is'), C('a singer')],
            note: 'his mother → whose mother。whose 後面一定要接名詞,所以不能把 mother 拿掉。' },
          { id: 'r12', A: [ANT('the house'), V('is'), M('for sale')],
            B: [P('its', ['whose'], '所有格'), S('roof'), V('is'), C('red')],
            note: 'whose 不只可以修飾人,也可以修飾物(its roof → whose roof)。' }
        ]
      },
      {
        id: 'prep',
        name: '介系詞 + 關代',
        tip: '介系詞 + 關代:介系詞和關代一起移到子句最前面,人用 whom、物用 which。介系詞也可以留在句尾(這時關代可用 that 或省略)。',
        items: [
          { id: 'r13', A: [ANT('the house'), V('is'), C('old')],
            B: [S('he'), V('lives'), P('in the house', ['in which'], '介系詞+關代', { front: true })],
            also: ['The house which he lives in is old.', 'The house that he lives in is old.', 'The house he lives in is old.'],
            note: 'in the house → in which,整組移到子句最前面。介系詞後面只能用 which / whom,不能用 that。' },
          { id: 'r14', A: [ANT('the girl'), V('is'), C('my classmate')],
            B: [S('I'), V('talked'), P('to her', ['to whom'], '介系詞+關代', { front: true }), M('yesterday')],
            also: ['The girl whom I talked to yesterday is my classmate.', 'The girl I talked to yesterday is my classmate.'],
            note: 'to her → to whom。介系詞後面的關代若是人,一定用 whom(不用 who)。' },
          { id: 'r15', A: [ANT('the pen'), V('is'), M('on the desk')],
            B: [S('he'), V('wrote'), O('the letter'), P('with the pen', ['with which'], '介系詞+關代', { front: true })],
            also: ['The pen which he wrote the letter with is on the desk.', 'The pen that he wrote the letter with is on the desk.'],
            note: 'with the pen → with which。介系詞 + which 比較正式,介系詞留句尾比較口語。' }
        ]
      },
      {
        id: 'nonres',
        name: '非限定用法(逗號)',
        tip: '非限定用法:先行詞已經很明確(專有名詞、my uncle…),關係子句只是「補充說明」,前後加逗號;不能用 that,也不能省略關代。',
        items: [
          { id: 'r16', A: [ANT('my uncle'), V('is'), C('a doctor')], comma: true,
            B: [P('he', ['who'], '主詞'), V('lives'), M('in Tokyo')],
            note: 'my uncle 已經是特定的人,who 子句只是補充資訊,所以前後加逗號。這裡不能用 that。' },
          { id: 'r17', A: [S('I'), V('visited'), ANT('Tainan')], comma: true,
            B: [P('it', ['which'], '主詞'), V('is'), C('famous for its food')],
            note: '專有名詞(地名、人名)本身就很明確,後面的關係子句用逗號隔開。子句在句尾時,只有前面有逗號。' },
          { id: 'r18', A: [ANT('Mr. Lin'), V('is'), C('our English teacher')], comma: true,
            B: [P('he', ['who'], '主詞'), V('comes'), M('from Canada')],
            note: '關係子句夾在句子中間時,前後各一個逗號,像括號一樣把補充資訊框起來。' },
          { id: 'r19', A: [ANT('this watch'), V('is'), C('very expensive')], comma: true,
            B: [S('my father'), V('gave'), P('it', ['which'], '受詞', { front: true }), M('to me')],
            note: '非限定用法的受格關代不能省略,也不能用 that。' }
        ]
      },
      {
        id: 'adv',
        name: '關係副詞 where / when / why',
        tip: '關係副詞:where(地點)、when(時間)、why(原因)代替「介系詞 + 名詞」的副詞片語,等於「介系詞 + which」。when / why 常常可以省略。',
        items: [
          { id: 'r20', A: [ANT('the town'), V('is'), C('small')],
            B: [S('I'), V('was born'), P('in the town', ['where', 'in which'], '副詞', { front: true })],
            note: 'in the town 是地點副詞片語 → where,也等於 in which。where 後面接完整的句子(主詞 + 動詞)。' },
          { id: 'r21', A: [S('I'), V('remember'), ANT('the day')],
            B: [S('we'), V('first met'), P('on that day', ['when', 'on which'], '副詞', { front: true, omit: true })],
            note: 'on that day 是時間副詞片語 → when(= on which)。先行詞是 the day 時,when 可以省略。' },
          { id: 'r22', A: [S('that'), V('is'), ANT('the reason')],
            B: [S('he'), V('was late'), P('for that reason', ['why', 'for which'], '副詞', { front: true, omit: true })],
            note: 'for that reason 是原因副詞片語 → why(= for which)。先行詞 the reason 後面的 why 常常省略。' }
        ]
      }
    ]
  };
})();
