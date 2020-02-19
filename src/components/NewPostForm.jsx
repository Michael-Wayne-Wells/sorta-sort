import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
  let _title = null;
  let _content = null;

function handlePostFormSubmission(event) {
    event.preventDefault();
    props.onPostCreation({title: _title.value, content: _content.value, likes: 0, id: v4()});
    _title.value = '';
    _content.value = '';
}


    return(
      <div>
        <form onSubmit={handlePostFormSubmission}>
          <h4>New Post Form</h4>
          <label>Put ya content here.</label>
          <br/>
          <input
            type='text'
            id='title'
            placeholder='title'
            ref={(input) => {_title = input;}}/>
          <textarea
            type='text'
            id='content'
            placeholder='content'
            ref={(input) => {_content = input;}}/>
          <hr/>
          <button>Submit</button>
        </form>
      </div>
    );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func
};

export default NewPostForm;
