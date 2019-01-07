import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

  @Input() item: Task;
  @Output() deleted: EventEmitter<Task> = new EventEmitter();
  editing: boolean = false;
  editValue: string = '';

  constructor(private api: TaskService) { }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editValue = this.item.title;
  }

  onUpdate() {
    this.item.title = this.editValue;
    console.log(this.item);
    this.api.updateTask(this.item.id, this.item)
      .subscribe(item => {
        console.log(item);
        this.editValue = '';
        this.editing = false;
      });
  }

  onCancel() {
    this.editing = false;
    this.editValue = '';
  }

  onDelete() {
    this.api.deleteTask(this.item.id)
      .subscribe(item => {
        this.deleted.emit(this.item);
        console.log(item);
      });
  }

}
