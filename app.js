/* ==========================================================================
   🧠 學習單自動產生器 - 核心邏輯系統 (特教圖卡與視覺輔助升級版)
   ========================================================================== */

const presetTemplates = {
    health: {
        title: "健康生活小達人",
        subtitle: "勤洗手、戴口罩，身體健康沒煩惱！",
        intro: "個人衛生和健康是我們每天生活最重要的事情。感冒時要戴口罩，咳嗽時用手肘遮住口鼻，吃東西前要把手洗乾淨。多喝白開水，少喝甜甜的含糖飲料，才能保護我們的牙齒，讓身體充滿活力喔！",
        mcqs: [
            {
                question: "想咳嗽或打噴嚏時，如果沒有衛生紙遮擋，該怎麼做？",
                options: ["彎曲手肘用衣袖遮住口鼻", "用雙手手掌捂住口鼻", "對著旁邊同學大聲咳", "不用遮擋直接咳出來"],
                emojis: ["💪", "🖐", "🗣", "💨"]
            },
            {
                question: "擤完鼻涕的髒衛生紙，應該要怎麼處理？",
                options: ["丟進垃圾桶並用肥皂洗手", "放口袋或抽屜下次再用", "隨手丟在地上或桌上", "拿給同學看或借給同學"],
                emojis: ["🗑️", "🦘", "🚯", "🤝"]
            },
            {
                question: "當我們覺得口渴時，喝什麼對身體最健康？",
                options: ["乾淨的白開水", "甜甜的汽水或可樂", "冰涼的珍珠奶茶", "色素運動飲料"],
                emojis: ["💧", "🥤", "🧋", "🧃"]
            },
            {
                question: "吃東西前或上完廁所後，最重要的事情是什麼？",
                options: ["用肥皂把手清洗乾淨", "用衣服把手擦乾淨", "照鏡子看自己漂不漂亮", "直接用手拿東西吃"],
                emojis: ["🧼", "🎽", "🪞", "😋"]
            },
            {
                question: "戴口罩時，哪一個做法是正確的？",
                options: ["口罩要蓋住口鼻與下巴，鼻樑金屬條壓緊", "只蓋住嘴巴，鼻子露在外面呼吸", "把口罩挂在耳朵上當裝飾", "一個口罩戴很久髒了也不用換"],
                emojis: ["😷", "👃", "👂", "🩹"]
            }
        ],
        scenarios: [
            {
                scenario: "隔壁同學一直咳嗽卻沒戴口罩，還對著桌子打噴嚏。",
                question: "👉 請畫出你該怎麼禮貌提醒他戴口罩？"
            },
            {
                scenario: "同學約你放學一起去買全糖的珍珠奶茶。",
                question: "👉 請畫出你會怎麼選更健康的飲料？"
            }
        ],
        pledge: {
            title: "我會做好個人衛生，愛護身體健康：",
            items: [
                "咳嗽或打噴嚏時用手肘遮擋，髒衛生紙立即丟垃圾桶並洗手。",
                "勤用肥皂洗手，多喝白開水，少喝含糖飲料。",
                "感冒或身體不舒服時，會主動且正確地配戴口罩。"
            ]
        }
    },
    gender: {
        title: "尊重與平等小天使",
        subtitle: "保護我的身體，尊重別人的界線！",
        intro: "每個人都是獨一無二的，無論男生還是女生，都有表達心情 and 保護身體的權利。我們的身體非常珍貴，泳衣遮住的私密部位絕對不能給別人看或觸摸。當我們覺得不舒服時，要勇敢說「不行」，並且立刻尋求大人的協助。",
        mcqs: [
            {
                question: "哪裡是我們不能隨便給別人看或觸摸的「私密部位」？",
                options: ["泳衣和內衣褲遮住的地方", "我們的手掌", "肩膀和背部", "膝蓋和小腿"],
                emojis: ["🩱", "🤝", "肩", "🦵"]
            },
            {
                question: "如果有人想觸摸你的私密部位，並說這是「兩個人之間的秘密」，該怎麼辦？",
                options: ["大聲拒絕並立刻跑去告訴信任的大人", "聽對方的話，乖乖配合", "覺得害怕但忍耐不說", "接受他的禮物或糖果"],
                emojis: ["🛡️", "🙇", "😰", "🍭"]
            },
            {
                question: "關於男生 and 女生的情緒表達，哪一個觀念是正確的？",
                options: ["不論男生女生，難過想哭時都可以哭", "男生不能哭，哭就是膽小鬼", "女生比較容易生氣", "難過時只能躲在角落不理人"],
                emojis: ["❤️", "😢", "😡", "🤫"]
            },
            {
                question: "當同學在哭泣或難過時，我們可以怎麼做？",
                options: ["拿衛生紙給他，問他需要幫忙嗎", "在旁邊指指點點笑他", "大聲取笑他愛哭", "當作沒看到，走過去不理他"],
                emojis: ["🤝", "😂", "📢", "🤫"]
            },
            {
                question: "關於我們身體的自主權，哪一個說法是對的？",
                options: ["我的身體是我的，覺得不舒服有權利拒絕擁抱", "好朋友或親戚抱我，我絕對不能拒絕", "熟人摸我私密處不用大驚小怪", "被碰一下就要立刻打回去出氣"],
                emojis: ["🛡️", "🫂", "🖐️", "💥"]
            }
        ],
        scenarios: [
            {
                scenario: "親戚長輩一直要抱你，但你覺得熱、不喜歡被抱。",
                question: "👉 請畫出你該怎麼勇敢且有禮貌地拒絕？"
            },
            {
                scenario: "有陌生人一直盯著你看，還走過來想要牽你的手。",
                question: "👉 請畫出你該怎麼保護自己？"
            }
        ],
        pledge: {
            title: "我會好好尊重自己和別人的身體界線：",
            items: [
                "不讓別人摸私密處，也尊重別人。",
                "覺得奇怪時勇敢大聲說：不行！",
                "立刻告訴爸爸媽媽或學校老師。"
            ]
        }
    },
    lifelong: {
        title: "快樂學習小達人",
        subtitle: "培養生活好習慣，主動探索新知識！",
        intro: "學習不是只有在學校上課，而是一輩子的事情。養成整理書桌、隨手垃圾分類、物歸原位的好習慣，習慣環境整潔，不僅可以讓我們的學習環境更舒服，也能讓我們做事情更有效率。讓我們每天都保持好奇心，主動學習新事物，做個快樂的學習小達人！",
        mcqs: [
            {
                question: "打打掃時間到了，整潔小達人應該抱持什麼態度？",
                options: ["認真負責，與同學分工合作完成打掃", "把垃圾全部掃到隔壁同學的位置藏起來", "拿著掃把和同學打鬧戲耍", "假裝肚子痛躲在廁所不肯打掃"],
                emojis: ["🧹", "🚯", "⚔️", "🚽"]
            },
            {
                question: "整理自己的個人書桌或課桌椅時，下面哪一種收納方式最好？",
                options: ["課本、文具分類放好，抽屜不堆積垃圾", "把所有髒考卷、吃剩的包裝紙全部塞進課桌深處", "書包和文具隨地亂丟，要用時再大喊請媽媽找", "把隔壁同學的文具拿來當作自己的擺放"],
                emojis: ["📚", "🗄️", "🗣️", "🤝"]
            },
            {
                question: "喝完的飲料鋁箔包或牛奶盒，回收前要怎麼處理？",
                options: ["沖洗壓扁，丟入紙容器回收桶", "直接連同吸管丟進一般垃圾桶", "隨手塞在桌子底下放一個星期", "直接丟在操場的草地上"],
                emojis: ["♻️", "🗑️", "🗄️", "🌿"]
            },
            {
                question: "讀書寫功課時如果遇到不會的題目，下列哪一種做法是主動學習的表現？",
                options: ["主動查字典、看課本或請教老師和同學", "覺得太難了，直接把書本丟掉不寫", "隨便亂猜答案，或者直接抄同學的功課", "大哭大鬧，發脾氣不吃飯"],
                emojis: ["📖", "🗑️", "📝", "😭"]
            },
            {
                question: "關於養成終生學習的生活素養，下列哪一個是好習慣？",
                options: ["東西用完物歸原位，每天整理個人物品", "只在老師或父母生氣罵人的時候才收拾", "把房間堆得像垃圾山一樣，不准任何人整理", "髒衣服隨便丟地上，等別人幫忙拿去洗"],
                emojis: ["✨", "😡", "🌋", "🧺"]
            }
        ],
        scenarios: [
            {
                scenario: "打掃時間到了，分在一組的同學卻在一旁玩球、不打掃。",
                question: "👉 請畫出你該怎麼邀他一起加入打掃？"
            },
            {
                scenario: "放學回家後，你發現書桌上堆滿了雜物、玩具和吃剩的垃圾。",
                question: "👉 請畫出你整理書桌的具體步驟？"
            }
        ],
        pledge: {
            title: "我承諾在日常生活中養成學習與整潔的好習慣：",
            items: [
                "物品用完一定物歸原位，每日整理個人書桌與抽屜。",
                "認真完成班級與家中的打掃工作，落實資源回收分類。",
                "保持好奇心，遇到問題主動看書、發問和尋找答案。"
            ]
        }
    },
    safety: {
        title: "安全防護小超人",
        subtitle: "用電防火注意多，避難逃生要冷靜！",
        intro: "危險往往發生在不小心的時候。無論是在家裡還是學校，我們都要注意用電安全，手濕濕的絕對不能碰插頭。吃東西前要確認有沒有過期。萬一發生火災，聽到警報器要保持冷靜，採低姿勢沿著安全通道逃生，絕不搭電梯，也不要躲在沒有窗戶的浴室裡！",
        mcqs: [
            {
                question: "火災發生時，如果現場煙霧迷漫，我們應該採取什麼姿勢逃生？",
                options: ["壓低身體，採取「低姿勢」貼近地面爬行逃生", "站得直直的，快速用百米衝刺跑步", "躺在地上滾動前進", "爬到天花板或桌子上躲避"],
                emojis: ["🏃", "🧍", "🌀", "🧗"]
            },
            {
                question: "拔電器插頭或使用電器時，下列哪一種行為是安全的？",
                options: ["握住插頭塑膠座部分拔起", "用力拉扯電線來拔出插頭", "手濕濕的時候直接去碰插頭", "用鐵絲或金屬筷子挖插座孔"],
                emojis: ["🔌", "💥", "💦", "🥢"]
            },
            {
                question: "當你打開門準備逃生時，發現門把非常燙手，或者門外走廊已經充滿濃煙與大火，這時該怎麼辦？",
                options: ["立刻關上門，用衣物塞住門縫防煙，並移動到有窗戶的房間等待救援", "不管三七二十一，深呼吸一口氣直接衝進濃煙大火中", "從窗戶大叫並立刻跳下去", "躲進衣櫃或床底下大哭"],
                emojis: ["🚪", "🏃", "🪟", "🛌"]
            },
            {
                question: "撥打消防火警電話「119」報案時，我們最應該向消防人員報出什麼關鍵資訊？",
                options: ["詳細的火災地址、現場有沒有人受困、以及起火的狀況", "我今年幾歲、在學校考第幾名", "我家有幾隻寵物狗和貓咪", "大聲哭鬧不說話就掛掉電話"],
                emojis: ["☎️", "🎂", "🐶", "😭"]
            },
            {
                question: "過期一天的麵包，但沒發霉，可以吃嗎？",
                options: ["不能吃，有看不見的細菌與毒素", "可以吃，烤箱烤過就沒事", "可以吃，才過期一天", "聞起來沒有臭味就可以吃"],
                emojis: ["🤮", "🍞", "⏰", "👃"]
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
    }
};

const presetTemplatesVisual = {
    health: {
        title: "健康生活小達人",
        subtitle: "看圖想一想，圈出正確的答案！",
        intro: "感冒戴口罩，咳嗽用手肘遮。勤洗手、多喝水，病毒不傳播！",
        mcqs: [
            {
                question: "咳嗽沒衛生紙遮，怎麼辦？",
                options: ["手肘衣袖遮住", "用雙手手掌捂住", "對著同學的臉咳", "直接對空氣咳出來"],
                emojis: ["💪", "🖐", "🗣", "💨"]
            },
            {
                question: "髒衛生紙要怎麼丟？",
                options: ["丟進垃圾桶並洗手", "放口袋下次再用", "丟在教室地板上", "拿給同學看"],
                emojis: ["🗑️", "🦘", "🚯", "🤝"]
            },
            {
                question: "口渴喝什麼最健康？",
                options: ["乾淨的白開水", "甜甜汽水可樂", "冰涼的珍珠奶茶", "運動飲料或果汁"],
                emojis: ["💧", "🥤", "🧋", "🧃"]
            },
            {
                question: "吃東西前最重要做什麼？",
                options: ["肥皂把雙手洗乾淨", "衣服把手擦乾", "照鏡子看自己", "直接用手拿著吃"],
                emojis: ["🧼", "🎽", "🪞", "😋"]
            },
            {
                question: "口罩怎麼戴才對？",
                options: ["蓋住口鼻與下巴", "露出鼻子呼吸", "掛在耳朵上", "戴一個星期不換"],
                emojis: ["😷", "👃", "👂", "🩹"]
            }
        ],
        scenarios: [
            {
                scenario: "旁邊的同學一直咳嗽，卻沒有戴口罩。",
                question: "👉 請畫出你該怎麼提醒他戴口罩？"
            },
            {
                scenario: "同學請你喝大杯全糖珍珠奶茶。",
                question: "👉 請畫出你該怎麼拒絕或換成無糖？"
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
    gender: {
        title: "尊重身體小精靈",
        subtitle: "保護自己，尊重別人！",
        intro: "泳衣遮住的部位是私密處，不能給別人摸。不舒服要說不行，找老師聊聊。",
        mcqs: [
            {
                question: "哪裡是不能給人看或摸的私密部位？",
                options: ["泳衣遮住的地方", "我們的手掌", "肩膀和背部", "膝蓋和小腿"],
                emojis: ["🩱", "🤝", "肩", "🦵"]
            },
            {
                question: "被觸摸私密處，該怎麼辦？",
                options: ["大聲說不行並告狀", "聽對方的話配合他", "害怕忍耐不說", "當作兩個人的秘密"],
                emojis: ["🛡️", "🙇", "😰", "🍭"]
            },
            {
                question: "難過想哭時，可以嗎？",
                options: ["難過哭出來沒關係", "男生絕對不能哭", "女生才可以哭", "假裝很高興沒事"],
                emojis: ["❤️", "😢", "👧", "🎭"]
            },
            {
                question: "同學哭泣，我們可以怎麼做？",
                options: ["拿紙巾安慰他、幫忙他", "在旁邊指指點點笑他", "取笑他膽小愛哭", "不理他直接走開"],
                emojis: ["🤝", "😂", "📢", "🤫"]
            },
            {
                question: "別人抱你覺得熱，可以拒絕嗎？",
                options: ["可以，勇敢說不行", "一定要讓他抱", "害怕地忍耐下去", "打他一下出氣"],
                emojis: ["🛡️", "🫂", "😰", "👊"]
            }
        ],
        scenarios: [
            {
                scenario: "親戚長輩一直要抱你，但你覺得很不舒服。",
                question: "👉 請畫出你該怎麼勇敢說不行？"
            },
            {
                scenario: "陌生人走過來想要牽你的手。",
                question: "👉 請畫出你該怎麼逃跑找人幫忙？"
            }
        ],
        pledge: {
            title: "我會好好尊重自己和別人的身體：",
            items: [
                "不隨便讓人觸摸我的身體，我也尊重別人。",
                "遇到不舒服的事勇敢大聲說不行。",
                "立刻告訴老師或爸爸媽媽幫忙。"
            ]
        }
    },
    lifelong: {
        title: "我的生活好習慣",
        subtitle: "養成整潔好習慣，天天快樂學習！",
        intro: "打掃認真做，物品收乾淨。每天整理書桌，學習更有精神喔！",
        mcqs: [
            {
                question: "打掃時間到了，要怎麼做？",
                options: ["認真分工掃乾淨", "垃圾掃到同學桌底", "拿掃把玩鬧打架", "躲在廁所不打掃"],
                emojis: ["🧹", "🚯", "⚔️", "🚽"]
            },
            {
                question: "書桌要怎麼整理最乾淨？",
                options: ["書本分類放好，沒垃圾", "考卷垃圾塞抽屜", "亂丢等媽媽收", "搶別人的來擺放"],
                emojis: ["📚", "🗄️", "🗣️", "🤝"]
            },
            {
                question: "牛奶盒喝完要怎麼收？",
                options: ["沖水壓扁丟回收", "直接丟進一般垃圾", "隨便塞在桌底下", "丟在草地上"],
                emojis: ["♻️", "🗑️", "🗄️", "🌿"]
            },
            {
                question: "遇到不會的字或題目，怎麼辦？",
                options: ["問老師或查字典", "撕掉課本不寫", "抄別人的答案", "生氣大哭大鬧"],
                emojis: ["📖", "🗑️", "📝", "😭"]
            },
            {
                question: "哪一個是生活好習慣？",
                options: ["用完收好，垃圾分類丟", "被罵了才隨便收拾", "房間堆成像垃圾山", "髒衣服亂丟地上"],
                emojis: ["✨", "😡", "🌋", "🧺"]
            }
        ],
        scenarios: [
            {
                scenario: "打掃時間，分配一組的組員在玩球不打掃。",
                question: "👉 請畫出你該怎麼找他一起打掃？"
            },
            {
                scenario: "你的書桌堆滿垃圾和吃剩的餅乾屑。",
                question: "👉 請畫出你該怎麼動手整理它？"
            }
        ],
        pledge: {
            title: "我會做好個人與環境衛生：",
            items: [
                "用完東西一定收好，擦乾淨書桌。",
                "認真做好打掃，垃圾分類丟。",
                "吃完東西隨手擦桌子保持乾淨。"
            ]
        }
    },
    safety: {
        title: "安全防護小超人",
        subtitle: "火災用電要注意，避難冷靜最安全！",
        intro: "手濕不摸插頭，不玩打火機。火災低姿勢逃生，不坐電梯，不躲浴室！",
        mcqs: [
            {
                question: "火災煙霧大，逃生姿勢是什麼？",
                options: ["身體壓低貼地爬行", "站直快步跑步", "在地上滾動前進", "爬到桌子上"],
                emojis: ["🏃", "🧍", "🌀", "🧗"]
            },
            {
                question: "拔插頭時，怎麼做才安全？",
                options: ["握住塑膠部分拔", "用力拉扯電線", "手濕濕去摸插頭", "用鐵絲挖插座孔"],
                emojis: ["🔌", "💥", "💦", "🥢"]
            },
            {
                question: "開門發現把手很燙、有濃煙，怎麼辦？",
                options: ["關門塞門縫等救援", "直接衝進濃煙中", "立刻從窗戶跳下", "躲在衣櫃裡哭"],
                emojis: ["🚪", "🏃", "🪟", "🛌"]
            },
            {
                question: "打 119 電話，要說出什麼？",
                options: ["詳細起火的住址", "我幾歲和考試成績", "我家的小狗和小貓", "大哭不說話掛斷"],
                emojis: ["☎️", "🎂", "🐶", "😭"]
            },
            {
                question: "過期一天的麵包，可以吃嗎？",
                options: ["不能吃，有細菌", "可以吃，烤過就可以", "可以吃，才過期一天", "聞起來不臭就可以吃"],
                emojis: ["🤮", "🍞", "⏰", "👃"]
            }
        ],
        scenarios: [
            {
                scenario: "弟弟手濕濕準備去插電視插頭。",
                question: "👉 請畫出你該怎麼阻止他？"
            },
            {
                scenario: "在學校上課，火災警報器突然響起。",
                question: "👉 請畫出你跟著排隊避難的樣子？"
            }
        ],
        pledge: {
            title: "我會記住火災與用電安全知識：",
            items: [
                "手濕絕對不碰插座，不玩火。",
                "火災時走樓梯，絕不搭電梯。",
                "不吃過期或發霉的食物。"
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
    loadingModal: document.getElementById('loading-modal'),
    
    fileDropZone: document.getElementById('file-drop-zone'),
    fileUploadInput: document.getElementById('file-upload-input'),
    fileInfoBadge: document.getElementById('file-info-badge'),
    uploadedFileName: document.getElementById('uploaded-file-name'),
    btnRemoveFile: document.getElementById('btn-remove-file')
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
    loadPresetTemplate('health');
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
    
    // 下拉範本選取（大標 + 課程名稱輸入）
    elements.presetTopicSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const courseNameGroup = document.getElementById('course-name-group');
        const courseNameInput = document.getElementById('course-name-input');

        if (val && val !== 'custom') {
            state.selectedPreset = val;
            // 顯示課程名稱輸入框
            courseNameGroup.style.display = 'block';
            courseNameInput.focus();

            // 載入範本
            loadPresetTemplate(val);

            // 若已輸入過課程名稱，立即套用
            if (courseNameInput.value.trim()) {
                elements.wsTitle.textContent = courseNameInput.value.trim();
            }
        } else {
            courseNameGroup.style.display = 'none';
        }
    });

    // 課程名稱輸入框 → 即時更新學習單標題
    const courseNameInput = document.getElementById('course-name-input');
    if (courseNameInput) {
        courseNameInput.addEventListener('input', (e) => {
            const name = e.target.value.trim();
            if (name) {
                elements.wsTitle.textContent = name;
            } else {
                // 若清空，恢復範本預設標題
                const val = elements.presetTopicSelect.value;
                if (val && presetTemplates[val]) {
                    elements.wsTitle.textContent = presetTemplates[val].title;
                }
            }
        });
    }

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
    
    // 檔案拖曳與上傳
    if (elements.fileDropZone) {
        elements.fileDropZone.addEventListener('click', () => {
            elements.fileUploadInput.click();
        });
        
        elements.fileDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            elements.fileDropZone.classList.add('drag-over');
        });
        
        elements.fileDropZone.addEventListener('dragleave', () => {
            elements.fileDropZone.classList.remove('drag-over');
        });
        
        elements.fileDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            elements.fileDropZone.classList.remove('drag-over');
            if (e.dataTransfer.files.length > 0) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });
    }
    
    if (elements.fileUploadInput) {
        elements.fileUploadInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(e.target.files[0]);
            }
        });
    }
    
    if (elements.btnRemoveFile) {
        elements.btnRemoveFile.addEventListener('click', (e) => {
            e.stopPropagation();
            clearUploadedFile();
        });
    }
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

// --- 12. 檔案解析處理與輔助函數 ---
function handleFileSelect(file) {
    const isPdf = file.type === 'application/pdf' || file.name.endsWith('.pdf');
    const isDocx = file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx');
    
    if (!isPdf && !isDocx) {
        alert('請上傳 PDF 或 Word (.docx) 格式的檔案！');
        return;
    }
    
    // 顯示檔案資訊
    elements.uploadedFileName.textContent = file.name;
    elements.fileInfoBadge.style.display = 'flex';
    
    // 顯示載入畫面
    showLoading(true, '請稍候，系統正在本地解析您的課程教材文字...');
    
    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const arrayBuffer = e.target.result;
            let extractedText = '';
            
            if (isPdf) {
                extractedText = await parsePdfText(arrayBuffer);
            } else if (isDocx) {
                extractedText = await parseDocxText(arrayBuffer);
            }
            
            if (!extractedText || extractedText.trim().length === 0) {
                throw new Error('未從檔案中解析出任何文字內容。');
            }
            
            // 自動切換到自訂主題並填入文字
            elements.presetTopicSelect.value = 'custom';
            elements.customContentTextarea.value = extractedText;
            
            // 觸發自訂主題的事件，以利系統反應
            const event = new Event('change');
            elements.presetTopicSelect.dispatchEvent(event);
            
            showLoading(false);
        } catch (error) {
            console.error('檔案解析失敗:', error);
            alert('解析檔案失敗，請確認檔案是否受保護、加密或內容為純掃描圖片：' + error.message);
            clearUploadedFile();
            showLoading(false);
        }
    };
    
    reader.onerror = function() {
        alert('讀取檔案時出錯！');
        clearUploadedFile();
        showLoading(false);
    };
    
    reader.readAsArrayBuffer(file);
}

function clearUploadedFile() {
    if (elements.fileUploadInput) elements.fileUploadInput.value = '';
    if (elements.uploadedFileName) elements.uploadedFileName.textContent = '';
    if (elements.fileInfoBadge) elements.fileInfoBadge.style.display = 'none';
}

async function parsePdfText(arrayBuffer) {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    if (!pdfjsLib) {
        throw new Error('PDF 解析庫未成功載入，請確認網路連線。');
    }
    
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
    
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    let fullText = '';
    const maxPages = Math.min(pdf.numPages, 15);
    
    for (let i = 1; i <= maxPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
    }
    
    return fullText;
}

async function parseDocxText(arrayBuffer) {
    if (!window.mammoth) {
        throw new Error('Word 解析庫 (Mammoth) 未成功載入，請確認網路連線。');
    }
    
    return new Promise((resolve, reject) => {
        window.mammoth.extractRawText({ arrayBuffer: arrayBuffer })
            .then(function(result) {
                resolve(result.value);
            })
            .catch(function(err) {
                reject(err);
            });
    });
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
