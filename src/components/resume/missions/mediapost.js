import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class Mediapost extends Component {

  render() {
    return (<div className="row education">
      <div className="three columns header-col">
        <img className="profile-pic" src="images/missions/mediapost.png" alt="alt"/>
        <h1>
          <span>Mediapost</span>
        </h1>
      </div>

      <div className="nine columns main-col">

        <div className="row item">
          <div className="twelve columns">
            <h3>Mecanisation 2</h3>
            <p className="info">Lead Developpeur
              <span>
                •
              </span>
              <em className="date">SEPTEMBRE 2017 – AOUT 2018</em>
            </p>
            <p>
              Applications pour la mécanisation des prospectus et Permet de planifier des contrats à distribuer en fonction de critères
              <ul>
                <li>Conception nouvelle architecture
                </li>
                <li>Mise en place des outils de monitoring
                </li>
                <li>Support
                </li>
                <li>Benchmark
                </li>
                <li>Transfert de compétences /Formation
                </li>
              </ul>
            </p>
            <p><Chip color = "primary" label = "Java 1.7" />
              <Chip color="primary" label="JSF"/>
              <Chip color="primary" label="Jasper"/>
              <Chip color="primary" label="Tomcat 7.0"/>
              <Chip color="primary" label="Sybase"/>
              <Chip color="primary" label="Spring 3"/>
              <Chip color="primary" label="Maven 2"/>
              <Chip color="primary" label="Sonar"/>
            </p>
          </div>
        </div>
        {/* item end */}



      </div>
      {/* main-col end */}
    </div>);
  }
}
