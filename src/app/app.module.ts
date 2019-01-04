import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceModule } from './services/services.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { PanelListComponent } from './components/panel-list/panel-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContextMenuComponent,
    PanelListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
