import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

  @Input() item: Task;
  editing: boolean = false;
  editValue: string = '';

  constructor(private api: TaskService) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editValue = this.item.item_name;
  }

  onUpdate(){
    this.item.item_name = this.editValue;
    this.api.updateTask(this.item.id, this.item)
      .subscribe(item => {
        console.log(item);
        this.editValue = '';
        this.editing = false;
      });
  }

  onCancel(){
    this.editing = false;
    this.editValue = '';
  }

  onDelete(){
    this.api.deleteTask(this.item.id)
      .subscribe(item => console.log(item))
  }

}
