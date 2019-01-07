import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model'

@Component({
  selector: 'panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.sass']
})
export class PanelListComponent implements OnInit {

  items: Task[] = [];

  constructor(private api: TaskService) { }

  ngOnInit() {
    this.api.getTasks()
      .subscribe(response => {
        this.items = response.result.items;
      });
  }

  onDeleted(task: Task) {
    const position = this.items.findIndex(
      (elem: Task) => {
        return elem.id === task.id;
      }
    );
    this.items.splice(position, 1);
  }

}
