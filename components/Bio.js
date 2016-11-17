import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink(profilePic)}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2)
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in Melbourne building useful things. <a href="http://www.johnpaulhunter.com/career-portfolio.html">You should check out his online portfolio</a>
      </p>
    )
  }
}

export default Bio
