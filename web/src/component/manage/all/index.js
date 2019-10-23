import React,{Component} from 'react'
import {Card,Table,Spin,Pagination,Button,type,Popconfirm,Input} from 'antd'
import { Item } from 'rc-menu';
const { Search } = Input;


// var columns = [
//   {
//     title: '名称',
//     width:100,
//     dataIndex: 'name',
//     key: 'name',
//     fixed:'left'
//   },
//   {
//     title: '价格',
//     width:100,
//     dataIndex: 'price',
//     key: 'price',
//   },
//   {
//     title: '类型',
//     width:100,
//     dataIndex: 'foodType',
//     key: 'foodType',
//   },
//   {
//     title: '图片',
//     width:100,
//     dataIndex: 'imgPath', 
//     key: 'img',
//     render(imgpath){
//       return(
//         <img src={imgpath} width='50' height='50' alt=""/>
//       )
//     }
//   },
//   {
//     title: '操作',
//     width:150,
//     fixed:'right',
//     key: 'action',
//     render:(data)=>{
//       return(
//         <div>
//           <Popconfirm 
//             title='你确定要删除吗？'
//             onConfirm={()=>{
//               console.log('删除',data,this)
//               console.list(22222)
//               this.del(data._id)
//             }}>
//           <button size='small' type='danger'>删除</button>
//           </Popconfirm>
//           <button size='small' type='primary'>修改</button>
//         </div>
//       )
//     }, 
//   }
// ]
class All extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title: '名称',
        width:100,
        dataIndex: 'name',
        key: 'name',
        fixed:'left'
      },
      {
        title: '票价',
        width:100,
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '类型',
        width:100,
        dataIndex: 'foodType',
        key: 'foodType',
      },
   
      // {
      //   title: '导演',
      //   width:100,
      //   dataIndex: 'imgPath', 
      //   key: 'img',
      //   render(imgpath){
      //     return(
      //       <img src={imgpath} width='50' height='50' alt=""/>
      //     )
      //   }
      // },
      {
        title: '图片',
        width:100,
        dataIndex: 'imgPath', 
        key: 'img',
        render(imgpath){
          return(
            <img src={imgpath} width='50' height='50' alt=""/>
          )
        }
      },
      {
        title: '操作',
        width:150,
        fixed:'right',
        key: 'action',
        render:(data)=>{
          return(
            <div>
              <Popconfirm 
                title='你确定要删除吗？'
                onConfirm={()=>{
                  console.log(22222)
                  console.log('删除',this)
                 console.log(data)
                  this.del(data._id)
                }}>
              <button size='small' type='danger'>删除</button>
              </Popconfirm>
              <button size='small' type='primary'>修改</button>
            </div>
          )
        },
      },
    ]
    this.state={
      spinning:true,
      nowPage:1,
      list:[]
    }
  }
  del=(_id)=>{
    // this.setState({spinning:true})
    let url=`admin/food/delFood?_id=${_id}`
    this.$axios.get(url) 
    .then((data)=>{
     
      this.setState({spinning:false,})
     
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
     this.refreshData(this.state.nowPage)
  }
  Search=(value)=>{
    // this.setState({spinning:true})
    let url=`admin/food/getFoodByKw?kw=${value}`
    this.$axios.get(url) 
    .then((data)=>{
      console.log(data)
      this.setState({spinning:false,list:data.list})
        this.refreshData(this.data.list)
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
  }
  componentDidMount(){
      console.log(111)
    let page=this.state.nowPage
    this.refreshData(page)
  } 
  refreshData=(page)=>{
    this.setState({spinning:true})
    let url=`/admin/food/getFoodsByPage?page=${page}`
 
    this.$axios.get(url)
    .then((data)=>{
      console.log(data)
      this.setState({spinning:false,list:data.list})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })
  }

  render() {
    let {spinning,list}=this.state
    return (
      <div className="all">
         <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(value)=>{
              console.log(this)
              console.log(value)
              this.Search(value)

            }}
          />
        <Card  style={{ overflow:'hidden',width:'1340px',height:'700px', margin:'20px auto'}}>
          <Spin spinning={spinning}> 
          <Table 
          style={{width:'1320px',height:'600px'}}
            dataSource={ list } 
            columns={this.columns}
            pagination={{ pageSize: 50 }}
            scroll={{ x: 1300,y: 700, }}
            pagination={false}
          ></Table>
          <Pagination simple defaultCurrent={1} total={50} pageSize={5}
            onChange={(page,pageSize)=>{
              // page要变化的的页码数
              this.refreshData(page)
              console.log(page,pageSize)
            }}
          />
          </Spin>
        </Card>
      </div>
    )
  }
}

export default All