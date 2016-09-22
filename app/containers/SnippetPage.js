import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Snippet from '../components/Snippet';
import * as SnippetActions from '../actions/addSnippet';

function mapStateToProps(state) {
  return {
    snippet: state.snippet
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SnippetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
