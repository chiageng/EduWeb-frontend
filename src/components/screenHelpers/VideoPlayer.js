import React from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
  LoadingSpinner,
} from "video-react";

function VideoPlayer({video, image}) {
  return (
    <>
      <Player src={video} poster={image}>
        <LoadingSpinner />
        <BigPlayButton position="center" />
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={10} order={1.2} />
          <VolumeMenuButton vertical order={6.1} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton
            rates={[2, 1.5, 1.25, 1, 0.5, 0.25]}
            order={7.1}
          />
          <VolumeMenuButton disabled />
        </ControlBar >
      </Player>
    </>
  );
}

export default VideoPlayer;
