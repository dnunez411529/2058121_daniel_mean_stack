import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'task', 'dl'];
  tasksArray: Array<Task> = [];
  dataSource = new MatTableDataSource(this.tasksArray);
  addTask(taskRef: NgForm) {
    let task = taskRef.value;
    let currentTask: Task = new Task(task.id, task.name, task.task, task.dl);
    this.tasksArray.push(currentTask);
    this.dataSource = new MatTableDataSource(this.tasksArray);
    taskRef.reset();
  }
}
