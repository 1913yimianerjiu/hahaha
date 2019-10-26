import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';


class Drama extends Component{
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
                    dataSource={this.state.listData.slice(13,25)}
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

export default Drama