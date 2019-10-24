
import { Form, Input, Icon, Button,message, Result } from 'antd';
import React from 'react'
// import './index.less'
let id = 0;

class DynamicFieldSet extends React.Component {
  submit=()=>{
    let reuslt =this.props.form.getFieldsValue()
    console.log(reuslt)
    let reuslt1 = reuslt.names

    // let {GoodsName,Price,Number,GoodsClass,desc} = reuslt1
    console.log(reuslt1)
    let href = `/admin/food/addFood?price=${reuslt1[0]}&name=${reuslt1[1]}&imgPath=${reuslt1[2]}&foodType=${reuslt1[3]}&desc=${reuslt1[4]}`
    console.log(href)
    this.props.form.validateFields((err,data)=>{
      console.log(err,data)
      // if(){
        // message.error('输入信息有误请重试')
        console.log(this)
        this.$axios.get(href)
        // .then((data)=>{
        //   console.log(data.err)
        // })

        message.success('添加成功')
        console.log(1111111)
      // }else{
        
      // }
    })
  }

  // shopping=()=>{
  //   let reuslt =this.props.form.getFieldsValue()
  //   let reuslt1 = reuslt.names
  //   let href = `/admin/food/addFood?name=${reuslt1[0]}&price=${reuslt1[1]}&imgpath=${reuslt1[2]}&foodType=${reuslt1[3]}&desc=${reuslt1[4]}`

  // }



  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
        console.log('Merged values:', keys.map(key => names[key]));
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? '请依次输入price,name,imgpath,foodType,desc' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            },
          ],
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item {...formItemLayoutWithOutLabel} className='submit-box'>
          
          <Button type="primary" onClick={this.submit}>
            提交商品信息
          </Button>
         
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);
export default Form.create()(DynamicFieldSet)
