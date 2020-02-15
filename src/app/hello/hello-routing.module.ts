import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';

export const hello_routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hi', component: HiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(hello_routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
