import { connect } from 'react-redux'
import {
  requestPosts,
  receivePosts,
  selectReddit,
  invalidateReddit
} from './actions'
import Home from '../components/Home'

const mapDispatchToProps = dispatch => ({
  fetchPosts: (reddit) => {
    dispatch(requestPosts(reddit))
    return fetch(``)
      .then
  },
  onSelectReddit: (reddit) => {

  }
})

const mapStateToProps = state => ({
  posts: state['home'].posts,
  selectedReddit: state['home'].selectedReddit,
  isFetching: state['home'].isFetching,
  didInvalidate: state['home'].didInvalidate
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)