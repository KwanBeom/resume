import React from 'react';
import Project from 'components/organism/Project';

const AsserTreeProject = () => {
  return (
    <Project
      title="어쩔트리"
      dateRange={{ start: '2023/12', end: '2024/03' }}
      link="https://whereismytree.me/"
      techStacks={['React', 'TypeScript', 'Styled Components', 'Tanstack Query', 'Axios']}
    >
      <Project.Detail
        description={
          <>
            크리스마스 트리의 위치를 등록해 전국의 유저들에게 공유하고, 리뷰를 남겨 생생한 후기를
            사용자들과 나누는 커뮤니티 기반의 서비스입니다.
            <br />
            <br /> 백엔드 3인과 기획 및 디자이너 1인 프론트엔드 2인으로 구성되어 프로젝트를
            진행했습니다. 지도 기반의 서비스를 제공하기 위해서 카카오 지도 공공 api를 활용하여
            개발했습니다. <br />
            <br />
            간단한 구동 영상은{' '}
            <a href="https://github.com/whereismytree/frontend" target="_blank">
              깃허브
            </a>
            에 정리되어 있습니다.
          </>
        }
      />
    </Project>
  );
};

export default AsserTreeProject;
