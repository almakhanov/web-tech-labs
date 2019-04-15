import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListByIdComponent } from './task-list-by-id/task-list-by-id.component';
import { TaskListByIdTasksComponent } from './task-list-by-id-tasks/task-list-by-id-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    TaskListComponent,
    TaskListByIdComponent,
    TaskListByIdTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
