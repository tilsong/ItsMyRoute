import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from './TagBox';
import useInput from '../../hooks/useInput';
import { ADD_MYROUTE_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../../reducers/myRoute';

const WriteMyRouteForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addMyRouteLoading, addMyRouteDone } = useSelector((state) => state.myRoute);
  const { locationsInfo } = useSelector((state) => state.myRoute);

  const back = useCallback(() => {
    if (confirm('작성 중이던 글이 모두 삭제됩니다. 돌아가시겠습니까?')) {
      Router.push('/');
    }
  }, []);

  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const tagRef = useRef();
  let tags = null;
  const getTags = (tagList) => {
    tags = tagList;
  };

  const onSubmit = useCallback(() => {
    if (!title || !title.trim()) {
      return alert('제목을 작성하세요.');
    }
    if (!content || !content.trim()) {
      return alert('내용을 작성하세요.');
    }
    tagRef.current.sendTag();
    const formData = new FormData();
    formData.append('title', title);
    const reContent = content.replace(/\n/g, '<br/>');
    formData.append('content', reContent);
    imagePaths.forEach((img) => {
      formData.append('image', img);
    });
    tags.forEach((i) => {
      formData.append('tag', i);
    });
    locationsInfo.map((location) => {
      const strLocation = JSON.stringify(location);
      formData.append('locations', strLocation);
    });
    dispatch({
      type: ADD_MYROUTE_REQUEST,
      data: formData,
    });
  }, [title, content, tags, imagePaths, locationsInfo]);

  // image 버튼 클릭 위한 useRef
  const imageRef = useRef();
  const onClickImageUpload = useCallback(() => {
    imageRef.current.click();
  }, [imageRef.current]);

  // 이미지 서버 업로드
  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });

  // 사진 경로 삭제
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });

  useEffect(() => {
    if (addMyRouteDone) {
      Router.push('/');
    }
  }, [addMyRouteDone]);

  return (
    <div style={{ marginLeft: '20px', paddingRight: '20px' }}>
      <Form encType="multipart/form-data">
        <Input value={title} placeholder="제목을 입력하세요" onChange={onChangeTitle} bordered={false} style={{ resize: 'none', height: '40px', fontSize: '37px', marginTop: '30px', fontWeight: 'bold' }} />
        <div style={{ height: '6px', width: '10rem', borderRadius: '1px', background: 'gray', margin: '10px' }} />

        <TagBox tagRef={tagRef} getTags={getTags} />

        <div style={{ height: '1px', width: '10rem', borderRadius: '1px', background: 'gray', margin: '10px' }} />
        <Input.TextArea value={content} placeholder="내용을 입력하세요" onChange={onChangeContent} bordered={false} rows={21} style={{ resize: 'none' }} />

        <input type="file" name="image" multiple hidden ref={imageRef} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>

        <div>
          {imagePaths.map((v, i) => (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={v} style={{ width: '100px' }} alt={v} />
              <div>
                <Button onClick={onRemoveImage(i)}>제거</Button>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div style={{ margin: '20px 10px', padding: '0' }}>
          <Button type="primary" onClick={back} style={{ float: 'left' }}>뒤로가기</Button>
          <Button type="primary" onClick={onSubmit} loading={addMyRouteLoading} style={{ float: 'right' }}>작성완료</Button>
        </div>
      </Form>
    </div>
  );
};

export default WriteMyRouteForm;
