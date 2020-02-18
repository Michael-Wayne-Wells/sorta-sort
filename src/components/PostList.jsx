import React from 'react';
import Post from './Post';
import LikeCounter from './LikeCounter';

const testPosts = [
  {
    title: 'Sup mayne',
    content: 'Well you know like whatever. Bacon ipsum dolor amet tri-tip ribeye hamburger kielbasa turducken jowl doner tenderloin strip steak brisket capicola sirloin ground round picanha tail. Leberkas frankfurter ham hock swine pork chop, andouille spare ribs venison ball tip jerky pork beef ribs.',
    timestamp: Date(),
    likes: 0,
    id: 0
  },
  {
    title: 'I am so smart. S-M-R-T. I mean S-M-A-R-T',
    content: `If one examines Lacanist obscurity, one is faced with a choice: either
    reject socialist realism or conclude that the raison d’etre of the participant
    is significant form. Therefore, cultural appropriation suggests that reality
    must come from communication.`,
    timestamp: Date(),
    likes: 0,
    id: 1
  },
  {
    title: 'Saucy',
    content: `“Sexual identity is unattainable,” says Debord. An abundance of discourses
    concerning the role of the artist as reader exist. But the subject is
    interpolated into a subconceptual paradigm of discourse that includes truth as
    a paradox.`,
    timestamp: Date(),
    likes: 0,
    id: 2
  },
]

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
      testPosts: testPosts
    }
    this.pleaseWork = this.pleaseWork.bind(this);
  }

  pleaseWork = (id) => {
    let newList = [...this.state.testPosts];

    newList.map((p) => {
      if (p.id === parseInt(id)) {
        p.likes += 1;
      }
      return p;
    });
    const sortedList = sortList(newList);
    this.setState({testPosts: sortedList})
  }

  render () {
    return(
      <div>
        {this.state.testPosts.map((p, i) => (
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
export default PostList;
