import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import deleteSnippet from '../actions/deleteSnippet'

export default class Snippets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.snippets
    };
    console.log(this)
    this.deleteSnippet = this.deleteSnippet.bind(this)
  }

  deleteSnippet(event) {
    this.props.actions.deleteSnippet(this.state._id)
  }
  render() {
    return (
      <ul>
        {this.props.snippets.snippets.map((snippet) =>
          <li key={snippet._id}>
            <Link to={`/testing/${snippet._id}`} > {snippet.title} {snippet.description} {snippet.tags.split(',').join(' ')} </Link>
            <button onClick={this.deleteSnippet}>Delete</button>
          </li>
        )}
      </ul>
    )
  }
}

Snippets.propTypes = {
  snippets: PropTypes.array.isRequired
}

// LoginPage.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };
//
// function mapStateToProps(state) {
//   return {
//     title: '',
//     description: '',
//     tags: '',
//     snippet: 'start state',
//     user_id:''
//   };
// };
//
// export default connect(mapStateToProps, { loginUser, logout })(LoginPage);
