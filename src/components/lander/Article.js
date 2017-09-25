import React from 'react'


export default (props) => {
  return (
      <article>
        <span className="image">
          <img src= {props.layout} alt="" />
        </span>
        <header className="major">
          <h3><a href="landing.html" className="link">{props.header}</a></h3>
          <p>{props.body}</p>
        </header>
      </article>
  )
}
