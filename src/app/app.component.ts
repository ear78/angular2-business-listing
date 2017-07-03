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
  appState: string;
  activeKey: string;

  // firebase varibales and connection
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(){
      this.firebaseService.getBusinesses().subscribe(businesses => {this.businesses = businesses});
  }

  changeState(state, key){
      console.log('changing state to: ' +state)
      if(key){
          console.log('changing state to: ' +state+ '-key' + key);
          this.activeKey = key;
      }
      this.appState = state;
  }

  filterCategory(category){
      this.firebaseService.getBusinesses(category)
  }

  addBusiness(event, business_name: string,
  address: string,
  email: string,
  phone: string,
  category: string){
      let created_at = new Date().toString();
      let newBusiness = {
          business_name: business_name,
          address: address,
          email: email,
          phone: phone,
          category: category
      }
    //   console.log(newBusiness);

      this.firebaseService.addBusiness(newBusiness);

    //   this.changeState('default');
  }

}
