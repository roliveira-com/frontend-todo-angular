import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing';
import { ServiceModule } from './services/services.module';

import { TaskService } from './services/task.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { PanelListComponent } from './components/panel-list/panel-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HomeComponent } from './views/home/home.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContextMenuComponent,
    PanelListComponent,
    TaskItemComponent,
    HomeComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
