import { faBell, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="iconos">
          <FontAwesomeIcon icon={faMailBulk} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    )
  }
}
