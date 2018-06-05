import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer className ="footer">
        <section>
          <div className="container">
            <div className ="row">
                <div className ="col-lg-6">
                    <p>Copyright :: Your Company Here</p>
                    <p>WWW.Facebook.Com || Find CSS Tricks</p>
                </div>
                <div className ="col-lg-6">
                  <ul className ="nav navbar-nav">
                    <li><Link to="/" className="lastLink">Home</Link></li>
                    <li><Link to="" className="lastLink">Ask Now</Link></li>
                    <li><Link to="" className="lastLink">Phone Number</Link></li>
                    <li><Link to="" className="lastLink">About Us</Link></li>
                    <li><Link to="" className="lastLink">Contact</Link></li>
                  </ul>
                </div>
            </div>
          </div>
        </section>
      </footer>
    )
  }
}

export default Footer;
