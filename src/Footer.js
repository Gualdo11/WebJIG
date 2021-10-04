import { faBell, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faReact, faTwitter, faDrupal } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="iconos">
          <a href="" className="l-f"><FontAwesomeIcon icon={faMailBulk} /></a>
          <a href="https://github.com/Gualdo11/" target="_blank" className="l-f"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="" className="l-f"><FontAwesomeIcon icon={faReact} /></a>
          <a href="" className="l-f"><FontAwesomeIcon icon={faDrupal} /></a>    
          <a href="https://www.linkedin.com/in/juan-ignacio-guallini-3743b450/" target="_blank" className="l-f"> <FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://twitter.com/Gualdo11" target="_blank" className="l-f"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="http://instagram.com/Gualdo11" target="_blank" className="l-f"><FontAwesomeIcon icon={faInstagram} /></a>    
        </div>
      </div>
    )
  }
}
