import React, { useCallback, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

const WriteMyRouteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  });

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    // dispatch({
    //   type: UPLOAD_IMAGES_REQUEST,
    //   data: imageFormData,
    // });
  });

  const back = useCallback(() => {
    if (confirm('작성 중이던 글이 모두 삭제됩니다. 돌아가시겠습니까?')) {
      Router.push('/');
    }
  }, []);

  const onSubmit = useCallback(() => {
    if (!title || !title.trim()) {
      return alert('제목을 작성하세요.');
    }
    if (!content || !content.trim()) {
      return alert('내용을 작성하세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p); // key = image, req.body.image가 됨. multer는 파일일 경우 req.file이나 req.files가 됨.
    });
    formData.append('title', title); // key = content, req.body.content가 됨.
    formData.append('content', content);
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
      // data: { 이렇게 json으로 해도 됨. multer써볼라구..
      //   imagePaths,
      //   content: text,
      // },
    });
  }, [title, content, imagePaths]);

  const { TextArea } = Input;

  const tagArray = [];
  const [tag, setTag] = useState('');

  return (
    <div style={{ borderRight: '1px solid black', height: 700, marginLeft: '20px', paddingRight: '20px' }}>
      <Form encType="multipart/form-data" onFinish={onSubmitForm}>
        <Input bordered={false} style={{ resize: 'none', height: '40px', fontSize: '37px', marginTop: '30px', fontWeight: 'bold' }} onChange={onChangeTitle} value={title} placeholder="제목을 입력하세요" />
        <div style={{ height: '6px', width: '10rem', borderRadius: '1px', background: 'gray', margin: '10px' }} />

        <Input placeholder="태그를 입력하세요" bordered={false} />
        <div style={{ height: '1px', width: '10rem', borderRadius: '1px', background: 'gray', margin: '10px' }} />

        <TextArea rows={21} bordered={false} style={{ resize: 'none' }} value={content} onChange={onChangeContent} placeholder="내용을 입력하세요" />

        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>

        <hr />
        <div style={{ margin: '20px 10px', padding: '0' }}>
          <Button type="primary" onClick={back} style={{ float: 'left' }}>뒤로가기</Button>
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>작성완료</Button>
        </div>
      </Form>
    </div>
  );
};

export default WriteMyRouteForm;
