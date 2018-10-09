import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class Sogelink extends Component {

  render() {
    let styles = theme => ({
      chip: {
        fontSize: '63px',
      },
    });
    return (<div className="row education">
      <div className="three columns header-col">
        <img className="profile-pic" src="images/missions/sogelink.jpg" alt="alt"/>
        <h1>
          <span>Sogelink</span>
        </h1>
      </div>

      <div className="nine columns main-col">

        <div className="row item">
          <div className="twelve columns">
            <h3>Scream</h3>
            <p className="info">Integrateur air/flash application
              <span>
                •
              </span>
              <em className="date">NOVEMBRE 2013 - SEPTEMBRE 2014</em>
            </p>
            <p>
              Ensemble d'application à destination interne à Sogelink, Gestionnaire de la relation client.
              <br/>
              Remplace l’application INES (utilisé depuis environ 10 ans).
              <ul>
                <li>Scream : Gestion de Société et Contact.
                </li>
                <li>Sogestask : Gestion des tâches.
                </li>
                <li>CatalogueProduit : Gestion des produits
                </li>
              </ul>
            </p>
            <p><Chip className={styles.chip} color="primary" label="Java 1.7"/>
              <Chip className={styles.chip} color="primary" label="Flex"/>
              <Chip className={styles.chip} color="primary" label="Git"/>
              <Chip className={styles.chip} color="primary" label="Spring 3"/>
              <Chip className={styles.chip} color="primary" label="Maven 2"/>
              <Chip className={styles.chip} color="primary" label="Sonar"/>
            </p>
          </div>
        </div>
        {/* item end */}

        <div className="row item">
          <div className="twelve columns">
            <h3>Guichet Unique</h3>
            <p className="info">Integrateur air/flash application
              <span>
                •
              </span>
              <em className="date">NOVEMBRE 2013 - SEPTEMBRE 2014</em>
            </p>
            <p>
              Application à destination des déclarateurs de chantier. 
              <br/>
              Permet en quelques clique de créer et envoyer par courrier, par mail un ensemble de documents administratifs concernant la nature des travaux/chantier. 

            </p>
            <p><Chip className={styles.chip} color="primary" label="Java 1.6"/>
              <Chip className={styles.chip} color="primary" label="Flex"/>
              <Chip className={styles.chip} color="primary" label="Git"/>
              <Chip className={styles.chip} color="primary" label="Spring 3"/>
              <Chip className={styles.chip} color="primary" label="Maven 2"/>
              <Chip className={styles.chip} color="primary" label="Sonar"/>
            </p>
          </div>
        </div>
        {/* item end */}

      </div>
      {/* main-col end */}
    </div>);
  }
}
