import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
// For other projects use different keys

const AppSettings = {
  apiKey: 'AIzaSyCA5xeUuMzy8hppcbsM8cMzZTwoTQZXyO4',
  authDomain: 'lexus-monster.firebaseapp.com',
  databaseURL: 'https://lexus-monster.firebaseio.com',
  projectId: 'lexus-monster',
  storageBucket: 'lexus-monster.appspot.com',
  messagingSenderId: '1078872049470'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() {
	firebase.initializeApp(AppSettings);


    // See users, messages and keep in touch in console log

    // const preUsers = document.getElementById('users');
    // const dbRefUsers = firebase.database().ref().child('users');
    // dbRefUsers.on('value', snap => console.log(snap.val()));

    // const preMessages = document.getElementById('messages');
    // const dbRefMessages = firebase.database().ref().child('messages');
    // dbRefMessages.on('value', snap => console.log(snap.val()));

    // const preTouch = document.getElementById('touch');
    // const dbRefTouch = firebase.database().ref().child('touch');
    // dbRefTouch.on('value', snap => console.log(snap.val()));
  }
  ngOnInit() {}
}
