import React from 'react';
import PostList from './PostList';
import NewPostControl from './NewPostControl';


function Body() {
    return(
      <div className="bodyStyle">
      <style jsx>{`
        .bodyStyle {
          border: 2px solid black;
        }
        `}
        </style>
        <NewPostControl/>
        <PostList/>
      </div>
    );
}

export default Body;
