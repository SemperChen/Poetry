/**
 * @author Semper
 */
/*export function fetchNetData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchNetData:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}*/
export function fetchNetData() {
    return {
        en: [
            {
                title: 'things work out',
                author: 'edgar a. guest',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img001.jpg',
                intro: 'because it rains when we wish it wouldn\'t,\n' +
                ' because men do what they often should\'t...',
                content: 'because it rains when we wish it wouldn\'t, \n' +
                'because men do what they often should\'t, \n' +
                'because crops fail,and plans go wrong- \n' +
                'some of us grumble all day long. \n' +
                '\n' +
                'but sometimes,in spite of the care and doubt, \n' +
                'it seems at last that things work out. \n' +
                'because we lose where we hoped to gain, \n' +
                'because we suffer a little pain, \n' +
                'because we must work when we\'d like to play- \n' +
                'some of us whimper along life\'s way. \n'+
                'but somehow , as the day always follow the night \n' +
                'most of our troubles work out all right. \n' +
                'because we cannot forever smile, \n' +
                'because we must trudge in the dust awhile, \n' +
                'some of us whimper that life\'s all wrong. \n' +
                'but somehow,we live and our sky grows bright, \n' +
                'and ererything seems to work out all right. \n' +
                '\n' +
                'so bend to your trouble and meet your care, \n' +
                'for the clouds must break,and the sky grows fair. \n' +
                'let the rain come down,as it must and will, \n' +
                'but keep on working and hoping still. \n' +
                '\n' +
                'for in spite of the grumblers who stand about, \n' +
                'somehow,it seems,all things work out. \n'
            },
            {
                title: 'aspirations of youth',
                author: 'james montgomery',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img002.jpg',
                intro: 'higher,higher,\n' +
                'will we climb,\n' +
                'up the mount of glory, \n' +
                'that our names may live through time...',
                content:'higher,higher,will we climb, \n' +
                'up the mount of glory, \n' +
                '\n' +
                'that our names may live through time \n' +
                '\n' +
                'in our country\'s story; \n' +
                '\n' +
                'happy,when her welfare calls, \n' +
                '\n' +
                'he who conquers,he who falls! \n' +
                '\n' +
                'deeper,deeper,let us toil \n' +
                '\n' +
                'in the mines of knowledge; \n' +
                '\n' +
                'nature\'s wealth and learning\'s spoil \n' +
                '\n' +
                'win from school and college; \n' +
                '\n' +
                'delve we there for richer gems \n' +
                '\n' +
                'than the stars of diadems. \n' +
                '\n' +
                'onward,onward,will we press \n' +
                '\n' +
                'through the path of duty; \n' +
                '\n' +
                'virtue is true happiness, \n' +
                '\n' +
                'excellence true beauty. \n' +
                '\n' +
                'minds are of supernal birth: \n' +
                '\n' +
                'let us make a heaven of earth. \n'
            },
            {
                title: 'thou blessed dream',
                author: 'swami vivekananda',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img003.jpg',
                intro: 'if things go ill or well-\n' +
                'if joy rebounding spreads the face,\n' +
                'or sea of sorrows swells-\n' +
                'it is a dream, a play...',
                content:'f things go ill or well-\n' +
                'if joy rebounding spreads the face,\n' +
                'or sea of sorrows swells-\n' +
                'it is a dream, a play.\n' +
                '\n' +
                'a play- we each have a part\n' +
                'each one to weep or laugh as may;\n' +
                'each one his dress to don-\n' +
                'alternate shine or rain.\n' +
                '\n' +
                'thou dream, o blessed dream!\n' +
                'spread far and near thy veil of haze,\n' +
                'tone down the lines so sharp,\n' +
                'make smooth what roughness seems.\n' +
                '\n' +
                'no magic but in thee!\n' +
                'thy touch makes desert bloom to life,\n' +
                'harsh thunder, sweetest song,\n' +
                'fell death, the sweet release.\n'
            },
            {
                title: 'To be a giant',
                author: 'nameless',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img004.jpg',
                intro: 'To be a giant.\n' +
                'This has forever been our passion, this desire to be a giant.\n' +
                'Not to stand on one\'s shoulders or have one for a friend...',
                content:
                'To be a giant.\n' +
                '\n' +
                'This has forever been our passion, this desire to be a giant.\n' +
                '\n' +
                'Not to stand on one\'s shoulders or have one for a friend.\n' +
                '\n' +
                'For these may be fortunate things.\n' +
                '\n' +
                'But to be one.\n' +
                '\n' +
                'Giants step over barriers that seem never ending.\n' +
                '\n' +
                'They conquer mountains that appear insurmountable.\n' +
                '\n' +
                'Giant rise above fear.\n' +
                '\n' +
                'Triumph over pain.\n' +
                '\n' +
                'Push themselves and inspire others.\n' +
                '\n' +
                'To be a Giant.\n' +
                '\n' +
                'To do Giant things.\n' +
                '\n' +
                'To take Giant steps.\n' +
                '\n' +
                'To move the world forward.\n'
            },
            {
                title: 'Never give up',
                author: 'nameless',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img005.jpg',
                intro: 'Never give up,\n' +
                'Never lose hope.\n' +
                'Always have faith,\n' +
                'It allows you to cope.\n' +
                'Trying times will pass,\n' +
                'As they always do...',
                content:'Never give up,\n' +
                'Never lose hope.\n' +
                'Always have faith, \n' +
                'It allows you to cope. \n' +
                'Trying times will pass,\n' +
                ' As they always do. \n' +
                'Just have patience, \n' +
                'Your dreams will come true.\n' +
                ' So put on a smile, \n' +
                'You\'ll live through your pain. \n' +
                'Know it will pass, \n' +
                'And strength you will gain.'
            },
        ],
        zh: [
            {
                title: '守得云开见月明',
                author: 'edgar a. guest',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img001.jpg',
                intro: '只因阴晴未必如我们所愿，\n' +
                '只因人们未必都积德行善，\n' +
                '只因作物欠收，计划流产——\n' +
                '我们中的一些人就终日抱怨...',
                content:'只因阴晴未必如我们所愿，\n' +
                '只因人们未必都积德行善，\n' +
                '只因作物欠收，计划流产——\n' +
                '我们中的一些人就终日抱怨。\n' +
                '\n' +
                '但即使经历忧虑与质疑，\n' +
                '事情似乎终会好转。\n' +
                '只因我们求胜之心落空，\n' +
                '只因我们受到少许痛楚，\n' +
                '只因我们必须工作而未能玩乐——\n' +
                '我们中的一些人就一生嗟叹。' +
                '黑夜之后必是黎明，\n' +
                '我们的困难大多能圆满解决。\n' +
                '只因我们无法永远微笑，\n' +
                '只因我们要在泥尘中跋涉，\n' +
                '我们中的一些人就哀诉生活多磨难。\n' +
                '但我们挺过来了，守得云开见月明，\n' +
                '一切事都终得顺利解决。\n' +
                '\n' +
                '所以，迎难而上，直面忧虑，\n' +
                '因为乌云终将散去，天空必定晴朗。\n' +
                '让雨洒下，它必须如此，不可逆转。\n' +
                '但请继续努力并始终希冀。\n' +
                '\n' +
                '尽管到处都有发牢骚的人，\n' +
                '但无论如何，一切事情总会好转。'
            },
            {
                title: '青春的渴望',
                author: '詹姆斯·蒙哥马利',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img002.jpg',
                intro: '更高，更高，愿我们，\n' +
                '攀登上光荣的阶梯，\n' +
                '我们的名字就能永存\n' +
                '在我们祖国的史册；\n' +
                '幸福啊，当她一声召唤，\n' +
                '他就去拼搏，就去攻坚...',
                content:'攀登上光荣的阶梯，\n' +
                '\n' +
                '我们的名字就能永存\n' +
                '\n' +
                '在我们祖国的史册；\n' +
                '\n' +
                '幸福啊，当她一声召唤，\n' +
                '\n' +
                '他就去拼搏，就去攻坚！\n' +
                '\n' +
                '更深，更深，让我们\n' +
                '\n' +
                '在知识矿藏中开发；\n' +
                '\n' +
                '自然财富和学术精品\n' +
                '\n' +
                '从学校研究院吸纳；\n' +
                '\n' +
                '愿我们在此发掘的珍宝，\n' +
                '\n' +
                '比王冠的星星更加光耀。\n' +
                '\n' +
                '向前，向前，愿我们\n' +
                '\n' +
                '推进这职责的常规；\n' +
                '\n' +
                '做好事是真正的福分，\n' +
                '\n' +
                '美德却是真正的美。\n' +
                '\n' +
                '头脑会超尘脱俗地成长：\n' +
                '\n' +
                '让我们创造人间的天堂。'
            },
            {title: '你受祝福的梦',
                author: '斯瓦密.维渥堪纳达',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img003.jpg',
                intro: '无论事情变糟还是变好，\n' +
                '不管欢乐重现脸颊或者，\n' +
                '悲伤的海洋漫溢，\n' +
                '那只是一场游戏，一场梦幻...',
                content:
                '无论事情变糟还是变好，\n' +
                '不管欢乐重现脸颊或者，\n' +
                '悲伤的海洋漫溢，\n' +
                '那只是一场游戏，一场梦幻。\n' +
                '\n' +
                '我们都是戏中的角色，\n' +
                '人人都尽情地欢笑啼哭，\n' +
                '每个人都轮换穿着，\n' +
                '晴日或雨天的衣裳．\n' +
                '\n' +
                '你的梦，受祝福的梦，\n' +
                '到处掩盖着薄雾似的面纱，\n' +
                '将尖锐的线条变得柔和，\n' +
                '让粗糙的外表变得平滑\n' +
                '\n' +
                '只有你拥有魔力，\n' +
                '你的抚摩使荒漠绽开生命的花朵，\n' +
                '使轰隆的雷声变成悦耳的歌，\n' +
                '使可怕的死亡变成甜蜜的解脱．'
            },
            {title: '成为一个巨人',
                author: '佚名',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img004.jpg',
                intro: '成为一个巨人，\n' +
                '这永远是我们最强烈的欲望，成为一个巨人。\n' +
                '不是站在一个巨人的肩上，或是成为他的朋友...',
                content:
                '成为一个巨人，\n' +
                '\n' +
                '这永远是我们最强烈的欲望，成为一个巨人。\n' +
                '\n' +
                '不是站在一个巨人的肩上，或是成为他的朋友。\n' +
                '\n' +
                '那或许是靠运气。\n' +
                '\n' +
                '而要成为一个巨人是不一样的，\n' +
                '\n' +
                '好像巨人们永远都得跨越障碍。\n' +
                '\n' +
                '他们征服看似不可超越的高山。\n' +
                '\n' +
                '巨人们超越恐惧。\n' +
                '\n' +
                '击败痛苦。\n' +
                '\n' +
                '鞭策自己，鼓励他人。\n' +
                '\n' +
                '成为一个巨人，\n' +
                '\n' +
                '做巨人做的事。\n' +
                '\n' +
                '走巨人走的路。\n' +
                '\n' +
                '推动整个世界向前进。'
            },
            {title: '永不放弃',
                author: '佚名',
                img:'https://raw.githubusercontent.com/SemperChen/Notification/master/img005.jpg',
                intro: '永不放弃\n' +
                '永不心灰意冷。\n' +
                '永存信念，\n' +
                '它会使你应付自如。\n' +
                '难捱的时光终将过去，\n' +
                '一如既往...',
                content:'永不放弃,\n' +
                '永不心灰意冷。\n' +
                '永存信念， \n' +
                '它会使你应付自如。 \n' +
                '难捱的时光终将过去，\n' +
                '一如既往。\n' +
                '只要有耐心，\n' +
                '梦想就会成真。\n' +
                '露出微笑， \n' +
                '你会走出痛苦。\n' +
                '相信苦难定会过去， \n' +
                '你将重获力量。'
            },

        ]
    }
}
export function fetchMyPoems(){
    return(
        globalMyPoems
    )
}