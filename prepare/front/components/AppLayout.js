import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import {BellOutlined, UserOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import {FiMap} from 'react-icons/Fi';

const AppLayout = ({children}) => {

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item style={{margin: '0 0 0 20px', fontSize: '20px'}}>
                    <Link href="/"><a>Its My Route</a></Link>
                </Menu.Item>
                <Menu.Item style={{float:'right'}}>
                    <Link href="/user"><UserOutlined /></Link>
                </Menu.Item>
                <Menu.Item style={{float:'right'}}>
                    <Link href="/announce"><BellOutlined /></Link>
                </Menu.Item>
                <Menu.Item style={{float:'right'}}>
                    <Link href="/searchMap"><FiMap /></Link>
                </Menu.Item>
            </Menu>

            <div>
                {children}
            </div>
        </div>

    )
}

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
};

export default AppLayout;