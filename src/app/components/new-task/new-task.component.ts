import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {

  constructor(private api: TaskService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.api.addTask(form.value)
      .subscribe(response => console.log('Task Added'));
  }

}
