import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions";


function Tweet( tweetArr ) {

  return (
    <div className="tweet">
      <ProfileImage image={ tweetArr.tweet.user.image }/>
      <div className="body">

        <div className="top">
          <User name={ tweetArr.tweet.user.name} handle={ tweetArr.tweet.user.handle}/>
          <Timestamp time={ tweetArr.tweet.timestamp } />
        </div>

        <Message message={ tweetArr.tweet.message } />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
