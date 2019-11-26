import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ContactHomeComponent } from './contact/contact-home.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactDetailsComponent } from './contact/contact-details.component';
import { ContactCreateComponent } from './contact/contact-create.component';
import { ContactUpdateComponent } from './contact/contact-update.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { LoginComponent } from './auth/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: "home", component:HomeComponent },
  { path: "contact",component: ContactHomeComponent },
  { path: "contact/list",component:ContactListComponent},
  { path: "contact/new",component:ContactCreateComponent},
  { path: "contact/:id",component:ContactDetailsComponent},
  { path: "contact/edit/:id",component:ContactUpdateComponent},
 { path: "login",component:LoginComponent },
  { path: "" ,redirectTo: "/login",pathMatch:"full" },
  //{ path: "**",component:PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
