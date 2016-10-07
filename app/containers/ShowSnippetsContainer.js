import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchSnippets } from '../actions/fetchSnippet2'
import Snippets from '../components/ShowSnippets'

class ShowSnippets extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('line 42: ',this.props)
    this.props.dispatch(fetchSnippets())
  }



  render() {
    const { snippets } = this.props
    return (
      <div>
        <Snippets snippets={snippets} />
      </div>
    )
  }
}

ShowSnippets.propTypes = {
  snippets: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets
  };
}


export default connect(mapStateToProps)(ShowSnippets)
