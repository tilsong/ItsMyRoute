import React, { useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { FiMap } from 'react-icons/fi';
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import LogInForm from './LogInForm';
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        padding-left: 0 !important;
    }

    .and-col:last-child {
        padding-right: 0 !important;
    }
`;// antd의 문제 해결(gutter관련)

const MenuItem = styled(Menu.Item)`
  float: right;
`;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  // 로그인 되지 않았을 때 로그인 메뉴로 가도록 설정하기
  const { me, logoutLoading } = useSelector((state) => state.user);

  // 로그인 시 지속적으로 상태 유지할 수 있도록 함. (서버 세션 연동)
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  const logout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <div>
      <Global />
      {me === null ? <LogInForm />
        : (
          <>
            <div style={{ marginTop: '12px' }}>
              <Menu mode="horizontal">
                <Menu.Item style={{ marginBottom: '10px', fontSize: '30px', fontWeight: 'bold' }}>
                  <Link href="/"><a>It's My Route</a></Link>
                </Menu.Item>
                <MenuItem>
                  <Link href="/user"><UserOutlined style={{ fontSize: '30px', marginTop: '5px' }} /></Link>
                </MenuItem>
                <MenuItem>
                  <BellOutlined style={{ fontSize: '30px', marginTop: '5px' }} />
                </MenuItem>
                <MenuItem>
                  <Link href="/searchMap"><FiMap style={{ fontSize: '30px', marginTop: '5px' }} /></Link>
                </MenuItem>
                <MenuItem>
                  <LogoutOutlined onClick={logout} loading={{ logoutLoading }} style={{ fontSize: '30px', marginTop: '5px' }} />
                </MenuItem>
              </Menu>
            </div>
            <div>
              {children}
            </div>
          </>
        )}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
