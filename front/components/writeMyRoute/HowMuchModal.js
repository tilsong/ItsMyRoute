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

const HowMuchModalDiv = styled.div`
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

const HowMuch = styled.div`
  margin: 10px 20px 10px 10px;
  font-weight: bold;
`;

const HowMuchModal = ({
  modalRef, howMuchModalToggle, finishModal, beforeModal, getTimeAndMoney }) => {
  const [time, onChangeTime] = useInput('');
  const [money, onChangeMoney] = useInput('');

  useImperativeHandle(modalRef, () => ({
    finish() {
      if (time && money) {
        getTimeAndMoney(time, money);
      } else if (time) {
        getTimeAndMoney(time, 0);
      } else if (money) {
        getTimeAndMoney(0, money);
      } else {
        getTimeAndMoney(0, 0);
      }
    },
  }));

  return (
    <HowMuchModalDiv>
      <GrFormClose onClick={howMuchModalToggle} style={{ cursor: 'pointer', position: 'absolute', right: '18px', fontSize: '50px' }} />
      <div style={{ marginLeft: '10px' }}>
        <h2>소요된 시간과 금액을 입력해주세요.</h2>
      </div>
      <div>
        <HowMuch>
          시간 <input value={time} onChange={onChangeTime} placeholder="시간을 입력하세요" /> 분
        </HowMuch>
        <HowMuch>
          금액 <input value={money} onChange={onChangeMoney} placeholder="금액을 입력하세요" /> 원
        </HowMuch>
      </div>
      <center>
        <Button type="primary" onClick={beforeModal} style={{ margin: '0 20px' }}>뒤로가기</Button>
        <Button type="primary" onClick={finishModal} style={{ margin: '0 20px' }}>완료</Button>
      </center>
    </HowMuchModalDiv>
  );
};

HowMuchModal.propTypes = {
  modalRef: PropTypes.func.isRequired,
  howMuchModalToggle: PropTypes.func.isRequired,
  finishModal: PropTypes.func.isRequired,
  beforeModal: PropTypes.func.isRequired,
  getTimeAndMoney: PropTypes.func.isRequired,
};

export default HowMuchModal;
