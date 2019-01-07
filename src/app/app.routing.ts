
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './views/home/home.component';
import { NewTaskComponent } from './components/new-task/new-task.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nova-tarefa', component: NewTaskComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
