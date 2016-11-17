import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <a
          href='#'
          className='snipcart-add-item'
          data-item-id={post.id}
          data-item-price={post.price}
          data-item-image={post.image}
          data-item-name={post.title}
          data-item-description={post.description}
          data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}
          style={{
            display: 'block',
            color: 'black',
            margin: '0 auto',
            width: '50px',
            border: '2px solid black',
            textAlign: 'center',
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
          }}>Buy</a>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
