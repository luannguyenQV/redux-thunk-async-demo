import React, { Component } from 'react'
import ListItem from './ListItem'

export default ({posts}) => (
  <ul>
    {
      posts.map((post, i) =>
        <li key={i}>{post.data.title}</li>
      )
    }
  </ul>
)
