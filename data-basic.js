/* Grammar Lab — 句庫:句子的基本結構(格式說明見 data-core.js) */
(function () {
  var s = GL.st, I = GL.item;

  /* ================= 1. 五大句型 ================= */
  GL.topic({
    id: 'patterns', no: 1, name: '五大句型',
    groups: [
      {
        id: 'sv', name: 'S + V',
        tip: '主詞 + 動詞(不及物動詞):動作不需要對象,句子就完整了。後面可以再加修飾語(地點、時間、方式)。',
        items: [
          I('p01', [
            s('S + V', 'S:birds | V:fly', '最短的句子:主詞 + 動詞。fly 是不及物動詞,後面不需要受詞。'),
            s('加上修飾語', 'S:birds | V:fly | *M:in the sky', '修飾語(地點、時間、方式)可加可不加,拿掉後句子仍然完整,所以還是 S + V。')
          ]),
          I('p02', [
            s('S + V', 'S:the sun | V:rises', '主詞 the sun 是第三人稱單數,現在式動詞加 s。'),
            s('加上修飾語', 'S:the sun | V:rises | *M:in the east', 'in the east 是地點修飾語,不是受詞。')
          ]),
          I('p03', [
            s('S + V', 'S:he | V:runs', '主詞 + 動詞。'),
            s('加方式', 'S:he | V:runs | *M:very fast', 'very fast 說明「怎麼跑」。'),
            s('再加時間', 'S:he | V:runs | M:very fast | *M:every morning', '修飾語可以一個接一個:先方式,再時間。')
          ])
        ]
      },
      {
        id: 'svc', name: 'S + V + C',
        tip: '主詞 + 動詞 + 補語:補語說明主詞「是什麼/怎麼樣」(主詞 = 補語)。動詞是 be 動詞或連綴動詞(look, sound, smell, taste, feel, become, get…)。',
        items: [
          I('p04', [
            s('S + V + C', 'S:she | V:is | C:a nurse', 'be 動詞後面是補語,說明主詞是什麼:she = a nurse。')
          ]),
          I('p05', [
            s('S + V + C', 'S:the soup | V:smells | C:good', '連綴動詞(look / sound / smell / taste / feel)後面接「形容詞」當補語,不可以接副詞(不說 smells well)。')
          ]),
          I('p06', [
            s('S + V + C', 'S:you | V:look | C:tired', 'look 當「看起來」時是連綴動詞,後面接形容詞 tired。'),
            s('加上修飾語', 'S:you | V:look | C:tired | *M:today', '時間修飾語放在最後。')
          ]),
          I('p07', [
            s('S + V + C', 'S:he | V:became | C:a doctor', 'become(變成)後面可以接名詞或形容詞當補語:he = a doctor。'),
            s('加上修飾語', 'S:he | V:became | C:a doctor | *M:last year', '加上時間。')
          ])
        ]
      },
      {
        id: 'svo', name: 'S + V + O',
        tip: '主詞 + 動詞 + 受詞(及物動詞):動作有對象,受詞是「接受動作的人或物」(主詞 ≠ 受詞)。',
        items: [
          I('p08', [
            s('S + V + O', 'S:I | V:like | O:music', 'like 是及物動詞,一定要有受詞:喜歡「什麼」。')
          ]),
          I('p09', [
            s('S + V + O', 'S:she | V:bought | O:a new bag', '受詞 a new bag 是「被買的東西」。'),
            s('加上修飾語', 'S:she | V:bought | O:a new bag | *M:yesterday', '修飾語放在受詞後面,不要插在動詞和受詞中間。')
          ]),
          I('p10', [
            s('S + V + O', 'S:we | V:play | O:basketball', '主詞 + 動詞 + 受詞。'),
            s('加上修飾語', 'S:we | V:play | O:basketball | *M:after school', '時間修飾語放在句尾。')
          ]),
          I('p11', [
            s('S + V + C', 'S:he | V:is | C:a teacher', '補語:he = a teacher(同一個人)。'),
            s('S + V + O', 'S:he | *V:met | *O:a teacher', '受詞:he ≠ a teacher(兩個不同的人)。判斷補語或受詞,看它和主詞是不是同一個。')
          ])
        ]
      },
      {
        id: 'svoo', name: 'S + V + O + O',
        tip: '主詞 + 授與動詞 + 間接受詞(人)+ 直接受詞(物)。也可以改成「物 + to / for + 人」。',
        items: [
          I('p12', [
            s('人 + 物', 'S:he | V:gave | O(間接受詞·人):me | O(直接受詞·物):a book', '授與動詞 give 有兩個受詞:先「人」再「物」。'),
            s('物 + to + 人', 'S:he | V:gave | *O(直接受詞·物):a book | *M(to + 人):to me', '物放前面時,人的前面要加介系詞。give / send / show / tell / lend / teach 用 to。')
          ]),
          I('p13', [
            s('人 + 物', 'S:my mother | V:made | O(間接受詞·人):me | O(直接受詞·物):a cake', '先「人」再「物」。'),
            s('物 + for + 人', 'S:my mother | V:made | *O(直接受詞·物):a cake | *M(for + 人):for me', 'make / buy / cook / get 是「為某人做」,用 for。')
          ]),
          I('p14', [
            s('人 + 物', 'S:the teacher | V:told | O(間接受詞·人):us | O(直接受詞·物):a story', 'tell + 人 + 物。'),
            s('物 + to + 人', 'S:the teacher | V:told | *O(直接受詞·物):a story | *M(to + 人):to us', 'tell 用 to。')
          ]),
          I('p15', [
            s('人 + 物', 'S:Dad | V:bought | O(間接受詞·人):me | O(直接受詞·物):a bike', 'buy + 人 + 物。'),
            s('物 + for + 人', 'S:Dad | V:bought | *O(直接受詞·物):a bike | *M(for + 人):for me', 'buy 用 for。')
          ])
        ]
      },
      {
        id: 'svoc', name: 'S + V + O + C',
        tip: '主詞 + 動詞 + 受詞 + 受詞補語:補語說明「受詞」是什麼/怎麼樣(受詞 = 補語)。常見動詞:call, name, make, find, keep, paint。',
        items: [
          I('p16', [
            s('S + V + O + C', 'S:we | V:call | O:him | C(受詞補語):Tom', '受詞補語說明受詞:him = Tom。')
          ]),
          I('p17', [
            s('S + V + O + C', 'S:the news | V:made | O:her | C(受詞補語):happy', 'make + 受詞 + 形容詞:使她快樂。her = happy。')
          ]),
          I('p18', [
            s('S + V + O + C', 'S:I | V:found | O:the book | C(受詞補語):interesting', 'find + 受詞 + 形容詞:發現這本書很有趣。')
          ]),
          I('p19', [
            s('S + V + O + C', 'S:they | V:painted | O:the wall | C(受詞補語):white', '把牆漆成白色:the wall = white。')
          ]),
          I('p20', [
            s('S + V + O + O', 'S:she | V:made | O(間接受詞·人):me | O(直接受詞·物):a cake', 'me ≠ a cake(我不是蛋糕)→ 兩個受詞。'),
            s('S + V + O + C', 'S:she | V:made | O:me | *C(受詞補語):angry', 'me = angry(我生氣)→ 受詞 + 受詞補語。同一個動詞 make,句型不同、意思不同。')
          ])
        ]
      }
    ]
  });

  /* ================= 2. 修飾語 ================= */
  GL.topic({
    id: 'mod', no: 2, name: '修飾語:形容詞・副詞・介系詞片語',
    groups: [
      {
        id: 'adj', name: '形容詞修飾名詞',
        tip: '形容詞修飾名詞,放在名詞「前面」、冠詞後面;也可以放在 be 動詞後面當補語。',
        items: [
          I('m01', [
            s('基本句', '[主詞: S(冠詞):the | S(名詞):girl] | V:sings', '先看最簡單的句子:主詞 + 動詞。'),
            s('加形容詞', '[主詞: S(冠詞):the | *M(形容詞):little | S(名詞):girl] | V:sings', '形容詞放在名詞前面、冠詞後面:the little girl。'),
            s('加副詞', '[主詞: S(冠詞):the | M(形容詞):little | S(名詞):girl] | V:sings | *M(副詞):beautifully', '副詞修飾動詞,說明「怎麼唱」,放在動詞後面。'),
            s('加介系詞片語', '[主詞: S(冠詞):the | M(形容詞):little | S(名詞):girl] | V:sings | M(副詞):beautifully | *M(地點):on the stage', '介系詞片語說明地點。句子就是這樣一層一層變長的。')
          ]),
          I('m02', [
            s('基本句', 'S:he | V:has | [受詞: O(冠詞):a | O(名詞):car]', '主詞 + 動詞 + 受詞。'),
            s('加形容詞', 'S:he | V:has | [受詞: O(冠詞):a | *M(形容詞):red | O(名詞):car]', '形容詞放在冠詞和名詞中間。'),
            s('兩個形容詞', 'S:he | V:has | [受詞: O(冠詞):a | *M(形容詞·評價):beautiful | M(形容詞·顏色):red | O(名詞):car]', '兩個形容詞時,「主觀評價」放在「顏色」前面:a beautiful red car。')
          ]),
          I('m03', [
            s('形容詞當補語', 'S:the flower | V:is | C(形容詞):beautiful', '形容詞放在 be 動詞後面當補語。'),
            s('形容詞修飾名詞', '*S:it | V:is | [補語: *C(冠詞):a | *M(形容詞):beautiful | *C(名詞):flower]', '形容詞放在名詞前面。兩種說法意思相近。')
          ])
        ]
      },
      {
        id: 'adv', name: '副詞的位置',
        tip: '副詞修飾動詞、形容詞或其他副詞。方式副詞放在動詞(+ 受詞)後面;頻率副詞放在一般動詞前面、be 動詞後面。',
        items: [
          I('m04', [
            s('基本句', 'S:she | V:speaks | O:English', '主詞 + 動詞 + 受詞。'),
            s('加方式副詞', 'S:she | V:speaks | O:English | *M(副詞):fluently', '方式副詞放在「動詞 + 受詞」後面,不可以插在動詞和受詞中間(不說 speaks fluently English)。')
          ]),
          I('m05', [
            s('基本句', 'S:he | V:gets up | M:early', '主詞 + 動詞 + 修飾語。'),
            s('加頻率副詞', 'S:he | *M(頻率副詞):always | V:gets up | M:early', '頻率副詞(always / usually / often / sometimes / never)放在「一般動詞前面」。')
          ]),
          I('m06', [
            s('基本句', 'S:she | V(be動詞):is | C:late', '主詞 + be 動詞 + 補語。'),
            s('加頻率副詞', 'S:she | V(be動詞):is | *M(頻率副詞):often | C:late', '頻率副詞放在「be 動詞後面」。口訣:be 後、一般動詞前。')
          ]),
          I('m07', [
            s('基本句', 'S:the test | V:was | C(形容詞):difficult', '主詞 + be 動詞 + 補語。'),
            s('加程度副詞', 'S:the test | V:was | [補語: *M(程度副詞):very | C(形容詞):difficult]', '程度副詞(very / really / quite / too)放在形容詞「前面」修飾它。')
          ]),
          I('m08', [
            s('形容詞 + 名詞', 'S:he | V:is | [補語: C(冠詞):a | M(形容詞):careful | C(名詞):driver]', '形容詞 careful 修飾名詞 driver。'),
            s('動詞 + 副詞', 'S:he | *V:drives | *M(副詞):carefully', '副詞 carefully 修飾動詞 drives。形容詞 + ly 常變成副詞。')
          ])
        ]
      },
      {
        id: 'prep', name: '介系詞片語',
        tip: '介系詞 + 名詞 = 介系詞片語。可以當副詞(說明地點、時間),也可以放在名詞「後面」修飾名詞。',
        items: [
          I('m09', [
            s('基本句', 'S:we | V:met', '主詞 + 動詞。'),
            s('加地點', 'S:we | V:met | *M(地點):at the station', '介系詞片語說明地點。'),
            s('再加時間', 'S:we | V:met | M(地點):at the station | *M(時間):at six', '地點和時間同時出現:先地點,後時間(和中文相反)。', ['At six, we met at the station.'])
          ]),
          I('m10', [
            s('基本句', 'S:the book | V:is | C:mine', '哪一本書?還不清楚。'),
            s('修飾名詞', '[主詞: S:the book | *M(介系詞片語):on the desk] | V:is | C:mine', '介系詞片語修飾名詞時,放在名詞「後面」:the book on the desk(桌上的書)。中文說「桌上的書」,順序相反。')
          ]),
          I('m11', [
            s('基本句', 'S:the girl | V:is | C:my sister', '哪一個女孩?'),
            s('修飾名詞', '[主詞: S:the girl | *M(介系詞片語):with long hair] | V:is | C:my sister', 'with long hair 放在 the girl 後面修飾它:長頭髮的女孩。主要動詞 is 在整個主詞後面。')
          ]),
          I('m12', [
            s('時間在句尾', 'S:I | V:went | M(地點):to the library | M(時間):yesterday', '時間通常放句尾。'),
            s('時間在句首', '*M(時間):yesterday, | S:I | V:went | M(地點):to the library', '想強調時間時,可以把時間搬到句首,後面加逗號。')
          ])
        ]
      }
    ]
  });

  /* ================= 3. be 動詞與一般動詞 ================= */
  GL.topic({
    id: 'bedo', no: 3, name: 'be 動詞・一般動詞:否定與疑問',
    groups: [
      {
        id: 'be', name: 'be 動詞',
        tip: 'be 動詞(am / is / are / was / were):否定直接加 not;疑問句把 be 動詞搬到主詞前面。',
        items: [
          I('b01', [
            s('肯定句', 'S:he | V(be動詞):is | C:a student', 'be 動詞句。'),
            s('否定句', 'S:he | V(be動詞):is | *N:not | C:a student', 'be 動詞的否定:直接在 be 動詞後面加 not。is not = isn’t。'),
            s('疑問句', '*V(be動詞):is | S:he | C:a student ?', 'be 動詞的疑問句:把 be 動詞搬到主詞前面,句尾改成問號。')
          ]),
          I('b02', [
            s('肯定句', 'S:they | V(be動詞):are | C:from Japan', '主詞是複數,be 動詞用 are。'),
            s('否定句', 'S:they | V(be動詞):are | *N:not | C:from Japan', 'are not = aren’t。'),
            s('疑問句', '*V(be動詞):are | S:they | C:from Japan ?', '把 are 搬到主詞前面。')
          ]),
          I('b03', [
            s('肯定句', 'S:I | V(be動詞):am | C:hungry', '主詞是 I,be 動詞用 am。'),
            s('否定句', 'S:I | V(be動詞):am | *N:not | C:hungry', 'am 後面加 not(am not 沒有縮寫)。'),
            s('疑問句', '*V(be動詞):are | *S:you | C:hungry ?', '問對方時,主詞換成 you,be 動詞跟著換成 are。')
          ]),
          I('b04', [
            s('肯定句', 'S:she | V(be動詞):was | M:at home | M:last night', '過去式:is / am → was,are → were。'),
            s('否定句', 'S:she | V(be動詞):was | *N:not | M:at home | M:last night', 'was not = wasn’t。'),
            s('疑問句', '*V(be動詞):was | S:she | M:at home | M:last night ?', '過去式的疑問句一樣把 be 動詞搬到前面。')
          ])
        ]
      },
      {
        id: 'do', name: '一般動詞・現在式',
        tip: '一般動詞不能直接加 not,要請助動詞 do / does 幫忙;用了助動詞,後面的動詞一律變回原形。',
        items: [
          I('b05', [
            s('肯定句', 'S:they | V:like | O:music', '一般動詞句。'),
            s('否定句', 'S:they | *X:do | *N:not | V(原形動詞):like | O:music', '一般動詞不能直接加 not,要先加助動詞 do,再加 not。do not = don’t。'),
            s('疑問句', '*X:do | S:they | V(原形動詞):like | O:music ?', '疑問句:把助動詞 Do 放在句首。')
          ]),
          I('b06', [
            s('肯定句', 'S:she | V:likes | O:music', '主詞是第三人稱單數,動詞加 s。'),
            s('否定句', 'S:she | *X:does | *N:not | *V(原形動詞):like | O:music', '第三人稱單數用 does。s 已經交給 does 了,後面的動詞變回原形 like。'),
            s('疑問句', '*X:does | S:she | V(原形動詞):like | O:music ?', 'Does 放在句首,動詞仍然是原形。')
          ]),
          I('b07', [
            s('肯定句', 'S:he | V:plays | O:the piano | M:every day', '第三人稱單數,動詞加 s。'),
            s('否定句', 'S:he | *X:does | *N:not | *V(原形動詞):play | O:the piano | M:every day', 'does not + 原形動詞。'),
            s('疑問句', '*X:does | S:he | V(原形動詞):play | O:the piano | M:every day ?', 'Does + 主詞 + 原形動詞 …?')
          ]),
          I('b08', [
            s('肯定句', 'S:you | V:speak | O:Chinese', '主詞是 you,動詞不加 s。'),
            s('否定句', 'S:you | *X:do | *N:not | V(原形動詞):speak | O:Chinese', 'I / you / we / they 用 do。'),
            s('疑問句', '*X:do | S:you | V(原形動詞):speak | O:Chinese ?', 'Do + 主詞 + 原形動詞 …?')
          ])
        ]
      },
      {
        id: 'did', name: '一般動詞・過去式',
        tip: '過去式不管主詞是誰,否定和疑問都用 did;用了 did,動詞變回原形。',
        items: [
          I('b09', [
            s('肯定句', 'S:he | V(過去式):went | M:to school | M:yesterday', 'went 是 go 的過去式。'),
            s('否定句', 'S:he | *X:did | *N:not | *V(原形動詞):go | M:to school | M:yesterday', '「過去」已經交給 did 了,動詞變回原形 go(不說 did not went)。'),
            s('疑問句', '*X:did | S:he | V(原形動詞):go | M:to school | M:yesterday ?', 'Did + 主詞 + 原形動詞 …?')
          ]),
          I('b10', [
            s('肯定句', 'S:they | V(過去式):watched | O:the movie', '規則動詞過去式加 ed。'),
            s('否定句', 'S:they | *X:did | *N:not | *V(原形動詞):watch | O:the movie', 'did not = didn’t,後面接原形。'),
            s('疑問句', '*X:did | S:they | V(原形動詞):watch | O:the movie ?', 'Did 放在句首。')
          ])
        ]
      },
      {
        id: 'agree', name: '主詞和動詞一致',
        tip: '現在式:主詞是第三人稱單數(he / she / it / 單數名詞)時,一般動詞加 s 或 es;be 動詞跟著主詞變 am / is / are。',
        items: [
          I('b11', [
            s('複數主詞', 'S:the boys | V:play | O:soccer', '主詞是複數,動詞不加 s。'),
            s('單數主詞', '*S:the boy | *V:plays | O:soccer', '主詞是單數(第三人稱),動詞加 s。名詞的 s 和動詞的 s 通常只會出現一個。')
          ]),
          I('b12', [
            s('I / you / we / they', 'S:I | V:have | O:a dog', '用 have。'),
            s('he / she / it', '*S:she | *V:has | O:a dog', '第三人稱單數,have 變成 has。')
          ]),
          I('b13', [
            s('I', 'S:I | V(be動詞):am | C:busy', 'I 配 am。'),
            s('you / we / they', '*S:you | *V(be動詞):are | C:busy', 'you / we / they 和複數名詞配 are。'),
            s('he / she / it', '*S:he | *V(be動詞):is | C:busy', 'he / she / it 和單數名詞配 is。')
          ])
        ]
      }
    ]
  });

  /* ================= 4. 疑問詞問句 ================= */
  GL.topic({
    id: 'wh', no: 4, name: '疑問詞問句(Wh- 問句)',
    groups: [
      {
        id: 'whatwho', name: 'what / who',
        tip: '三步驟:① 直述句 ② 改成 Yes/No 問句 ③ 把要問的部分換成疑問詞,搬到最前面。問「主詞」時語序不變,不用 do / does / did。',
        items: [
          I('w01', [
            s('直述句', 'S:she | V:likes | O:apples', '先從直述句開始。'),
            s('Yes/No 問句', '*X:does | S:she | *V(原形動詞):like | O:apples ?', '一般動詞:加 Does,動詞變原形。'),
            s('Wh- 問句', '*Q:what | X:does | S:she | V(原形動詞):like ?', '把要問的部分 apples 換成 what,搬到最前面;後面照 Yes/No 問句的順序。')
          ]),
          I('w02', [
            s('直述句', 'S:you | V:met | O:Mary | M:at the party', '直述句。'),
            s('Yes/No 問句', '*X:did | S:you | *V(原形動詞):meet | O:Mary | M:at the party ?', '過去式:加 Did,動詞變原形。'),
            s('Wh- 問句', '*Q:who | X:did | S:you | V(原形動詞):meet | M:at the party ?', '問「人」用 who。Mary 換成 who,搬到最前面。')
          ]),
          I('w03', [
            s('直述句', 'S:Tom | V:broke | O:the window', '直述句。'),
            s('問主詞', '*Q(疑問詞·主詞):who | V:broke | O:the window ?', '問「主詞」時,who 直接取代主詞,語序不變,不需要 did。'),
            s('問受詞', '*Q:what | *X:did | S:Tom | *V(原形動詞):break ?', '問「受詞」時,才需要 did + 主詞 + 原形動詞。比較這兩句的差別。')
          ]),
          I('w04', [
            s('直述句', 'S:he | X(be動詞):is | V(現在分詞):reading | O:a book', '現在進行式。'),
            s('Yes/No 問句', '*X(be動詞):is | S:he | V(現在分詞):reading | O:a book ?', '有 be 動詞:直接把 be 動詞搬到前面。'),
            s('Wh- 問句', '*Q:what | X(be動詞):is | S:he | V(現在分詞):reading ?', 'a book 換成 what,搬到最前面。')
          ])
        ]
      },
      {
        id: 'wherewhen', name: 'where / when / why / how',
        tip: 'where 問地點、when 問時間、why 問原因、how 問方法。疑問詞放最前面,後面是 Yes/No 問句的語序。',
        items: [
          I('w05', [
            s('直述句', 'S:he | V:lives | M(地點):in Taipei', '直述句。'),
            s('Yes/No 問句', '*X:does | S:he | *V(原形動詞):live | M(地點):in Taipei ?', '加 Does,動詞變原形。'),
            s('Wh- 問句', '*Q:where | X:does | S:he | V(原形動詞):live ?', '地點 in Taipei 換成 where。')
          ]),
          I('w06', [
            s('直述句', 'S:they | V:arrived | M(時間):last night', '直述句。'),
            s('Yes/No 問句', '*X:did | S:they | *V(原形動詞):arrive | M(時間):last night ?', '過去式用 Did。'),
            s('Wh- 問句', '*Q:when | X:did | S:they | V(原形動詞):arrive ?', '時間 last night 換成 when。')
          ]),
          I('w07', [
            s('直述句', 'S:she | V(be動詞):was | C:late', '直述句。'),
            s('Yes/No 問句', '*V(be動詞):was | S:she | C:late ?', 'be 動詞搬到前面。'),
            s('Wh- 問句', '*Q:why | V(be動詞):was | S:she | C:late ?', '問原因:在最前面加 why。回答用 Because …。')
          ]),
          I('w08', [
            s('直述句', 'S:he | V:goes | M:to school | M(方法):by bus', '直述句。'),
            s('Yes/No 問句', '*X:does | S:he | *V(原形動詞):go | M:to school | M(方法):by bus ?', '加 Does,動詞變原形。'),
            s('Wh- 問句', '*Q:how | X:does | S:he | V(原形動詞):go | M:to school ?', '方法 by bus 換成 how。')
          ])
        ]
      },
      {
        id: 'howadj', name: 'how + 形容詞 / whose',
        tip: 'how old / how long / how many + 名詞、whose + 名詞:整組一起搬到最前面,不能拆開。',
        items: [
          I('w09', [
            s('直述句', 'S:she | V(be動詞):is | C:sixteen years old', '直述句。'),
            s('Yes/No 問句', '*V(be動詞):is | S:she | C:sixteen years old ?', 'be 動詞搬到前面。'),
            s('Wh- 問句', '*Q:how old | V(be動詞):is | S:she ?', '問年紀用 how old,整組放最前面。')
          ]),
          I('w10', [
            s('直述句', 'S:he | V:has | O:three brothers', '直述句。'),
            s('Yes/No 問句', '*X:does | S:he | *V(原形動詞):have | O:three brothers ?', '加 Does,has 變回 have。'),
            s('Wh- 問句', '*Q:how many brothers | X:does | S:he | V(原形動詞):have ?', '問數量:how many + 複數名詞,整組搬到最前面。')
          ]),
          I('w11', [
            s('直述句', 'S:this | V(be動詞):is | C:my bag', '直述句。'),
            s('Yes/No 問句', '*V(be動詞):is | S:this | *C:your bag ?', 'be 動詞搬到前面;my 換成 your。'),
            s('Wh- 問句', '*Q:whose bag | V(be動詞):is | S:this ?', '問「誰的」:whose + 名詞,整組放最前面。')
          ]),
          I('w12', [
            s('直述句', 'S:the movie | V(be動詞):is | C:two hours long', '直述句。'),
            s('Wh- 問句', '*Q:how long | V(be動詞):is | S:the movie ?', '問長度(時間或距離)用 how long。')
          ])
        ]
      }
    ]
  });
})();
