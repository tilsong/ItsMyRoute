# now

1. 업로드 - 경로들까지 묶어서 업로드 (작성 중 글 중간에 사진 삽입 등은 나중에) => 진행 중


지금 문제! => title, content, images, tags 까지는 괜찮은데, path  더하면 오류남.
메인              useRef   submitAll  getuploadLocations
글 업로드       submit( c.submitAll ) - 매개 변수는 title, tags, content, imagepaths
경로 업로드     useRef.sendLocations - getuploadLocations

router까지 감. 현재 문제는 path 객체가 object로만 인식이 되고 있다는 것.
바꾸려면? 파싱해서 보내거나, 받아서 파싱해야함.
일단 해서 보내는 걸로.
* 그리고 마지막으로 경로를 건드리면 tags가 안들어감.

일단은 보내는 문제 부터 => 파싱 문제 해결. db까지 잘 들어감ㅎ

2. 업로드 이후 메인으로 이동하도록 경로 설정

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) { // page에서 안쓰고 document나 app에서만 쓰는 특수한 ssr 메서드임
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script scr="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}