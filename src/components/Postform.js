import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'


class Postform extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
   * e is the content of what is being changed
   * e.target.value is the actual text
   * e.target.name is the name of the content being changed (i.e "title" or "body")
   */
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  /**
   * Make sure to prevent the default action of onSubmit, whatever the hell that is
   * Crete an Object for our state to be sent out as
   * Create a post request in JSON format.
   * the first .then is asking for the data since its a promise
   * the second is getting the data.
   */
  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
  }
  /**
   *  onSubmit={this.onSubmit} will call the onSubit function we create above (note the {})
   *  value = {this.state.title} Will change whatever the value when sumbited
   */
  render(){
    return(
      <div>
        <h1>AddPosts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}
Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   posts: state.posts.items
// });

export default connect(null, { createPost })(Postform);
