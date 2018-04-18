/**
 * @author Nickyzhang
 * @date 2018/4/18
 * @description 首页
 */

import React from 'react';
import {connect} from 'dva';
import {Form, Icon, Input, Button, Checkbox, notification, message} from 'antd';
import request from '../../utils/request';
import styles from './Login.css';
const FormItem = Form.Item;

class login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {userName, password, checked} = this.props.form.getFieldsValue();
    console.log(this.props.form.getFieldsValue());
    if(!userName){
      message.info('请输入用户名');
      return;
    }
    if(!password){
      message.info('请输入密码');
      return;
    }
    this.props.history.push('/home');
  };

  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles.loginTitle}>贷超天玑系统</div>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <FormItem>
            <Input className={styles.loginFormInput} prefix={<Icon type="user" className={styles.loginFormIcon}/>}
                   placeholder="请输入用户名"
                   {...getFieldProps('userName')}/>
          </FormItem>
          <FormItem>
            <Input className={styles.loginFormInput} prefix={<Icon type="lock" className={styles.loginFormIcon}/>}
                   type="password"
                   placeholder="请输入密码"
                   {...getFieldProps('password')}/>
          </FormItem>
          <FormItem>
            <Checkbox
              {...getFieldProps('checked', {
                valuePropName: 'checked',
                initialValue: true,
              })}>记住密码</Checkbox>
          </FormItem>
          <Button loading={this.state.loading} type="primary"
                  htmlType="submit" className={styles.loginBtn}>
            登录
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
const Login = Form.create()(login);

export default connect(mapStateToProps)(Login);
