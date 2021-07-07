import React, { useImperativeHandle } from 'react';
import { Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
}

to {
    opacity: 3;
    transform: none;
}
`;

const NamingModalDiv = styled.div`
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  border: 1px solid #D1E2FE;
  border-radius : 20px;
  width: 48vw;
  z-index: 10;
  background-color: #D1E2FE;
  padding: 15px 10px 10px;
  margin-left: 15px;
`;

const NamingLocationModal = ({
  namingModalToggle, clickLocationAddress, getLocation, nextModal, modalRef }) => {
  const [selectLocation, onChangeSelectLocation] = useInput('');

  useImperativeHandle(modalRef, () => ({
    send() {
      if (selectLocation) {
        getLocation(selectLocation);
      }
    },
  }));
  return (
    <NamingModalDiv>
      <GrFormClose onClick={namingModalToggle} style={{ cursor: 'pointer', position: 'absolute', right: '18px', fontSize: '40px' }} />
      <div style={{ margin: '10px' }}>
        <span style={{ marginBottom: '5px' }}>클릭한 위치는</span>
        <div style={{ fontSize: '20px' }}>[{clickLocationAddress} ] 의</div>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <input value={selectLocation} onChange={onChangeSelectLocation} />입니다
      </div>
      <center>
        <Button type="primary" onClick={nextModal} style={{ margin: '0 20px' }}>경로에 추가하기</Button>
      </center>
    </NamingModalDiv>
  );
};

NamingLocationModal.propTypes = {
  namingModalToggle: PropTypes.func.isRequired,
  clickLocationAddress: PropTypes.string.isRequired,
  getLocation: PropTypes.func.isRequired,
  nextModal: PropTypes.func.isRequired,
  modalRef: PropTypes.func.isRequired,
};

// onClick={locationName}
export default NamingLocationModal;

// 여기서 온클릭을 하는데, 내용에 if문 하나를 건다. 아니 modalToggle에 건다.
//  selectLocation의 상태가 null이 아니라면,
// 두번째 모달을 소환하고 이 모달을 종료시키는거지. 해보자!
