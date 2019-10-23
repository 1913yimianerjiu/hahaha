import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://img.18qweasd.com/d/file/html/gndy/dyzz/2019-10-11/6ce85cd59af2e851e903e15cd782920a.jpg',
    description:
        '你好曲苑杂坛',
    content:
        '这里是戏曲《梦蝶》',
  });
}
class Show extends Component{
  render() {
    return (
      <div className="show">
        这里是曲苑杂坛
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
                    key={item.title}
                    extra={
                      <img
                          width={170}
                          height={200}
                          alt="logo"
                          src="http://pic5.nipic.com/20100124/267398_225230724575_2.jpg"
                      />
                    }
                >
                  <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                  />
                  {item.content}
                </List.Item>
            )}
        />
      </div>
    )
  }
}

export default Show