import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {

    }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe(
            (tasks) => this.tasks = tasks
        );
    }

    deleteTask(task: Task) {
        this.taskService.deleteTask(task).subscribe(
            // for each task in tasks, return only the tasks that don't have the id of the task that was deleted
            () => this.tasks = this.tasks.filter(t => t.id !== task.id)
        );
    }
}
