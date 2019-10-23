import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts-wordcloud';

class WordCloud extends Component{
    getOption = () => {
        const option = {
            title: {
                text: '热度分析',
                link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
                x: 'center',
                textStyle: {
                    fontSize: 23
                }

            },
            backgroundColor: '#FFFFFF',
            tooltip: {
                show: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        iconStyle: {
                            normal: {
                                color: '#FFFFFF'
                            }
                        }
                    }
                }
            },
            series: [{
                name: '热度分析',
                type: 'wordCloud',
                //size: ['9%', '99%'],
                sizeRange: [6, 66],
                //textRotation: [0, 45, 90, -45],
                rotationRange: [-45, 90],
                //shape: 'circle',
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 6
                },
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
                    name: "我和我的祖国",
                    value: 666
                }, {
                    name: "中国机长",
                    value: 520
                }]
            }]
        };

        let JosnList = [{
            name: "我和我的祖国",
            value: 666
        }, {
            name: "中国机长",
            value: 520
        }, {
            name: "魔童降世",
            value: "999"
        }, {
            name: "使徒行者",
            value: "888"
        }, {
            name: "扫毒2",
            value: "777"
        }, {
            name: "赌神",
            value: "688"
        }, {
            name: "罗小黑战记",
            value: "588"
        }, {
            name: "神话",
            value: "516"
        }, {
            name: "爱宠大乱斗",
            value: "515"
        }, {
            name: "铡美案",
            value: "483"
        }, {
            name: "午夜凶铃",
            value: "462"
        }, {
            name: "x战警",
            value: "449"
        }, {
            name: "穿越时空的爱恋",
            value: "429"
        }, {
            name: "欢天喜地七仙女",
            value: "407"
        }, {
            name: "春光灿烂猪八戒",
            value: "406"
        }, {
            name: "长城",
            value: "406"
        }, {
            name: "宝贝计划",
            value: "386"
        }, {
            name: "警察故事",
            value: "385"
        }, {
            name: "盗梦空间",
            value: "375"
        }, {
            name: "超体",
            value: "355"
        }, {
            name: "小丑回魂",
            value: "355"
        }, {
            name: "头文字D",
            value: "335"
        }, {
            name: "赌圣",
            value: "324"
        }, {
            name: "赌侠",
            value: "304"
        }, {
            name: "倚天屠龙记",
            value: "304"
        }, {
            name: "天龙八部",
            value: "284"
        }, {
            name: "射雕英雄传",
            value: "284"
        }, {
            name: "问道",
            value: "284"
        }, {
            name: "叶问",
            value: "254"
        }, {
            name: "师兄",
            value: "254"
        }, {
            name: "武则天",
            value: "253"
        }, {
            name: "暗战",
            value: "253"
        }, {
            name: "釜山行",
            value: "223"
        }, {
            name: "猖獗",
            value: "223"
        }, {
            name: "丧尸围城",
            value: "223"
        }, {
            name: "赵氏孤儿",
            value: "223"
        }, {
            name: "新射雕英雄传",
            value: "223"
        }, {
            name: "天龙八部",
            value: "223"
        }, {
            name: "鹿鼎记",
            value: "223"
        }, {
            name: "寄生虫",
            value: "223"
        }, {
            name: "一个人的武林",
            value: "223"
        }, {
            name: "英雄远征",
            value: "152"
        }, {
            name: "我不是药神",
            value: "152"
        }, {
            name: "复仇者联盟1",
            value: "152"
        }, {
            name: "执复仇者联盟2",
            value: "152"
        }, {
            name: "复仇者联盟3",
            value: "152"
        }, {
            name: "复仇者联盟4",
            value: "152"
        }, {
            name: "战狼",
            value: "152"
        }, {
            name: "战狼2",
            value: "152"
        }, {
            name: "蜘蛛侠",
            value: "112"
        }, {
            name: "与神同行",
            value: "112"
        }, {
            name: "疯狂的外星人",
            value: "112"
        }, {
            name: "绿皮书",
            value: "112"
        }, {
            name: "看不见的客人",
            value: "112"
        }, {
            name: "速度与激情1",
            value: "112"
        }, {
            name: "速度与激情2",
            value: "112"
        }, {
            name: "速度与激情3",
            value: "92"
        }, {
            name: "速度与激情4",
            value: "92"
        }, {
            name: "速度与激情5",
            value: "92"
        }, {
            name: "速度与激情6",
            value: "92"
        }, {
            name: "速度与激情7",
            value: "92"
        }, {
            name: "速度与激情8",
            value: "92"
        }, {
            name: "天才少女",
            value: "72"
        }, {
            name: "唐人街探案",
            value: "72"
        }, {
            name: "唐人街探案2",
            value: "72"
        }, {
            name: "商业烟尘污染",
            value: "72"
        }, {
            name: "占道堆放",
            value: "71"
        }, {
            name: "地上设施",
            value: "71"
        }, {
            name: "水质",
            value: "71"
        }, {
            name: "无水",
            value: "71"
        }, {
            name: "供热单位影响",
            value: "71"
        }, {
            name: "人行道管理",
            value: "71"
        }, {
            name: "主网原因",
            value: "71"
        }, {
            name: "集中供热",
            value: "71"
        }, {
            name: "客运管理",
            value: "71"
        }, {
            name: "国有公交（大巴）管理",
            value: "71"
        }, {
            name: "工业粉尘污染",
            value: "71"
        }, {
            name: "治安案件",
            value: "71"
        }, {
            name: "压力容器安全",
            value: "71"
        }, {
            name: "身份证管理",
            value: "71"
        }, {
            name: "群众健身",
            value: "41"
        }, {
            name: "工业排放污染",
            value: "41"
        }, {
            name: "破坏森林资源",
            value: "41"
        }, {
            name: "市场收费",
            value: "41"
        }, {
            name: "生产资金",
            value: "41"
        }, {
            name: "生产噪声",
            value: "41"
        }, {
            name: "农村低保",
            value: "41"
        }, {
            name: "劳动争议",
            value: "41"
        }, {
            name: "劳动合同争议",
            value: "41"
        }, {
            name: "劳动报酬与福利",
            value: "41"
        }, {
            name: "医疗事故",
            value: "21"
        }, {
            name: "停供",
            value: "21"
        }, {
            name: "基础教育",
            value: "21"
        }, {
            name: "职业教育",
            value: "21"
        }, {
            name: "物业资质管理",
            value: "21"
        }, {
            name: "拆迁补偿",
            value: "21"
        }, {
            name: "设施维护",
            value: "21"
        }, {
            name: "市场外溢",
            value: "11"
        }, {
            name: "占道经营",
            value: "11"
        }, {
            name: "树木管理",
            value: "11"
        }, {
            name: "农村基础设施",
            value: "11"
        }, {
            name: "无水",
            value: "11"
        }, {
            name: "供气质量",
            value: "11"
        }, {
            name: "停气",
            value: "11"
        }, {
            name: "市政府工作部门（含部门管理机构、直属单位）",
            value: "11"
        }, {
            name: "燃气管理",
            value: "11"
        }, {
            name: "市容环卫",
            value: "11"
        }, {
            name: "新闻传媒",
            value: "11"
        }, {
            name: "人才招聘",
            value: "11"
        }, {
            name: "市场环境",
            value: "11"
        }, {
            name: "行政事业收费",
            value: "11"
        }, {
            name: "食品安全与卫生",
            value: "11"
        }, {
            name: "城市交通",
            value: "11"
        }, {
            name: "房地产开发",
            value: "11"
        }, {
            name: "房屋配套问题",
            value: "11"
        }, {
            name: "物业服务",
            value: "11"
        }, {
            name: "物业管理",
            value: "11"
        }, {
            name: "占道",
            value: "11"
        }, {
            name: "园林绿化",
            value: "11"
        }, {
            name: "户籍管理及身份证",
            value: "11"
        }, {
            name: "公交运输管理",
            value: "11"
        }, {
            name: "公路（水路）交通",
            value: "11"
        }, {
            name: "房屋与图纸不符",
            value: "11"
        }, {
            name: "有线电视",
            value: "11"
        }, {
            name: "社会治安",
            value: "11"
        }, {
            name: "林业资源",
            value: "11"
        }, {
            name: "其他行政事业收费",
            value: "11"
        }, {
            name: "白鹿原",
            value: "11"
        }, {
            name: "蓝人秀",
            value: "11"
        }, {
            name: "我的体育老师",
            value: "11"
        }, {
            name: "开心鬼撞鬼",
            value: "11"
        }, {
            name: "茶馆",
            value: "11"
        }, {
            name: "数码宝贝",
            value: "11"
        }, {
            name: "神奇宝贝",
            value: "11"
        }, {
            name: "鹿鼎记",
            value: "11"
        }];

        option.series[0].data = JosnList;
        return option;
    };
    onChartClick = (params) => {
        window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    };
    render(){
        const onEvents = {
            'click': this.onChartClick,
        };
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{height: '700px', width: '100%'}}
                onEvents={onEvents}
            />
        );
    }
};

export default WordCloud;