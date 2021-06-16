import React from 'react';
import Link from 'next/link';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import Image from 'next/image';

const Social = styled.div`
    border: 1px solid black;
`;

const SocialLogin = () => (
  <Social>
    <Link href="http://localhost:3065/auth/kakao">
      <a>
        <RiKakaoTalkFill style={{ fontSize: '100' }} />
      </a>
    </Link>
    <Link href="http://localhost:3065/auth/facebook">
      <a>
        <AiFillFacebook style={{ fontSize: '100' }} />
      </a>
    </Link>
    <Link href="http://localhost:3065/auth/google">
      <a>
        <FcGoogle style={{ fontSize: '100' }} />
      </a>
    </Link>
    <Link href="http://localhost:3065/auth/naver">
      <a>
        <Image src="/naver.png" width={90} height={90} style={{ padding: '10px' }} />
      </a>
    </Link>
  </Social>
);

export default SocialLogin;
