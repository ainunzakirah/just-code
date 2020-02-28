import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdetailregistPage } from './userdetailregist.page';

const routes: Routes = [
  {
    path: '',
    component: UserdetailregistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdetailregistPageRoutingModule {}
