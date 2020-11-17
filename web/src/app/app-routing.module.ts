import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "home", component: HomeComponent },
  { path: "account", component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
