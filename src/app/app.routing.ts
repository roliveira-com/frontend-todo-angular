
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './views/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
