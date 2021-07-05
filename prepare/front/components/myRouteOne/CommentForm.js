import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { ADD_COMMENT_ONE_REQUEST } from '../../reducers/myRoute';

const CommentForm = ({ myRoute }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user);
  const { addCommentOneDone, addCommentOneLoading } = useSelector((state) => state.myRoute);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentOneDone) {
      setCommentText('');
    }
  }, [addCommentOneDone]);

  const onSubmitComment = useCallback(() => {
    if (commentText === '') {
      return;
    }
    dispatch({
      type: ADD_COMMENT_ONE_REQUEST,
      data: { content: commentText, userId: id, myRouteId: myRoute.id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button
          style={{ float: 'right', marginTop: '3px' }}
          type="primary"
          htmlType="submit"
          loading={addCommentOneLoading}
        >입력
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  myRoute: PropTypes.object.isRequired,
};

export default CommentForm;
