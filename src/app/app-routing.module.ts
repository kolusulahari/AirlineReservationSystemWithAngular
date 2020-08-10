import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { CategoryComponent } from './category/category.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchedFlightComponent } from './searched-flight/searched-flight.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AirportComponent } from './airport/airport.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'preview', component: PreviewComponent, canActivate : [AuthGuard] , data : {expectedRole : ['user']}},
  { path: 'flightInfo', component: FlightInfoComponent, canActivate : [AuthGuard] , data : {expectedRole : ['admin','user']}},
  { path: 'category', component: CategoryComponent , canActivate : [AuthGuard] , data : {expectedRole : ['admin']}},
  { path: 'ticketbooking', component: TicketbookingComponent},
  { path: 'add-flight', component: AddFlightComponent , canActivate : [AuthGuard] , data : {expectedRole : ['admin']}},
  { path: 'payment', component: PaymentComponent},
  { path: 'searched-flight', component: SearchedFlightComponent, canActivate : [AuthGuard] , data : {expectedRole : ['admin','user']}},
  { path : 'profile', component : ProfileComponent, canActivate : [AuthGuard] , data : {expectedRole : ['user']}},
  { path: 'airport', component: AirportComponent, canActivate : [AuthGuard] , data : {expectedRole : ['admin']}},
  { path: 'add-airport', component: AddAirportComponent, canActivate : [AuthGuard] , data : {expectedRole : ['admin']}},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
