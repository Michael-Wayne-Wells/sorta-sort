import React from 'react';
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import NewPostForm from './NewPostForm';


class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  render(){

    return(
      <div className="bodyStyle">
      <style jsx>{`
        .bodyStyle {
          border: 2px solid black;
        }
        `}
        </style>
        <NewPostForm onPostCreation={this.handleAddingNewPostToList} />
        <PostList feed={this.state.masterPostList}/>
      </div>
    );
}
}

export default Body;
