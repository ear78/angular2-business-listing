import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './services/firebase.service';
import { Business } from './business';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent {
  title = 'app';
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activeBusinessName:string;
  activeAddress:string;
  activeEmail: string;
  activePhone: string;
  activeCategory: string;

  // firebase varibales and connection
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(){
      this.firebaseService.getBusinesses().subscribe(businesses => {this.businesses = businesses});

      this.firebaseService.getCategories().subscribe(categories => {this.categories = categories});
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
      this.firebaseService.getBusinesses(category).subscribe(businesses => {this.businesses = businesses});
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

  showEdit(business){
      this.changeState('edit', business.$key);
      this.activeBusinessName = business.business_name;
      this.activeAddress = business.address;
      this.activeEmail = business.email;
      this.activePhone = business.phone;
      this.activeCategory = business.category;

  }

  updateBusiness(){
      let updBusiness = {
          business_name: this.activeBusinessName,
          address: this.activeAddress,
          email: this.activeEmail,
          phone: this.activePhone,
          category: this.activeCategory
      }
      this.firebaseService.updateBusiness(this.activeKey, updBusiness);
  }

  deleteBusiness(key){
      this.firebaseService.deleteBusiness(key);
  }

}
