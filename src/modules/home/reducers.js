import { handleActions } from 'redux-actions'
import {
  requestPosts,
  receivePosts,
  selectReddit,
  invalidateReddit
} from './actions'

const defaultState = {
  selectedReddit: 'reactjs',
  posts: [],
  isFetching: false,
  didInvalidate: false
}

const handlers = {
  [requestPosts]: (state, action) => ({...state, ...{ 
    isFetching: true, 
    didInvalidate: false 
  }}),
  [receivePosts]: (state, action) => ({...state, ...{
    posts: action.payload,
    isFetching: false,
    didInvalidate: false
  }}),
  [selectReddit]: (state, action) => ({...state, ...{ selectedReddit: action.payload }}),
  [invalidateReddit]: (state, action) => ({...state, ...{ didInvalidate: true }}),
}

export default handleActions(handlers, defaultState)
