import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HelloComponent, HiComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelloRoutingModule
  ],
  entryComponents: [
    HelloComponent
  ]
})
export class HelloModule { }
