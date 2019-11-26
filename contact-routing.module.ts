import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../auth/auth-guard.guard';
import { ContactHomeComponent } from './contact-home.component';
import { ContactListComponent } from './contact-list.component';
import { ContactCreateComponent } from './contact-create.component';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactUpdateComponent } from './contact-update.component';

const routes:Routes=[
  {
    path:"home",
    canActivate:[AuthGuardGuard],
    children:[
      { path: "contact",component:ContactHomeComponent},
      { path: "contact/list",component:ContactListComponent},
      { path: "contact/new",component:ContactCreateComponent},
      { path: "contact/:id",component:ContactDetailsComponent},
      { path: "contact/edit/:id",component:ContactUpdateComponent},
     // { path: "",component:AdminHomeComponent}

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ContactRoutingModule { }




