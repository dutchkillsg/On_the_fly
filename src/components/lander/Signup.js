import React, { Component } from 'react'


export default (props) => {
  return (
      <div className="inner">

        <section>
          <h2>Sign Up</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="email">password</label>
              <input type="text" name="password" id="email" />
            </div>
            <ul className="actions">
              <li><input type="submit" value="Submit" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">information@untitled.tld</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>1234 Somewhere Road #5432<br />
              Nashville, TN 00000<br />
              United States of America</span>
            </div>
          </section>
        </section>
      </div>
  )
}
