
import { connect } from 'react-redux'
import { fetchSnippets, fetchSnippetsSuccess, fetchSnippetsFailure } from '../actions/fetchSnippets';

import ShowSnippets from '../components/ShowSnippets';


const mapStateToProps = (state) => {
  return {
    snippetsList: state.snippet.snippetsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnippets: () => {
      dispatch(fetchSnippets()).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
          });
    }
  }
}


const ShowSnippetsContainer = connect(mapStateToProps, mapDispatchToProps)(ShowSnippets)

export default ShowSnippetsContainer
