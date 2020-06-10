import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalComponent } from './components/signal/signal.component';
import { ParserHomeComponent } from './components/parsing/paserhome/parserhome.component';


const routes: Routes = [
  {path:"", component:ParserHomeComponent},
  {path:"sig", component:SignalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
