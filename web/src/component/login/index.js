import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox,Card,message} from 'antd';
import './index.less'

class Login extends React.Component {
  submit = () => {
    console.log('登录')
    let result = this.props.form.getFieldsValue()
    console.log(result,'login')
    this.props.form.validateFields((err,data) => {
      if(err) {
        message.error('输入信息有误，请重试')
      } else {
        this.$axios.get('/yapi/admin/user/login',{
          params: result
          // {
          //   us:'1027393479@qq.com',
          //   ps:'123'
          // }
        })
        .then((data) => {
          console.log(data)
          if(data.err === 0){
            message.success('登陆成功，1s后跳转首页',1,() => {
              this.props.history.push('/admin')
            })
          } else {
            message.error('用户名或密码有误，请重试')
          }
          
        })
      }
      console.log(err,data)
    })
  }
  render() {
    // console.log(this,'登陆组件')
    let {getFieldDecorator} = this.props.form
    return (
      <div className="login-box">
          <Card style={{width:'400px',position:'fixed',top:'20vh',right:'50px'}}>
          <div className="login-form">
            <Form.Item>
              {getFieldDecorator('us',{
                rules:[{required:true,message:'请输入你的用户名'},
                       {min:6,message:'用户名长度6到20位'},
                       {max:20,message:'用户名长度6到20位'}    
                      ]
              })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />
              )}
              
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('ps',{})(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
                
            </Form.Item>
            <Form.Item >
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a><br/>
              <Button style={{marginLeft:'80px',marginRight:'10px'}} type="primary" onClick={this.submit} className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </div>
          </Card>
      </div>
    );
  }
}

export default Form.create()(Login)