import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';

var init = exampleVideoData[0];

var currentVideo = (state = init, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }
};

export default currentVideo;
