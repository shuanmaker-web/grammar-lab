/* Grammar Lab — 句庫:動詞相關(格式說明見 data-core.js) */
(function () {
  var s = GL.st, I = GL.item;

  /* ================= 5. 時態 ================= */
  GL.topic({
    id: 'tense', no: 5, name: '時態',
    groups: [
      {
        id: 'simple', name: '簡單式:現在・過去・未來',
        tip: '現在式:習慣、事實;過去式:過去發生的事(動詞用過去式);未來式:will + 原形動詞 / be going to + 原形動詞。時間副詞是判斷時態的線索。',
        items: [
          I('t01', [
            s('現在簡單式', 'S:she | V:walks | M:to school | M(時間):every day', '習慣、事實用現在式。第三人稱單數,動詞加 s。'),
            s('過去簡單式', 'S:she | *V(過去式):walked | M:to school | *M(時間):yesterday', '過去發生的事:動詞改成過去式(規則動詞加 ed)。'),
            s('未來式', 'S:she | *X:will | *V(原形動詞):walk | M:to school | *M(時間):tomorrow', '未來:will + 原形動詞。will 不管主詞是誰都不變。')
          ]),
          I('t02', [
            s('現在簡單式', 'S:he | V:goes | M:to bed | M:early', '第三人稱單數:go → goes。'),
            s('過去簡單式', 'S:he | *V(過去式):went | M:to bed | M:early | *M(時間):last night', 'go 的過去式是不規則變化:went。'),
            s('未來式', 'S:he | *X:will | *V(原形動詞):go | M:to bed | M:early | *M(時間):tonight', 'will + 原形動詞 go。')
          ]),
          I('t03', [
            s('現在式', 'S:he | V(be動詞):is | C:busy | M(時間):today', 'be 動詞現在式:am / is / are。'),
            s('過去式', 'S:he | *V(be動詞):was | C:busy | *M(時間):yesterday', 'be 動詞過去式:was / were。'),
            s('未來式', 'S:he | *X:will | *V(原形動詞):be | C:busy | *M(時間):tomorrow', 'will 後面接原形,be 動詞的原形就是 be。')
          ]),
          I('t04', [
            s('will', 'S:we | X:will | V(原形動詞):visit | O:our grandparents | M:this weekend', 'will:預測,或說話當下才決定。'),
            s('be going to', 'S:we | *X:are going to | V(原形動詞):visit | O:our grandparents | M:this weekend', 'be going to:已經計畫好的事。be 動詞要跟著主詞變化(am / is / are)。')
          ])
        ]
      },
      {
        id: 'prog', name: '進行式:be + V-ing',
        tip: '進行式 = be 動詞 + 現在分詞(V-ing):表示某個時間點「正在」做。be 動詞決定時間(is / was),也負責否定和疑問。',
        items: [
          I('t05', [
            s('現在簡單式', 'S:he | V:plays | O:basketball | M(時間):every day', '習慣:每天打。'),
            s('現在進行式', 'S:he | *X(be動詞):is | *V(現在分詞):playing | O:basketball | *M(時間):now', '現在正在打:be 動詞 + V-ing。只有 V-ing 沒有 be 動詞是錯的。'),
            s('過去進行式', 'S:he | *X(be動詞):was | V(現在分詞):playing | O:basketball | *M(時間):at five yesterday', '過去某個時間點正在做:be 動詞改成過去式 was / were。')
          ]),
          I('t06', [
            s('肯定句', 'S:they | X(be動詞):are | V(現在分詞):watching | O:TV', '現在進行式。'),
            s('否定句', 'S:they | X(be動詞):are | *N:not | V(現在分詞):watching | O:TV', '進行式裡有 be 動詞,否定直接在 be 動詞後面加 not。'),
            s('疑問句', '*X(be動詞):are | S:they | V(現在分詞):watching | O:TV ?', '疑問句:把 be 動詞搬到主詞前面。不需要 do。')
          ]),
          I('t07', [
            s('過去進行式', 'S:my mother | X(be動詞):was | V(現在分詞):cooking', '過去某個時間點正在做。'),
            s('加上時間點', '*[副詞子句: J:when | S:I | V(過去式):got | M:home], | S:my mother | X(be動詞):was | V(現在分詞):cooking', '「正在進行的長動作」用過去進行式,「突然發生的短動作」用過去簡單式。', ['My mother was cooking when I got home.'])
          ])
        ]
      },
      {
        id: 'perf', name: '完成式:have + p.p.',
        tip: '現在完成式 = have / has + 過去分詞(p.p.):從過去持續到現在、到現在為止的經驗、或剛完成的事。不可以和明確的過去時間(yesterday, in 2020)連用。',
        items: [
          I('t08', [
            s('過去簡單式', 'S:I | V(過去式):lived | M:here | M(時間):in 2020', '過去某個時間點的事,和現在無關(現在不一定住這裡)。'),
            s('現在完成式', 'S:I | *X:have | *V(過去分詞):lived | M:here | *M(時間):for five years', '從過去持續到現在(現在還住這裡):have + p.p.。for + 一段時間。')
          ]),
          I('t09', [
            s('since + 起點', 'S:he | X:has | V(過去分詞):worked | M:here | M(起點):since 2020', '主詞是第三人稱單數,用 has。since + 開始的時間點。'),
            s('for + 一段時間', 'S:he | X:has | V(過去分詞):worked | M:here | *M(一段時間):for six years', 'for + 持續多久。since 和 for 是完成式的常見線索。')
          ]),
          I('t10', [
            s('肯定句', 'S:she | X:has | M(副詞):already | V(過去分詞):finished | O:her homework', '「已經完成」:already 放在 has 和 p.p. 中間。'),
            s('否定句', 'S:she | X:has | *N:not | V(過去分詞):finished | O:her homework | *M(副詞):yet', '否定:has 後面加 not。「還沒」用 yet,放在句尾。'),
            s('疑問句', '*X:has | S:she | V(過去分詞):finished | O:her homework | M(副詞):yet ?', '疑問:把 has 搬到主詞前面。完成式的 have / has 是助動詞,不需要 do。')
          ]),
          I('t11', [
            s('經驗', 'S:I | X:have | V(過去分詞):been | M:to Japan | M(次數):twice', 'have been to + 地點:去過(經驗)。'),
            s('從來沒有', 'S:I | X:have | *M(副詞):never | V(過去分詞):been | M:to Japan', 'never(從未)放在 have 和 p.p. 中間,本身就是否定,不要再加 not。'),
            s('問經驗', '*X:have | *S:you | *M(副詞):ever | V(過去分詞):been | M:to Japan ?', '問「曾經…嗎」:Have you ever + p.p. …?')
          ]),
          I('t12', [
            s('過去簡單式', 'S:the train | V(過去式):left', '過去發生的一件事。'),
            s('過去完成式', '*[副詞子句: J:when | S:we | V(過去式):arrived | M:at the station], | S:the train | *X:had | *M(副詞):already | *V(過去分詞):left', '過去完成式 had + p.p.:比過去的另一件事「更早」發生。我們到的時候(過去),火車早就開走了(更早)。', ['The train had already left when we arrived at the station.'])
          ])
        ]
      }
    ]
  });

  /* ================= 6. 助動詞 ================= */
  GL.topic({
    id: 'modal', no: 6, name: '助動詞',
    groups: [
      {
        id: 'can', name: 'can / may / will',
        tip: '助動詞 + 原形動詞。助動詞不隨主詞變化(不加 s);否定在助動詞後面加 not;疑問句把助動詞搬到主詞前面。',
        items: [
          I('x01', [
            s('一般句', 'S:she | V:swims | M:very well', '現在式,第三人稱單數加 s。'),
            s('加助動詞', 'S:she | *X:can | *V(原形動詞):swim | M:very well', '助動詞後面一律接原形動詞,所以 swims 變回 swim;can 本身也不加 s。'),
            s('否定句', 'S:she | *X(助動詞 + not):cannot | V(原形動詞):swim | M:very well', '否定:助動詞後面加 not(can 的否定習慣寫成一個字 cannot,或縮寫成 can’t)。'),
            s('疑問句', '*X:can | S:she | V(原形動詞):swim | M:very well ?', '疑問:把助動詞搬到主詞前面。')
          ]),
          I('x02', [
            s('許可', 'S:you | X:may | V(原形動詞):use | O:my phone', 'may 表示許可:你可以用。'),
            s('請求許可', '*X:may | *S:I | V(原形動詞):use | *O:your phone ?', 'May I …? 是客氣地請求許可。')
          ]),
          I('x03', [
            s('確定', 'S:it | X:will | V(原形動詞):rain | M:tomorrow', 'will:說話的人很確定。'),
            s('可能', 'S:it | *X:may | V(原形動詞):rain | M:tomorrow', 'may / might:可能會,不確定。換一個助動詞,語氣就不同。')
          ]),
          I('x04', [
            s('想要', 'S:I | V:want | O:some tea', '直接說「我要」。'),
            s('客氣的說法', 'S:I | *X:would | *V(原形動詞):like | O:some tea', 'would like = want,但比較客氣。常縮寫成 I’d like。')
          ])
        ]
      },
      {
        id: 'must', name: 'must / have to / should',
        tip: 'must、have to:必須;should:應該。注意 must not(禁止)和 don’t have to(不必)意思完全不同。',
        items: [
          I('x05', [
            s('must', 'S:you | X:must | V(原形動詞):finish | O:the report | M:today', 'must + 原形動詞:必須。'),
            s('have to', 'S:you | *X:have to | V(原形動詞):finish | O:the report | M:today', 'have to = must,後面也接原形動詞。'),
            s('第三人稱單數', '*S:he | *X:has to | V(原形動詞):finish | O:the report | M:today', 'have to 要跟著主詞變化:he / she / it 用 has to。must 則不變。')
          ]),
          I('x06', [
            s('must not:禁止', 'S:you | X:must | N:not | V(原形動詞):tell | O:anyone', 'must not:不可以(禁止)。'),
            s('don’t have to:不必', 'S:you | *X:do | N:not | *X:have to | V(原形動詞):tell | O:anyone', 'do not have to:不必(沒有必要,但要做也可以)。兩句意思完全不同。')
          ]),
          I('x07', [
            s('肯定句', 'S:you | X:should | V(原形動詞):eat | O:more vegetables', 'should + 原形動詞:應該(建議)。'),
            s('否定句', 'S:you | X:should | *N:not | V(原形動詞):eat | *O:too much sugar', 'should not = shouldn’t:不應該。'),
            s('疑問句', '*X:should | *S:I | V(原形動詞):eat | *O:more vegetables ?', '把 should 搬到主詞前面。')
          ])
        ]
      },
      {
        id: 'past', name: 'used to・助動詞 + have + p.p.',
        tip: 'used to + 原形:過去的習慣(現在不是了)。助動詞 + have + p.p.:對「過去」的推測或後悔。',
        items: [
          I('x08', [
            s('過去式', 'S:I | V(過去式):lived | M:in Tainan', '單純說過去住過。'),
            s('used to', 'S:I | *X:used to | *V(原形動詞):live | M:in Tainan', 'used to + 原形動詞:以前住(強調現在已經不住了)。')
          ]),
          I('x09', [
            s('對現在的推測', 'S:he | X:must | V(原形動詞):be | C:tired', 'must be:(現在)一定很累。'),
            s('對過去的推測', 'S:he | X:must | *X:have | *V(過去分詞):been | C:tired | *M:yesterday', 'must have + p.p.:(過去)當時一定很累。助動詞後面不能接過去式,所以用 have + p.p. 表示過去。')
          ]),
          I('x10', [
            s('現在的建議', 'S:you | X:should | V(原形動詞):study | M:harder', 'should + 原形:(現在)應該更用功。'),
            s('過去該做而沒做', 'S:you | X:should | *X:have | *V(過去分詞):studied | M:harder', 'should have + p.p.:當時應該…(但是沒有),表示後悔或責備。')
          ])
        ]
      }
    ]
  });

  /* ================= 7. 被動語態 ================= */
  GL.topic({
    id: 'passive', no: 7, name: '被動語態',
    groups: [
      {
        id: 'basic', name: '主動 → 被動',
        tip: '被動 = be 動詞 + 過去分詞(p.p.)。三步驟:① 受詞搬到前面當主詞 ② 動詞改成 be + p.p.(be 的時態跟原句一樣)③ 原來的主詞放到 by 後面。',
        items: [
          I('v01', [
            s('主動', 'S(做動作的人):Tom | V:broke | O:the window', '主動:主詞是「做動作的人」。'),
            s('被動', '*S(接受動作):the window | *X(be動詞):was | *V(過去分詞):broken | *M(by + 行為者):by Tom', '① 受詞 the window 搬到前面當主詞 ② broke 是過去式 → was + broken ③ 原主詞 Tom 放到 by 後面。')
          ]),
          I('v02', [
            s('主動', 'S:many people | V:speak | O:English', '現在式的主動句。'),
            s('被動', '*S:English | *X(be動詞):is | *V(過去分詞):spoken | *M(by + 行為者):by many people', '現在式 → is / am / are + p.p.。新的主詞 English 是單數,用 is。')
          ]),
          I('v03', [
            s('主動', 'S:my mother | V:cleans | O:the rooms | M:every day', '現在式的主動句。'),
            s('被動', '*S:the rooms | *X(be動詞):are | *V(過去分詞):cleaned | *M(by + 行為者):by my mother | M:every day', 'be 動詞要跟「新的主詞」一致:the rooms 是複數,用 are。')
          ]),
          I('v04', [
            s('主動', 'S:my grandfather | V:built | O:this house | M:in 1980', '過去式的主動句。'),
            s('被動', '*S:this house | *X(be動詞):was | *V(過去分詞):built | *M(by + 行為者):by my grandfather | M:in 1980', '過去式 → was / were + p.p.。')
          ])
        ]
      },
      {
        id: 'noby', name: '省略 by + 行為者',
        tip: '行為者不知道、不重要、或是泛指一般人(people, they, someone)時,「by + 行為者」通常省略。',
        items: [
          I('v05', [
            s('主動', 'S:someone | V:stole | O:my bike | M:last night', '不知道是誰偷的。'),
            s('被動', '*S:my bike | *X(be動詞):was | *V(過去分詞):stolen | M:last night', '行為者不明(someone),不必說 by someone。重點放在「我的腳踏車被偷了」。')
          ]),
          I('v06', [
            s('主動', 'S:people | V:grow | O:rice | M:in Taiwan', '泛指一般人。'),
            s('被動', '*S:rice | *X(be動詞):is | *V(過去分詞):grown | M:in Taiwan', 'people 是泛指,省略 by people。')
          ]),
          I('v07', [
            s('主動', 'S:they | V:made | O:this phone | M:in Korea', 'they 泛指製造的人。'),
            s('被動', '*S:this phone | *X(be動詞):was | *V(過去分詞):made | M:in Korea', '常見的說法:be made in + 地點(…製造)。')
          ])
        ]
      },
      {
        id: 'negq', name: '被動的否定與疑問',
        tip: '被動句裡有 be 動詞,所以否定加 not、疑問把 be 動詞搬到前面,和 be 動詞句的規則一樣。',
        items: [
          I('v08', [
            s('肯定句', 'S:the letter | X(be動詞):was | V(過去分詞):written | M:by Amy', '被動句。'),
            s('否定句', 'S:the letter | X(be動詞):was | *N:not | V(過去分詞):written | M:by Amy', 'be 動詞後面加 not。'),
            s('疑問句', '*X(be動詞):was | S:the letter | V(過去分詞):written | M:by Amy ?', '把 be 動詞搬到主詞前面。')
          ]),
          I('v09', [
            s('肯定句', 'S:this room | X(be動詞):is | V(過去分詞):used | M:every day', '現在式被動。'),
            s('疑問句', '*X(be動詞):is | S:this room | V(過去分詞):used | M:every day ?', '把 is 搬到主詞前面。')
          ])
        ]
      },
      {
        id: 'tenses', name: '各種時態的被動',
        tip: '不管什麼時態,被動的核心都是「be + p.p.」:助動詞 + be + p.p.;進行式 be being + p.p.;完成式 have been + p.p.。',
        items: [
          I('v10', [
            s('主動', 'S:they | X:will | V(原形動詞):hold | O:the meeting | M:tomorrow', '未來式的主動句。'),
            s('被動', '*S:the meeting | X:will | *X(be動詞):be | *V(過去分詞):held | M:tomorrow', '助動詞 + be + p.p.。助動詞後面接原形,所以 be 動詞用 be。')
          ]),
          I('v11', [
            s('主動', 'S:we | X:can | V(原形動詞):see | O:stars | M:at night', '有助動詞 can 的主動句。'),
            s('被動', '*S:stars | X:can | *X(be動詞):be | *V(過去分詞):seen | M:at night', 'can + be + p.p.。we 泛指一般人,省略 by us。')
          ]),
          I('v12', [
            s('主動', 'S:the workers | X(be動詞):are | V(現在分詞):repairing | O:the road', '現在進行式的主動句。'),
            s('被動', '*S:the road | *X(be動詞):is | *X:being | *V(過去分詞):repaired | *M(by + 行為者):by the workers', '進行式的被動:be + being + p.p.。the road 是單數,用 is。')
          ]),
          I('v13', [
            s('主動', 'S:someone | X:has | V(過去分詞):taken | O:my umbrella', '現在完成式的主動句。'),
            s('被動', '*S:my umbrella | X:has | *X:been | V(過去分詞):taken', '完成式的被動:have / has + been + p.p.。')
          ]),
          I('v14', [
            s('主動', 'S:my uncle | V:gave | O(間接受詞·人):me | O(直接受詞·物):a watch', '有兩個受詞的主動句。'),
            s('被動(人當主詞)', '*S:I | *X(be動詞):was | *V(過去分詞):given | O(直接受詞·物):a watch | *M(by + 行為者):by my uncle', '兩個受詞都可以搬到前面當主詞。me 當主詞要變成 I。'),
            s('被動(物當主詞)', '*S:a watch | X(be動詞):was | V(過去分詞):given | *M(to + 人):to me | M(by + 行為者):by my uncle', '物當主詞時,人的前面要加 to。')
          ])
        ]
      }
    ]
  });

  /* ================= 8. 不定詞與動名詞 ================= */
  GL.topic({
    id: 'inf', no: 8, name: '不定詞與動名詞',
    groups: [
      {
        id: 'obj', name: '當受詞:to V 或 V-ing',
        tip: '一個句子只能有一個主要動詞。第二個動詞要變成不定詞(to + 原形)或動名詞(V-ing)。want / hope / decide / plan + to V;enjoy / finish / keep / mind / practice + V-ing。',
        items: [
          I('i01', [
            s('名詞當受詞', 'S:I | V:want | O:water', '受詞是名詞。'),
            s('不定詞當受詞', 'S:I | V:want | *[受詞·不定詞: X(to):to | V(原形動詞):drink | O:water]', '想要「做某事」:want 後面接不定詞 to + 原形動詞。整個不定詞片語是 want 的受詞。')
          ]),
          I('i02', [
            s('不定詞當受詞', 'S:she | V:decided | [受詞·不定詞: X(to):to | V(原形動詞):study | M:abroad]', 'decide + to V:決定去做(還沒做的事,常用不定詞)。')
          ]),
          I('i03', [
            s('名詞當受詞', 'S:he | V:enjoys | O:music', '受詞是名詞。'),
            s('動名詞當受詞', 'S:he | V:enjoys | *[受詞·動名詞: V(V-ing):listening | M:to music]', 'enjoy 後面只能接動名詞 V-ing,不能接 to V。')
          ]),
          I('i04', [
            s('動名詞當受詞', 'S:she | V:finished | [受詞·動名詞: V(V-ing):writing | O:the report]', 'finish + V-ing:完成(已經在做的事,常用動名詞)。')
          ]),
          I('i05', [
            s('stop + V-ing', 'S:he | V:stopped | [受詞·動名詞: V(V-ing):smoking]', 'stop + V-ing:停止做這件事(他戒菸了/不抽了)。'),
            s('stop + to V', 'S:he | V:stopped | *[目的·不定詞: X(to):to | V(原形動詞):smoke]', 'stop + to V:停下來「去做」另一件事(他停下來抽菸)。意思相反!')
          ]),
          I('i06', [
            s('remember + V-ing', 'S:I | V:remember | [受詞·動名詞: V(V-ing):locking | O:the door]', 'remember + V-ing:記得「做過」(門已經鎖了)。'),
            s('remember + to V', 'S:I | *X:must | V:remember | *[受詞·不定詞: X(to):to | V(原形動詞):lock | O:the door]', 'remember + to V:記得「要去做」(門還沒鎖)。forget 也是同樣的用法。')
          ])
        ]
      },
      {
        id: 'subj', name: '當主詞・虛主詞 it',
        tip: '動詞不能直接當主詞,要變成動名詞或不定詞;當主詞時視為單數。主詞太長時,用虛主詞 it 開頭,把不定詞搬到句尾。',
        items: [
          I('i07', [
            s('動名詞當主詞', '[主詞·動名詞: V(V-ing):learning | O:English] | V:is | C:fun', '動名詞片語當主詞,視為單數,動詞用 is。'),
            s('不定詞當主詞', '*[主詞·不定詞: X(to):to | V(原形動詞):learn | O:English] | V:is | C:fun', '不定詞也可以當主詞,但比較正式、少用。'),
            s('虛主詞 it', '*S(虛主詞):it | V:is | C:fun | [真主詞·不定詞: X(to):to | V(原形動詞):learn | O:English]', '用 it 先佔住主詞的位子,把真正的主詞(不定詞片語)搬到句尾。這是最常見的說法。')
          ]),
          I('i08', [
            s('不定詞當主詞', '[主詞·不定詞: X(to):to | V(原形動詞):get | O:enough sleep] | V:is | C:important', '主詞很長,頭重腳輕。'),
            s('虛主詞 it', '*S(虛主詞):it | V:is | C:important | [真主詞·不定詞: X(to):to | V(原形動詞):get | O:enough sleep]', 'It is + 形容詞 + to V。')
          ]),
          I('i09', [
            s('It is … to V', 'S(虛主詞):it | V:is | C:hard | [真主詞·不定詞: X(to):to | V(原形動詞):get up | M:early]', '早起很難。'),
            s('加上 for + 人', 'S(虛主詞):it | V:is | C:hard | *M(for + 人):for me | [真主詞·不定詞: X(to):to | V(原形動詞):get up | M:early]', '要說「對誰來說」,在不定詞前面加 for + 人。')
          ]),
          I('i10', [
            s('動名詞當主詞', '[主詞·動名詞: V(V-ing):eating | O:too much sugar] | V:is | C:bad for you', '整個動名詞片語是主詞。注意動詞跟著「動名詞」用單數 is,不是跟著 sugar。')
          ])
        ]
      },
      {
        id: 'other', name: '不定詞的其他用法',
        tip: '不定詞還可以:表示目的(為了…)、放在名詞後面修飾名詞、放在受詞後面當受詞補語、和疑問詞合用(how to V)。',
        items: [
          I('i11', [
            s('基本句', 'S:he | V:went | M:to the library', '他去圖書館。為了什麼?'),
            s('表示目的', 'S:he | V:went | M:to the library | *[目的·不定詞: X(to):to | V(原形動詞):study | M:for the test]', '不定詞表示目的:「為了」準備考試。注意兩個 to 不同:to the library 是介系詞,to study 是不定詞。')
          ]),
          I('i12', [
            s('基本句', 'S:she | V:gets up | M:early', '她很早起床。'),
            s('表示目的', 'S:she | V:gets up | M:early | *[目的·不定詞: X(to):to | V(原形動詞):catch | O:the first bus]', '為了趕第一班公車。')
          ]),
          I('i13', [
            s('基本句', 'S:I | V:have | O:a lot of homework', '我有很多功課。'),
            s('修飾名詞', 'S:I | V:have | O:a lot of homework | *[修飾名詞·不定詞: X(to):to | V(原形動詞):do]', '不定詞放在名詞「後面」修飾它:要做的功課。')
          ]),
          I('i14', [
            s('V + 受詞 + to V', 'S:my mother | V:wants | O:me | [受詞補語·不定詞: X(to):to | V(原形動詞):clean | O:my room]', 'want / tell / ask + 人 + to V:要某人去做某事。做動作(clean)的是受詞 me。')
          ]),
          I('i15', [
            s('V + 受詞 + to V', 'S:the teacher | V:told | O:us | [受詞補語·不定詞: X(to):to | V(原形動詞):be | C:quiet]', 'tell + 人 + to V。be 動詞的原形是 be。'),
            s('否定:not to V', 'S:the teacher | V:told | O:us | [受詞補語·不定詞: *N:not | X(to):to | V(原形動詞):be | *C:late]', '不定詞的否定:not 放在 to 的前面(not to V)。')
          ]),
          I('i16', [
            s('疑問詞 + to V', 'S:I | X:do | N:not | V:know | [受詞: Q:how | X(to):to | V(原形動詞):use | O:this machine]', '疑問詞 + to V(how to / what to / where to)當受詞:不知道「怎麼用」。')
          ])
        ]
      },
      {
        id: 'prep', name: '介系詞 + 動名詞',
        tip: '介系詞(at, in, of, for, about, without, before, after…)後面的動詞一律用動名詞 V-ing。',
        items: [
          I('i17', [
            s('介系詞 + 名詞', 'S:she | V:is | C:good | [介系詞片語: M(介系詞):at | O:math]', 'be good at + 名詞。'),
            s('介系詞 + V-ing', 'S:she | V:is | C:good | [介系詞片語: M(介系詞):at | *V(V-ing):drawing]', '介系詞後面接動詞時,要用動名詞:at drawing。')
          ]),
          I('i18', [
            s('介系詞 + V-ing', 'S:he | V:left | [介系詞片語: M(介系詞):without | V(V-ing):saying | O:goodbye]', 'without + V-ing:沒有做…就…。')
          ]),
          I('i19', [
            s('介系詞 + V-ing', 'S:I | X(be動詞):am | V(現在分詞):looking forward | [介系詞片語: M(介系詞):to | V(V-ing):seeing | O:you]', 'look forward to 的 to 是「介系詞」,不是不定詞,所以後面接 V-ing(常考!)。')
          ])
        ]
      }
    ]
  });

  /* ================= 9. 比較級與最高級 ================= */
  GL.topic({
    id: 'comp', no: 9, name: '比較級與最高級',
    groups: [
      {
        id: 'as', name: '原級:as … as',
        tip: 'as + 形容詞/副詞原級 + as:和…一樣。否定 not as … as:不像…那麼。',
        items: [
          I('c01', [
            s('基本句', 'S:Tom | V:is | C(形容詞):tall', '形容詞原級。'),
            s('as … as', 'S:Tom | V:is | *J:as | C(原級):tall | *J:as | *S(比較對象):his father', '兩個 as 中間放「原級」(不加 er):和他爸爸一樣高。'),
            s('not as … as', 'S:Tom | V:is | *N:not | J:as | C(原級):tall | J:as | S(比較對象):his father', '否定:不像他爸爸那麼高(= 他爸爸比較高)。')
          ]),
          I('c02', [
            s('基本句', 'S:she | V:runs | M(副詞):fast', '副詞原級。'),
            s('as … as', 'S:she | V:runs | *J:as | M(原級):fast | *J:as | *S(比較對象):her brother', '副詞也可以放在 as … as 中間:跑得和她哥哥一樣快。')
          ]),
          I('c03', [
            s('as … as', 'S:this room | V:is | J:as | C(原級):big | J:as | S(比較對象):mine', '這個房間和我的一樣大。'),
            s('倍數', 'S:this room | V:is | *M(倍數):twice | J:as | C(原級):big | J:as | S(比較對象):mine', '倍數(twice / three times)放在第一個 as 前面:是我的兩倍大。')
          ])
        ]
      },
      {
        id: 'er', name: '比較級:-er / more … than',
        tip: '兩者比較:形容詞/副詞比較級 + than。短的字加 er,長的字前面加 more;good → better、bad → worse 是不規則變化。',
        items: [
          I('c04', [
            s('原級', 'S:Tom | V:is | C(原級):tall', '形容詞原級。'),
            s('比較級', 'S:Tom | V:is | *C(比較級):taller | *J:than | *S(比較對象):his brother', '短的形容詞加 er,後面用 than 帶出比較的對象。'),
            s('修飾比較級', 'S:Tom | V:is | *M(修飾比較級):much | C(比較級):taller | J:than | S(比較對象):his brother', '比較級前面用 much / a lot / even / far 加強語氣,不可以用 very。')
          ]),
          I('c05', [
            s('原級', 'S:this book | V:is | C(原級):interesting', '長的形容詞(三個音節以上)。'),
            s('比較級', 'S:this book | V:is | *C(比較級):more interesting | *J:than | *S(比較對象):that one', '長的形容詞不加 er,前面加 more。不可以說 more taller(重複)。')
          ]),
          I('c06', [
            s('原級', 'S:her English | V:is | C(原級):good', '原級 good。'),
            s('比較級', 'S:her English | V:is | *C(比較級):better | *J:than | *S(比較對象):mine', '不規則變化:good / well → better → best;bad → worse → worst。')
          ]),
          I('c07', [
            s('原級', 'S:he | V:works | M(副詞):hard', '副詞原級。'),
            s('比較級', 'S:he | V:works | *M(比較級):harder | *J:than | *S(比較對象):anyone else', '副詞也有比較級。比 anyone else(其他任何人)更努力 = 他最努力。')
          ])
        ]
      },
      {
        id: 'est', name: '最高級:the -est / the most',
        tip: '三者以上比較:the + 最高級 + in(地方、團體)/ of(同類)。短的字加 est,長的字前面加 most。',
        items: [
          I('c08', [
            s('原級', 'S:Tom | V:is | C(原級):tall', '原級。'),
            s('比較級', 'S:Tom | V:is | *C(比較級):taller | *J:than | *S(比較對象):his brother', '兩個人比。'),
            s('最高級', 'S:Tom | V:is | *C(最高級):the tallest | *M(範圍):in his class', '三個人以上比:the + 最高級,後面用 in / of 說明範圍。最高級前面要有 the。')
          ]),
          I('c09', [
            s('原級', 'S:this | V:is | C:an expensive watch', '原級。'),
            s('最高級', 'S:this | V:is | *C(最高級):the most expensive watch | *M(範圍):in the store', '長的形容詞:the most + 形容詞。')
          ]),
          I('c10', [
            s('one of the + 最高級', 'S:she | V:is | C:one of the best singers | M(範圍):in Taiwan', 'one of the + 最高級 + 複數名詞:最…的其中之一。注意名詞要用複數 singers。')
          ]),
          I('c11', [
            s('最高級', 'S:Tom | V:is | C(最高級):the tallest student | M(範圍):in his class', '用最高級表達。'),
            s('用比較級表達', 'S:Tom | V:is | *C(比較級):taller | *J:than | *S(比較對象):any other student | M(範圍):in his class', '比較級 + than any other + 單數名詞 = 最高級的意思。')
          ])
        ]
      },
      {
        id: 'special', name: '特殊比較句型',
        tip: 'the + 比較級 …, the + 比較級 …:越…就越…。比較級 and 比較級:越來越…。',
        items: [
          I('c12', [
            s('越…就越…', 'C(the + 比較級):the more | S:you | V:practice, | C(the + 比較級):the better | S:you | V:become', '兩個子句都用「the + 比較級」開頭,中間用逗號隔開:你練習得越多,就變得越好。')
          ]),
          I('c13', [
            s('越來越…', 'S:the weather | X(be動詞):is | V(現在分詞):getting | C(比較級 and 比較級):colder and colder', '比較級 and 比較級:越來越冷。長的形容詞用 more and more + 形容詞。')
          ])
        ]
      }
    ]
  });
})();
