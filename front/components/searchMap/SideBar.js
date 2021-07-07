import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SideBarRouteList from './SideBarRouteList';
import SearchLocation from './SearchLocation';

const BasicSide = styled.div`
  border: 1px solid black;
  margin: 1px 1px;
  padding: 5px; 
`;

const SideBar = () => {
  const { panTo, currentNumber } = useSelector((state) => state.map);

  return (
    <div style={{ width: '100%', height: '100%', margin: '0 5px', padding: '5px', backgroundColor: '#F8F8F8' }}>
      {currentNumber && <SearchLocation panTo={panTo} currentNumber={currentNumber} />}
      <SideBarRouteList />
    </div>
  );
};

export default SideBar;
