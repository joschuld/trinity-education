import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { HomeComponent} from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { ApplyComponent} from './apply/apply.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'apply', component: ApplyComponent},
  // {path: '**', redirectTo: '/', pathMatch: 'full'}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
