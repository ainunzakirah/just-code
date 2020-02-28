import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailregistPageRoutingModule } from './userdetailregist-routing.module';

import { UserdetailregistPage } from './userdetailregist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdetailregistPageRoutingModule
  ],
  declarations: [UserdetailregistPage]
})
export class UserdetailregistPageModule {}
