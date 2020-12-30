import { Component, OnInit } from '@angular/core';
import { Tasks } from '../data/tasks';
import { Task } from '../models/task';
@Component({
  selector: 'app-container-example',
  templateUrl: './container-example.component.html',
  styles: []
})
export class ContainerExampleComponent implements OnInit {

   tasks: any;
  constructor() {
  this.tasks = Tasks;
   }
  ngOnInit(): void {
    console.table(this.tasks);

  }
  trackById(index: number, task: Task) {
    return task.id;
  }
}
