import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = q => {
  return function thunk(dispatch) {
    return searchYouTube({ query: q }, videos =>
      dispatch({ type: 'UPDATE_VIDEO_LIST', videos: videos })
    );
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
