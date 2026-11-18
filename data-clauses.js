/* Grammar Lab — 句庫:連接詞、子句、分詞、假設語氣、特殊句型(格式說明見 data-core.js) */
(function () {
  var s = GL.st, I = GL.item;

  /* ================= 10. 連接詞與副詞子句 ================= */
  GL.topic({
    id: 'conj', no: 10, name: '連接詞與副詞子句',
    groups: [
      {
        id: 'coord', name: '對等連接詞 and / but / or / so',
        tip: '兩個句子不能只用逗號連接,一定要有連接詞。and(而且)、but(但是)、or(或者/否則)、so(所以)連接兩個地位相等的句子,前面通常加逗號。',
        items: [
          I('j01', [
            s('句子 ①', 'S:I | V:like | O:tea', '第一個句子。'),
            s('句子 ②', 'S:my sister | V:likes | O:coffee', '第二個句子。'),
            s('合成一句', 'S:I | V:like | O:tea, | *J:and | S:my sister | V:likes | O:coffee', '用 and 連接兩個句子,and 前面加逗號。')
          ]),
          I('j02', [
            s('句子 ①', 'S:he | V:studied | M:hard', '第一個句子。'),
            s('句子 ②', 'S:he | V:failed | O:the test', '第二個句子:和預期相反。'),
            s('合成一句', 'S:he | V:studied | M:hard, | *J:but | S:he | V:failed | O:the test', '前後語意相反,用 but。')
          ]),
          I('j03', [
            s('句子 ①(原因)', 'S:it | V:was | C:late', '原因。'),
            s('句子 ②(結果)', 'S:we | V:went | M:home', '結果。'),
            s('合成一句', 'S:it | V:was | C:late, | *J:so | S:we | V:went | M:home', 'so 後面接「結果」。')
          ]),
          I('j04', [
            s('句子 ①', 'S:she | V:opened | O:the door', '第一個動作。'),
            s('句子 ②', 'S:she | V:walked | M:in', '第二個動作,主詞相同。'),
            s('合成一句', 'S:she | V:opened | O:the door | *J:and | V:walked | M:in', '兩句主詞相同時,第二個主詞可以省略;這時 and 前面不加逗號。and 前後的動詞時態要一致(opened / walked)。')
          ]),
          I('j05', [
            s('祈使句, or …', 'V(原形動詞):hurry up, | J:or | S:you | X:will | V:miss | O:the bus', '祈使句 + or:快一點,「否則」你會錯過公車。'),
            s('祈使句, and …', 'V(原形動詞):hurry up, | *J:and | S:you | X:will | *V:catch | O:the bus', '祈使句 + and:快一點,「那麼」你就會趕上公車。')
          ]),
          I('j06', [
            s('and', 'S:he | V:speaks | O:English | J:and | O:Japanese', 'and 連接兩個受詞。'),
            s('both … and', 'S:he | V:speaks | *J:both | O:English | J:and | O:Japanese', 'both A and B:A 和 B 兩者都。'),
            s('not only … but also', 'S:he | V:speaks | *J:not only | O:English | *J:but also | O:Japanese', 'not only A but also B:不只 A,還有 B(強調 B)。A 和 B 的詞性要一樣。')
          ])
        ]
      },
      {
        id: 'reason', name: 'because / although',
        tip: '從屬連接詞帶出「副詞子句」,修飾主要子句。副詞子句可以放前面或後面;放前面時要加逗號。because 不和 so 連用;although 不和 but 連用。',
        items: [
          I('j07', [
            s('句子 ①(結果)', 'S:I | V:stayed | M:home', '結果。'),
            s('句子 ②(原因)', 'S:it | V:rained | M:heavily', '原因。'),
            s('合成一句', 'S:I | V:stayed | M:home | *[副詞子句: J:because | S:it | V:rained | M:heavily],', 'because 後面接「原因」。一個句子用了 because 就不能再用 so。在「自由排列」可以把整個副詞子句拖到句首試試看。', ['Because it rained heavily, I stayed home.'])
          ]),
          I('j08', [
            s('句子 ①', 'S:he | V:was | C:tired', '事實。'),
            s('句子 ②', 'S:he | V:kept | O:working', '和預期相反的結果。'),
            s('合成一句', '*[副詞子句: J:although | S:he | V:was | C:tired], | S:he | V:kept | O:working', 'although(雖然)帶出副詞子句。中文說「雖然…但是…」,英文 although 和 but 只能用一個。', ['He kept working although he was tired.'])
          ])
        ]
      },
      {
        id: 'time', name: '時間:when / before / after / while / until',
        tip: '表示時間的副詞子句。注意:時間子句裡不用 will,用「現在式」代替未來。',
        items: [
          I('j09', [
            s('句子 ①', 'S:I | V:was | C:a child', '時間背景。'),
            s('句子 ②', 'S:I | V:lived | M:in Hualien', '主要想說的事。'),
            s('合成一句', '*[副詞子句: J:when | S:I | V:was | C:a child], | S:I | V:lived | M:in Hualien', 'when(當…的時候)帶出時間。副詞子句放前面,後面加逗號。', ['I lived in Hualien when I was a child.'])
          ]),
          I('j10', [
            s('句子 ①', 'S:I | V:brush | O:my teeth', '先做的事。'),
            s('句子 ②', 'S:I | V:go | M:to bed', '後做的事。'),
            s('合成一句', 'S:I | V:brush | O:my teeth | *[副詞子句: J:before | S:I | V:go | M:to bed],', 'before + 後發生的事;after + 先發生的事。', ['Before I go to bed, I brush my teeth.'])
          ]),
          I('j11', [
            s('句子 ①(長動作)', 'S:he | X(be動詞):was | V(現在分詞):taking | O:a shower', '正在進行的長動作:過去進行式。'),
            s('句子 ②(短動作)', 'S:the phone | V(過去式):rang', '突然發生的短動作:過去簡單式。'),
            s('合成一句', '*[副詞子句: J:while | S:he | X(be動詞):was | V(現在分詞):taking | O:a shower], | S:the phone | V(過去式):rang', 'while(當…的期間)後面常接進行式。', ['The phone rang while he was taking a shower.'])
          ]),
          I('j12', [
            s('until', 'S:we | V:waited | [副詞子句: J:until | S:the rain | V:stopped],', 'until:直到…為止。', ['Until the rain stopped, we waited.'])
          ]),
          I('j13', [
            s('句子 ①', 'S:he | X:will | V:arrive', '未來的事。'),
            s('句子 ②', 'S:I | X:will | V:tell | O:him', '未來的事。'),
            s('合成一句', 'S:I | X:will | V:tell | O:him | *[副詞子句: J:when | S:he | *V(現在式代替未來):arrives],', '時間副詞子句裡不能用 will,要用「現在式」代替未來(arrives,不是 will arrive)。主要子句照常用 will。', ['When he arrives, I will tell him.'])
          ])
        ]
      },
      {
        id: 'cond', name: '條件與目的:if / unless / so that',
        tip: 'if(如果)、unless(除非 = if … not)帶出條件子句,同樣用現在式代替未來。so that 帶出目的。',
        items: [
          I('j14', [
            s('句子 ①(條件)', 'S:it | X:will | V:rain | M:tomorrow', '條件:明天的事。'),
            s('句子 ②(結果)', 'S:we | X:will | V:stay | M:home', '結果。'),
            s('合成一句', '*[副詞子句: J:if | S:it | *V(現在式代替未來):rains | M:tomorrow], | S:we | X:will | V:stay | M:home', 'if 子句用現在式(不說 if it will rain),主要子句用 will。', ['We will stay home if it rains tomorrow.'])
          ]),
          I('j15', [
            s('if … not', 'S:you | X:will | V:be | C:late | [副詞子句: J:if | S:you | X:do | N:not | V:hurry],', '如果你不快一點,你會遲到。', ['If you do not hurry, you will be late.']),
            s('unless', 'S:you | X:will | V:be | C:late | [副詞子句: *J:unless | S:you | V:hurry],', 'unless = if … not。unless 本身已經有否定的意思,後面不要再加 not。', ['Unless you hurry, you will be late.'])
          ]),
          I('j16', [
            s('so that(目的)', 'S:she | V:studies | M:hard | [副詞子句: J:so that | S:she | X:can | V:pass | O:the exam]', 'so that + 主詞 + can / will + 動詞:為了、以便。so that 表示「目的」,和表示結果的 so 不同。')
          ])
        ]
      }
    ]
  });

  /* ================= 11. 名詞子句與間接問句 ================= */
  GL.topic({
    id: 'noun', no: 11, name: '名詞子句與間接問句',
    groups: [
      {
        id: 'that', name: 'that 子句',
        tip: '把一整個句子放進另一個句子裡當名詞用(當受詞、主詞或補語),前面加 that。當受詞時 that 可以省略。',
        items: [
          I('n01', [
            s('一個句子', 'S:he | V:is | C:honest', '一個完整的句子。'),
            s('放進另一句當受詞', 'S:I | V:know | *[名詞子句·受詞: J:that | S:he | V:is | C:honest]', '整個 that 子句是 know 的受詞(知道「什麼」)。當受詞的 that 可以省略。', ['I know he is honest.'])
          ]),
          I('n02', [
            s('她說的話', 'S:I | V:am | C:busy', '她的原話(現在式)。'),
            s('轉述', '*S:she | *V:said | [名詞子句·受詞: *J:that | *S:she | *V:was | C:busy]', '轉述別人的話:主要動詞 said 是過去式,子句的動詞也跟著變成過去式(am → was);I 也要換成 she。', ['She said she was busy.'])
          ]),
          I('n03', [
            s('肯定', 'S:I | V:think | [名詞子句·受詞: J:that | S:you | V:are | C:right]', '我認為你是對的。'),
            s('否定', 'S:I | *X:do | *N:not | V:think | [名詞子句·受詞: J:that | S:you | V:are | C:right]', '中文說「我認為你不對」,英文習慣把 not 放在 think 前面(I don’t think …),不說 I think you are not right。')
          ]),
          I('n04', [
            s('that 子句當主詞', '[名詞子句·主詞: J:that | S:he | V:won | O:the game] | V:is | C:true', 'that 子句當主詞(這裡的 that 不能省略),視為單數。主詞很長。'),
            s('虛主詞 it', '*S(虛主詞):it | V:is | C:true | [名詞子句·真主詞: J:that | S:he | V:won | O:the game]', '用 it 當虛主詞,把 that 子句搬到句尾。It is true that … 是最常見的說法。')
          ]),
          I('n05', [
            s('that 子句當補語', 'S:the problem | V:is | [名詞子句·補語: J:that | S:we | V:have | O:no money]', 'that 子句放在 be 動詞後面當補語:the problem = that we have no money。')
          ])
        ]
      },
      {
        id: 'indirect', name: '間接問句(疑問詞)',
        tip: '把問句放進另一個句子裡,要改成「直述句語序」:疑問詞 + 主詞 + 動詞。do / does / did 拿掉,動詞恢復該有的時態。',
        items: [
          I('n06', [
            s('直接問句', 'Q:where | X:does | S:he | V(原形動詞):live ?', '直接問句:疑問詞 + 助動詞 + 主詞 + 動詞。'),
            s('間接問句', 'S:I | X:do | N:not | V:know | *[名詞子句·受詞: Q:where | S:he | *V:lives]', '間接問句是直述句語序:where + 主詞 + 動詞。does 拿掉,動詞變回 lives。句尾是句點,不是問號。')
          ]),
          I('n07', [
            s('直接問句', 'Q:what | V(be動詞):is | S:her name ?', 'be 動詞在主詞前面。'),
            s('間接問句', 'X:do | S:you | V:know | *[名詞子句·受詞: Q:what | *S:her name | *V(be動詞):is] ?', '間接問句裡,be 動詞搬回主詞後面:what her name is。句尾的問號是因為主要子句 Do you know 是問句。')
          ]),
          I('n08', [
            s('直接問句', 'Q:when | X:will | S:the movie | V:start ?', '助動詞 will 在主詞前面。'),
            s('間接問句', 'V:tell | O:me | *[名詞子句·受詞: Q:when | *S:the movie | *X:will | V:start]', '助動詞 will 搬回主詞後面:when the movie will start。')
          ]),
          I('n09', [
            s('直接問句', 'Q:why | X:did | S:she | V(原形動詞):cry ?', '過去式問句用 did。'),
            s('間接問句', 'S:nobody | V:knows | *[名詞子句·受詞: Q:why | S:she | *V(過去式):cried]', 'did 拿掉,「過去」回到動詞身上:cry → cried。')
          ]),
          I('n10', [
            s('直接問句', 'Q(疑問詞·主詞):who | V:broke | O:the window ?', '疑問詞本身就是主詞。'),
            s('間接問句', 'S:I | V:wonder | *[名詞子句·受詞: Q(疑問詞·主詞):who | V:broke | O:the window]', '疑問詞當主詞時,本來就是直述句語序,放進去不用改。')
          ]),
          I('n11', [
            s('直接問句', 'Q:how | X:can | S:I | V:get | M:to the station ?', '直接問路。'),
            s('間接問句', 'X:could | S:you | V:tell | O:me | *[名詞子句·受詞: Q:how | *S:I | *X:can | V:get | M:to the station] ?', '間接問句比較客氣。how I can get(主詞 + 助動詞),不是 how can I get。')
          ])
        ]
      },
      {
        id: 'whether', name: 'whether / if(是否)',
        tip: '沒有疑問詞的 Yes/No 問句放進另一個句子時,用 whether 或 if(是否)帶出,後面一樣是直述句語序。',
        items: [
          I('n12', [
            s('Yes/No 問句', 'V(be動詞):is | S:she | C:at home ?', '沒有疑問詞的問句。'),
            s('間接問句', 'S:I | X:do | N:not | V:know | *[名詞子句·受詞: J:whether | *S:she | *V(be動詞):is | C:at home]', '加上 whether(是否),語序改成主詞 + 動詞。', ['I do not know if she is at home.'])
          ]),
          I('n13', [
            s('Yes/No 問句', 'X:did | S:he | V(原形動詞):pass | O:the exam ?', '過去式問句。'),
            s('間接問句', 'S:I | V:wonder | *[名詞子句·受詞: J:if | S:he | *V(過去式):passed | O:the exam]', 'did 拿掉,動詞變成過去式 passed。這裡的 if 是「是否」,不是「如果」。', ['I wonder whether he passed the exam.'])
          ]),
          I('n14', [
            s('Yes/No 問句', 'X:can | S:you | V:swim ?', '問對方。'),
            s('間接問句', 'S:he | V:wants to know | *[名詞子句·受詞: J:whether | *S:I | *X:can | V:swim]', 'can 搬回主詞後面;you 依照說話的人換成 I。', ['He wants to know if I can swim.'])
          ])
        ]
      }
    ]
  });

  /* ================= 13. 分詞與分詞構句 ================= */
  GL.topic({
    id: 'part', no: 13, name: '分詞與分詞構句',
    groups: [
      {
        id: 'adj', name: '分詞當形容詞',
        tip: '現在分詞 V-ing:主動、進行(正在…的、令人…的);過去分詞 p.p.:被動、完成(被…的、感到…的)。',
        items: [
          I('g01', [
            s('進行式', 'S:the baby | X(be動詞):is | V(現在分詞):sleeping', '嬰兒正在睡覺。'),
            s('分詞當形容詞', 'V:look | M(介系詞):at | [受詞: O(冠詞):the | *M(現在分詞·進行):sleeping | O(名詞):baby]', '現在分詞放在名詞前面當形容詞:正在睡覺的嬰兒。')
          ]),
          I('g02', [
            s('被動', 'S:the window | X(be動詞):was | V(過去分詞):broken', '窗戶被打破了。'),
            s('分詞當形容詞', '[主詞: S(冠詞):the | *M(過去分詞·被動):broken | S(名詞):window] | *V:is | *C:dangerous', '過去分詞放在名詞前面當形容詞:被打破的窗戶。')
          ]),
          I('g03', [
            s('V-ing:令人…的', 'S:the movie | V:was | C(現在分詞):boring', '事物「令人」覺得無聊,用 V-ing。'),
            s('p.p.:感到…的', '*S:I | V:was | *C(過去分詞):bored', '人「感到」無聊,用 p.p.。說 I was boring 會變成「我這個人很無趣」。')
          ]),
          I('g04', [
            s('V-ing:令人…的', 'S:the news | V:was | C(現在分詞):surprising', '消息令人驚訝。'),
            s('p.p.:感到…的', '*S:everyone | V:was | *C(過去分詞):surprised | *M:at the news', '大家感到驚訝。同類的字:interesting / interested、exciting / excited、tiring / tired。')
          ])
        ]
      },
      {
        id: 'post', name: '分詞片語修飾名詞(關係子句的簡化)',
        tip: '主格關代的關係子句可以簡化:省略「關代 + be 動詞」;沒有 be 動詞時,把動詞改成 V-ing。主動用 V-ing,被動用 p.p.。分詞片語放在名詞後面。',
        items: [
          I('g05', [
            s('關係子句', 'S:the boy | [關係子句: Q(關代):who | X(be動詞):is | V(現在分詞):standing | M:there] | V:is | C:my brother', '完整的關係子句。'),
            s('分詞片語', 'S:the boy | *[分詞片語: V(現在分詞·主動):standing | M:there] | V:is | C:my brother', '省略「關代 who + be 動詞 is」,留下分詞片語。男孩「自己站著」→ 主動 → V-ing。')
          ]),
          I('g06', [
            s('關係子句', 'S:the book | [關係子句: Q(關代):which | X(be動詞):was | V(過去分詞):written | M:by him] | V:is | C:popular', '關係子句是被動。'),
            s('分詞片語', 'S:the book | *[分詞片語: V(過去分詞·被動):written | M:by him] | V:is | C:popular', '省略 which was。書是「被寫」→ 被動 → p.p.。')
          ]),
          I('g07', [
            s('關係子句', 'S:people | [關係子句: Q(關代):who | V:live | M:in the city] | V:need | O:more parks', '關係子句裡是一般動詞,沒有 be 動詞。'),
            s('分詞片語', 'S:people | *[分詞片語: *V(現在分詞·主動):living | M:in the city] | V:need | O:more parks', '沒有 be 動詞時:省略關代,把動詞改成 V-ing(live → living)。')
          ]),
          I('g08', [
            s('關係子句', 'S:the girl | [關係子句: Q(關代):who | X(be動詞):is | V(現在分詞):wearing | O:a red dress] | V:is | C:my cousin', '完整的關係子句。'),
            s('分詞片語', 'S:the girl | *[分詞片語: V(現在分詞·主動):wearing | O:a red dress] | V:is | C:my cousin', '省略 who is。注意句子真正的動詞是後面的 is,wearing 只是修飾語。')
          ]),
          I('g09', [
            s('關係子句', 'S:I | V:received | O:a letter | [關係子句: Q(關代):which | X(be動詞):was | V(過去分詞):written | M:in English]', '完整的關係子句。'),
            s('分詞片語', 'S:I | V:received | O:a letter | *[分詞片語: V(過去分詞·被動):written | M:in English]', '省略 which was:一封用英文寫的信。')
          ])
        ]
      },
      {
        id: 'cons', name: '分詞構句',
        tip: '副詞子句和主要子句的主詞相同時,可以簡化:① 去掉連接詞 ② 去掉相同的主詞 ③ 動詞改成分詞(主動 V-ing、被動 p.p.)。',
        items: [
          I('g10', [
            s('副詞子句', '[副詞子句: J:when | S:I | V:walked | M:down the street], | S:I | V:met | O:an old friend', '兩個子句的主詞都是 I。'),
            s('分詞構句', '*[分詞構句: V(現在分詞·主動):walking | M:down the street], | S:I | V:met | O:an old friend', '① 去掉 when ② 去掉相同的主詞 I ③ walked 改成 walking(我「自己走」→ 主動)。')
          ]),
          I('g11', [
            s('副詞子句', '[副詞子句: J:because | S:he | V:felt | C:tired], | S:he | V:went | M:to bed | M:early', '兩個子句的主詞都是 he。'),
            s('分詞構句', '*[分詞構句: V(現在分詞·主動):feeling | C:tired], | S:he | V:went | M:to bed | M:early', '去掉 because 和 he,felt 改成 feeling。')
          ]),
          I('g12', [
            s('副詞子句', '[副詞子句: J:when | S:the city | X(be動詞):is | V(過去分詞):seen | M:from the mountain], | S:the city | V:looks | C:beautiful', '兩個子句的主詞都是 the city;副詞子句是被動。'),
            s('分詞構句', '*[分詞構句: V(過去分詞·被動):seen | M:from the mountain], | S:the city | V:looks | C:beautiful', '城市是「被看」→ 被動 → 留下過去分詞 seen(前面的 being 通常省略)。')
          ]),
          I('g13', [
            s('副詞子句', '[副詞子句: J:because | S:I | X:did | N:not | V:know | O:the answer], | S:I | V:kept | C:silent', '副詞子句是否定句。'),
            s('分詞構句', '*[分詞構句: N:not | V(現在分詞·主動):knowing | O:the answer], | S:I | V:kept | C:silent', '分詞構句的否定:not 放在分詞前面。did 不需要了。')
          ]),
          I('g14', [
            s('副詞子句', '[副詞子句: J:while | S:he | X(be動詞):was | V(現在分詞):waiting | M:for the bus], | S:he | V:read | O:a book', '兩個子句的主詞都是 he。'),
            s('保留連接詞', '*[分詞構句: J:while | V(現在分詞·主動):waiting | M:for the bus], | S:he | V:read | O:a book', '為了讓意思更清楚,連接詞(while / when / before / after)可以保留,只省略「主詞 + be 動詞」。')
          ]),
          I('g15', [
            s('句子 ①', 'S:she | V:sat | M:on the sofa', '第一個動作。'),
            s('句子 ②', 'S:she | X(be動詞):was | V(現在分詞):watching | O:TV', '同時進行的動作,主詞相同。'),
            s('合成一句', 'S:she | V:sat | M:on the sofa, | *[分詞構句: V(現在分詞·主動):watching | O:TV]', '兩個動作同時發生:第二個動作改成分詞,放在句尾,前面加逗號。')
          ])
        ]
      }
    ]
  });

  /* ================= 14. 假設語氣 ================= */
  GL.topic({
    id: 'subj', no: 14, name: '假設語氣',
    groups: [
      {
        id: 'real', name: '可能發生的條件',
        tip: '有可能發生:if + 現在式,主要子句用 will + 原形。這不算假設語氣,但要先會這個,再和假設語氣比較。',
        items: [
          I('s01', [
            s('可能發生', '[if 子句: J:if | S:it | V(現在式):rains | M:tomorrow], | S:I | X:will | V(原形動詞):stay | M:home', '明天有可能下雨:if + 現在式,主要子句 will + 原形。', ['I will stay home if it rains tomorrow.'])
          ]),
          I('s02', [
            s('事實、真理', '[if 子句: J:if | S:you | V(現在式):heat | O:ice], | S:it | V(現在式):melts', '一定會發生的事實:兩邊都用現在式。', ['Ice melts if you heat it.'])
          ]),
          I('s03', [
            s('可能發生', '[if 子句: J:if | S:he | V(現在式):studies | M:hard], | S:he | X:will | V(原形動詞):pass | O:the exam', '有可能:if + 現在式,will + 原形。'),
            s('與現在事實相反', '[if 子句: J:if | S:he | *V(過去式):studied | M:hard], | S:he | *X:would | V(原形動詞):pass | O:the exam', '事實是他現在不用功。時態往過去「退一格」:if + 過去式,would + 原形。'),
            s('與過去事實相反', '[if 子句: J:if | S:he | *X:had | *V(過去分詞):studied | M:hard], | S:he | X:would | *X:have | *V(過去分詞):passed | O:the exam', '事實是他當時沒用功、沒考過。再退一格:if + had + p.p.,would have + p.p.。')
          ])
        ]
      },
      {
        id: 'present', name: '與現在事實相反',
        tip: 'if + 過去式,主要子句 would / could / might + 原形動詞。be 動詞不管主詞是誰,一律用 were。用過去式不是指過去,而是表示「不是真的」。',
        items: [
          I('s04', [
            s('事實', "S:I | X:don't | V:have | O:enough money, | J:so | S:I | X:can't | V:buy | O:the car", '現在的事實:我沒有足夠的錢。'),
            s('假設', '*[if 子句: J:if | S:I | V(過去式):had | O:enough money], | S:I | *X:could | V(原形動詞):buy | O:the car', '假設和事實相反,所以否定變肯定;時態退一格:have → had,can → could。', ['I could buy the car if I had enough money.'])
          ]),
          I('s05', [
            s('事實', "S:I | V:am | N:not | C:a bird, | J:so | S:I | X:can't | V:fly", '現在的事實:我不是鳥。'),
            s('假設', '*[if 子句: J:if | S:I | V(一律用 were):were | C:a bird], | S:I | *X:could | V(原形動詞):fly', '假設語氣的 be 動詞,不管主詞是誰都用 were(不用 was)。', ['I could fly if I were a bird.'])
          ]),
          I('s06', [
            s('給建議', '[if 子句: J:if | S:I | V(一律用 were):were | C:you], | S:I | X:would | V(原形動詞):tell | O:her | O:the truth', 'If I were you, I would …:如果我是你,我會…(我不可能是你,所以用假設語氣)。常用來給建議。')
          ])
        ]
      },
      {
        id: 'past', name: '與過去事實相反',
        tip: 'if + had + p.p.,主要子句 would / could / might + have + p.p.。過去的事已經無法改變,只能假設。',
        items: [
          I('s07', [
            s('事實', "S:I | X:didn't | V:know | O:her number, | J:so | S:I | X:didn't | V:call | O:her", '過去的事實:當時不知道,所以沒打。'),
            s('假設', '*[if 子句: J:if | S:I | X:had | V(過去分詞):known | O:her number], | S:I | *X:would | *X:have | *V(過去分詞):called | O:her', '過去式再退一格:if + had + p.p.;主要子句 would have + p.p.。', ['I would have called her if I had known her number.'])
          ]),
          I('s08', [
            s('事實', 'S:you | V:left | M:late, | J:so | S:you | V:missed | O:the train', '過去的事實:你晚出門,所以沒趕上。'),
            s('假設', '*[if 子句: J:if | S:you | X:had | V(過去分詞):left | *M:earlier], | S:you | *X:would | *N:not | *X:have | *V(過去分詞):missed | O:the train', '如果你當時早一點出門,就不會錯過火車了。否定的 not 放在 would 後面。')
          ])
        ]
      },
      {
        id: 'wish', name: 'wish / as if / suggest',
        tip: 'wish 後面的子句也用假設語氣:現在的願望用過去式,對過去的遺憾用 had + p.p.。suggest / demand / insist + that + 主詞 +(should)+ 原形動詞。',
        items: [
          I('s09', [
            s('事實', "S:I | X:don't | V:have | O:a car", '現在的事實。'),
            s('wish + 過去式', 'S:I | *V:wish | *[名詞子句: S:I | V(過去式):had | O:a car]', '和現在事實相反的願望:wish + 主詞 + 過去式。但願我有一輛車(其實沒有)。')
          ]),
          I('s10', [
            s('事實', "S:I | X:didn't | V:study | M:hard", '過去的事實。'),
            s('wish + had p.p.', 'S:I | *V:wish | *[名詞子句: S:I | X:had | V(過去分詞):studied | M:hard]', '對過去的遺憾:wish + 主詞 + had + p.p.。但願我當時有用功(其實沒有)。')
          ]),
          I('s11', [
            s('wish + were', 'S:I | V:wish | [名詞子句: S:I | V(一律用 were):were | C:taller]', 'wish 後面的 be 動詞同樣一律用 were。')
          ]),
          I('s12', [
            s('as if', 'S:he | V:talks | [副詞子句: J:as if | S:he | V(過去式):knew | O:everything]', 'as if(好像):他說話的樣子好像什麼都知道(其實不是),所以用過去式。')
          ]),
          I('s13', [
            s('suggest that …', 'S:the doctor | V:suggested | [名詞子句: J:that | S:he | X(可省略):should | V(原形動詞):get | O:more rest]', '建議、要求、堅持(suggest / demand / insist / require)後面的 that 子句:主詞 +(should)+ 原形動詞。should 常省略,所以會看到 he get(不加 s)。', ['The doctor suggested that he get more rest.'])
          ])
        ]
      }
    ]
  });

  /* ================= 15. 特殊句型 ================= */
  GL.topic({
    id: 'special', no: 15, name: '特殊句型',
    groups: [
      {
        id: 'there', name: 'There is / There are',
        tip: 'There is / are + 名詞 + 地點:某處「有」某物。真正的主詞在 be 動詞後面,be 動詞跟著它變化。',
        items: [
          I('z01', [
            s('一般句', 'S:a book | V(be動詞):is | M(地點):on the desk', '一本書在桌上。'),
            s('There is', '*M(引導詞):there | V(be動詞):is | S(真正的主詞):a book | M(地點):on the desk', '第一次提到「有某物」時,習慣用 There is 開頭。真正的主詞 a book 在 be 動詞後面。'),
            s('There are', 'M(引導詞):there | *V(be動詞):are | *S(真正的主詞):three books | M(地點):on the desk', '主詞是複數時,be 動詞用 are。')
          ]),
          I('z02', [
            s('肯定句', 'M(引導詞):there | V(be動詞):is | S(真正的主詞):a park | M(地點):near my house', 'There is 句型。'),
            s('否定句', 'M(引導詞):there | V(be動詞):is | *N:not | S(真正的主詞):a park | M(地點):near my house', 'be 動詞後面加 not。'),
            s('疑問句', '*V(be動詞):is | *M(引導詞):there | S(真正的主詞):a park | M(地點):near my house ?', '把 be 動詞搬到 there 前面。')
          ]),
          I('z03', [
            s('某人「擁有」', 'S:I | V:have | O:two cats', '人「擁有」東西用 have。'),
            s('某處「有」', '*M(引導詞):there | *V(be動詞):are | *S(真正的主詞):two cats | *M(地點):in the garden', '某個地方「有」東西用 There is / are,不可以說 The garden has … 或 There have …。')
          ])
        ]
      },
      {
        id: 'imper', name: '祈使句',
        tip: '命令、請求、建議:省略主詞 you,用「原形動詞」開頭。否定在前面加 Don’t。',
        items: [
          I('z04', [
            s('直述句', 'S:you | V:open | O:the window', '直述句有主詞 you。'),
            s('祈使句', '*V(原形動詞):open | O:the window', '祈使句:省略主詞 you,原形動詞開頭。'),
            s('否定', "*X:don't | V(原形動詞):open | O:the window", '否定祈使句:Don’t + 原形動詞。'),
            s('客氣', '*M:please | V(原形動詞):open | O:the window', '加 please 比較客氣,可以放句首或句尾。')
          ]),
          I('z05', [
            s('直述句', 'S:you | V(be動詞):are | C:quiet', '直述句。'),
            s('祈使句', '*V(原形動詞):be | C:quiet', 'be 動詞的原形是 be,所以說 Be quiet,不說 Are quiet。'),
            s('否定', "*X:don't | V(原形動詞):be | *C:late", 'be 動詞的祈使句,否定一樣用 Don’t be …。')
          ]),
          I('z06', [
            s("Let's", "X(Let's):let's | V(原形動詞):go | M:to the movies", 'Let’s + 原形動詞:我們一起…吧(提議)。')
          ])
        ]
      },
      {
        id: 'causative', name: '使役動詞與感官動詞',
        tip: '使役動詞 make / have / let + 受詞 + 原形動詞(不加 to)。感官動詞 see / hear / watch / feel + 受詞 + 原形動詞或 V-ing。',
        items: [
          I('z07', [
            s('一般動詞 + to V', 'S:she | V:asked | O:me | [受詞補語: X(to):to | V(原形動詞):wait]', 'ask / tell / want + 受詞 + to V。'),
            s('使役動詞 + 原形', 'S:she | *V(使役動詞):made | O:me | *[受詞補語: V(原形動詞):wait]', '使役動詞 make(叫、使)後面的動詞用原形,不加 to。')
          ]),
          I('z08', [
            s('make', 'S:the teacher | V(使役動詞):made | O:us | [受詞補語: V(原形動詞):clean | O:the classroom]', 'make + 受詞 + 原形動詞:叫我們打掃(有強迫的意思)。')
          ]),
          I('z09', [
            s('let', 'S:my parents | V(使役動詞):let | O:me | [受詞補語: V(原形動詞):stay up | M:late]', 'let + 受詞 + 原形動詞:讓、允許。')
          ]),
          I('z10', [
            s('have + 物 + p.p.', 'S:I | V(使役動詞):had | O:my hair | [受詞補語: V(過去分詞·被動):cut]', '受詞是「物」、是被處理的對象時,用過去分詞:我去剪頭髮(頭髮被別人剪)。')
          ]),
          I('z11', [
            s('感官動詞 + 原形', 'S:I | V(感官動詞):saw | O:him | [受詞補語: V(原形動詞):cross | O:the street]', '感官動詞 + 受詞 + 原形動詞:看到整個過程(他過了馬路)。'),
            s('感官動詞 + V-ing', 'S:I | V(感官動詞):saw | O:him | [受詞補語: *V(現在分詞):crossing | O:the street]', '感官動詞 + 受詞 + V-ing:看到的當下動作正在進行(他正在過馬路)。')
          ]),
          I('z12', [
            s('help', 'S:he | V:helped | O:me | [受詞補語: V(原形動詞):carry | O:the boxes]', 'help + 受詞 + 原形動詞(也可以加 to)。', ['He helped me to carry the boxes.'])
          ])
        ]
      },
      {
        id: 'sothat', name: 'so … that / too … to / enough to',
        tip: 'so + 形容詞 + that + 句子:如此…以致於。too + 形容詞 + to V:太…而不能。形容詞 + enough + to V:夠…可以。',
        items: [
          I('z13', [
            s('so … that', "S:he | V:is | C:so young | [結果子句: J:that | S:he | X:can't | V:drive]", '如此年輕,以致於不能開車。that 後面是完整的句子。'),
            s('too … to', 'S:he | V:is | *C:too young | *[不定詞: X(to):to | V(原形動詞):drive]', 'too … to 本身就有否定的意思(太…而不能…),後面不要再加 not。')
          ]),
          I('z14', [
            s('so … that', "S:the box | V:was | C:so heavy | [結果子句: J:that | S:I | X:couldn't | V:lift | O:it]", '箱子重到我抬不起來。'),
            s('too … to', 'S:the box | V:was | *C:too heavy | *M(for + 人):for me | *[不定詞: X(to):to | V(原形動詞):lift]', '兩邊主詞不同時,用 for + 人 說明是誰做不到。句尾不要再加 it。')
          ]),
          I('z15', [
            s('enough to', 'S:she | V:is | C:old enough | [不定詞: X(to):to | V(原形動詞):vote]', '形容詞 + enough + to V:enough 放在形容詞「後面」(old enough,不是 enough old)。')
          ]),
          I('z16', [
            s('so + 形容詞 + that', 'S:the movie | V:was | C:so good | [結果子句: J:that | S:I | V:watched | O:it | M:twice]', 'so 後面接形容詞或副詞。'),
            s('such + 名詞 + that', '*S:it | V:was | *C:such a good movie | [結果子句: J:that | S:I | V:watched | O:it | M:twice]', 'such 後面接「名詞」(a good movie)。so 配形容詞,such 配名詞。')
          ])
        ]
      },
      {
        id: 'excl', name: '感嘆句・附加問句・強調句',
        tip: '感嘆句:What + 名詞 / How + 形容詞,後面是「主詞 + 動詞」。附加問句:前肯定後否定、前否定後肯定。強調句:It is / was + 強調的部分 + that …。',
        items: [
          I('z17', [
            s('直述句', 'S:she | V:is | C:a very kind girl', '直述句。'),
            s('What 感嘆句', '*Q:what | *C:a kind girl | S:she | V:is !', 'What + (a / an) + 形容詞 + 名詞 + 主詞 + 動詞!注意後面是「主詞 + 動詞」,不是問句的語序。')
          ]),
          I('z18', [
            s('直述句', 'S:the flowers | V:are | C:very beautiful', '直述句。'),
            s('How 感嘆句', '*Q:how | *C:beautiful | S:the flowers | V:are !', 'How + 形容詞 / 副詞 + 主詞 + 動詞!What 配名詞,How 配形容詞。')
          ]),
          I('z19', [
            s('肯定句 + 否定附加', "S:you | V(be動詞):are | C:a student, | *X:aren't | *S:you ?", '前面肯定,後面的附加問句用否定:…,不是嗎?'),
            s('否定句 + 肯定附加', 'S:you | V(be動詞):are | *N:not | C:a student, | *X:are | S:you ?', '前面否定,後面的附加問句用肯定。')
          ]),
          I('z20', [
            s('一般動詞', "S:he | V:likes | O:coffee, | *X:doesn't | *S:he ?", '一般動詞的附加問句用 do / does / did;主詞要換成代名詞。'),
            s('助動詞', "S:she | X:can | V:swim, | *X:can't | *S:she ?", '有助動詞的句子,附加問句用同一個助動詞。')
          ]),
          I('z21', [
            s('直述句', 'S:Tom | V:broke | O:the window | M:yesterday', '一般的說法。'),
            s('強調主詞', '*S(虛主詞):it | *V:was | *C(強調的部分):Tom | *[that 子句: J:that | V:broke | O:the window | M:yesterday]', '強調句 It was … that …:把要強調的部分放在 It was 和 that 中間。「打破窗戶的就是 Tom」。'),
            s('強調時間', 'S(虛主詞):it | V:was | *C(強調的部分):yesterday | [that 子句: J:that | *S:Tom | V:broke | O:the window]', '也可以強調時間:「Tom 就是昨天打破窗戶的」。')
          ])
        ]
      }
    ]
  });
})();
