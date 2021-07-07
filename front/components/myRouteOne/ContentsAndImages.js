import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import MyRouteImage from './MyRouteImage';

const ContentsAndImages = ({ myRouteOne }) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    const temp = myRouteOne.content.replace(/<br\s*\/?>/mg, '\n');
    const contentTemp = temp.split('\n');
    setContent(contentTemp);
  }, []);

  return (
    <div className="contentsAndImages" style={{ margin: '50px 10px 10px', bottom: '10px' }}>
      <div className="contents" style={{ position: 'relative', margin: '30px 0', left: '15%', width: '70%', fontSize: '19px' }}>
        {content && content.map((line) =>
          (<div>{line}<br /></div>)
        )}
      </div>
      <div style={{ position: 'relative', left: '15%', width: '70%', cursor: 'pointer' }}>
        {myRouteOne.MyRouteFiles[0] && <MyRouteImage myRouteFiles={myRouteOne.MyRouteFiles} />}
        {myRouteOne.MyRouteFiles[0]
                && (
                <Tooltip title="이미지를 클릭하면 더 크게 볼 수 있습니다." color="blue">
                  <BsFillQuestionSquareFill style={{ fontSize: '30px', margin: '5px 0' }} />
                </Tooltip>
                )}
      </div>
    </div>
  );
};

ContentsAndImages.propTypes = {
  myRouteOne: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    User: PropTypes.object,
    UserId: PropTypes.number,
    BannerId: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.any),
    MyRouteFiles: PropTypes.arrayOf(PropTypes.any),
    MyRouteDetails: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ContentsAndImages;
