import { connect } from 'react-redux'

import { fetchSnippets, fetchSnippetsFailure, fetchSnippetsSuccess } from '../actions/fetchSnippets';
import ShowSnippets from '../components/ShowSnippets';


const mapStateToProps = (state) => {
  return {
    snippetsList: state.snippetsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnippets: () => {
      dispatch(fetchSnippets())
    }
  }
}


const ShowSnippetsContainer = connect(mapStateToProps, mapDispatchToProps)(ShowSnippets)

export default ShowSnippetsContainer


// dispatch(fetchSnippets()).then((response) => {
//   !response.error ? dispatch(fetchSnippetsSuccess(response.payload)) : dispatch(fetchSnippetsFailure(response.payload));
// });
