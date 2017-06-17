import React, { Component } from 'react'
import { Card } from './card'
import * as firebase from 'firebase'

let app = firebase.initializeApp({

});

export class List extends Component {
  render() {
    return (
      <div>
        <h1 className="list__title">Requests</h1>
          <Card />
      </div>
    );
  }
}
