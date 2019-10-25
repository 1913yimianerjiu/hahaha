import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';
import axios from "axios";

const listData = [{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《霸王别姬》`,
    imgPath: 'http://image11.m1905.cn/uploadfile/2014/0530/thumb_1_283_390_20140530113755397669.jpg',
    desc:
        '上影厂2013年翻拍的经典戏曲电影《霸王别姬》',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《穆桂英挂帅》`,
    imgPath: 'http://image11.m1905.cn/mdb/uploadfile/2017/0818/thumb_1_283_390_20170818023003354757.jpg',
    desc:
        '西夏侵宋，朝中比武选帅，杨文广刀劈王伦夺魁。经寇准保荐，宋皇请穆桂英挂帅。年过半百的穆桂英因朝廷冷落本已心寒，经佘太君劝勉，慨然接印，整肃军纪出征保国。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《六尺巷》`,
    imgPath: 'http://image11.m1905.cn/mdb/uploadfile/2016/0706/thumb_1_283_390_20160706041855258535.jpg',
    desc:
        '故事发生在清康熙年间，安徽省桐城县。城内的一条街巷两边，一边是文化殿大学士张英的府邸，一边是桐城富户吴乡绅的豪宅。街巷是连接城内外的交通要道，两家一直以此巷为界，和睦相处。一条祥和的“六尺巷”，通向久远！一段谦和礼让的佳话，四海传扬！',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《对花枪》`,
    imgPath: 'http://image11.m1905.cn/uploadfile/2011/0112/thumb_1_283_390_20110112021720552.jpg',
    desc:
        '隋朝末年，少年罗艺进京赶考，途中病倒在姜家集，被女子姜桂芝的父亲救回家中，侍汤奉药，直到病愈。罗艺病语后，已然过了进京赶考的时间。踌躇于调头回家，还是茫然进京时，姜桂芝的父亲婉言相劝，留罗艺于家中，并让女儿教授罗艺祖传对花枪。罗艺天资聪颖，学什么都一点即通。在姜桂芝毫无保留地教授点拨下，罗艺很快就掌握对花枪的要领，把一个祖传武林绝学，舞的那叫一个眼花缭乱出神入化。',
},{
    foodType: 'https://www.dytt8.net/html/gndy/dyzz/20191017/59271.html',
    name: `《铡美案》`,
    imgPath: 'http://image11.m1905.cn/uploadfile/2011/0218/thumb_1_180_230_20110218115054328.jpg',
    desc:
        '北宋年间，陈世美进京应试，考中状元，被招驸马。其家乡连年荒旱，父母去世，其妻秦香莲携儿女进京寻夫，闯宫遭逐。陈世美派家将韩琦追杀，韩琦最终不忍放走秦香莲母子，用他一人的性命换来三人的性命，自刎古庙中。秦香莲气愤至极来到开封府告状。包拯将陈世美召到开封府，好言相劝，可陈世美利欲熏心拒不承认，被包公扣押。公主、太后闻讯赶来求情，但包拯不畏皇权，依法铡了陈世美。该剧是中国戏曲舞台最流行的一出传统大戏。剧情说明要想建构清明公正的社会，拥有廉洁清正、铁面无私的的“清官”，最重要的就是加强廉政建设，普及法律教育，积极开展反腐败斗争。   ',
},
];


// const IconText = ({ type, text }) => (
//     <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//       {text}
//   </span>
// );
class Show extends Component{
    constructor(){
        super()
        this.state={
            listData:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/admin/food/getFoods')
            .then(function (response) {
                _this.setState({
                    listData:response.list,
                    isLoaded:true
                });
                console.log(_this.state.listData)
                console.log(_this)
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded:false,
                    error:error
                })
            })
    }
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
                    dataSource={this.state.listData.slice(25,30)}
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

export default Show