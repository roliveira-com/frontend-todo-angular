import {NgModule} from '@angular/core';

import { CartService } from './cart.service';
import { TaskService } from './task.service';

@NgModule({
  providers: [ CartService, TaskService ]
})

export class ServiceModule {}
