var retrieveComments = ({key, videoId, max = 5}, callback) => {
    $.get('https://www.googleapis.com/youtube/v3/commentThreads', {
      part: 'snippet, replies',
      key: key,
      videoId: videoId,
      maxResults: max,
    })
      .done(({items}) => {
        if (callback) {
          callback(items);
        }
      })
      .fail(({responseJSON}) => {
        responseJSON.error.errors.forEach((err) =>
          console.error(err)
        );
      });
  };
  
  export default retrieveComments;