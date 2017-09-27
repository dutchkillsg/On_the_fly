import React, { Component } from 'react';
import { Footer, Article, Sectiontwo, Signup, Sectionone, Landingnav, Landingheader } from '../components/lander';
import { withRouter } from 'react-router-dom';


class Onthefly extends Component {
  render(){
    return(
  <div id="wrapper">
    <Landingheader
      login =  {<a href="#menu" className="logo">Login</a>}
      />
    <Landingnav />
    <Sectionone />

    <div id="main">
      <section id="one" className = "tiles">
        <Article
          layout = 'images/bar.jpg'
          header = 'Record Bar Books'
          body = 'in realtime'
          />
        <Article
          layout = 'images/oldfashioned.jpg'
          header = 'Down To'
          body = 'The Last Drip'
          />
        <Article
          layout = 'images/hostess.jpg'
          header = 'The Host Stand'
          body = 'Take Reservations'
          />
        <Article
          layout = 'images/table.jpg'
          header = 'Build Your FloorPlan'
          body = 'And Seat Your Tables'
          />
        <Article
          layout = 'images/cooking.jpg'
          header = 'Never 86 An Item'
          body = 'For any Dish'
          />
        <Article
          layout = 'images/kitchen.jpg'
          header = 'Keep Track Of All Your Ingredients '
          body = 'A Happy Kitchen Is a Full Kitchen'
          />
      </section>

      <section id="two">
        <Sectiontwo />
      </section>
    </div>

    <section id='contact'>
      <Signup />
    </section>

    <Footer />

</div>
)
}
}

export default withRouter(Onthefly);
