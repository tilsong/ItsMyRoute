import React, { useEffect } from 'react';
import { Input } from 'antd';
import { VscSearch } from 'react-icons/vsc';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import SideBarRouteList from './SideBarRouteList';
import CurrentLocation from './CurrentLocation';

const BasicSide = styled.div`
  border: 1px solid black;
  margin: 1px 1px;
  padding: 5px; 
`;

const SideBar = () => {
  const [searchText, onChangeSearchText] = useInput('');
  const { currentLocation } = useSelector((state) => state.map);

  return (
    <>
      <div style={{ border: '1px solid black', width: '500px', height: '680px', margin: '0 5px', padding: '5px' }}>
        <Input name="search-text" value={searchText} onChange={onChangeSearchText} required prefix={<VscSearch />} size="large" />
        <BasicSide>
          태그들 있는 자리
        </BasicSide>
        <BasicSide>
          {currentLocation && <CurrentLocation currentLocation={currentLocation} />}
        </BasicSide>
        <SideBarRouteList />
      </div>
    </>
  );
};

export default SideBar;
