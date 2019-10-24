import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';

const listData = [{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《赵氏孤儿》`,
    imgPath: 'https://img0.tking.cn/assets/img/rx65BRrwSe_.jpg',
    desc:
        '以汗水代替血，用身体说故事「下宫之难」－春秋时期晋贵族赵氏被奸臣屠岸贾陷害而惨遭灭门，倖活的赵氏孤儿赵武长大后为家族复仇。这个家喻户晓的传说，更是第一部被翻译成欧洲语言的中国戏剧。悲壮动人的京剧《赵氏孤儿》-公孙杵臼捨生取义，程婴献出亲儿冒充，让赵氏孤儿手刃仇人。《史记·赵世家》记载的却非交出程婴儿子，而是别家的婴孩。《左传》上并无屠岸贾，血案只因叔父侄媳私通引发。不同版本众说纷揉，真相到底是什么？',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《茶馆》`,
    imgPath: 'https://img1.tking.cn/assets/img/7nQ6eWKrwD_.jpg',
    desc:
        '民国初年，军阀混战，老百姓过得苦。北京城里的大茶馆都关了张，唯有王利发的裕泰茶馆还勉强开着——他想着改良或许能让茶馆兴旺起来。旧人新人都来了，他苦苦支撑。依旧还是那个茶馆。日本投降，国名党和美国兵又来了。亲人走了，茶馆被占了，最后只留下了王利发。三老头相见诀别，自己祭奠了自己。',

},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《白鹿原》`,
    imgPath: 'https://img0.tking.cn/assets/img/FfZh68rE3C_.jpg',
    desc:
        '一部由现代文学抗鼎之作改编而成的中国话剧新巅峰之作，一部陈忠实分文不取倾心支持的最满意版本，一部业内、媒体、观众三方零差评的口碑奇迹之作，一部包揽联合国教科文组织、国际剧协"第六届国际戏剧学院奖"多项大奖的2016中国话剧之冠',

},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《泰坦尼克号》`,
    imgPath: 'https://img0.tking.cn/assets/img/dxzwe34w8S_.jpg',
    desc:
        '经典海难，再现舞台！燃情悲歌，撼人心魄！',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《生命无限好》`,
    imgPath: 'https://img1.tking.cn/assets/img/F8GZHm4hk7_.jpg',
    desc:
        '《生命无限好》以生命的最初和最后的阶段带领我们经历神圣旅程的伟大奇迹。降临世界的第一天，勇敢迈出的第一步以及狠狠摔倒的第一次。本剧有四个主要面具人物，加上光影的变幻与恰如其分的音乐，以及不断转换的场景，呈现出人类最终的宿命。这是一场出生和成长的短暂游戏，而生命本身--让我们成功，让我们失败的创造力，就是主角。这部剧像是一部生命体验的马赛克，简单又完美的呈现人的诞生、性别、死亡等不同的人生议题和其他奇妙的生命片刻。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《吟游诗人》`,
    imgPath: 'https://img1.tking.cn/assets/img/SPY7CaYP4H_.jpg',
    desc:
        '15世纪初，欧洲各国风云变幻，西班牙内战期间，封建领主残酷迫害吉普赛人，老卢纳伯爵将一个吉普赛老妇人当成女巫烧死。吉普赛妇人的女儿阿苏茜娜将伯爵尚在襁褓中的小儿子盗走，准备将其烧死为母报仇，但在慌乱之中却错把自己的亲儿子投入火中。多年后，老伯爵长子继承爵位成为卢纳伯爵，他热恋着贵族女官莱奥诺拉，但莱奥诺拉却深深爱着游吟诗人曼里科，殊不知曼里科正是当年阿苏茜娜偷走并养大的伯爵幼子。卢纳伯爵与曼里科为情决斗，曼里科获胜却负伤，被阿苏茜娜救回。正当曼里科和莱奥诺拉准备举行婚礼时，卢纳伯爵抓走了阿苏茜娜，并声称要烧死她。曼里科为救母被捕，莱奥诺拉以献身给伯爵为代价，获准释放曼里科。为保清白，她服下毒药死在曼里科怀中。卢纳伯爵盛怒，下令处死曼里科，目睹行刑结束的阿苏茜娜告诉卢纳伯爵，被处死的曼里科正是他的亲弟弟，她终于为母亲报了仇。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《暗恋桃花源》`,
    imgPath: 'https://img1.tking.cn/assets/img/5HFeZxRbb5_.jpg',
    desc:
        '《暗恋》是一出现代悲剧。青年男女江滨柳和云之凡在上海因战乱相遇，也因战乱离散；其后两人不约而同逃到台湾，却彼此不知情，苦恋40年后才得以相见，时已男婚女嫁多年，江滨柳已濒临病终。《桃花源》则是一出古装喜剧。武陵人渔夫老陶之妻春花与房东袁老板私通，老陶离家出走桃花源；等他回武陵后，春花已与袁老板成家生子。此时剧场突然停电，一个寻找男友的疯女人呼喊着男友的名字在剧场中跑过……',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《永不消逝的电波》`,
    imgPath: 'https://img1.tking.cn/assets/img/ka2f6rcrrt_.jpg',
    desc:
        '革命先烈李白是“100位为新中国成立做出突出贡献的英雄模范”人物之一，历史上真实的李白充满传奇色彩，15岁入党，参加过长征，在上海整整12年负责上海党的地下组织与党中央秘密电台联络工作，工作环境十分险恶。1949年离上海解放仅有20天，听着解放军的隆隆炮声，李白被秘密杀害，年仅39岁。舞剧《永不消逝的电波》以李白的真实故事为素材，在尊重历史的基础上，融入青春色彩、红色记忆、浪漫情怀、谍战氛围等艺术元素，通过舞剧的独特表现形式，对红色经典进行全新演绎，把石库门、里弄、报馆、旗袍裁缝店等老上海的城市特色细致入微地呈现于舞台，辅以高度凝练的舞剧叙事、唯美的意象表达和谍战的紧张悬念，切合当下审美，彰显真实人性，再现为我党民族解放事业而壮烈牺牲的、可歌可泣的英雄形象。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《你若安好，那还得了》`,
    imgPath: 'https://img0.moretickets.com/zbf/assets/img/AZNBAhrrXx_.jpeg',
    desc:
        '他恨她，她讨厌她，她嫌弃他，他鄙视他，他杀了他……谁说这是言情剧来着？对于凶手而言，死者安好，那还得了，对于警官和侦探而言，凶手安好，那还得了。一位大名鼎鼎的侦探，如果郑重其事地自己把自己推理成凶手，众人深信不疑，自己又无法反驳；如果把心爱的女人推理到出轨；把警官推理的不会用手铐；把城市推理出雾霾；把小狗推理得不再随便尿尿；把南方人推理得天天吃面条；把北方人推理得去吃甜豆腐脑；把观众推理到哄堂大笑……到底是他有意为之，还是无意导致，还是有人认为，侦探安好，那还得了。'
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《平凡的世界》`,
    imgPath: 'https://img0.tking.cn/assets/img/ccrxb3BmiR_.jpg',
    desc:
        '故事发生在上个世纪70年代到80年代中期的中国陕北黄土高原上，贫困子弟孙少安因为门当户对的旧有观念，放弃了心中所爱的润叶，娶了贺秀莲。二人卯足了劲想齐心协力奋斗改变贫穷面貌，弟弟孙少安则走出农村去城里打工，然而命运似乎想消遣下这对难兄难弟，绝症、车祸、洪水的打击接踵而至，他们在沼泽里一步一步艰难前行，时代的桎梏，他们的终点不知道在哪里，造化弄人，他们会接受命运的摆布吗？坚守还是放弃那份信仰与追求，这是值得思考的问题.......',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《浮士德》`,
    imgPath: 'https://img1.tking.cn/assets/img/XTQbW5m4sp_.png',
    desc:
        '大学士浮士德学富五车，久负盛名，却总觉得学而无用，还未曾体验到世界的多姿多彩就已经垂垂老矣，决定以自杀的方式结束无聊的人生。此时魔鬼墨菲斯特出现了，他与浮士德做了一个交易：以浮士德的灵魂为抵押，换取现世的荣华与享乐，一旦浮士德觉得满足，墨菲斯特就可以拿走他的灵魂……于是，浮士德重获新生。在墨菲斯特引诱下浮士德贪恋虚幻的浮华：他狂热的追求爱情，却给所爱的人苦难与毁灭，他追求政治前途、灵魂伴侣，也均遭重创、幻灭……但这一切没有打垮浮士德，反而使他从“恶”的经验中脱胎换骨，转而舍弃一己之私，投身为人类造福的事业，并倒在这份宏大而幸福的追求途中。最终，他的灵魂飞升出魔鬼的樊篱，与天使们汇聚。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《回廊亭杀人事件》`,
    imgPath: 'https://img2.tking.cn/assets/img/eNr66Y3z57_.jpg',
    desc:
        '史上最强复仇女王，一部众生图鉴。显赫企业家之死，庞大遗产的明争暗夺。遗书将要在其经营的日式旅馆回廊亭中向家族公开，众人心怀叵测。除家人以外，一名特殊身份的老妇人也被应邀出席。然而老妇人出现的真正目的会是什么？！夜深时，做发财梦的贪婪之人没有等到他们的遗产，反而等来死神降临。破灭的爱情，破败的人生，曾经种下的恶缘种子，逐渐在回廊亭发芽......',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191022/59290.html',
    name: `《三昧》`,
    imgPath: 'https://img2.tking.cn/assets/img/C5pXk4hHCG_.jpg',
    desc:
        '《三昧》讲述了发生在北京城的几段往事，一束人生。故事跨度达80年，自民国始，历经八年抗日、建立新中国、十年浩劫、改革开放，至北京奥运会结束。写若干人与一座戏楼的爱恨纠葛，近近远远短短长长。三张高凳、三个演员、三把好声音，说说笑笑叨扰叨扰那几段已悄悄走远的人生……',
}
];


// const IconText = ({ type, text }) => (
//     <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//       {text}
//   </span>
// );
class Movie extends Component{
    render() {
        return (
            <div className="drama" style={{background:'white'}}>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.name}
                            extra={
                                <img
                                    width={200}
                                    height={250}
                                    alt="logo"
                                    src={item.imgPath}
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.foodType}>{item.name}</a>}
                            />
                            {item.desc}
                        </List.Item>
                    )}
                />

            </div>
        )
    }
}

export default Movie