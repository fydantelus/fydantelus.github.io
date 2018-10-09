import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class CreditAgricole extends Component {

  render() {
    const styles = theme => ({
      chip: {
        margin: theme.spacing.unit,
      },
    });
    return (<div className="row education">
      <div className="three columns header-col">
        <img className="profile-pic" src="images/missions/cat.jpeg" alt="alt"/>
        <h1>
          <span>Credit Agricole</span>
        </h1>
      </div>

      <div className="nine columns main-col">

        <div className="row item">
          <div className="twelve columns">
            <h3>MOST</h3>
            <p className="info">Assistance Technique
              <span>
                •
              </span>
              <em className="date">JANVIER 2012 – DECEMBRE 2012</em>
            </p>
            <p>
              Socle et Framework HTML5/JAVA pour Crédit Agricole sans sous-traitance
              <ul>
                <li>Revue de code
                </li>
                <li>Contrôle qualité
                </li>
                <li>Support
                </li>
                <li>Benchmark
                </li>
                <li>Transfert de compétences /Formation
                </li>
              </ul>
            </p>
            <p>
              <Chip color="primary" label="Java 1.7"/>
              <Chip color="primary" label="JSP"/>
              <Chip color="primary" label="WebSphere 7.0"/>
              <Chip color="primary" label="Spring 3"/>
              <Chip color="primary" label="Maven 2"/>
              <Chip color="primary" label="Sonar"/>
            </p>
          </div>
        </div>
        {/* item end */}

        <div className="row item">

          <div className="twelve columns">
            <h3>MOST</h3>

            <p className="info">Assistance Technique
              <span>
                •
              </span>
              <em className="date">AOUT 2010 – DECEMBRE 2011</em>
            </p>

            <p>Socle et Framework Flex puis HTML5 pour Crédit Agricole sous LOGICA
              <ul>
                <li>Réalisation d’un portail et un socle multi-support : un socle compatible multi-navigateurs (Firefox 9+ / Chrome 16+ / Safari 5+ / IE 9+) et un portail compatible desktop et tablette
                </li>
                <li>En co-construction : Projets PUCC (Poste Unififé Client Collaborateur) / ASR / GCL (Groupement CSC / Logica)</li>
                <li>Pendant 14 semaines et avec jusqu’à 30 personnes en pleine charge : 3 semaines de conception à 14 personnes (dont 3 SQLiens), 11 semaines de réalisation à 30 personnes (dont 4 SQLiens)
                </li>
                <li>Sur 4 sites : 2 principaux (Paris et Annecy), 2 secondaires (Meaux et Vannes)
                </li>
                <li>En appliquant la méthode "CAgile" : Cycle itératif (itérations de 4 semaines), Point de suivi des tâches hebdomadaire (Mercredi), Démo d’avancement hebdomadaire (Vendredi)
                </li>
                <li>Et en utilisant les outils internes (suite JAZZ d’IBM) : RTC pour le suivi de projet et la gestion des sources, RSA pour la modélisation et les développements, PIC (BuildForge, Maven, Nexus).
                </li>
              </ul>
            </p>

          </div>
          <p>
            <Chip color="primary" label="Java 1.7"/>
            <Chip color="primary" label="Flex 3"/>
            <Chip color="primary" label="Flex 4"/>
            <Chip color="primary" label="WebSphere 7.0"/>
            <Chip color="primary" label="Spring 3"/>
            <Chip color="primary" label="Maven 2"/>
            <Chip color="primary" label="Sonar"/>
          </p>
        </div>
        {/* item end */}

        <div className="row item">

          <div className="twelve columns">
            <h3>Pentagone</h3>

            <p className="info">Expert Technique RIA
              <span>
                •
              </span>
              <em className="date">JANVIER 2010 - MARS 2010</em>
            </p>

            <p>Pentagone : un prototype de Poste de Travail 2.0 multi-canal, réalisé en 5 semaines !
              <ul>
                <li>Equipe composée de membres des agences BFA, RIA/BPM et agency, qui a travaillé en mode "War Room" chez son partenaire privilégié Adobe pour réaliser l’impensable : la création du prototype de Poste de Travail de demain, en 5 semaines seulement… et qui fonctionne parfaitement !
                </li>
                <li>Un concept totalement innovant de navigation 3D (vision demo "Cube") ;
                </li>
                <li>Une compatibilité MultiTouch et SmartPhones
                </li>
                <li>Des processus interruptibles : le client s’affranchit des contraintes de temps et d’espace ; il peut commencer une opération sur Internet, la poursuivre sur iPhone et la terminer en agence, auprès de son conseiller qu’il peut tout aussi bien joindre par Chat…
                </li>
                <li>
                  Une vision à 360° du compte client avec synthèse graphique, drag&drop…
                </li>
                <li>Une place gagnée de plein droit dans le consortium Logica – IBM – Adobe…
                </li>
              </ul>
            </p>

            <p>
              <Chip color="primary" label="Java 1.7"/>
              <Chip color="primary" label="Flex 3"/>
              <Chip color="primary" label="Flex 4"/>
              <Chip color="primary" label="WebSphere 7.0"/>
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
