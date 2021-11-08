import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { HomeComponent } from './views/home/home.component';
import { DoctorComponent } from './views/login/doctor/doctor.component';
import { LoginComponent } from './views/login/login.component';
import { VisitorComponent } from './views/login/visitor/visitor.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"departments", component:DepartmentsComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent, children : [
    {path: "visitor", component: VisitorComponent},
    {path: "doctor", component: DoctorComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
