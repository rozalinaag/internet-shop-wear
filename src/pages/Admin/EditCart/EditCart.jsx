import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import styles from './EditCart.module.css';
import {useState, useEffect} from 'react';
import {Button, Space, Upload, Form, Input, InputNumber, Switch, notification} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import axios from "../../../axios";
import {useNavigate, useParams} from "react-router-dom";

const {TextArea} = Input;

function EditCart() {
    const {id_art, name, price, description, code, is_active} = useParams();

    const [fetching, setFetching] = useState(false);
    const [isActive, setIsActive] = useState(is_active);
    const [isUpdatePhoto, setUpdatePhoto] = useState(false);
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        fileList: [],
    });
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (title, description) => {
        api.info({
            message: title,
            description: description,
            placement: 'bottomRight'
        });
    };
    const navigate = useNavigate();

    const handlerCreateCart = (data) => {
        let formData = new FormData();
        if (!state.fileList.length) {
            formData.append('upload_file', new File(["foo"], "foo.txt"));
        }
        for (let i = 0; i < state.fileList.length; ++i) {
            if (state.fileList[i].originFileObj instanceof File) {
                formData.append('upload_file', state.fileList[i].originFileObj);
            }
        }
        formData.append('name', data['name']);
        formData.append('price', data['price']);
        formData.append('code', data['code']);
        formData.append('description', data['description']);
        formData.append('is_active', isActive);
        formData.append('is_update_photo', isUpdatePhoto);

        setFetching(true);

        axios({
            method: 'POST',
            url: process.env.REACT_APP_HOST + `/api/article/update/${id_art}`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'},
        })
            .then((response) => {
                if (response.status === 200) {
                    openNotification('??????????????', '???????????? ?????????????? ??????????????????')
                    navigate("/admin/showitems")
                }
            })
            .catch((error) => {
                openNotification('????????????', '')
            })
            .finally(() => setFetching(false));
    };

    const handlePreview = (file) => {
        setState({
            previewImage: file.thumbUrl,
            previewVisible: true,
        });
    };

    const handleUpload = ({fileList}) => {
        setState({fileList});
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChangeCheck = (e) => {
        setIsActive(e);
    };
    const onChangeUpdatePhoto = (e) => {
        setUpdatePhoto(e);
    };

    return (
        <div>
            {contextHolder}
            <HeaderAdmin/>

            <div className={styles.body}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    onFinish={handlerCreateCart}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{
                        width: '80%',
                    }}
                    initialValues={{
                        name: name,
                        description: description,
                        code: code,
                        price: price,
                        is_active: is_active,
                    }}
                >
                    <div className={styles.name}>???????????????? ??????????</div>

                    <div className={styles.photosBody}>
                        <Form.Item
                            label="????????????????????"
                            name="photos"
                            rules={[
                                {
                                    required: isUpdatePhoto,
                                    message: '???????????????????? ?????????????????? ???????? ???? ???????? ????????!',
                                },
                            ]}
                        >
                            <Space
                                direction="vertical"
                                style={{
                                    width: '100%',
                                }}
                                size="large"
                            >
                                <Upload
                                    disabled={!isUpdatePhoto}
                                    listType="picture"
                                    maxCount={4}
                                    multiple
                                    beforeUpload={() => false}
                                    fileList={state.fileList}
                                    onPreview={handlePreview}
                                    onChange={handleUpload}
                                    accept="image/png, image/jpeg"
                                >
                                    <Button icon={<UploadOutlined/>}>?????????????????? (Max: 4)</Button>
                                </Upload>
                            </Space>
                        </Form.Item>
                    </div>

                    <Form.Item label="???????????????? ???????? ?" name="is_update_photo">
                        <Switch defaultChecked={false} onChange={onChangeUpdatePhoto}/>
                    </Form.Item>

                    <Form.Item
                        label="???????????????????????? ????????????"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '???????????????????? ?????????????????? ???????????????????????? ????????????!',
                            },
                        ]}
                    >
                        <Input value="valuuueHHHHHHHHHHHHHHHHHH"/>
                    </Form.Item>
                    <Form.Item
                        label="???????????????? ????????????"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: '???????????????????? ?????????????????? ???????????????? ????????????!',
                            },
                        ]}
                    >
                        <TextArea rows={3} maxLength={500}/>
                    </Form.Item>
                    <Form.Item
                        label="?????????????? ????????????"
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '???????????????????? ?????????????????? ?????????????? ????????????!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="???????? ????????????"
                        name="price"
                        rules={[
                            {required: true, message: '???????????????????? ?????????????????? ???????? ????????????!'},
                        ]}
                    >
                        <InputNumber type="text" min={0}/>
                    </Form.Item>
                    <Form.Item label="?? ?????????????? ?" name="is_active">
                        <Switch defaultChecked={true} onChange={onChangeCheck}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 8}}>
                        <Button type="primary" htmlType="submit" disabled={fetching}>
                            ???????????????? ??????????
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default EditCart;
