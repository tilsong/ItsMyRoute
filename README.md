### README 수정 2022.08.24
<br />
<br />


    version 1.0, update 2021.07.13
# It's My Route
---
## 프로젝트 소개
<br>
오늘도 똑같은 하루,
그러나 일상을 벗어나기란 어려운 일입니다.

휴가철 여행만이 유일한 해결책처럼 보이기도 합니다.
우리의 일상이 여행이 될 수는 없을까요?

일상을 기록하고, 공유하고, 함께 경험합니다.
이 사소함으로 우리는 새로운 일상을 맞이할 것입니다.

일상이 여행이 되는 오늘, It's My Route.<br>
<br>
아래 링크를 클릭하시면 PPT로 포트폴리오에 대한 설명을 보실 수 있습니다.
<br>
설명 PPT | https://drive.google.com/file/d/1nlKcCE2Ucg1_YfBHHoh8rU6Ouj6fZBXw/view?usp=sharing

---

### 🗺지도 기반 루트 공유 SNS
 
*루트란?
  두 개 이상의 연결되는 장소를 통해 표현되는 사용자의 경험이 담긴 경로
<br><br>

#### 🔥이런 일을 할 수 있어요!


##### 자신의 일상 루트를 기록하고 공유합니다.
  - 위치 정보, 소요금액, 소요 시간, 경험한 내용, 태그, 사진을 기록합니다.

##### 지도를 통해 여러 루트들을 찾아볼 수 있습니다.
  - 직접 지도를 이동시키거나, 지역을 검색하여 루트를 찾아볼 수 있습니다.

##### 유저별로 루트를 관리할 수 있어요.
  - 유저별 페이지를 통해 루트들을 관리할 수 있으며, 팔로우 기능을 통해 지속적으로 루트를 받아볼 수 있습니다.

---

### ⚙개발환경

언어 : Javascript

프론트엔드: React, Redux, Redux-saga, Next

백엔드: NodeJs, Express.js, MySql, Amazon s3

Api: GoogleMap Api 


---
#### 👨‍🔧1인 개발

<br>

### 🎈기능 구현 (최근 수정 일자 21.07.05)
<br>

#### 1. 로그인 및 회원가입

##### 소셜 로그인
![socialLogin](https://user-images.githubusercontent.com/76680394/124427901-fafb1280-dda6-11eb-9412-c02d11b48bc3.gif)

- 로그인 후 메인 페이지 접속 가능
- facebook, naver, kakao, google 소셜 로그인 가능

<br>

##### 회원가입 및 로컬 로그인
![로컬 가입하고 로그인](https://user-images.githubusercontent.com/76680394/124428037-27af2a00-dda7-11eb-8d31-1d1e7f28e00f.gif)
- passport와 bcrypt(암호 해쉬화) 사용


<br><br>

#### 2. 타임라인

##### 좋아요, 댓글
![탐라 댓글 하트](https://user-images.githubusercontent.com/76680394/124430503-34814d00-ddaa-11eb-81f5-e1aa5b1835e8.gif)
- SNS의 타임라인 기능
- 상단에는 오늘의 선정 루트 4개, 아래는 최신순으로 게시물 나열
- 좋아요와 댓글 기능
<br>

##### 인피니티 스크롤
![인피니티](https://user-images.githubusercontent.com/76680394/124430743-85914100-ddaa-11eb-9a8f-60bc65c4b821.gif)
- 인피니티 스크롤 기능. 스크롤 일정 부분 내리면 추가로 10개의 게시물을 더 가져옴.


<br><br>

#### 3. 개별 게시물

##### 상세 루트 정보 보기
![게시물 상단](https://user-images.githubusercontent.com/76680394/124431236-16681c80-ddab-11eb-9bba-ade3fdac5b11.gif)
- 게시물 상단에는 해당 게시물의 정보 표시
- 경로 보기 클릭 시 각 장소별 주소, 소요시간, 비용 정보 
- 지도와 보기 클릭 시 모달에서 지도와 함께 장소별 정보 보기 가능
<br>

##### 사진 크게 보기, 작성자 정보 보기
![ezgif com-gif-maker](https://user-images.githubusercontent.com/76680394/124432266-6693ae80-ddac-11eb-9307-68aa31893567.gif)
- 사진 크게 보기 기능, 밀어서 다른 사진 보기 기능
- 작은 지도로 루트 보기 기능
- 댓글 쓰기 기능
<br><br>

#### 4. 지도

##### 지도에서 마이루트 검색하기
![지도상 마이루트](https://user-images.githubusercontent.com/76680394/124433012-3698db00-ddad-11eb-925b-081dda6177b6.gif)
- 현재 위치 파악해서 주변 마이루트 표시
- 지도 이동 시 이동한 지역 마이루트 표시
- 지역명으로 검색해서 지도 이동하고, 해당 지역의 마이루트 표시
<br>

##### 사이드 바
![사이드바](https://user-images.githubusercontent.com/76680394/124433556-d6eeff80-ddad-11eb-8629-d1df1fd4f44b.gif)
- 사이드 바에 지도에 나타난 각 루트들에 대한 설명 표시
- 각 루트 설명된 상단 오른쪽의 색과 지도상 루트의 색으로 루트 구분 가능
- 루트 설명 클릭 시 상세 설명 모달 나타남.
- 상세 보기 통해 해당 마이루트의 게시물로 이동
<br><br>

#### 5. 마이루트 업로드

##### 제목, 태그, 내용, 사진 입력
![0](https://user-images.githubusercontent.com/76680394/124439109-f7ba5380-ddb3-11eb-90b1-9ecbe4e5e015.gif)
- 내용 중 엔터(\n)인 부분 처리하여 저장, 이후 게시물에서 다시 처리하여 엔터 쳤던 부분 구별되게 보이도록 함.
- 태그 입력 후 엔터 누르면 태그 생성됨. 마우스로 클릭 시 삭제됨.
- 사진은 aws s3으로 저장
<br>

##### 루트 업로드
![1](https://user-images.githubusercontent.com/76680394/124439570-89c25c00-ddb4-11eb-9b4c-59ed87538777.gif)

![2](https://user-images.githubusercontent.com/76680394/124439667-a6f72a80-ddb4-11eb-93cb-b7aa7b310a91.gif)
- 지도 클릭 시 해당 위치 주소 보이도록 함. 원할 경우 해당 장소의 이름을 입력하고, 입력하지 않으면 주소가 해당 장소의 이름이 됨.
- 해당 장소에서 소요 시간과 금액을 입력할 수 있음. 생략가능함.
- 2개 이상의 장소를 입력할 경루 선으로 장소들이 연결됨.
- 작성 완료시 타임라인 피드의 최상단에 업로드됨. 마이 페이지에도 추가됨.


<br><br>

#### 6. 유저 페이지

##### 유저 페이지
![유저 페이지](https://user-images.githubusercontent.com/76680394/124434620-0fdba400-ddaf-11eb-92cb-392a8e98a8fb.gif)
- 상단에 유저 정보 표시
- 중단 왼쪽에 최근 루트 작성 지역 표시
- 해당 유저의 작성 게시물들 최신순으로 나열
<br><br>

##### 마이 페이지
![ezgif com-gif-maker](https://user-images.githubusercontent.com/76680394/124440739-e96d3700-ddb5-11eb-8c37-a893e35d8f0e.gif)
- 상단에 자신의 정보 표시, 최신순으로 마이루트 나열.
