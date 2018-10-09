import React, {Component} from 'react';
import CreditAgricole from './missions/creditagricole.js';
import Mediapost from './missions/mediapost.js';
import Apicil from './missions/apicil.js';
import Sogelink from './missions/sogelink.js';
export default class Resume extends Component {
  render() {
    return (

      <section id="resume">
        <Mediapost />
        <Apicil />
        <Sogelink />
        <CreditAgricole />
      </section>
    );
  }
}
