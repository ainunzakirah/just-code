import { CrudService } from './../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userEmail: string;
  userPassword: string; //test password
  User:any;
  UserName: string;
  UserAge: number;
  UserAddress: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private CrudService: CrudService
  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){ // function untuk retrieve email ID user
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }

    

    this.CrudService.read_User().subscribe(data => { //function untuk perform crud

      this.User = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address']
        };
      })
      console.log(this.User)
    })
  }

CreateRecord(){
  let record = {};
  record['Name'] = this.UserName;
  record['Age'] = this.UserAge;
  record['Address'] = this.UserAddress;
  this.CrudService.create_NewUser(record).then(resp => {
    this.UserName = "";
    this.UserAge = undefined;
    this.UserAddress = "";
    console.log(resp);
  })
    .catch(error =>{
      console.log(error);
    })
}

  RemoveRecord(rowID){
    this.CrudService.delete_User(rowID);
  }

  EditRecord(record){
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow){
    let record = {};
    record['Name']= recordRow.EditName;
    record['Age']= recordRow.EditAge;
    record['Address']= recordRow.EditAddress;
    this.CrudService.update_User(recordRow.id, record);
    recordRow.isEdit = false;

    }
  

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

}
