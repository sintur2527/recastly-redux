import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = connect(
  store => ({ videos: store.videoList }),
  dispatch => ({
    handleVideoListEntryTitleClick: videos => {
      dispatch(changeVideo(videos));
    }
  })
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
