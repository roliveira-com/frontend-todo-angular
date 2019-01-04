import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
