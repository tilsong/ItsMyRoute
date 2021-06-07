1. 태그 기능 구현하기
   - marker 기능 활용해서 해보기. 한 시간 해보고 안되면 딴 거 하기(할 것 많기 때문)

2. 에디터 툴 적용해서 제목, 태그, 글 작성, 이미지 업로드 기능 만들기

3. 지도 제외하고 업로드 기능 완성하기.

+ a = 업로드 부분 클릭 이벤트로 상세정보와 진행 창 띄우는 기능 해보기

  const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const onMapClick = useCallback((event) => {
    // setMarkers((current) => [
    //   ...current,
    //   { // 위도, 경도, 현재 시간이 기록됨.
    //     lat: event.latLng.lat(),
    //     lng: event.latLng.lng(),
    //     time: new Date(),
    //   },
    // ]);
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then( // 경도와 위도를 매개변수로 넣음.
      (response) => {
        const address = response.results[0].formatted_address; // 전체 주소
        console.log(address);
        // const premise = response.results[0].address_components[0].long_name; //지번
        const array = address.split(' ');
        const goo = array[2]; // 구
        const dong = array[3]; // 동
        console.log(`${goo} ${dong}`);
        setClickLocation(`${goo} ${dong}`);

      },
      (error) => {
        console.error(error);
      },
    );
  }, []);
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: 'marker1.svg',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Bear Spotted!</h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}

display: flex => 여러 div 한줄로 가능



{/* 
  const a = ['123', '234', '345'];
  <div style={{ display: 'flex' }}>
{a.map((as) => (
  <div>
    <Sample sam={as} />  
  </div>
))}
</div> 
  const Sample = ({ sam }) => (
    <div>{sam}</div>
  );
*/ }


///태그 박스 커스터 마이징

const tagBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 
`;

pages/_error.js, pages/404.js : (https://nextjs.org/docs/advanced-features/custom-error-page)

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const TagBox = () => {
  const [input, onChangeInput, setInput] = useInput();
  const [localTags, setLocalTags] = useState([]);

  const TagOneDiv = styled.div`
    font-size: 15px;
    background-color: #B4EEB4;
    color: white;
    border-radius: 20px;
    margin: 0 2px;
    padding: 3px;
  `;

  const onRemove = useCallback((tag) => {
    setLocalTags(localTags.filter((t) => t !== tag));
  }, [localTags]);

  const TagOne = useCallback(({ tag }) => (
    <TagOneDiv onClick={() => onRemove(tag)}>{tag}</TagOneDiv>
  ));

  const insertTag = useCallback((tag) => {
    if (!tag) return;
    if (localTags.includes(tag)) return;
    setLocalTags([...localTags, tag]);
  }, [localTags]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    insertTag(input.trim());
    setInput('');
  }, [input, insertTag]);

  return (
    <div style={{ display: 'flex' }}>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex' }}>
          {localTags.map((tag) => (
            <div>
              <TagOne key={tag} tag={tag} />
            </div>
          ))}
          <input placeholder="태그를 입력하세요" value={input} onChange={onChangeInput} style={{ fontSize: '15px', border: 'none', outline: 'none', margin: '0 0 3px 0' }} />
        </div>
      </form>

    </div>
  );
};

export default TagBox;

-------강요천 강사님 내용요약
- 리액트로 주가 되서 뽑는 경우는 많지 않다.. 웹개발자 경력직을 조금 가르쳐서 리액트를 하게 하는 경우가 많다. 뽑는다면 아예 그쪽을 사용하는 스타트업 정도.
- 그러므로 스프링과 함께 보여줘서 엑스트라 점수를 얻는 쪽으로 생각해야 한다고 한다.
- 포트폴리오도 보았다. 브로셔처럼 만들어져 있고, ppt 같은데 컬러인쇄를 하여 넘기면서 읽었을 때 깔끔하고, 간결하게, 그러나 무엇을 만들고 노력했는지를 볼 수 있도록 만들어져 있었다.
- 이력서, 면접을 생각했을 때, 인사담당자가 나를 사장에게 어떻게 보고할 수 있을지를 생각해야 한다. 나를 설명할 때 ~한 사람입니다. 리액트 하나는 잘 하겠는데요? 가르치면 이거 잘 할것 같은데요? 같은 설명될 수 있는 사람이어야 한다.
- 휴
- 이력서, 포트폴리오 만들자.
