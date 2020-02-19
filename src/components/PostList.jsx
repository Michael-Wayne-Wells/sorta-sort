import React from 'react';
import Post from './Post';
import LikeCounter from './LikeCounter';
import PropTypes from 'prop-types';



const sortList = (list) => {
  let sorty = list.sort(function (a, b) {
    return b.likes - a.likes;
  });
return sorty;
}



class PostList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      postsFeed: this.props.feed
    }
    this.pleaseWork = this.pleaseWork.bind(this);
  }

  pleaseWork = (id) => {
    let newList = [...this.props.feed];

    newList.map((p) => {
      if (p.id === parseInt(id)) {
        p.likes += 1;
      }
      return p;
    });
    const sortedList = sortList(newList);
    this.setState({postsFeed: sortedList})
  }

  render () {
    console.log(this.props.feed, this.state.testPosts);
    return(
      <div>
        {this.props.feed.map((p, i) => (
          <Post
            title={p.title}
            content={p.content}
            timestamp={p.timestamp}
            likes={p.likes}
            key={i}
            id={p.id}
            pleaseWork={this.pleaseWork}
            />
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
  feed: PropTypes.array
}
export default PostList;
