태그

1. 글자를 입력한다.
2. 엔터를 누른다.
3. 입력한 글자가 태그가 된다.

=>
1. 빈 배열 하나 만들기
2. 글자 입력 후 엔터치면 push로 입력한
요소 배열에 추가
3. 화면에 배열 요소를 태그 모양으로 출력

놓치고 있었던 것 => 불변성..
----------------------------------------

나올 수 있는 화면?
1. signup
1/2 -> 정보 입력 페이지 - 완료
2/2 -> 이메일 인증 페이지 - 아직
*소셜 기능 추가 필요

2. login
1/1 -> 로그인 페이지 - 완료
*로컬스토리지로 로그인 유지할 것x
 -> loadMyInfo -> 서버 세션 가져오는 것으로 하기!

3. sns
1/3 -> 오늘의 추천 -> 일단은 상위 네 개 가져오기
2/3 -> 타임라인 -> 리덕스랑 사가, 백단 체크하기. 
       화면은 사진과 계정 정보 정도만.
       현재: like 이후: 계정 정보 로드
3/3 -> 태그

----------------------------------
오늘 추가할 페이지
1/? -> 마이루트 입력 페이지 -> editor tool 사용하기
------------0528 1800------------------
현재까지 한 것
1. Signup, Login 기본 
2. TimeLine 기본

보강 필요
1. 
 1) 서버 세션 -> 프론트와 연동하기 => 완료
 2) 소셜 로그인 추가
 3) 이메일, 휴대전화 인증 추가

2.
 1) 좋아요 추가
 2) Re마이루트 추가 => 스크랩으로?
 3) 댓글 창, 댓글 추가 구현

------------0529 1500------------------
오늘 하고 싶은 것들

1. 좋아요 추가 => 완료

2. 댓글 창, 댓글 추가 구현 => 완료

3. 소셜 로그인 추가 => 진행중


4. 이메일, 휴대전화 인증 추가
+@= 지도 맵 들여오기!!!!!!!!!!!!!!!!!!!
+@= 에디터툴? 은 담주에.
+@= todayRoute 형식 postcard의 코멘트 나열 부분 참고할 것.

-------------0530 1630-------------------

-----------------------------------------

오늘 하고 싶은 것들

1. 소셜 로그인 추가 => 완료

2. 이메일, 휴대전화 인증 추가

3. 지도 맵 들여오기!!!!!!!!!!!!!!!!!!!


+@= 에디터툴
+@= todayRoute 형식 postcard의 코멘트 나열 부분 참고할 것.
------------0601 1400----------------------
오늘 하고 싶은 것들

1. map api 들여오기

2. 사용할 수 있는 방법 찾아보기
  1) 지도 위에 경로 표시 -> 여러 장소 연결된 경로
  2) 지도 정보 가져오기
  3) 지도 정보 저장하기

3. 구글 말고 네이버 api 살펴보기..!
  폴리라인?
------------0602 1300---------------------
*맵은 googlemap으로 확정, 먼저 검색 페이지 만들 것.

내용은 왼쪽 사이드 바에서 검색(주소, 명칭, 태그), 오른쪽은 지도 띄우기

페이지 기능 나열

1. 현재 위치 찾기 
  1) 자동 위치 찾기(허락 시, 기본 위치는 신논현역)
  2) 현재 위치 버튼 눌러서 찾기(지도 다른 곳 보고 있었어도 현재 위치로 이동하게 됨)
 
 사용 api 
  - Geocoding API
  - Geolocation API


2. 검색하기
  1) 주소 혹은 장소 명칭으로 검색 
    -> 주소 입력 시: 해당 주소로 현재 위치 이동 // 이후 해당 위치에서의 마이루트들 나열 
    -> 명칭 입력 시: 해당 장소로 현재 위치 이동 // 이후 해당 장소가 포함된 마이루트들 나열
  2) 태그 (업로드 기능 완료 시 만들 예정)
    -> 현재 위치 중심으로 검색한 태그 관련된 마이루트들 나열
 
 사용 api 
  - Places Library, Places API

   ----- 그래서 오늘 할 거 ------
1. 현재 위치 찾기 - 진행 중
- navigator 메소드 이용해서 현재 위치 초기 찾기, 클릭 시 현재 위치로 지도 중심 이동 가능
  -> but 정확하지 않음. google api 사용해서 다시 시도해보기


2. 검색하기

---실제 진행 사항
1. 현재 위치 찾기 
  1) 자동 위치 찾기
   - 허락 시, 기본 위치는 신논현역
  2) 현재 위치 버튼 눌러서 찾기
   - 지도 다른 곳 보고 있었어도 현재 위치로 이동하게 됨

사용 api 
 - Geocoding API
 - Geolocation API
 -----------------
 진행상황
-> 첫 화면 로드 시 현재 위치로 지도 중심 이동 가능
   아이콘 클릭 시 현재 위치로 지도 중심 이동 가능
   => 고치고 싶은 점. 현재 위치 좌표 정확하지 않음. 현재 사용한 방법은  
      navigator.geolocation.getCurrentPosition
      이는 원래 사용하고자 했던 googlemap의 geolocation Api는 아님. 한 번 사용고고

-> 받은 좌표(경도, 위도)를 통해 주소로 번역하기

집 가기전에 
1. 좌표-> 주소 번역
2. (가능하면) navigator 말고 구글 api로 현재 위치 받기

-------------0603 0930-----------------------
1. geocode로 위경도를 주소로 교체
2. geolocation으로 현재 위치 기능 교체 
3. 주소 검색해서 해당 주소로 이동
4. 위치 명 검색해서 해당 위치로 이동

-> 그 다음 진행? - 업로드 페이지! => 에디터와 지도 사용!


1. geocode로 위경도를 주소로 교체 - 완료
   -> 걱정되는 점: 위치가 정확하지 않다. 
                  그리고 지번주소가 1301-12 이런식으로 왔는데 실제 주소는 1301 에서 끝난다. 뭘까?

2. geolocation으로 현재 위치 기능 교체 //  23시
3. 주소 검색해서 해당 주소로 이동 
4. 위치 명 검색해서 해당 위치로 이동 

geocode의 response 에서 쓸만한 것 
response.
  results[0].address_components[0].long_name   => 지번 주소
                               [1].long_name   => 동
                               [2].long_name   => 구
                               [3].long_name   => 시

sublocality_level_4 ~~대로
sublocality_level_2 ~~동
sublocality_level_1 ~~구
administrative_area_level_1 ~~시
   => 썼다가 지운 코드
          if(response.results[0].address_components[1].types[2] === "sublocality_level_4") { // ~대로
            road = response.results[0].address_components[1].long_name;
            console.log(road);
          }
          if(response.results[0].address_components[2].types[2] === "sublocality_level_2") { // ~동
            dong = response.results[0].address_components[2].long_name;
            console.log(dong);
          }
          if(response.results[0].address_components[3].types[2] === "sublocality_level_1") { // ~구
            goo = response.results[0].address_components[2].long_name;
            console.log(goo);
          }
          if(response.results[0].address_components[3].types[2] === "administrative_area_level_1") { // ~시
            city = response.results[0].address_components[3].long_name;
            console.log(city);
          }

-----------------------


----------------0604 1400----------------
1. 지도 api 쉽지 않다. 오늘까지 해보고, 진전이 없으면 다른 것부터 할 것임. ex) 에디터 툴 / 혹은 아예 다른 테마 ex) 위치 기반 sns 

2. 현재 안되는 것.  
  
  1. 구글의 api 받는 것 자체가 안된다.
     요인 =>
     cors 오류 때문 -> 그냥 지도 api는 된다. 스택오버플로에서는 googlemap js api는 가능한데 다른 것은 cors 오류가 난다고 한다.
     만약 실제로 그렇다면 아예 api 자체를 바꾸어야 한다. 확인할 것.
  
  2. 쓰고 있는 라이브러리 google-maps-react의 사용법이 정확하지 않아 사용하기 어려움.
     요인 => 
     주석이 엉망이다. 기껏 만들고 왜 설명을 제대로 하지 않는 것일까? 확인할 것.

3. 그래서 오늘 할 것. 
   1) google map api에서 원하는 것(geolocation, 그 외 googlemap api)를 가져올 수 있는지 혹은 못 가져오는지 확인하기.
   2) google-maps-react 사용법 찾아보기

-----------now-----------
1) google map api에서 원하는 것(geolocation, 그 외 googlemap api)를 가져올 수 있는지 혹은 못 가져오는지 확인하기. - 진행중

CORS 오류 해결! => API 요청이므로 nodejs에서 받아오도록 했고, cors와 request 모듈을 사용했다. 성공!

geolocation 역시 위의 방법으로 받아옴!ㅎㅎㅎ
navigator과 비교해볼 것!

2) google-maps-react 사용법 찾아보기

---------------0605 -------------------------
1. youtube 영상을 보고 구글 api 사용방법을 터득했다. (https://www.youtube.com/watch?v=WZcxJGmLbSo)
   일단 onClick 이벤트 사용법을 알게 된 것이 좋았다.
   근데 계속하다 보니까 현재 위치를 가져오는데 너무 쉽게 가져오드라.. 현타 옴
   그리고 위치 검색까지 가능하게 되었다.
   얻은 것.=> 온클릭 이벤트, 현재 위치 가져오기, 위치 검색, 마커 찍기
   그리고 사용하는 모듈이 변경되었다. google-maps-react => @react-google-maps/api
   위치명 자동완성은 use-places-autocomplete

2. 그래서! 이제 뭐할 거냐..
   1) 가져올 만한 기능(현재 위치로 이동 등) 가져오기, onclick 등 가져오기.
      확실한 건 지도 모듈은 바꿀 것. 왜냐면 기존 방식은 안되는 것이 너무 많기 때문.
      레퍼런스도 그렇고..
   2) 근데 결국 auto complete기능이 생겼기 때문에 
    a. geocode로 위경도를 주소로 교체
    b. geolocation으로 현재 위치 기능 교체 
    c. 주소 검색해서 해당 주소로 이동
    d. 위치 명 검색해서 해당 위치로 이동
    은 다 되게 되었다.
    이걸 만들던 api로 이전하고, 현재 위치를 지도 윗 부분에 위치하도록 하면 좋을 것 같다. 특별히 ui적으로 뜻은 없기 때문에!
    
    이전 다하면, 클릭 시 해당 위치의 정보가 뜨도록 해야겠다.
    지도 하단에. 그리고 업로드의 내용들을 붙일 수 있도록 해야지.(장소 선정 -> 시간, 비용 선정 등으로 이어지는.)
    
*카카오 지도를 보면서 느낀 건데.. 상호명 같은 것들은 국내 지도앱이 월등히 앞선다. 근데 경로 api나 지도상 얹는 것이 더 용이할 것 같아 구글을 쓴... 다...
 단점을 극복할 수 있을만한 방법이 뭐가 있을지 생각해봐야겠다.


 -------0606 1130------------------
 1. 지도 api 완전 이전하고, 기능도! 
    1) 시작시 현재위치로 시작
    2) 현재 위치로 이동
    3) 현재 위치 구, 동 단위로 보이기 
    + 맵 ui 루트 표시 빼고는 완성하기

 2. 마이루트 데이터 사이드 바에 올라오도록 하기( 카드 샘플 만들기 )
 
 3. 업로드(editor tool) 부분 툴 가지고 시작하기
    - 제목, 태그, 글 작성 부분 만들기
    - 지도 부분 띄우고, 클릭 시 나오는 것 이전 ui까지 완성하기



import React, { useCallback, useEffect } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as config from '../config';

const FullMap = (props) => {
  const { currentLocation } = useSelector((state) => state.map);
  useEffect(() => {
    console.log(props);
  }, []);
  const onEventCheck = (props) => {
    console.log(props);
  };

  return (
    <div>
      { currentLocation
      && (
      <div>
        <Map
          google={props.google}
          onClick={onEventCheck}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className="map"
          center={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          initialCenter={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          zoom={14}
        />

      </div>
      )}
    </div>
  );
};

GoogleApiWrapper.propTypes = {
  props: PropTypes.shape({
    google: PropTypes.object,
    zoom: PropTypes.number,
    center: PropTypes.object,
    initialCenter: PropTypes.object,
  }).isRequired,
};

export default GoogleApiWrapper({
  apiKey: config.GOOGLEMAP_APIKEY,
})(FullMap);


