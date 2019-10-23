import React,{Component} from 'react'
import { List, Avatar, Icon } from 'antd';
require("./index.less")

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `用户 ${i}`,
    avatar: 'https://img.18qweasd.com/d/file/html/gndy/dyzz/2019-10-11/6ce85cd59af2e851e903e15cd782920a.jpg',
    description:
        '你好电影',
    content:
        '这里是电影《狮子汪》',
  });
}

// const IconText = ({ type, text }) => (
//     <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//       {text}
//   </span>
// );
class Movie extends Component{
  render() {
    return (
      <div className="movie">
        这里是电影
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
                              src="https://img.18qweasd.com/d/file/html/gndy/dyzz/2019-10-11/6ce85cd59af2e851e903e15cd782920a.jpg"
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

export default Movie