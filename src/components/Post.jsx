import React from 'react';
import PropTypes from 'prop-types';
// import LikeCounter from './LikeCounter';

function Post(props) {

  const clicker = () => {
    props.pleaseWork(props.id);
  }

  return(
    <div>
      <h4>{props.title}</h4>
      <sup>{props.timestamp}</sup>
      <p>{props.content}</p>
      <p>Likes: {props.likes}</p>
      <button onClick={clicker}>yo</button>
    </div>
  );

}


Post.propTypes = {
  likes: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  timestamp: PropTypes.string
}

export default Post;
