const React = require('react')
const Html = require('./layouts/default.jsx')
const FormHamburger = require('./components/formHamburger.jsx')
const DisplayHamburgerList = require('./components/displayHamburgerList.jsx')
const DevouredHamburgerList = require('./components/devouredHamburgerList.jsx')

const Home = props => {
  return (
    <Html>
      <div class="card addishClass" >
        <img class="card-img-top" src="./images/burger.png" height='250px' width='200px' alt="Eat A Hamburger" />
        <div class="card-body">
          <h5 class="card-title">Eat a Hamburger</h5>
          <p class="card-text">Type in a hamburger and
            click submit</p>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div id='hamburgerHeader'></div>
                <DisplayHamburgerList burgers={props.burgers} />
              </div>
              <div className='col-md-6'>
                <div id='devouredHeader'></div>
                <DevouredHamburgerList burgers={props.burgers} />
              </div>
            </div>
          </div>
          <FormHamburger />
        </div>
      </div>
    </Html>
  )
}

module.exports = Home
