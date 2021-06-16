import React, { useImperativeHandle } from 'react';
import { Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
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
  border: 1px solid black;
  width: 50vw;
  z-index: 10;
  background-color: white;
  padding: 10px;
`;

const HowMuch = styled.div`

`;

const HowMuchModal = ({ cref, howMuchModalToggle, finishModal, getTimeAndMoney }) => {
  const [time, onChangeTime] = useInput('');
  const [money, onChangeMoney] = useInput('');

  useImperativeHandle(cref, () => ({
    add() {
      if (time || money) {
        getTimeAndMoney(time, money);
      }
    },
  }));

  return (
    <HowMuchModalDiv>
      <GrFormClose onClick={howMuchModalToggle} style={{ cursor: 'pointer', position: 'absolute', right: '18px', fontSize: '40px' }} />
      <div>
        <span>두번째 모달!</span>
      </div>
      <div>
        <HowMuch>
          소요시간 <input value={time} onChange={onChangeTime} /> 분
        </HowMuch>
        <HowMuch>
          소요금액 <input value={money} onChange={onChangeMoney} /> 원
        </HowMuch>
      </div>
      <center>
        <Button type="primary" style={{ margin: '0 20px' }}>건너뛰기</Button>
        <Button type="primary" onClick={finishModal} style={{ margin: '0 20px' }}>완료</Button>
      </center>
    </HowMuchModalDiv>
  );
};

export default HowMuchModal;
