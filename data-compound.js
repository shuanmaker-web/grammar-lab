/* Grammar Lab — 句庫:複合關係代名詞(格式說明見 data-core.js)
 * 排在「關係代名詞與關係子句」後面(no: 12.5)
 */
(function () {
  var s = GL.st, I = GL.item;

  GL.topic({
    id: 'compound', no: 12.5, name: '複合關係代名詞',
    groups: [
      {
        id: 'what', name: 'what = the thing(s) that',
        tip: '複合關係代名詞 = 先行詞 + 關代「合成一個字」。what = the thing(s) that / which。what 自己已經包含先行詞,所以前面不能再有名詞。整個 what 子句是名詞子句,可以當主詞、受詞、補語;what 在子句裡也要當一個成分(主詞/受詞/補語)。',
        items: [
          I('k01', [
            s('先行詞 + 關代', 'S:this | V:is | C:the thing | [形容詞子句: Q(關代·受詞):that | S:I | V:need]', 'the thing 是先行詞,that I need 是形容詞子句,修飾 the thing。', [], '這就是我需要的東西。'),
            s('合成 what', 'S:this | V:is | *[名詞子句·補語: *Q(複合關代·受詞):what | S:I | V:need]', 'the thing that → what。整個 what I need 是 is 的補語;what 在子句裡是 need 的受詞。', [], '這就是我需要的東西。')
          ]),
          I('k02', [
            s('先行詞 + 關代', 'S:the thing | [形容詞子句: Q(關代·主詞):that | V:matters | M:most] | V:is | C:your health', 'that 在子句裡當主詞(後面直接接動詞 matters)。', [], '最重要的是你的健康。'),
            s('合成 what', '*[名詞子句·主詞: *Q(複合關代·主詞):what | V:matters | M:most] | V:is | C:your health', 'what 子句當整句的主詞,視為單數,所以動詞用 is。', [], '最重要的是你的健康。')
          ]),
          I('k03', [
            s('先行詞 + 關代', 'S:I | V(be動詞):am | C:sorry | M(介系詞):for | O:the thing | [形容詞子句: Q(關代·受詞):that | S:I | V:did]', 'the thing 是介系詞 for 的受詞。', [], '我為我所做的事感到抱歉。'),
            s('合成 what', 'S:I | V(be動詞):am | C:sorry | M(介系詞):for | *[名詞子句·介系詞受詞: *Q(複合關代·受詞):what | S:I | V:did]', '名詞子句可以放在介系詞後面當受詞。what 在子句裡是 did 的受詞。', [], '我為我所做的事感到抱歉。')
          ]),
          I('k04', [
            s('先行詞 + 關代', 'S:the thing | [形容詞子句: Q(關代·受詞):that | S:you | V:see] | V:is | C:the thing | [形容詞子句: Q(關代·受詞):that | S:you | V:get]', '兩個 the thing that,句子很長。', [], '你看到的就是你會得到的。'),
            s('合成 what', '*[名詞子句·主詞: *Q(複合關代·受詞):what | S:you | V:see] | V:is | *[名詞子句·補語: *Q(複合關代·受詞):what | S:you | V:get]', '兩個 the thing that 都換成 what:一個當主詞、一個當補語。What you see is what you get. 是常見的說法(表裡如一)。', [], '你看到的就是你會得到的。')
          ]),
          I('k05', [
            s('先行詞 + 關代', 'S:he | V(be動詞):is | N:not | C:the person | [形容詞子句: Q(關代·補語):that | S:he | V:used to be]', 'that 在子句裡是 used to be 的補語。', [], '他已經不是從前的他了。'),
            s('合成 what', 'S:he | V(be動詞):is | N:not | *[名詞子句·補語: *Q(複合關代·補語):what | S:he | V:used to be]', 'what + 主詞 + be 動詞:指一個人的樣子、狀態。He is not what he used to be. = 他已經不是從前的他了。', [], '他已經不是從前的他了。')
          ])
        ]
      },
      {
        id: 'whoever', name: 'whoever / whomever = anyone who(m)',
        tip: 'whoever = anyone who;whomever = anyone whom。要用 whoever 還是 whomever,看它「在子句裡」當什麼:當主詞用 whoever,當受詞用 whomever。不要看子句前面是什麼字(介系詞、動詞都一樣)。口語常用 whoever 代替 whomever。',
        items: [
          I('k06', [
            s('先行詞 + 關代', 'S:anyone | [形容詞子句: Q(關代·主詞):who | V:breaks | O:the rules] | X:will | V:be punished', 'anyone 是先行詞,who 在子句裡當 breaks 的主詞。', [], '任何違反規定的人都會受罰。'),
            s('合成 whoever', '*[名詞子句·主詞: *Q(複合關代·主詞):whoever | V:breaks | O:the rules] | X:will | V:be punished', 'anyone who → whoever。整個 whoever 子句是句子的主詞。', [], '任何違反規定的人都會受罰。')
          ]),
          I('k07', [
            s('先行詞 + 關代', 'V(原形動詞):give | O:the prize | M(介系詞):to | O:anyone | [形容詞子句: Q(關代·主詞):who | V:finishes | M:first]', 'who 在子句裡是 finishes 的主詞。', [], '把獎品給任何第一個完成的人。'),
            s('合成 whoever', 'V(原形動詞):give | O:the prize | M(介系詞):to | *[名詞子句·介系詞受詞: *Q(複合關代·主詞):whoever | V:finishes | M:first]', '易錯:前面雖然是介系詞 to,但 whoever 在子句裡是 finishes 的「主詞」,所以用 whoever,不用 whomever。整個子句才是 to 的受詞。', [], '把獎品給第一個完成的人。')
          ]),
          I('k08', [
            s('先行詞 + 關代', 'S:you | X:can | V:invite | O:anyone | [形容詞子句: Q(關代·受詞):whom | S:you | V:like]', 'whom 在子句裡是 like 的受詞。', [], '你可以邀請任何你喜歡的人。'),
            s('合成 whomever', 'S:you | X:can | V:invite | *[名詞子句·受詞: *Q(複合關代·受詞):whomever | S:you | V:like]', 'anyone whom → whomever。子句裡已經有主詞 you,whomever 是 like 的受詞。口語也常說 whoever you like。', [], '你可以邀請任何你喜歡的人。')
          ])
        ]
      },
      {
        id: 'whatever', name: 'whatever / whichever = anything that / any one that',
        tip: 'whatever = anything that(任何…的事物,範圍不限);whichever = any one that(從「有限的選項」裡挑任何一個)。後面也可以直接加名詞:whichever seat、whatever help。',
        items: [
          I('k09', [
            s('先行詞 + 關代', 'S:you | X:can | V:eat | O:anything | [形容詞子句: Q(關代·受詞):that | S:you | V:want]', 'anything 是先行詞,that 是 want 的受詞。', [], '你可以吃任何你想吃的東西。'),
            s('合成 whatever', 'S:you | X:can | V:eat | *[名詞子句·受詞: *Q(複合關代·受詞):whatever | S:you | V:want]', 'anything that → whatever。整個子句是 eat 的受詞。', [], '你想吃什麼都可以吃。')
          ]),
          I('k10', [
            s('先行詞 + 關代', 'S:anything | [形容詞子句: Q(關代·主詞):that | V:is | C:worth doing] | V:is | C:worth doing well', 'that 在子句裡當主詞。', [], '任何值得做的事,都值得把它做好。'),
            s('合成 whatever', '*[名詞子句·主詞: *Q(複合關代·主詞):whatever | V:is | C:worth doing] | V:is | C:worth doing well', 'whatever 子句當主詞,視為單數。這是一句常見的諺語。', [], '凡是值得做的事,就值得把它做好。')
          ]),
          I('k11', [
            s('先行詞 + 關代', 'V(原形動詞):choose | O:any one | [形容詞子句: Q(關代·受詞):that | S:you | V:like]', 'any one(任何一個):選項是有限的。', [], '選任何一個你喜歡的。'),
            s('合成 whichever', 'V(原形動詞):choose | *[名詞子句·受詞: *Q(複合關代·受詞):whichever | S:you | V:like]', 'any one that → whichever。和 whatever 的差別:whichever 是從眼前幾個選項裡挑。', [], '你喜歡哪一個就選哪一個。')
          ]),
          I('k12', [
            s('先行詞 + 關代', 'V(原形動詞):take | O:any seat | [形容詞子句: Q(關代·受詞):that | S:you | V:like]', 'any seat that you like。', [], '坐任何你喜歡的位子。'),
            s('合成 whichever + 名詞', 'V(原形動詞):take | *[名詞子句·受詞: *Q(whichever + 名詞):whichever seat | S:you | V:like]', 'whichever / whatever 後面可以直接接名詞,當形容詞用:whichever seat = any seat that。', [], '你喜歡哪個位子就坐哪個。')
          ])
        ]
      },
      {
        id: 'nomatter', name: '讓步:-ever = no matter + wh-',
        tip: 'whoever / whatever / whichever 也可以帶「讓步副詞子句」,意思是「不論誰/什麼/哪一個」,= no matter who / what / which。這時主要子句本身已經是完整的句子,-ever 子句只是附加的條件。副詞子句放前面要加逗號,也可以放後面。',
        items: [
          I('k13', [
            s('no matter what', '[副詞子句: J:no matter | Q:what | S:you | V:do], | V(原形動詞):do | O:it | M:well', 'no matter what = 不論什麼。主要子句 Do it well 本身就是完整的祈使句。', ['Do it well no matter what you do.'], '不論你做什麼,都要把它做好。'),
            s('換成 whatever', '*[副詞子句: *Q(=no matter what):whatever | S:you | V:do], | V(原形動詞):do | O:it | M:well', 'no matter what → whatever,兩個字合成一個字,意思不變。', ['Do it well whatever you do.'], '不論你做什麼,都要把它做好。')
          ]),
          I('k14', [
            s('no matter who', '[副詞子句: J:no matter | Q:who | S:you | V:are], | S:you | X:must | V:follow | O:the rules', 'who 在子句裡是 are 的補語。', ['You must follow the rules no matter who you are.'], '不論你是誰,都必須遵守規定。'),
            s('換成 whoever', '*[副詞子句: *Q(=no matter who):whoever | S:you | V:are], | S:you | X:must | V:follow | O:the rules', 'no matter who → whoever。', ['You must follow the rules whoever you are.'], '不論你是誰,都必須遵守規定。')
          ]),
          I('k15', [
            s('no matter which', '[副詞子句: J:no matter | Q:which | S:you | V:choose], | S:you | X:will | V:be | C:happy', 'which:從有限的選項裡選。', ['You will be happy no matter which you choose.'], '不論你選哪一個,你都會很開心。'),
            s('換成 whichever', '*[副詞子句: *Q(=no matter which):whichever | S:you | V:choose], | S:you | X:will | V:be | C:happy', 'no matter which → whichever。', ['You will be happy whichever you choose.'], '不論你選哪一個,你都會很開心。')
          ]),
          I('k16', [
            s('名詞子句(= anything that)', 'S:I | X:will | V:accept | [名詞子句·受詞: Q(複合關代·受詞):whatever | S:you | V:decide]', 'accept 後面「缺受詞」,whatever 子句就是那個受詞 → 名詞子句,= anything that you decide。', [], '你決定的任何事我都會接受。'),
            s('讓步副詞子句(= no matter what)', '*[副詞子句: *Q(=no matter what):whatever | S:you | V:decide], | S:I | X:will | *V:support | *O:you', '同一個 whatever,這裡主要子句 I will support you 已經完整,whatever 子句只是附加條件 → 讓步副詞子句,= no matter what。易錯:no matter what 只能帶副詞子句,不能當名詞子句(× I will accept no matter what you decide)。', ['I will support you whatever you decide.'], '不論你決定什麼,我都會支持你。')
          ])
        ]
      },
      {
        id: 'vs', name: '易錯辨析:what vs that / which',
        tip: '兩個判斷:① 前面有沒有先行詞?有 → that / which;沒有 → what。② 名詞子句裡缺不缺東西?that 後面是完整句子;what 後面的句子缺一個主詞/受詞/補語。這是學測文意選填、綜合測驗常考的判斷。',
        items: [
          I('k17', [
            s('有先行詞 → that', 'S:this | V:is | C:the book | [形容詞子句: Q(關代·受詞):that | S:I | V:bought]', '前面有先行詞 the book → 用 that / which。× This is the book what I bought.', [], '這是我買的書。'),
            s('沒有先行詞 → what', 'S:this | V:is | *[名詞子句·補語: *Q(複合關代·受詞):what | S:I | V:bought]', '拿掉先行詞 → 用 what。× This is that I bought.', [], '這就是我買的東西。')
          ]),
          I('k18', [
            s('that + 完整句子', 'S:I | V:know | [名詞子句·受詞: J:that | S:he | V:lied]', 'he lied 是完整句子(主詞 + 動詞,不缺東西)→ 用連接詞 that。that 本身在子句裡不當任何成分。', [], '我知道他說了謊。'),
            s('what + 缺東西的句子', 'S:I | V:know | [名詞子句·受詞: *Q(複合關代·受詞):what | S:he | *V:did]', 'he did 少了受詞(做了「什麼」)→ 用 what,what 補上 did 的受詞。', [], '我知道他做了什麼。')
          ])
        ]
      }
    ]
  });
})();
