import React, { useCallback, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const TagBox = ({ tagRef, getTags }) => {
  const [tagList, setTagList] = useState([]);
  const [input, onChangeInput, setInput] = useInput();

  useImperativeHandle(tagRef, () => ({
    sendTag() {
      getTags(tagList);
    },
  }));

  const TagOneDiv = styled.div`
    font-size: 15px;
    background-color: #B4EEB4;
    color: white;
    border-radius: 20px;
    margin: 0 2px;
    padding: 3px;
  `;

  const TagBoxStyle = {
    backgroundColor: '#F8F8F8',
    fontSize: '15px',
    border: 'none',
    outline: 'none',
    margin: '0 0 3px 0',
    padding: '4px 11px',
  };

  const onRemove = useCallback((tag) => {
    setTagList(tagList.filter((t) => t !== tag));
  }, [tagList]);

  const TagOne = useCallback(({ tag }) => (
    <TagOneDiv onClick={() => onRemove(tag)}>{tag}</TagOneDiv>
  ));

  const insertTag = useCallback((tag) => {
    if (!tag) return;
    if (tagList.includes(tag)) return;
    setTagList([...tagList, tag]);
  }, [tagList]);

  const tagOut = useCallback((e) => {
    if (e.key === 'Enter') {
      insertTag(input.trim());
      setInput('');
    }
  }, [input, insertTag]);

  return (
    <div style={{ display: 'flex', marginLeft: '8px' }}>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tagList.map((tag) => (
            <div>
              <TagOne key={tag} tag={tag} />
            </div>
          ))}
          <input placeholder="태그를 입력하세요" value={input} onChange={onChangeInput} onKeyPress={tagOut} style={TagBoxStyle} />
        </div>
      </div>

    </div>
  );
};

TagBox.propTypes = {
  tagRef: PropTypes.func.isRequired,
  getTags: PropTypes.func.isRequired,
};

export default TagBox;
