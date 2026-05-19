/* ==========================================================================
   🧠 學習單自動產生器 - 核心邏輯系統 (特教圖卡與視覺輔助升級版)
   ========================================================================== */

const presetTemplates = {
    emotion: {
        title: "我的心情小書本",
        subtitle: "看圖選一選，認識我們的心情！",
        intro: "我們有不同的心情。生氣時可以深呼吸，難過時可以抱抱布偶或找老師聊聊喔！",
        mcqs: [
            {
                question: "生氣時，怎麼做比較好？",
                options: ["深呼吸、數到十", "大聲哭鬧、摔書本", "搶玩具、罵同學", "躲起來不理人"],
                emojis: ["🧘", "😡", "🤬", "🤫"]
            },
            {
                question: "難過想哭時，可以怎麼做？",
                options: ["找老師聊聊心事", "打人或摔東西出氣", "躲在角落不說話", "假裝很高興沒事"],
                emojis: ["🤝", "👊", "🤫", "🎭"]
            },
            {
                question: "同學在哭，我們可以怎麼做？",
                options: ["拿衛生紙安慰他", "笑他很膽小", "大聲取笑他", "動手打他"],
                emojis: ["🤝", "😂", "📢", "👊"]
            },
            {
                question: "考試拿了一百分，心情會怎麼樣？",
                options: ["開心與興奮", "害怕與發抖", "生氣與發火", "難過與失望"],
                emojis: ["🎉", "😨", "😡", "😔"]
            },
            {
                question: "怎麼做能天天都有好心情？",
                options: ["早睡早起多運動", "熬夜打電動玩具", "一不順心就生氣", "天天吃糖果零食"],
                emojis: ["🏃", "🎮", "⚡", "🍭"]
            }
        ],
        scenarios: [
            {
                scenario: "戶外體育課突然下雨，改在教室上課。",
                question: "👉 請畫出你現在的心情！"
            },
            {
                scenario: "排隊時，後面的同學不小心撞到你。",
                question: "👉 請畫出你會怎麼跟他說？"
            }
        ],
        pledge: {
            title: "生氣或難過時，我會試著這樣做：",
            items: [
                "深呼吸 10 下，讓自己冷靜。",
                "用溫和有禮貌的話跟對方說。",
                "找老師或爸爸媽媽幫忙。"
            ]
        }
    },
    boundary: {
        title: "身體紅綠燈學習單",
        subtitle: "我的身體我保護，勇敢說不行！",
        intro: "身體是我們最寶貴的寶物。泳衣遮住的地方是私密部位，絕對不能讓別人看或摸喔！",
        mcqs: [
            {
                question: "哪裡是不能給別人看或摸的「私密處」？",
                options: ["泳衣遮住的地方", "我們的手掌", "肩膀和背部", "膝蓋和小腿"],
                emojis: ["🩱", "🤝", "肩", "🦵"]
            },
            {
                question: "別人給你糖果，要摸你的私密處，該怎麼辦？",
                options: ["大聲說不行並快跑", "拿糖果給他摸", "害怕忍耐不說", "當作兩個人的秘密"],
                emojis: ["🛡️", "🍭", "😰", "🤫"]
            },
            {
                question: "關於我們身體的界線，哪一個是對的？",
                options: ["每個人的身體都要尊重", "熟人就可以隨便摸我", "朋友抱我不能拒絕", "被碰一下就要打回去"],
                emojis: ["❤️", "🖐️", "🫂", "💥"]
            },
            {
                question: "被觸摸覺得不舒服或害怕，該怎麼做？",
                options: ["大叫跑開並告訴大人", "安靜地忍耐下去", "聽對方的話配合他", "絕對不告訴任何人"],
                emojis: ["🗣️", "🤫", "🙇", "🤐"]
            },
            {
                question: "誰是你可以信任、能幫你的安全守護者？",
                options: ["爸爸媽媽和學校老師", "路上的陌生人", "網路上的網友", "威脅你的人"],
                emojis: ["🩺", "👤", "💻", "🤫"]
            }
        ],
        scenarios: [
            {
                scenario: "公車上，有陌生人故意一直摸你的身體。",
                question: "👉 請畫出你該怎麼保護自己？"
            },
            {
                scenario: "不喜歡被親戚抱抱，但對方一直抱過來。",
                question: "👉 請畫出你該怎麼勇敢拒絕？"
            }
        ],
        pledge: {
            title: "我會好好愛護自己和別人的身體：",
            items: [
                "不讓別人摸私密處，也尊重別人。",
                "覺得奇怪時勇敢大聲說：不行！",
                "立刻告訴爸爸媽媽或學校老師。"
            ]
        }
    },
    "power-food": {
        title: "安全與健康小達人",
        subtitle: "用電安全保平安，健康食物不亂吃！",
        intro: "濕濕的手不能碰插頭，吃東西前要洗手。過期發霉的食物絕對不能吃喔！",
        mcqs: [
            {
                question: "拔電器插頭時，怎麼做才安全？",
                options: ["握住插頭塑膠拔起", "用力拉扯電線", "用濕濕的手去拔", "用鐵絲挖插座孔"],
                emojis: ["🔌", "💥", "💦", "🥢"]
            },
            {
                question: "延長線插滿了很多電器，會發生什麼危險？",
                options: ["電線過熱引起火災", "會讓電器功能變強", "沒有危險非常方便", "可以省下很多電費"],
                emojis: ["🔥", "⚡", "👍", "💰"]
            },
            {
                question: "買飲料或牛奶時，要先看包裝上的什麼？",
                options: ["有效日期過期了沒", "漂亮的卡通圖案", "裡面送的玩具", "包裝的顏色"],
                emojis: ["📅", "🧸", "🎁", "🎨"]
            },
            {
                question: "過期一天的麵包，但沒發霉，可以吃嗎？",
                options: ["不能吃，有看不見的細菌", "可以吃，烤箱烤過就沒事", "可以吃，才過期一天", "聞起來沒有臭味就可以吃"],
                emojis: ["🤮", "🍞", "⏰", "👃"]
            },
            {
                question: "肚子痛發燒了，應該怎麼辦？",
                options: ["立刻告訴大人看醫生", "忍耐繼續去睡覺", "自己去拿藥吃", "喝汽水壓過去"],
                emojis: ["🩺", "🛏️", "💊", "🥤"]
            }
        ],
        scenarios: [
            {
                scenario: "桌上有放了很久、有螞蟻在爬的便當。",
                question: "👉 請畫出你該怎麼做？"
            },
            {
                scenario: "弟弟的手濕濕的，正準備去插電視插頭。",
                question: "👉 請畫出你該怎麼阻止他？"
            }
        ],
        pledge: {
            title: "我會注意用電安全和飲食健康：",
            items: [
                "手濕濕的絕對不觸摸插頭與插座。",
                "買東西前一定會看「有效日期」。",
                "吃東西前用肥皂仔細洗手。"
            ]
        }
    },
    sanitary: {
        title: "我的青春小秘密",
        subtitle: "學會使用衛生棉，溫柔照顧身體！",
        intro: "女生長大會有生理期。我們要學會用衛生棉，保持乾淨。換完要用肥皂洗手喔！",
        mcqs: [
            {
                question: "月經來的時候，大約多久要更換衛生棉？",
                options: ["每隔 2 到 3 小時更換", "濕透了再更換", "早上一次晚上一次", "兩天換一次省錢"],
                emojis: ["⏰", "💦", "🛌", "💰"]
            },
            {
                question: "換下來的髒衛生棉，要怎麼丟才對？",
                options: ["包好丟進垃圾桶", "貼在廁所牆壁上", "丟進馬桶沖掉", "丟在廁所地板上"],
                emojis: ["🗑️", "🧱", "🚽", "🧹"]
            },
            {
                question: "更換衛生棉前後，最重要的事情是什麼？",
                options: ["用肥皂把雙手洗乾淨", "噴香水讓手香香的", "照鏡子看臉部", "用濕紙巾擦大腿"],
                emojis: ["🧼", "🌸", "🪞", "💦"]
            },
            {
                question: "生理期肚子痛不舒服，可以怎麼做？",
                options: ["喝熱開水或熱敷肚子", "吃冰棒或去跑步", "狂吃甜食糖果", "熬夜打電動"],
                emojis: ["☕", "🏃", "🍭", "🎮"]
            },
            {
                question: "上課時月經來了、褲子沾到紅血，該怎麼辦？",
                options: ["找老師或健康中心幫忙", "在教室大哭不上課", "用課本遮住不走動", "忍耐到放學回家"],
                emojis: ["🩺", "😭", "📖", "🤐"]
            }
        ],
        scenarios: [
            {
                scenario: "上體育課前，你發現衛生棉滿了需要更換。",
                question: "👉 請畫出你該怎麼去廁所更換？"
            },
            {
                scenario: "好朋友今天生理期肚子痛，趴在桌上休息。",
                question: "👉 請畫出你該怎麼貼心關心她？"
            }
        ],
        pledge: {
            title: "我會做好生理期衛生，愛護身體：",
            items: [
                "換衛生棉前後一定會用肥皂洗手。",
                "定時更換，包好丟進垃圾桶。",
                "多喝溫水，讓自己舒服休息。"
            ]
        }
    },
    cough: {
        title: "感冒我不怕！咳嗽禮節與個人衛生學習單",
        subtitle: "學會正確咳嗽禮節，保護自己也保護他人！",
        intro: "當我們感冒、咳嗽或打噴嚏時，成千上萬的病毒與細菌會隨著飛沫噴射出來。如果沒有做好防護，就很容易傳染給身邊的同學、老師和家人。今天，就讓我們一起學習正確的咳嗽禮節與個人衛生習慣，當個貼心又健康的衛生小達人吧！",
        mcqs: [
            {
                question: "突然想咳嗽但沒有衛生紙遮口鼻時，下列哪一個是「最正確且符合禮貌」的遮擋動作？",
                options: ["彎曲手肘，用衣袖遮住口鼻", "用雙手手掌緊緊捂住口鼻", "對著旁邊同學的臉咳嗽", "不用遮擋，直接大聲對著空氣咳出來"],
                emojis: ["💪", "🖐", "🗣", "💨"]
            },
            {
                question: "用完的髒衛生紙（例如擤完鼻涕、擦完口水），應該如何處理才不會散播病菌？",
                options: ["立刻丟進垃圾桶，並用肥皂洗手", "先放口袋下次再用", "丟在教室地板上", "拿給同學看"],
                emojis: ["🗑️", "🦘", "🚯", "🤝"]
            },
            {
                question: "關於配戴口罩的正確步驟，下列敘述哪一個是正確的？",
                options: ["口罩必須蓋住口鼻與下巴，且壓緊鼻樑處的金屬條", "只要蓋住嘴巴就好，鼻子要露出來呼吸比較順暢", "把口罩掛在下巴或一隻耳朵上當裝飾", "口罩反過來戴、或髒了不用換繼續戴一個星期"],
                emojis: ["😷", "👃", "👂", "🩹"]
            },
            {
                question: "感冒咳嗽時，除了戴口罩，下列哪一項生活習慣可以幫我們快點好起來？",
                options: ["多喝溫開水、充足睡眠，並避免吃油炸辛辣食物", "去操場跑十圈出一身大汗", "一直吃糖果來止咳", "整天待在密閉不通風的房間裡打電腦"],
                emojis: ["💧", "🏃", "🍭", "🎮"]
            },
            {
                question: "為什麼咳嗽之後「一定要洗手」？",
                options: ["因為手上可能沾到了感冒飛沫與病毒，洗手能避免污染別的物品傳染給人", "因為洗手可以讓手變白", "因為手碰水會變涼快", "其實沒有必要，手看起來乾淨就好了"],
                emojis: ["🧼", "🤍", "🧊", "👀"]
            }
        ],
        scenarios: [
            {
                scenario: "上課時，你發現坐在旁邊的同學一直在咳嗽，卻沒有戴口罩，而且還直接對著課桌打噴嚏。",
                question: "這時候，你會怎麼禮貌地提醒他戴上口罩？請寫下你想對他說的話。"
            },
            {
                scenario: "你感冒喉嚨痛，但今天學校有你最期待的校外教學，你很想跟同學說話，但你一直在咳嗽。",
                question: "為了保護大家，你在今天的活動中會如何落實咳嗽禮節呢？"
            }
        ],
        pledge: {
            title: "我承諾在生活中當個有禮貌的「咳嗽禮節小達人」：",
            items: [
                "咳嗽或打噴嚏時，一定用衛生紙或手肘遮住口鼻，髒衛生紙立即丟垃圾桶並洗手。",
                "感冒或身體不舒服時，會主動且正確地配戴口罩，保護班上同學的健康。",
                "落實「內外夾弓大立腕」洗手步驟，不隨便用未洗的手揉眼睛、摸鼻子或吃東西。"
            ]
        }
    },
    escape: {
        title: "火警逃生大演練學習單",
        subtitle: "火災來臨我不怕，學習正確的避難與逃生觀念！",
        intro: "火災是非常危險的，當警報器響起或發現火災時，我們必須保持冷靜。記得逃生時要「往安全出口逃生」，如果煙霧很大，要「採低姿勢爬行」。千萬不能搭乘電梯，也不能躲在沒有窗戶的浴室裡。學好逃生技能，才能保護自己和家人的生命安全！",
        mcqs: [
            {
                question: "火災發生時，如果現場煙霧迷漫，我們應該採取什麼樣的姿勢逃生？",
                options: ["壓低身體，採取「低姿勢」貼近地面爬行逃生", "站得直直的，快速用百米衝刺跑步", "躺在地上滾動前進", "爬到天花板或桌子上躲避"],
                emojis: ["🏃", "🧍", "🌀", "🧗"]
            },
            {
                question: "火警發生要從公寓高樓層向下逃生時，下列哪一種避難方式是絕對安全的？",
                options: ["走安全逃生樓梯，一步步向下走", "搭乘大樓電梯，這樣比較快速", "直接從窗戶或陽台跳下去", "躲進浴室裡，因為浴室裡面水很多"],
                emojis: ["🚶", "🛗", "🪟", "🛁"]
            },
            {
                question: "當你打開門準備逃生時，發現門把非常燙手，或者門外走廊已經充滿濃煙與大火，這時該怎麼辦？",
                options: ["立刻關上門，用衣物塞住門縫防煙，並移動到有窗戶的房間等待救援", "不管三七二十一，深呼吸一口氣直接衝進濃煙大火中", "從窗戶大叫並立刻跳下去", "躲進衣櫃或床底下大哭"],
                emojis: ["🚪", "🏃", "🪟", "🛌"]
            },
            {
                question: "撥打消防火警電話「119」報案時，我們最應該向消防人員報出什麼關鍵資訊？",
                options: ["詳細的火災發生地址、現場有沒有人受困、以及起火的狀況", "我今年幾歲、在學校考第幾名", "我家有幾隻寵物狗和貓咪", "大聲哭鬧不說話就掛掉電話"],
                emojis: ["☎️", "🎂", "🐶", "😭"]
            },
            {
                question: "下列關於火災預防的敘述，哪一個是「錯誤」的？",
                options: ["可以在床上玩打火機或隨便點燃蠟燭", "插座上不可插太多插頭，以免過熱起火", "家裡應該安裝住宅用火災警報器（住警器）", "要跟家人一起規劃好居家的防火逃生避難路線"],
                emojis: ["🔥", "🔌", "🚨", "🗺️"]
            }
        ],
        scenarios: [
            {
                scenario: "在學校上課時，突然火災警報器大聲響起，廣播宣布廚房失火了，請大家疏散。",
                question: "這時候你會帶哪些東西？你會如何跟著老師和同學安全、有秩序地走到操場避難呢？"
            },
            {
                scenario: "如果你在家中睡午覺，突然聞到一股濃烈的塑膠燒焦味，睜開眼發現客廳已經冒出黑煙。",
                question: "請寫下你當下要做的前三個步驟是什麼？"
            }
        ],
        pledge: {
            title: "我承諾會牢記防火與逃生知識，遇到狀況冷靜應對：",
            items: [
                "絕對不拿打火機、火柴、蠟燭來玩火，注意用電與爐火的安全。",
                "火災逃生時堅持「小火快逃，濃煙關門」原則，絕不搭電梯，絕不躲浴室。",
                "積極參與學校的防震與防火逃生演練，記清楚學校與家裡的避難路線及安全出口。"
            ]
        }
    },
    drink: {
        title: "我的飲料我做主！健康減糖學習單",
        subtitle: "認識含糖飲料的健康危機，多喝水健康滿分！",
        intro: "市面上的珍珠奶茶、汽水、運動飲料雖然甜甜的很好喝，但裡面含有非常多的「精緻糖」。天天喝含糖飲料，不僅會讓我們變胖、蛀牙、還會讓身體變遲鈍、長不高。讓我們一起學會看營養標示，選擇多喝水或無糖飲料，做自己身體的健康國王！",
        mcqs: [
            {
                question: "天天喝很多含糖飲料，可能會對我們的身體健康帶來什麼不好的影響？",
                options: ["容易蛀牙、身體肥胖、精神不振且長不高", "會讓我們變得跟超人一樣強壯", "能提高智商，讓考試考一百分", "能保護視力，讓皮膚變滑嫩"],
                emojis: ["🦷", "💪", "💯", "👓"]
            },
            {
                question: "當我們覺得口渴時，最健康、最能幫身體補充水分的「第一名飲料」是什麼？",
                options: ["乾淨的白開水", "冰涼的可樂或雪碧汽水", "冰淇淋紅茶或黑糖珍珠鮮奶", "甜甜的蘋果汁或運動飲料"],
                emojis: ["💧", "🥤", "🧋", "🧃"]
            },
            {
                question: "如果真的想喝飲料，在看飲料罐背後的「營養標示」時，我們應該特別注意哪一個數值？",
                options: ["「糖」的含量", "瓶子的設計好不好看", "飲料的製造商是哪一家", "飲料是不是進口的"],
                emojis: ["🍬", "🎨", "🏭", "✈️"]
            },
            {
                question: "有些飲料宣稱是「果汁百分之百」，但看成分表卻發現加了很多糖，你覺得它健康嗎？",
                options: ["不健康，因為額外添加的精緻糖一樣會對身體造成負擔，不宜多喝", "非常健康，可以每天代替白開水拼命喝", "只要是果汁就絕對健康", "完全沒有差別"],
                emojis: ["❌", "🥤", "🍊", "🟰"]
            },
            {
                question: "下列哪一個方法最適合用來幫自己「慢慢戒掉含糖飲料」？",
                options: ["隨身攜帶水壺，想喝飲料時先喝三口白開水，或點無糖、微糖的飲料", "每天零用錢全部拿去買飲料喝個夠", "一邊吃糖果一邊喝冰水", "口渴時忍耐不喝任何水分"],
                emojis: ["🥛", "💰", "🍬", "🤐"]
            }
        ],
        scenarios: [
            {
                scenario: "天氣好熱，放學時同學約你一起去買大杯的「全糖珍珠奶茶」消暑，說非常好喝。",
                question: "這時候，你會怎麼禮貌拒絕對方？或者你會提出什麼更健康的替代點法呢？"
            },
            {
                scenario: "小強不喜歡喝白開水，每天都喝兩瓶汽水，結果牙齒蛀光光，上課也總是昏昏欲睡。",
                question: "請你幫忙寫下三條建議，告訴小強多喝白開水有什麼好處？"
            }
        ],
        pledge: {
            title: "我承諾要掌握飲料自主權，當個健康減糖小達人：",
            items: [
                "每天多喝白開水，喝水量達到自己體重所需的標準，減少買飲料的次數。",
                "買飲料時，會主動選擇「無糖」或「微糖」，並仔細閱讀瓶身上的糖分標示。",
                "不把含糖飲料當水喝，保護牙齒不蛀牙，維持健康的體態與活力！"
            ]
        }
    },
    habits: {
        title: "我是環境整潔小達人學習單",
        subtitle: "做好個人衛生與環境整潔，養成生活好習慣！",
        intro: "一個整潔乾淨的環境能讓我們住得舒服、學習更專心，而且不容易生病。維護教室與房間的乾淨，不是老師或爸爸媽媽一個人的工作，而是我們大家共同的責任。從垃圾分類、掃地拖地，到整理自己的書桌，每個人都可以成為厲害的「整潔小達人」！",
        mcqs: [
            {
                question: "在班級進行打掃工作時，下列哪一種態度是整潔小達人應該具備的？",
                options: ["認真負責，與同學分工合作把分配的區域掃乾淨", "把垃圾全部掃到隔壁同學的座位底下隱藏起來", "拿著掃把當武器和同學在走廊打鬧戲耍", "假裝肚子痛躲在廁所不上課也不打掃"],
                emojis: ["🧹", "🚯", "⚔️", "🚽"]
            },
            {
                question: "喝完的鋁箔包牛奶或飲料盒，在丟掉進行資源回收前，應該怎麼處理才對？",
                options: ["將裡面的殘汁倒乾淨、稍微用水沖洗並壓扁後，丟入紙容器回收桶", "直接連同吸管整盒丟進一般垃圾桶", "隨手塞在抽屜裡放一個星期", "直接丟在操場的草地上"],
                emojis: ["♻️", "🗑️", "🗄️", "🌿"]
            },
            {
                question: "整理自己的個人書桌或課桌椅時，下面哪一種收納方式是最好的？",
                options: ["將課本、文具分類放好，抽屜和桌面上不堆積多餘垃圾", "把所有考卷、吃剩的零食包裝紙全部塞進課桌深處", "書包和文具隨地亂丟，要用時再大喊請媽媽找", "把隔壁同學的文具拿來當作自己的擺放"],
                emojis: ["📚", "🗄️", "🗣️", "🤝"]
            },
            {
                question: "為什麼我們不能隨地亂丟垃圾，並且要定期倒垃圾和清理積水？",
                options: ["因為髒亂容易滋生蚊蟲、蒼蠅、蟑螂與老鼠，傳播傳染病", "因為垃圾在地上會變大", "開風吹走就不用理它", "只因為會被老師扣分，沒有別的危害"],
                emojis: ["🦟", "🎈", "💨", "📝"]
            },
            {
                question: "下列哪一個個人習慣最能展現你的「生活整潔素養」？",
                options: ["用完東西物歸原位，垃圾隨手分類丟，吃完東西隨手擦桌子", "只在老師或父母生氣罵人的時候才心不甘情不願地收拾", "把自己的房間堆得像垃圾山一樣，不准任何人進去整理", "把髒衣服丟在地上等著別人幫忙撿起來洗"],
                emojis: ["✨", "😡", "🌋", "🧺"]
            }
        ],
        scenarios: [
            {
                scenario: "打掃時間到了，你發現分配跟你一組掃走廊的同學在旁邊玩球、不肯打掃，導致打掃工作做不完。",
                question: "這時候，你會怎麼跟他說，好讓他願意一起加入打掃工作呢？"
            },
            {
                scenario: "你的房間桌面上堆滿了課本、畫筆、吃完的餅乾屑和玩具，看起來非常混亂，要寫功課時甚至找不到位置。",
                question: "請寫下你準備「動手整理」這個桌子的具體步驟是什麼？"
            }
        ],
        pledge: {
            title: "我承諾會用實際行動維護自身衛生與生活環境整潔：",
            items: [
                "用完物品一定物歸原位，每天整理個人書桌與抽屜，不堆積垃圾與雜物。",
                "認真做好班級與家中的打掃工作，落實垃圾分類與資源回收，為地球盡一份心力。",
                "吃完東西隨手擦拭桌面，保持個人衣物整潔，當個讓人喜愛的生活整潔小達人！"
            ]
        }
    }
};

const presetTemplatesVisual = {
    cough: {
        title: "感冒我不怕！咳嗽小禮貌學習單",
        subtitle: "咳嗽戴口罩，病菌不傳播！",
        intro: "咳嗽或打噴嚏時，病毒會飛出來。我們要用手肘遮住，戴口罩，勤洗手喔！",
        mcqs: [
            {
                question: "突然想咳嗽但沒衛生紙，要用什麼遮住嘴巴？",
                options: ["彎曲手肘用衣袖遮住", "用雙手手掌捂住", "對著同學的臉咳", "直接對空氣咳出來"],
                emojis: ["💪", "🖐", "🗣", "💨"]
            },
            {
                question: "擤完鼻涕的髒衛生紙，要怎麼處理？",
                options: ["丟進垃圾桶並洗手", "放口袋下次再用", "丟在教室地板上", "拿給同學看"],
                emojis: ["🗑️", "🦘", "🚯", "🤝"]
            },
            {
                question: "戴口罩的時候，哪一個做法才是對的？",
                options: ["蓋住鼻子、嘴巴和下巴", "露出鼻子呼吸", "挂在耳朵上當裝飾", "戴一個星期不換"],
                emojis: ["😷", "👃", "👂", "🩹"]
            },
            {
                question: "感冒生病時，怎麼做能快點好起來？",
                options: ["多喝溫水、多睡覺休息", "去操場跑步十圈", "一直吃糖果止咳", "天天打電動不睡覺"],
                emojis: ["💧", "🏃", "🍭", "🎮"]
            },
            {
                question: "為什麼咳嗽之後一定要洗手？",
                options: ["避免把手上的病毒傳給別人", "可以讓手變白", "讓手變涼快", "手看起來乾淨就好"],
                emojis: ["🧼", "🤍", "🧊", "👀"]
            }
        ],
        scenarios: [
            {
                scenario: "旁邊的同學一直咳嗽，卻沒有戴口罩。",
                question: "👉 請畫出你該怎麼提醒他戴口罩？"
            },
            {
                scenario: "你感冒了一直咳嗽，今天要去校外教學。",
                question: "👉 請畫出你該怎麼做保護大家？"
            }
        ],
        pledge: {
            title: "我會做個有禮貌的衛生小達人：",
            items: [
                "咳嗽時用手肘遮，衛生紙丟垃圾桶。",
                "感冒生病時會主動戴好口罩。",
                "勤洗手，髒手不揉眼睛、摸鼻子。"
            ]
        }
    },
    escape: {
        title: "火災逃生小演練",
        subtitle: "火警來臨不驚慌，冷靜安全避難！",
        intro: "火災很危險，聽到警報器要冷靜。煙霧大時要低姿勢爬行，絕對不能坐電梯喔！",
        mcqs: [
            {
                question: "火災煙霧很大時，逃生要用什麼姿勢？",
                options: ["身體壓低，低姿勢爬行", "站直身體大步跑步", "在地上滾動前進", "爬到桌子底下躲著"],
                emojis: ["🏃", "🧍", "🌀", "🧗"]
            },
            {
                question: "火災時要從大樓向下逃生，該怎麼走？",
                options: ["走安全逃生樓梯向下", "搭乘電梯快速下樓", "直接從陽台跳下去", "躲進浴室裡用水噴"],
                emojis: ["🚶", "🛗", "🪟", "🛁"]
            },
            {
                question: "開門發現門把很燙、都是濃煙，該怎麼辦？",
                options: ["關門塞門縫，在窗邊等待", "憋氣直接衝進火中", "立刻從窗戶跳下", "躲在床底下大哭"],
                emojis: ["🚪", "🏃", "🪟", "🛌"]
            },
            {
                question: "撥打 119 電話報警時，要說出什麼？",
                options: ["家裡的詳細住址和起火處", "我幾歲和考第幾名", "我家養幾隻貓貓狗狗", "大哭不說話掛斷電話"],
                emojis: ["☎️", "🎂", "🐶", "😭"]
            },
            {
                question: "關於預防火災，哪一個是「不對」的行為？",
                options: ["在房間玩火柴或打火機", "插座上不插太多插頭", "家裡安裝火災警報器", "規劃好家裡的逃生路線"],
                emojis: ["🔥", "🔌", "🚨", "🗺️"]
            }
        ],
        scenarios: [
            {
                scenario: "在學校上課時，火災警報器突然響起。",
                question: "👉 請畫出你該怎麼跟著排隊避難？"
            },
            {
                scenario: "在家睡覺聞到焦味，客廳已經都是黑煙。",
                question: "👉 請畫出你該怎麼安全逃生？"
            }
        ],
        pledge: {
            title: "我會記住火災逃生的安全知識：",
            items: [
                "絕對不拿打火機或火柴玩火。",
                "火災時絕不搭電梯，絕不躲浴室。",
                "認真參加學校的防災逃生演練。"
            ]
        }
    },
    drink: {
        title: "我的健康水飲料",
        subtitle: "少喝糖水多喝水，身體健康一百分！",
        intro: "汽水和珍奶甜甜的很好喝，但喝太多會蛀牙變胖喔！多喝白開水最棒了！",
        mcqs: [
            {
                question: "天天喝很多含糖飲料，對身體有什麼壞處？",
                options: ["容易蛀牙、變胖和長不高", "會讓我們變得跟超人一樣強", "考試每次都拿一百分", "能保護眼睛視力"],
                emojis: ["🦷", "💪", "💯", "👓"]
            },
            {
                question: "覺得口渴時，喝什麼最健康？",
                options: ["乾淨的白開水", "甜甜的汽水可樂", "冰涼的珍珠奶茶", "運動飲料或果汁"],
                emojis: ["💧", "🥤", "🧋", "🧃"]
            },
            {
                question: "想知道飲料甜不甜，要看瓶身後面的什麼？",
                options: ["「糖」的含量數值", "瓶身圖案好不好看", "飲料是哪一家公司做的", "飲料是不是進口的"],
                emojis: ["🍬", "🎨", "🏭", "✈️"]
            },
            {
                question: "果汁包裝寫 100% 但加了很多糖，健康嗎？",
                options: ["不健康，精緻糖加太多不好", "很健康，可以天天代替水喝", "只要是果汁就絕對健康", "完全沒有差別"],
                emojis: ["❌", "🥤", "🍊", "🟰"]
            },
            {
                question: "怎麼幫自己改掉愛喝甜甜飲料的習慣？",
                options: ["多喝開水，飲料改選「無糖」", "把零錢全部拿去買飲料", "吃糖果配冰水", "忍耐口渴不喝任何水"],
                emojis: ["🥛", "💰", "🍬", "🤐"]
            }
        ],
        scenarios: [
            {
                scenario: "同學請你喝大杯全糖珍珠奶茶。",
                question: "👉 請畫出你該怎麼拒絕或換成無糖？"
            },
            {
                scenario: "朋友只喝汽水不喝水，牙齒都蛀光了。",
                question: "👉 請畫出你該怎麼勸他多喝開水？"
            }
        ],
        pledge: {
            title: "我會多喝開水、少喝含糖飲料：",
            items: [
                "天天多喝白開水，補充水分。",
                "買飲料時選擇「無糖」或「微糖」。",
                "不把飲料當水喝，保護牙齒健康。"
            ]
        }
    },
    habits: {
        title: "我是整潔小幫手",
        subtitle: "教室房間整理好，病毒蚊蟲跑光光！",
        intro: "乾淨的環境讓我們舒服不生病。垃圾要分類，桌椅要整理，大家一起動手做！",
        mcqs: [
            {
                question: "學校打掃時間到了，應該抱持什麼態度？",
                options: ["分工合作認真掃乾淨", "把垃圾全部掃到同學桌底", "拿掃把和同學打架玩鬧", "躲在廁所不肯去打掃"],
                emojis: ["🧹", "🚯", "⚔️", "🚽"]
            },
            {
                question: "喝完的牛奶盒或飲料盒，要怎麼丟才對？",
                options: ["沖水壓扁丟進回收紙容器", "整盒直接丟進一般垃圾", "塞在抽屜深處不理它", "丟在操場草地上"],
                emojis: ["♻️", "🗑️", "🗄️", "🌿"]
            },
            {
                question: "整理自己的書桌時，怎麼做最乾淨？",
                options: ["書本分類放好，桌上沒垃圾", "考卷和垃圾全塞進抽屜", "文具亂丟等媽媽幫忙收", "拿別人的文具來擺放"],
                emojis: ["📚", "🗄️", "🗣️", "🤝"]
            },
            {
                question: "為什麼垃圾不能亂丟，要定期清理？",
                options: ["會生蚊子蟑螂老鼠傳染生病", "垃圾在地上會長大", "風會吹走不用理它", "只是怕被扣分而已"],
                emojis: ["🦟", "🎈", "💨", "📝"]
            },
            {
                question: "哪一個是生活整潔的好習慣？",
                options: ["東西用完物歸原位，垃圾分類", "被罵了才隨便收一下", "房間堆成垃圾山不整理", "髒衣服亂丟等別人洗"],
                emojis: ["✨", "😡", "🌋", "🧺"]
            }
        ],
        scenarios: [
            {
                scenario: "打掃時間，分配一組的組員在玩球不打掃。",
                question: "👉 請畫出你該怎麼找他一起打掃？"
            },
            {
                scenario: "你的書桌堆滿垃圾、考卷和吃剩的餅乾屑。",
                question: "👉 請畫出你該怎麼動手整理它？"
            }
        ],
        pledge: {
            title: "我承諾會努力做好個人與環境衛生：",
            items: [
                "用完東西一定收好，收乾淨書桌。",
                "認真做好打掃，垃圾仔細分類。",
                "吃完東西隨手擦桌子，保持乾淨。"
            ]
        }
    }
};

// --- 2. 應用程式狀態管理 (含特教模式與自訂圖片記憶) ---

const state = {
    activeTheme: 'pastel',
    bwMode: false,
    visualMode: false, // 特教圖卡/視覺輔助模式
    apiKey: '',
    selectedPreset: '',
    customImages: {}, // 格式為 { 'qIdx_oIdx': 'base64String' } 儲存上傳圖片
    worksheet: {
        title: "我的學習單題目名稱",
        subtitle: "這是一個副標題引導文字",
        intro: "請在此輸入暖身閱讀文章或本單元的學習前導說明內容...",
        mcqs: [],
        scenarios: [],
        pledge: {
            title: "我承諾會努力實踐以下行動：",
            items: [
                "第一項承諾行動。",
                "第二項承諾行動。",
                "第三項承諾行動"
            ]
        }
    }
};

// --- 3. DOM 元素選取 ---
const elements = {
    themeButtons: document.querySelectorAll('.theme-btn'),
    bwModeInput: document.getElementById('bw-mode'),
    presetTopicSelect: document.getElementById('preset-topic'),
    customContentTextarea: document.getElementById('custom-content'),
    gradeLevelSelect: document.getElementById('grade-level'),
    questionCountSelect: document.getElementById('question-count'),
    layoutSpecialMode: document.getElementById('layout-special-mode'), // 特教模式開關
    layoutHeader: document.getElementById('layout-header'),
    layoutIntro: document.getElementById('layout-intro'),
    layoutMcq: document.getElementById('layout-mcq'),
    layoutScenario: document.getElementById('layout-scenario'),
    layoutPledge: document.getElementById('layout-pledge'),
    
    keyToggle: document.getElementById('key-toggle'),
    keySettingsContainer: document.getElementById('key-settings-container'),
    geminiApiKeyInput: document.getElementById('gemini-api-key'),
    keySaveStatus: document.getElementById('key-save-status'),
    
    btnOfflineGen: document.getElementById('btn-offline-gen'),
    btnAiGen: document.getElementById('btn-ai-gen'),
    btnAddQuestion: document.getElementById('btn-add-question'),
    btnClear: document.getElementById('btn-clear'),
    btnPrint: document.getElementById('btn-print'),
    
    worksheetA4: document.getElementById('worksheet-a4'),
    wsTitle: document.getElementById('ws-title'),
    wsSubtitle: document.getElementById('ws-subtitle'),
    wsHeaderSec: document.getElementById('ws-header-sec'),
    wsInfoBar: document.getElementById('ws-info-bar'),
    wsIntroSec: document.getElementById('ws-intro-sec'),
    wsIntroText: document.getElementById('ws-intro-text'),
    wsMcqSec: document.getElementById('ws-mcq-sec'),
    mcqList: document.getElementById('mcq-list'),
    wsScenarioSec: document.getElementById('ws-scenario-sec'),
    scenarioList: document.getElementById('scenario-list'),
    wsPledgeSec: document.getElementById('ws-pledge-sec'),
    wsPledgeText: document.getElementById('ws-pledge-text'),
    wsPledgeList: document.getElementById('ws-pledge-list'),
    
    loadingModal: document.getElementById('loading-modal')
};

// --- 4. 初始化設定 ---
function init() {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        state.apiKey = savedKey;
        elements.geminiApiKeyInput.value = savedKey;
        elements.keySaveStatus.textContent = "已成功載入先前儲存的金鑰！";
        elements.keySaveStatus.style.color = "#4caf50";
    }
    
    bindEvents();
    loadPresetTemplate('emotion');
}

// --- 5. 事件監聽綁定 ---
function bindEvents() {
    // 主題配色
    elements.themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.activeTheme = btn.getAttribute('data-theme');
            updateWorksheetTheme();
        });
    });
    
    // 黑白複印
    elements.bwModeInput.addEventListener('change', (e) => {
        state.bwMode = e.target.checked;
        updateWorksheetTheme();
    });
    
    // 特教圖卡/視覺輔助模式切換
    elements.layoutSpecialMode.addEventListener('change', (e) => {
        state.visualMode = e.target.checked;
        if (state.visualMode) {
            elements.worksheetA4.classList.add('visual-mode');
            // 自動簡化標題與大字型，並引導
            elements.gradeLevelSelect.value = 'special';
        } else {
            elements.worksheetA4.classList.remove('visual-mode');
        }
        renderWorksheet();
    });
    
    // API 金鑰摺疊
    elements.keyToggle.addEventListener('click', () => {
        elements.keyToggle.classList.toggle('open');
        elements.keySettingsContainer.classList.toggle('collapsed');
    });
    
    // API 金鑰輸入
    elements.geminiApiKeyInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        state.apiKey = value;
        if (value) {
            localStorage.setItem('gemini_api_key', value);
            elements.keySaveStatus.textContent = "金鑰已儲存於本機 LocalStorage！";
            elements.keySaveStatus.style.color = "#4caf50";
        } else {
            localStorage.removeItem('gemini_api_key');
            elements.keySaveStatus.textContent = "已清除金鑰。";
            elements.keySaveStatus.style.color = "#f44336";
        }
    });
    
    // 下拉範本選取
    elements.presetTopicSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val && val !== 'custom') {
            state.selectedPreset = val;
            const preset = presetTemplates[val];
            if (preset) {
                elements.customContentTextarea.value = `[${preset.title}] 課程重點如下：\n1. ${preset.intro.substring(0, 80)}...\n2. 提供大圖標視覺卡片、支援圖示自主修改與自訂圖片上傳。`;
            }
        }
    });
    
    // 區塊佈局開關
    const layoutCheckboxes = [
        { el: elements.layoutHeader, target: elements.wsHeaderSec },
        { el: elements.layoutIntro, target: elements.wsIntroSec },
        { el: elements.layoutMcq, target: elements.wsMcqSec },
        { el: elements.layoutScenario, target: elements.wsScenarioSec },
        { el: elements.layoutPledge, target: elements.wsPledgeSec }
    ];
    
    layoutCheckboxes.forEach(item => {
        item.el.addEventListener('change', (e) => {
            item.target.style.display = e.target.checked ? '' : 'none';
        });
    });
    
    // 生成按鈕
    elements.btnOfflineGen.addEventListener('click', handleOfflineGeneration);
    elements.btnAiGen.addEventListener('click', handleAiGeneration);
    
    // 右上角工具按鈕
    elements.btnAddQuestion.addEventListener('click', handleAddBlankQuestion);
    elements.btnClear.addEventListener('click', handleClearAll);
    elements.btnPrint.addEventListener('click', () => {
        window.print();
    });
}

// --- 6. 學習單渲染與樣式管理 ---

function updateWorksheetTheme() {
    elements.worksheetA4.className = 'a4-page';
    elements.worksheetA4.classList.add(`${state.activeTheme}-theme`);
    
    if (state.bwMode) {
        elements.worksheetA4.classList.add('bw-optimized');
    }
    
    if (state.visualMode) {
        elements.worksheetA4.classList.add('visual-mode');
    }
}

function loadPresetTemplate(key) {
    let template = null;
    if (state.visualMode) {
        template = presetTemplatesVisual[key] || presetTemplates[key];
    } else {
        template = presetTemplates[key];
    }
    if (!template) return;
    
    state.worksheet = JSON.parse(JSON.stringify(template));
    // 清空自訂圖片，避免切換範本時殘留舊圖片
    state.customImages = {};
    renderWorksheet();
}

function renderWorksheet() {
    const data = state.worksheet;
    
    // 渲染大標與引導文
    elements.wsTitle.textContent = data.title || "學習單名稱";
    elements.wsSubtitle.textContent = data.subtitle || "請在此輸入副標題說明...";
    elements.wsIntroText.textContent = data.intro || "請在此輸入暖身導讀內容...";
    
    // 渲染選擇題 (MCQ)
    elements.mcqList.innerHTML = '';
    if (data.mcqs && data.mcqs.length > 0) {
        data.mcqs.forEach((mcq, idx) => {
            const mcqEl = createMcqElement(mcq, idx);
            elements.mcqList.appendChild(mcqEl);
        });
    }
    
    // 渲染情境問答/手繪題
    elements.scenarioList.innerHTML = '';
    if (data.scenarios && data.scenarios.length > 0) {
        data.scenarios.forEach((sc, idx) => {
            const scEl = createScenarioElement(sc, idx);
            elements.scenarioList.appendChild(scEl);
        });
    }
    
    // 渲染宣告承諾
    if (data.pledge) {
        elements.wsPledgeText.textContent = data.pledge.title || "我承諾會努力實踐以下行動：";
        elements.wsPledgeList.innerHTML = '';
        if (data.pledge.items && data.pledge.items.length > 0) {
            data.pledge.items.forEach(item => {
                const li = document.createElement('li');
                li.className = 'pledge-item';
                li.innerHTML = `
                    <div class="pledge-checkbox"></div>
                    <span contenteditable="true">${item}</span>
                `;
                elements.wsPledgeList.appendChild(li);
            });
        }
    }
    
    bindEditableElements();
}

// 核心知識選擇題 - 元素渲染 (含特教大圖卡與自訂換圖上傳)
function createMcqElement(mcq, index) {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.setAttribute('data-type', 'mcq');
    div.setAttribute('data-index', index);
    
    let optionsHtml = '';
    const alphabet = ['A', 'B', 'C', 'D'];
    
    // 取得預設 Emoji 列表，防呆處理
    const defaultEmojis = mcq.emojis || ["❓", "❓", "❓", "❓"];
    
    mcq.options.forEach((opt, oIdx) => {
        const cleanOpt = opt.replace(/^[A-Da-d]\.\s*/, '');
        const emoji = defaultEmojis[oIdx] || "❓";
        
        // 檢查是否有上傳的自訂 Base64 圖片
        const imgKey = `${index}_${oIdx}`;
        const customImg = state.customImages[imgKey];
        
        // 在圖卡模式與標準模式下共用結構，僅透過 CSS 在 .visual-mode 下觸發大圖卡渲染
        optionsHtml += `
            <div class="option-item" data-oidx="${oIdx}">
                <div class="option-pic-container" data-qidx="${index}" data-oidx="${oIdx}">
                    ${customImg 
                        ? `<img src="${customImg}" alt="custom-pic">` 
                        : `<span class="emoji-glyph" contenteditable="true">${emoji}</span>`
                    }
                    <button class="pic-edit-btn" title="📷 選擇電腦圖片上傳"><i class="fa-solid fa-camera"></i></button>
                    ${customImg 
                        ? `<button class="pic-reset-btn" title="🔄 重設回原圖標"><i class="fa-solid fa-arrow-rotate-left"></i></button>` 
                        : ''
                    }
                </div>
                <span class="option-text" contenteditable="true">(${alphabet[oIdx]}) ${cleanOpt}</span>
                <div class="option-box"></div>
            </div>
        `;
    });
    
    div.innerHTML = `
        <div class="item-controls">
            <button class="control-btn del-btn" title="刪除此題"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="question-text" contenteditable="true">${index + 1}. ${mcq.question.replace(/^\d+\.\s*/, '')}</div>
        <div class="options-grid">
            ${optionsHtml}
        </div>
    `;
    
    // 綁定題目內特殊的圖片上傳與拖曳事件
    setupImageUploadEvents(div, index);
    
    // 刪除題目事件
    div.querySelector('.del-btn').addEventListener('click', () => {
        state.worksheet.mcqs.splice(index, 1);
        // 清理該題的所有自訂圖片
        for (let i = 0; i < 4; i++) {
            delete state.customImages[`${index}_${i}`];
        }
        renderWorksheet();
    });
    
    return div;
}

// 情境題渲染 (大畫框與手繪提示)
function createScenarioElement(sc, index) {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.setAttribute('data-type', 'scenario');
    div.setAttribute('data-index', index);
    
    div.innerHTML = `
        <div class="item-controls">
            <button class="control-btn del-btn" title="刪除此題"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="question-text" contenteditable="true">【情境 ${index + 1}】${sc.scenario}</div>
        <div class="question-text" contenteditable="true" style="font-weight: 500; font-size: 13px; color: var(--ui-text-light); margin-top: 4px;">👉 ${sc.question}</div>
        <div class="scenario-answer-box">
            <div class="answer-lines">
                <div class="answer-line"></div>
                <div class="answer-line"></div>
                <div class="answer-line"></div>
            </div>
        </div>
    `;
    
    div.querySelector('.del-btn').addEventListener('click', () => {
        state.worksheet.scenarios.splice(index, 1);
        renderWorksheet();
    });
    
    return div;
}

// --- 7. 📷 自訂在地圖片上傳與拖曳事件 (Local Image File API & DnD) ---
function setupImageUploadEvents(questionEl, qIdx) {
    const containers = questionEl.querySelectorAll('.option-pic-container');
    
    containers.forEach(container => {
        const oIdx = parseInt(container.getAttribute('data-oidx'));
        const imgKey = `${qIdx}_${oIdx}`;
        
        const uploadBtn = container.querySelector('.pic-edit-btn');
        const resetBtn = container.querySelector('.pic-reset-btn');
        
        // 1. 點擊按鈕選檔上傳
        if (uploadBtn) {
            uploadBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 阻止氣泡觸發其他點擊
                
                // 動態建立隱藏 input[file]
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                
                input.onchange = (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        processImageFile(file, imgKey);
                    }
                };
                input.click();
            });
        }
        
        // 2. 點擊重設按鈕回歸預設圖標
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm("要清除上傳的圖片並還原回原本的 Emoji 圖示嗎？")) {
                    delete state.customImages[imgKey];
                    renderWorksheet();
                }
            });
        }
        
        // 3. 拖曳 (Drag & Drop) 圖片實作
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            container.classList.add('drag-over');
        });
        
        container.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            container.classList.remove('drag-over');
        });
        
        container.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            container.classList.remove('drag-over');
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                processImageFile(file, imgKey);
            } else {
                alert("抱歉！您拖入的不是合法的圖片檔案喔！請拖曳 JPG、PNG 等格式的圖片。");
            }
        });
    });
}

// 讀取檔案轉換為 Base64 字串並儲存記憶體
function processImageFile(file, imgKey) {
    showLoading(true, "正在處理您的圖片並調整大小中...");
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64Str = e.target.result;
        state.customImages[imgKey] = base64Str;
        
        setTimeout(() => {
            renderWorksheet();
            showLoading(false);
        }, 300);
    };
    
    reader.onerror = () => {
        alert("讀取圖片檔案失敗，請再試一次。");
        showLoading(false);
    };
    
    reader.readAsDataURL(file);
}

// --- 8. 所見即所得雙向綁定監聽 (WYSIWYG Blur Event Handling) ---
function bindEditableElements() {
    // 學習單標題
    elements.wsTitle.addEventListener('blur', () => {
        state.worksheet.title = elements.wsTitle.textContent;
    });
    elements.wsSubtitle.addEventListener('blur', () => {
        state.worksheet.subtitle = elements.wsSubtitle.textContent;
    });
    elements.wsIntroText.addEventListener('blur', () => {
        state.worksheet.intro = elements.wsIntroText.textContent;
    });
    
    // 選擇題 & 點擊更換 Emoji
    const mcqItems = elements.mcqList.querySelectorAll('.question-item');
    mcqItems.forEach(item => {
        const qIdx = parseInt(item.getAttribute('data-index'));
        
        // 題幹
        const qText = item.querySelector('.question-text');
        qText.addEventListener('blur', () => {
            state.worksheet.mcqs[qIdx].question = qText.textContent.replace(/^\d+\.\s*/, '');
        });
        
        // 選項文字
        const optTexts = item.querySelectorAll('.option-text');
        optTexts.forEach((opt, oIdx) => {
            opt.addEventListener('blur', () => {
                state.worksheet.mcqs[qIdx].options[oIdx] = opt.textContent.replace(/^\([A-Da-d]\)\s*/, '');
            });
        });
        
        // 選項 Emojis 符號修改
        const emojiGlyphs = item.querySelectorAll('.emoji-glyph');
        emojiGlyphs.forEach((glyph, oIdx) => {
            glyph.addEventListener('blur', () => {
                const newEmoji = glyph.textContent.trim() || "❓";
                if (!state.worksheet.mcqs[qIdx].emojis) {
                    state.worksheet.mcqs[qIdx].emojis = ["❓", "❓", "❓", "❓"];
                }
                state.worksheet.mcqs[qIdx].emojis[oIdx] = newEmoji;
            });
        });
    });
    
    // 情境題
    const scItems = elements.scenarioList.querySelectorAll('.question-item');
    scItems.forEach(item => {
        const idx = parseInt(item.getAttribute('data-index'));
        const texts = item.querySelectorAll('.question-text');
        
        texts[0].addEventListener('blur', () => {
            state.worksheet.scenarios[idx].scenario = texts[0].textContent.replace(/^【情境\s*\d+\s*】/, '');
        });
        
        texts[1].addEventListener('blur', () => {
            state.worksheet.scenarios[idx].question = texts[1].textContent.replace(/^👉\s*/, '');
        });
    });
    
    // 行動宣言
    elements.wsPledgeText.addEventListener('blur', () => {
        state.worksheet.pledge.title = elements.wsPledgeText.textContent;
    });
    
    const pledgeSpans = elements.wsPledgeList.querySelectorAll('.pledge-item span');
    pledgeSpans.forEach((span, oIdx) => {
        span.addEventListener('blur', () => {
            state.worksheet.pledge.items[oIdx] = span.textContent;
        });
    });
}

// --- 9. 增刪與清空操作 ---
function handleAddBlankQuestion() {
    const type = prompt("請選擇新增題型：\n1. 「核心知識選擇題/圖卡選擇」\n2. 「生活情境問答/手繪作答題」", "1");
    
    if (type === "1") {
        const newMcq = {
            question: "請點擊在此輸入新的選擇題題目說明？",
            options: ["在此輸入第一個選項", "在此輸入第二個選項", "在此輸入第三個選項", "在此輸入第四個選項"],
            emojis: ["❓", "❓", "❓", "❓"]
        };
        state.worksheet.mcqs.push(newMcq);
        renderWorksheet();
        elements.wsMcqSec.scrollIntoView({ behavior: 'smooth' });
    } else if (type === "2") {
        const newSc = {
            scenario: "請在此輸入一個生活模擬情境說明...",
            question: "請在此輸入你引導思考的手繪或回答提問？"
        };
        state.worksheet.scenarios.push(newSc);
        renderWorksheet();
        elements.wsScenarioSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleClearAll() {
    if (confirm("確定要清空整份學習單的內容嗎？這將會清除所有現有的題目！")) {
        state.worksheet = {
            title: "點擊修改：學習單主題名稱",
            subtitle: "點擊修改：引導副標題",
            intro: "點擊修改：在此處為學生提供暖身故事、閱讀文章或基礎概念教學導引...",
            mcqs: [],
            scenarios: [],
            pledge: {
                title: "點擊修改：我的生活承諾書標題",
                items: ["新增第一項行動承諾條目...", "新增第二項行動承諾條目..."]
            }
        };
        state.customImages = {};
        renderWorksheet();
    }
}

// --- 10. 離線智慧生成與特教微調 (Offline Smart Generation) ---
function handleOfflineGeneration() {
    const selectedVal = elements.presetTopicSelect.value;
    
    if (!selectedVal || selectedVal === 'custom') {
        alert("請在「2. 選擇課程主題」中選取一個具體的內建範本喔！");
        elements.presetTopicSelect.focus();
        return;
    }
    
    showLoading(true, "正在提取離線智慧圖卡範本...");
    
    setTimeout(() => {
        loadPresetTemplate(selectedVal);
        
        // 限制題數
        const limit = parseInt(elements.questionCountSelect.value);
        if (state.worksheet.mcqs.length > limit) {
            state.worksheet.mcqs = state.worksheet.mcqs.slice(0, limit);
        }
        
        // 特教圖標專屬詞彙簡化微調
        if (state.visualMode) {
            // 大標加星號，增加童趣
            state.worksheet.title = "✨ " + state.worksheet.title.replace("學習單", "") + "圖卡挑戰賽 ✨";
            state.worksheet.subtitle = "👀 看圖想一想，圈出正確的答案！";
            state.worksheet.intro = "【圖卡導讀】" + state.worksheet.intro;
            
            // 簡化題目字數
            state.worksheet.mcqs.forEach(mcq => {
                mcq.question = mcq.question.substring(0, 18) + "？";
            });
        } else {
            const grade = elements.gradeLevelSelect.value;
            if (grade === 'special') {
                state.worksheet.subtitle = "🌟 " + state.worksheet.subtitle + " (特教簡化版)";
                state.worksheet.intro = "【大字體提示】" + state.worksheet.intro;
            }
        }
        
        renderWorksheet();
        showLoading(false);
    }, 800);
}

// --- 11. Gemini AI 智能特教圖卡生成 (Gemini AI Connection with Pictogram Prompt) ---
async function handleAiGeneration() {
    const apiKey = state.apiKey;
    const customContent = elements.customContentTextarea.value.trim();
    const gradeText = elements.gradeLevelSelect.options[elements.gradeLevelSelect.selectedIndex].text;
    const count = elements.questionCountSelect.value;
    const selectedTopicText = elements.presetTopicSelect.options[elements.presetTopicSelect.selectedIndex]?.text || "自訂主題";
    
    if (!apiKey) {
        alert("💡 貼心提醒：使用「AI 智能生成」需要配置 Gemini API 金鑰 (API Key)。\n已自動為您展開「4. 串接 Gemini AI」區塊，請貼上金鑰後再試一次！\n\n(或者，您可以直接點擊「快速套用範本」來免金鑰離線生成喔！)");
        elements.keyToggle.classList.add('open');
        elements.keySettingsContainer.classList.remove('collapsed');
        elements.geminiApiKeyInput.focus();
        return;
    }
    
    showLoading(true, state.visualMode ? "AI 正配合「特教視覺圖卡模式」編寫大圖示與簡化字句中..." : "AI 正努力思考中，大約需要 5~10 秒鐘...");
    
    // 如果開啟特教模式，特化 Prompt 要求 AI 將字數縮減至極限、提供極高辨識度 Emoji 圖卡
    const specialEducationRules = `
【🚨 特殊教育 / 不識字學童輔助模式已啟用！】
- 學生特性：無法看懂長句子或複雜詞彙，需要高度依賴「視覺圖卡與 Emojis」來辨識選項意思。
- 字句極簡化：請將學習單標題、題目、選項字數縮減到極限！題目請控制在 10 個字以內（例如：不要問「當我們感冒打噴嚏時最好的遮擋方式是？」，請直接問「打噴嚏了，怎麼做？」）。選項文字控制在 2~6 個字以內（例如：「戴口罩」、「洗手」）。
- 強制圖卡配對：必須為每個選擇題選項配置一個極高關聯、極具辨識度且彩色的 Emoji 圖標！(例如：洗手 -> "🧼", 難過 -> "😭")，放置於 JSON 中的 "emojis" 陣列，且順序必須與 "options" 選項完全一致。
- 情境繪圖化：情境題必須是「生活大圖畫題」，問題指示語請一律寫「👉 請畫出你覺得對的行為」。
`;

    const userPrompt = `
你是一位極具創意、專業且貼心的國小與特殊教育 (Special Education) 老師。請根據以下設定，為我設計一份高品質的學生學習單，並以繁體中文 (Traditional Chinese, zh-TW) 回覆。

【學習單基本參數】
- 課程領域/主題：${selectedTopicText}
- 教學核心重點與參考內容：${customContent ? customContent : "請自行圍繞主題延伸最重要、最實用的生活常識與自理技能"}
- 適合學生年級/特性：${state.visualMode ? "不識字、低閱讀能力之特殊教育/智能障礙學童" : gradeText}
- 核心知識挑戰選擇題數量：${count} 題
${state.visualMode ? specialEducationRules : ""}

【格式與題型設計要求】
請依照以下四個部分設計，確保內容兼具童趣、實用性與啟發性，並嚴格遵循給定的 JSON 格式回覆：

1. **基本資訊**：產生適合該主題、有創意的「學習單大標題」與「副標題」。
2. **暖身引言 (intro)**：撰寫一段大約 150 字、溫馨且口語流暢的引導說明，做為學習單的暖身引讀。
3. **選擇題 (mcqs)**：提供 ${count} 題單選題。每題固定有 4 個選項。
   * 重要：選項中請勿包含 "A."、"B." 等字母標記，單純提供乾淨文字。
   * 重要：必須提供與選項順序一致的 "emojis" 陣列（長度必須為 4），為每個選項配置一個極具代表性的繪文字圖示！
4. **情境題 (scenarios)**：提供 2 題與主題高度相關的生活實務模擬。
5. **生活實踐承諾 (pledge)**：提供一個實踐承諾區，包含承諾標題，以及 3 項日常承諾條目。

【回覆限制】
請「只」回覆合法的 JSON 字串，不要包含額外的 markdown 標記（如 \`\`\`json）或解釋性文字，必須能直接被 JavaScript 的 JSON.parse 解析。
JSON 格式範例：
{
  "title": "主題大標題",
  "subtitle": "精緻副標題",
  "intro": "暖身引導故事說明...",
  "mcqs": [
    {
      "question": "生活化情境問題文字？",
      "options": ["選項一文字", "選項二文字", "選項三文字", "選項四文字"],
      "emojis": ["🧼", "😷", "❌", "🩺"]
    }
  ],
  "scenarios": [
    {
      "scenario": "生活模擬情境說明文字...",
      "question": "提問文字說明？"
    }
  ],
  "pledge": {
    "title": "承諾書標頭文字",
    "items": [
      "承諾行動一",
      "承諾行動二",
      "承諾行動三"
    ]
  }
}
`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: userPrompt }]
                }],
                generationConfig: {
                    responseMimeType: "application/json",
                    temperature: 0.6
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.error?.message || "網路連線失敗，請檢查 API Key 是否正確。");
        }

        const resData = await response.json();
        const candidateText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!candidateText) {
            throw new Error("AI 沒有回傳有效的內容。");
        }

        let cleanJsonStr = candidateText.trim();
        if (cleanJsonStr.startsWith("```json")) {
            cleanJsonStr = cleanJsonStr.replace(/^```json/, '').replace(/```$/, '');
        } else if (cleanJsonStr.startsWith("```")) {
            cleanJsonStr = cleanJsonStr.replace(/^```/, '').replace(/```$/, '');
        }
        
        const parsedWorksheet = JSON.parse(cleanJsonStr.trim());
        
        if (!parsedWorksheet.title || !parsedWorksheet.mcqs) {
            throw new Error("AI 產出的結構不符預期。");
        }

        // 套用資料並渲染
        state.worksheet = parsedWorksheet;
        state.customImages = {}; // 生成新內容時清空舊上傳圖片
        renderWorksheet();
        
        // 根據生出主題自動調配配色
        autoSelectThemeByTopic(selectedTopicText);
        
        alert("✨ 哇！AI 智能生成成功！\n" + (state.visualMode ? "已為您客製化特教視覺圖卡學習單，文字極簡且配備大圖示，您可以直接拖入您自己的圖片或 PECS 圖卡來進行換圖喔！" : "您的客製化學習單已生成完畢，快來預覽看看吧！"));

    } catch (error) {
        console.error("AI Generation Error:", error);
        alert(`❌ AI 生成失敗，原因：\n${error.message}\n\n[排查建议]：\n1. 請確認您的 Gemini API Key 是否輸入正確。\n2. 您可以先點擊「快速套用範本」來使用離線的高品質圖卡學習單！`);
    } finally {
        showLoading(false);
    }
}

function autoSelectThemeByTopic(topicText) {
    let targetTheme = 'pastel';
    const text = topicText.toLowerCase();
    
    if (text.includes('安全') || text.includes('衛生棉') || text.includes('避難') || text.includes('火災')) {
        targetTheme = 'classic';
    } else if (text.includes('環保') || text.includes('習慣') || text.includes('清潔') || text.includes('衛生')) {
        targetTheme = 'forest';
    } else if (text.includes('飲料') || text.includes('健康') || text.includes('情緒') || text.includes('朝氣')) {
        targetTheme = 'orange';
    }
    
    elements.themeButtons.forEach(btn => {
        if (btn.getAttribute('data-theme') === targetTheme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    state.activeTheme = targetTheme;
    updateWorksheetTheme();
}

function showLoading(show, text = "") {
    if (show) {
        if (text) {
            elements.loadingModal.querySelector('p').textContent = text;
        }
        elements.loadingModal.classList.add('active');
    } else {
        elements.loadingModal.classList.remove('active');
    }
}

// 啟動應用
document.addEventListener('DOMContentLoaded', init);


// ==========================================================================
// 🏫 財團法人天主教嘉義教區附設雲林縣私立華聖家園-瑞翔社區日間作業所 客製化互動邏輯
// ==========================================================================
document.addEventListener('click', function(e) {
    // 點擊打勾框或文字時，自動切換打勾狀態
    const chkItem = e.target.closest('.chk-item');
    if (chkItem) {
        const sq = chkItem.querySelector('.chk-square');
        if (sq) {
            sq.classList.toggle('checked');
        }
    }
});
