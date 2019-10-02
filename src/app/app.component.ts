import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyD_UH7HRraeD6wWxptP-qrALtAv28EJqn8",
      authDomain: "http-client-demo-533e1.firebaseapp.com",
      databaseURL: "https://http-client-demo-533e1.firebaseio.com",
      projectId: "http-client-demo-533e1",
      storageBucket: "",
      messagingSenderId: "238427779617",
      appId: "1:238427779617:web:c3dc7bb2cb722ae0152960",
      measurementId: "G-EQBJJDS16W"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }
}
