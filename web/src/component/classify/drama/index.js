import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://img.18qweasd.com/d/file/html/gndy/dyzz/2019-10-11/6ce85cd59af2e851e903e15cd782920a.jpg',
    description:
        '你好电影',
    content:
        '这里是话剧《仲夏夜之梦》',
  });
}
class Drama extends Component{
  render() {
    return (
      <div className="drama">
        这里是话剧
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
                          src="http://s1.chncpa.org//upload/2019/10/17/P020190826506234906834.jpg"
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

export default Drama