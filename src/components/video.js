import React from 'react';
import styled from 'styled-components';

import bgvideomp4 from '../assets/bgvideo.mp4';
import bgvideowebm from '../assets/bgvideo.webm';

const VideoWrapper = styled.video`
  position: fixed;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  height: auto;
  z-index: -100;
  left: 50%;
  transform: translateX(-50%);
`;

const Video = () => (
  <VideoWrapper preload="true" autoPlay={true} loop={true} muted={true}>
    <source src={bgvideomp4} type="video/mp4" />
    <source src={bgvideowebm} type="video/webm" />
  </VideoWrapper>
);

export default Video;
