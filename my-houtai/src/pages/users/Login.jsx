import React,{Component} from 'react';
import {Div} from '../../assets/style';
import {Redirect} from 'react-router-dom'
import { Form, Icon, Input, Button} from 'antd';
import {reqLogin} from '../../api';
import memoryutils from '../utils/memoryutils';
import stroogeutils from '../utils/stroogeutils'
import {message} from 'antd'
class Login extends Component{
    handleSubmit = e => {
      // 阻止事件的默认行为
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            //请求登陆
            const {email, password}=values
            const response=await reqLogin(email, password)
            console.log('请求成功',response.data)
            const result=response.data 
            console.log(result)
            if(result.status==='success'){
               message.error('登录成功')

               const user =result.data
               console.log(user)
              
               //跳到后台界面
               this.props.history.replace('/home')
            }else{
              message.error(result.message)
            }
          }else{
            console.log('检验失败')
          }
        });
      };
     render(){
       //如果用户已经登录， 自动以奥赚到管理界面
     
      const form=this.props.form
      const {getFieldDecorator} =form
         return(
             <Div  style={{width:'300px',  margin:"auto"}}>
           <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item >
        
        {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="email"
            />,
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('password', {
          // 声明式验证：直接用别人定义好的验证规则进行验证
            rules: [
              { required: true, message: 'Please input your Password!' },
              { min: 4, message: '密码不得小于4' },
              { max: 12, message: '密码不得大于12' }
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </Form.Item>
      </Form>
             </Div>
         )
     }
}

const WarpLogin=Form.create()(Login)
export default WarpLogin      
