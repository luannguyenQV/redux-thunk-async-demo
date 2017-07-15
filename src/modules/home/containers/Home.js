import { connect } from 'react-redux'
import Home from '../components/Home'
import {
  requestPosts,
  receivePosts,
  selectReddit,
  invalidateReddit
} from '../actions'

const mapDispatchToProps = dispatch => ({
  fetchPosts: (reddit) => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json.data.children)))
  },
  onSelectReddit: (reddit) => {
    dispatch(selectReddit(reddit))
  }
})

const mapStateToProps = state => ({
  posts: state['home'].posts,
  selectedReddit: state['home'].selectedReddit,
  isFetching: state['home'].isFetching,
  didInvalidate: state['home'].didInvalidate
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)