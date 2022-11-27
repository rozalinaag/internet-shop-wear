import React from 'react'
import './Autorization.css';
import {useState} from 'react';
import {Form, Input, Checkbox, Button, message as alert_message} from "antd";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "../../../axios";


function Autorization() {
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const onFinish = async (values) => {
        let formdata = new FormData();
        formdata.append('username', values['username']);
        formdata.append('password', values['password']);
        await axios
            .post(process.env.REACT_APP_HOST + "/api/login", formdata)
            .then((response) => {
                console.log(response);
                Cookies.set("token", response.data.access_token);
                navigate("/admin/showitems")
            })
            .catch((error) => {
                alert_message.error(error.response.data.detail);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className='auth-main'>
                <h2>Авторизация</h2>
                <Form
                    name="basic"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{required: true, message: 'Пожайлуста введите ваш логин!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Пожайлуста введите ваш пароль!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 10, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Autorization;
