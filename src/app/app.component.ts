import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import { Business } from './business';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent {
  title = 'app';
  businesses: Business[];
  // firebase varibales and connection
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(){
      this.firebaseService.getBusinesses().subscribe(businesses => {this.businesses = businesses});
  }
}
