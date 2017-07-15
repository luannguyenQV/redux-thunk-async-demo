import React, { Component } from 'react'
import Header from '../../../common/components/Header'
import ListItem from './ListItem'
import Picker from './Picker'
import { options } from '../../../common/utils/options'

export default class Home extends Component {
  componentDidMount() {
    const { posts, selectedReddit, fetchPosts } = this.props
    if (posts.length === 0) {
      fetchPosts(selectedReddit)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectedReddit, fetchPosts } = this.props
    const { selectedReddit: newSelectedReddit } = nextProps
    console.log('diff', selectedReddit, nextProps)
    if (newSelectedReddit && selectedReddit != newSelectedReddit) {
      fetchPosts(newSelectedReddit)
    }
  }

  _onChangePicker = (reddit) => {
    const { onSelectReddit } = this.props
    onSelectReddit(reddit)
  }

  render () {
    const { posts, isFetching, selectedReddit } = this.props

    return (
      <section>
        <Header />
        <Picker 
          value={selectedReddit}
          options={options}
          onChange={(item) => this._onChangePicker(item)}
        />
        { 
          isFetching 
          ? <p>Loading....</p>
          : (posts && <ListItem posts={posts} />)
        }
      </section>
    )
  }
}
