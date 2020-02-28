import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-userdetailregist',
  templateUrl: './userdetailregist.page.html',
  styleUrls: ['./userdetailregist.page.scss'],
})
export class UserdetailregistPage implements OnInit {

  User:any;
  UserName: string;
  UserAddress: string;
  UserCity: string;
  UserPoscode: string;
  UserState: string;
  UserPhoneNo: string;

  constructor(
    private navCtrl: NavController,
    private CrudService: CrudService

  ) { }

  ngOnInit() {

    this.CrudService.read_User().subscribe(data => { //function untuk perform crud

      this.User = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Address: e.payload.doc.data()['Address'],
          City: e.payload.doc.data()['City'],
          Poscode: e.payload.doc.data()['Poscode'],
          State: e.payload.doc.data()['State'],
          PhoneNo: e.payload.doc.data()['PhoneNo']
        };
      })
      console.log(this.User)
    })
  }

  CreateRecord(){
    let record = {};
    record['Name'] = this.UserName;
    record['Address'] = this.UserAddress;
    record['City'] = this.UserCity;
    record['Poscode'] = this.UserPoscode;
    record['State'] = this.UserState;
    record['PhoneNo'] = this.UserPhoneNo;
    this.CrudService.create_NewUser(record).then(resp => {
      this.UserName = "";
      this.UserAddress = "";
      this.UserPoscode = "";
      this.UserState = "";
      this.UserPhoneNo = "";
      console.log(resp);
    })
      .catch(error =>{
        console.log(error);
      })

      
  }

  goHomePage(){
    this.navCtrl.navigateForward('/dashboard');
  }






  }


