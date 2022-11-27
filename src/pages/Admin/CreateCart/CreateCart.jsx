import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import styles from './CreateCart.module.css';
import { useState, useEffect } from 'react';
import axios from "../../../axios";
import {
  Button,
  Space,
  Upload,
  Form,
  Input,
  InputNumber,
  Switch,
  notification,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

const { TextArea } = Input;

function CreateCart() {
  const [fetching, setFetching] = useState(false);
  const [isActive, setIsActive] = useState(true);
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
      placement: 'bottomRight',
    });
  };
  const navigate = useNavigate();

  const handlerCreateCart = (data) => {
    let formData = new FormData();
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

    setFetching(true);

    axios({
      method: 'POST',
      url: process.env.REACT_APP_HOST + `/api/article/create`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          openNotification('Успешно', 'Запись успешно добавлена');
          navigate('/admin/showitems');
        }
      })
      .catch((error) => {
        openNotification(
          'Ошибка',
          error.response.data.detail
            ? error.response.data.detail
            : error.message
        );
      })
      .finally(() => setFetching(false));
  };

  const handlePreview = (file) => {
    setState({
      previewImage: file.thumbUrl,
      previewVisible: true,
    });
  };

  const handleUpload = ({ fileList }) => {
    setState({ fileList });
  };

  const onFinishFailed = (errorInfo) => {};

  const onChangeCheck = (e) => {
    setIsActive(e);
  };

  return (
    <div>
      {contextHolder}
      <HeaderAdmin />
      <div className={styles.body}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handlerCreateCart}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{
            width: '80%',
          }}
        >
          <div className={styles.name}>Создание товара</div>

          <div className={styles.photosBody}>
            <Form.Item
              label="Фотографии"
              name="photos"
              rules={[
                {
                  required: true,
                  message: 'Пожайлуста загрузите хотя бы одно фото!',
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
                  listType="picture"
                  maxCount={4}
                  multiple
                  beforeUpload={() => false}
                  fileList={state.fileList}
                  onPreview={handlePreview}
                  onChange={handleUpload}
                  accept="image/png, image/jpeg"
                >
                  <Button icon={<UploadOutlined />}>Загрузите (Max: 4)</Button>
                </Upload>
              </Space>
            </Form.Item>
          </div>

          <Form.Item
            label="Наименование товара"
            name="name"
            rules={[
              {
                required: true,
                message: 'Пожайлуста заполните наименование товара!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Описание товара"
            name="description"
            rules={[
              {
                required: true,
                message: 'Пожайлуста заполните Описание товара!',
              },
            ]}
          >
            <TextArea rows={3} maxLength={500} />
          </Form.Item>
          <Form.Item
            label="Артикль товара"
            name="code"
            rules={[
              {
                required: true,
                message: 'Пожайлуста заполните артикль товара!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Цена товара"
            name="price"
            rules={[
              { required: true, message: 'Пожайлуста заполните цену товара!' },
            ]}
          >
            <InputNumber type="text" min={0} />
          </Form.Item>
          <Form.Item label="В наличии ?" name="is_active">
            <Switch defaultChecked={true} onChange={onChangeCheck} />
          </Form.Item>

          <Form.Item className={styles.Button}>
            <Button
              className={styles.buttonItem}
              type="primary"
              htmlType="submit"
              disabled={fetching}
            >
              Добавить товар
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CreateCart;
