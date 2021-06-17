# now
1_ ssr 외 기타 업데이트하기
   - ssr => login부분은 안함. 추후 문제 생기면 하기.
         => timeline 완료. (초기 4개 받아오기, 이후 10개로 수정 가능)
         => todayroute 부분도 안되네? 추후 확인하기
   - 다이나믹 라우팅
      => 개별 마이루트 페이지 완료, 추후 상세 내역 수정 필요
   - css 서버사이드 렌더링 
      => npm i babel-plugin-styled-components 
         그리고 _document.js 작성과 폴리필io 작성
   - moment => MyRouteCard에 적용함.
   - webpack => withBundleAnalyzer 적용
   - immer => ie 사용가능하도록 es5 적용
   - sequelize 문법 최신화

2_ 기능으로(삭제 부터)

1. 인강 듣자^^
   - ssr, aws
// page에서 안쓰고 document나 app에서만 쓰는 특수한 ssr 메서드임
-------------------------------------------------------

ssr x(csr) = > 새로고침 시 프론트 서버로 감. 그런데 로그인이 잠깐 풀렸다가  브 -> 백으로 요청 보내서 로그인 내용 받아옴.
브 -> 프 -> (렌더링 후) -> 브 -> 프 -> 백 -> 프 -> 브

ssr o => 바로 백으로 보냄 
브 -> 프 -> 백 -> 프 ->브

import { createWrapper } from 'next-redux-wrapper';
=> 이걸로 개별 페이지들의 ssr을 적용해 줄 것.

원래는 next에서 ssr용 메소드 4개를 제공함. 그런데 리덕스와 함께 쓰는데 문제 있음. 따라서 next에서 제공하는 서버사이드 렌더링용 메서드로 쓰는 게 나음.

사실 useEffect 땜에 데이터의 공백이 생김. 화면 받고 받아오므로.. 

그렇다면 데이터를 받고 화면을 구성한다면?

=> getinitialProps(next 8v) 그런데 조만간 없어질 듯..
=> next 9v 부터 3가지가 나왔음. 

// 요거 놔두면 알아서 home 보다 먼저 실행됨. wrapper는 store에서 만들었던 그 wrapper임. 이걸 두고두고 쓰는 것.

import wrapper from '../store/configureStore';

...

export const getServerSideProps = wrapper.getServerSideProps((context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  })

});

ssr 원리: @@init에서는 초기 상태 그대로 있지만, getServerSideProps이 실행되면, 내용을 hydrate로 보내줌.

rootReducer: index 안에 index user post 추가하는게 아니라 index user post 자체를 씌울 수 있도록 해야함.

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

이는 
const rootReducer = combineReducers({
  user,
  post,
})
export default rootReducer;

와 같다. 확장 가능하게 만든 것임..
case HYDRATE를 넣기 위해서..

이제 index 안에 index 있는 문제가 사라짐.
user, post만 남음. 그런데 loading = true가 되어 있음..
success 까지 안됨.
request하고 success까지 기다리지 못하고 돌아오는 것.
기다려주는 장치가 필요함.
(next 에서 제공하는 코드)
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();


이후..
서버 상에서 로그인 되어 있는 상태. 그런데 브라우저 상에서는 안됨.
credentiail과 cors..

getServerSideProps는 브라우저가 아닌 프론트에서 실행되는 것.
const Home = () => { } 이 부분은 브라우저와 프론트에서 실행되는 것.

프->백 으로 get으로 가져올 때 도메인이 다름.. 그러면 쿠키 전달 안됨. 하려면 credentials =true 해주어야 함.
근데 해줬잖아? 근데 왜..?
받는 쪽 문제가 없다면 보내는 쪽 생각(브라우저)
현재 하는 getServerSideProps는 프론트 서버에서 백으로 보내는 것이므로 프론트의 보내는 것을 고민. 브라우저가 개입할 수 없음.
서버에서 서버로 보낼 때는 cookie를 직접 보내주어야 함.
쿠키가 없으면 로그인 한 상태여도 백엔드는 로그인을 한지를 모름.
그래서 쿠키를 전달해주어야 함.
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.cookie = cookie;
이러면 cookie가 들어감.

ssr 완성.
근데 이렇게 되면 로그인이 공유가 됨.
하나밖에 없는 서버에 쿠키 값을 넣어버리면 다른 사람이 넣었을 때도 그렇게 됨. 내 정보로 다른 사람이 로그인 되는..
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.cookie = '';
  // 실제로 쿠키를 써서 요청을 보낼 때만 잠깐 쿠키 넣어놨다가, 쿠키 안써서 요청 보낼 때는 서버의 쿠키를 제거하는 것.
  if (context.req && cookie) { // 서버일 때랑, 쿠키가 있을 때만 넣어주기
    axios.defaults.headers.cookie = cookie;
  }
  next ssr 할 때 프론트 서버에서 쿠키가 공유되는 문제.
  쿠키를 안보내면 로그인 정보가 백으로 안넘어가고
  쿠키를 넣자니 모든 서버에 공유되어서 나로 로그인되고.
  그걸 막으려면 쿠키를 넣었다가 막았다가.. 이렇게 해야함.

  
export const getStaticsProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST, // 내 정보 아닌 특정한 사람의 정보 가져옴
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

이렇게 해주면 getStaticsProps도 같이 ssr이 됨.


// 특정한 사람 정보 가져오는 라우터
router.get('/:userId', async (req, res, next) => { // GET /user
    try {
        const fullUserWithoutPassword = await User.findOne({
          where: { id: req.params.userId },
          attributes: {
            exclude: ['password']
          },
          include: [{
            model: Post,
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          }]
        })
        if (fullUserWithoutPassword) { // 혹시 없는 사람 
          res.status(200).json(fullUserWithoutPassword);
        } else {
          res.status(404).json('존재하지 않는 사용자');
        }
    } catch (error) {
      console.error(error);
   next(error);
  }
});


getStaticsProps, getServerSideProps 차이?

언제 접속해도 데이터 바뀔일 없으면 getStaticsProps, 쓰기가 까다롭고,
접속하면 상황에 따라 화면이 바뀌어야 하면 getServerSideProps를 쓰게 됨.
getStaticsProps은 블로그 게시글 처럼 잘 안바뀔 때 사용. 나중에 next에서 build할 때 정적인 html 파일로 뽑아줌. 미리 html 파일로 만들어서 나중에 사람들이 페이지 방문하면 html을 제공하는. 쓸 수 있으면 해놓는 게 서버에 무리가 덜감. 그안의 정보가 안바뀌는 것일 때 이걸로.. sns도 댓글 계속 달리고.. 거의 못씀.

getServerSideProps는 방문한 그 때 데이터 받아서 해줌. 

회원가입 페이지도 getServerSideProps로..

-------------------------
각 개별 페이지에 대한 다이나믹 라우팅

post/1.js => 수억개 해야..
=> post/[id].js // 포스트 폴더 안에 [id].js => id부분이 계속 바뀜.
따라서 익스프레스 없이도 가능함.

import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        {id}번 게시글
    </div>
  );
};

export default Post;

~번 게시글이라는 페이지 생성됨.


...
 [id] 부분 => loadpost.. 이런것 추가됨. => singlepost
 router에도 get 추가.
 og: title.. => 카톡 같은 거에서 미리보기
 
 ------

css 서버사이드 렌더링
넥스트 내부적으로 웹팩, 바벨 돌아감. 임의로 바꿀 수 있음.
바벨 설정

{
    "preset": ["next/babel"],
    "plugins": [
        ["babel-plugin-styled-components", {
            "ssr": true,
            "displayName": true
        }]
    ]
}
npm i babel-plugin-styled-components 

그리고 _document.js 작성과 폴리필io 작성

---------

사용게시글, 해시태그 게시글

load_hashtag_post_request
그리고 재사용 가능.. 
ex_ case: load_user_popst_success
    case: load_h
    asdf
    break;

router도 추가. routes/hashtag.js

encodeURIComponent(data) => 한글이나 특수문자 들어갈 때 에러x 주소창에 넣어도 되는 문자로 바뀜.
그리고 decodeURIComponent(data)로 받아주어야 함.

-------------------

getStaticPaths

getStaticprops와 같이 쓰며, 다이나믹 라우팅일 때 씀.

다이나믹 라우팅일 때 getStaticprops를 쓰면 무조건 getStaticPaths이 있어야 함.
없으면 렌더링 자체가 안됨.

// ..[id].js
export async function getStaticPaths() {
  const result = await axios.get('/post/list');
  return {
    paths: [ 
      { params: { id: '1' } }, // 1번 게시글이 미리 빌드됨. html page로.
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
}

근데 이러면 의미가 없는게.. 페이지 몇 개인지 모르는데 가져옴? x 
  const result = await axios.get('/post/list'); 지움.
  html로 미리 만들어둠 직한 페이지들만 넣기.
fallback:false이면 적히지 않는 페이지 에러 뜸.  true로 하면 에러 안뜸.
대신에 ssr이 안됨.
이 때 csr할 수 있도록 기다려주는 역할을 하게 하는 것 있음.

if(router.isFallback) {
  return <div>로딩중...</div>
}
요렇게 처리해줌.

fallback이  true면 paths에 경로가 없을 때 해당 내용을 서버로부터 불러온다.

암튼 위의 두 메소드는 만들기가 까다롭고.. html로 만들어도 되는 내용을 대상으로 한다.
그래서 왠만하면 사용하기 힘들 것. 사용할 수 있다면 적극적으로 사용!

------------------
swr
npm i swr // npm에서 만듦. 

// profile.js 
import useSWR from 'swr';

//.../

const fetcher = (url) => axios.get(url.{withCredentials: true }).then((result) => result.data);


const a = () => {
  const { data: followersData, error: followerError } = useSWR(`http://localhost:3065/user/folowers`,fetcher)
  const { data: followingsData, error: followingError } = useSWR(`http://localhost:3065/user/folowings`,fetcher)
  // => dispatcher 지울 수 있음.

  if(followerError || followingError) {
    console.error(followerError || followingError);
    return <div>'팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
  }

  useEffect...
}

그런데 이렇게 하면 useEffect가 실행 안됨. hooks 실행 횟수가 달라짐. 그러면 hooks  컴포넌트는 에러 발생. return이 hooks보다 위에 있을 수 없다.

router에도 limit을 줌

그런데 router에서도 오류가 생길 수 있다. 가령 '/:userid' 이런 주소를 잗는 라우터가 있다면,
다른 파람도 자기것으로 받아들일 수 있기 때문이다. 이는 위로 부터 아래로 읽어내리는 미들웨어의 특성 때문이다.
따라서 이와 같이 파라미터를 주소값으로 받는다면, 맨 아래로 내려주는 것이 좋다.

profile.js, followlist.js 수정

그런데 이렇게 하면  데이터 낭비가 될 수 있음. 왜냐면 중복 데이터(3,6,9... )가 발생하므로.
그래서 옵셋과 리밋 활용한다고 함.
useEffect에 followersData의 id로 비교해서 기존 state에 concat한다.
3, 3, 3, 이런식으로 불러와야..

fetcher은 util 같은데 보관해서 불러와 사용하거나, 개조해서 사용한다.
load 같은 경우 swr 많이 사용.. 꼭 ssr되는 경우가 아니라면.

-------------------
해시태그 검색하기

다이나믹 페이지로 링크 이동하는 것.
applayout에서.. search 부분 수정. 해시태그 검색 시 해당 해시태그 있는 게시물들 가져옴.

const onSearch = useCallback(() => {
  Router.push(`/hashtag/${searchInput}`);
}, [searchInput]);

그리고 next/Link 통해서 페이지 연결
postcard.js, userprofile에 적용.

-------------
moment, next 빌드하기

// 시간 사용하기 // postcard.jsq
import moment from 'moment';

moment.locale('ko');

//...

<div>{momentpost.(createdAt).format('YYYY.MM.DD')}</div> // format은 momentjs.com 에서 볼 수 있음. fromnow 를 쓰면 현재 시간으로부터 관계.

빌드 과정이 필요하다.

기능 만든 후 배포.. 이 때 moment가 문제를 일으킴.
배포는 실제 서버에 배포하는 것.
build를 하면 html css js로 결과물이 나온다. 그걸 가지고 서버에 올리면 사용자들의 브라우저로 전달됨.

개발서버는 너무 느림 그래서 빌드. 개발 필요한 것 빼고 빌드함.
npm run build => 빌드함. 

코드 바꿧다 => github에 푸쉬 -> ci/cd 도구 - 코드 테스트, 빌드를 해줌. 에러 있으면 알림을 줌. 

그래서 테스트, 빌드 해주는 ci/cd 툴을 github이랑 연결해서 github에 푸쉬하면 테스트, 빌드하고 aws에 연결시켜주는 것..

각 페이지 별로 1m 안넘으면 서비스 가능. 넘으면 code splitting 해야함. 모바일에서 에러 생김.

아이콘
람다 -> ssr해주는 페이지
검은 동그라미 -> getstaticsprops , 역시 srr, html로 미리 만들어 놓는 것.
흰 동 -> 아무 상관없이 그냥 정적인 페이지.

error 페이지 
=> 에러 내용은 안보여주는 게 낫고, 고객센터로, 홈으로, 이런 것들 써주는 것이 나음.

npm i @next/bundle-analyzer

=> 



-----------------
custom webpack

next.config.js 파일 만들고 next에 기본 설정 있기 때문에, config 통해서 기본 설정 바꾸어주는 식으로 가야함.

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  compress: true,
  webpack: (config, { webpack}) => {
    const prod = process.env.NOED_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ]
    };
  },
};

immer을 쓸 수도 있음. 모듈을 바꾸고 싶다면.

js, ts 이런 파일들 모이면 몇 메가 될 수도. 
이것을 gzip으로 압축하면 줄어듬. 그리고 브라우저가 이를 압축해제해서 사용할 수 있음.
따라서 압축해주는 것이 좋음.
압축된 파일 만들어주는게 CompressPlugin

withBundleAnalyzer도 주석 따라 작성.

그런데 여기 작성하려면 package.json에다가  "build": "ANALYZE=true NODE_ENV=production next build"
근데 이게 window에서는 안되고 리눅스나 mac에서만 됨.
그래서 npm i cross-env 
"build": "cross-env ANALYZE=true NODE_ENV=production next build"

=> 브라우저를 통해 분석한 내용을 보여줌.
클라이언트 부분을 봐야함. concatenated는 이미 합쳐져서 어쩔 수 x 
없앨 수 있는 부분 있으면 없애는 것이 좋음.
예를 들어서 moment.js는 여러 나라들의 언어가 들어있음.
moment locale tree shaking


--------------
db 최신 문법 적용

const DataTypes = require('sequelize');
const { Model } = DataTypes;

modul.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init({
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
      }, {
            modelName: 'Comment',
            tableName: 'comments',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
        db.Comment.belongsTo(db.User); 
        db.Comment.belongsTo(db.Post);
  }

};

// index.js
const Sequelize = require('sequelize');
const comment = require

const env = process.env.NODE_ENV || 'development'; //||는 디폴트를 설정하는 것.
const config = require('../config/config')[env]; //기본 환경변수를 development로. 배포시 production으로 전환
const db = {};

//시퀄라이즈가 노드와 마이sql 연결, 내부적으로 mysql2를 사용중. 연결 성공 시 sequelize에 연결 정보 들어감
const sequelize = new Sequelize(config.database, config.username, config.password, const comment = require('./comment);
const hashtag = require('./hashtag);
//....이외 것들

db.Comment = comment;
db.Hashtag = hashtag;
//.. 이외 것들

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

타입 추론 더 잘되므로 이것 더 추천


------
immer => explorer에서 사용 시

util 폴더 - produce.js

import produce, { enableES5 } from 'immer';

export default (...args) => {
  enableES5();
  return produce(...args);
};

=> 각 reducer 파일에 넣기
import produce from '../util/produce';

swr도 ssr 가능
return 해주고, props로 넘겨줌.  index.js


---------------------------------------
    "start": "cross-env NODE_NODE_ENV=production next start -p 3060"




--------------------------------------

back mysql 설치

sudo apt-get install -y mysql-server

