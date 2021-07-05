import React from 'react';
import Link from 'next/link';
import { RiKakaoTalkFill, RiFacebookFill, RiGoogleFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import Image from 'next/image';

const SocialLogin = () => (
  <div style={{ marginTop: '10px' }}>
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <div style={{display: 'flex', position: 'absolute', left: '50%', transform: `translateX(-50%)`}}>
        <div>
        <Link href="http://localhost:3065/auth/facebook" >
          <Image src="/svg-facebook-icon-1.svg" width={150} height={150} />
        </Link>
        </div>
        <div style={{ marginLeft: '10px'}}>
        <Link href="http://localhost:3065/auth/naver" >
          <Image src="/naver.png" width={150} height={150} />
        </Link>
        </div>
        <div style={{ marginLeft: '10px'}}>
        <Link href="http://localhost:3065/auth/kakao">
          <Image src="/kakaotalk_black_logo_icon_147117.png" width={150} height={150} />
        </Link>
        </div>
        <div style={{ marginLeft: '10px'}}> 
        <Link href="http://localhost:3065/auth/google">
          <Image src="/google-plus_icon-icons.com_66095.png" width={150} height={150} />
        </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SocialLogin;
