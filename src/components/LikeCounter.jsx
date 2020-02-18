import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      count: 0
    }
    this.incrementLikes = this.incrementLikes.bind(this)
    this.decrementLikes = this.decrementLikes.bind(this)
  };

  incrementLikes = (props) => {
    let newCount = this.state.count +1
    this.setState({ count: newCount })
  }
  decrementLikes = () => {
    let newCount = this.state.count -1
    this.setState({ count: newCount })
  }
  render () {
    return(
      <div>
      <button onClick={this.incrementLikes}>Click Me</button>
    </div>

    );
  }
}


export default Post;
