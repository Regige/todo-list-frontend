import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent {
  todos: any = [];


  constructor(private http: HttpClient) {}


  async ngOnInit() {
    this.todos = await this.loadTodos();
    console.log(this.todos);
  }


  loadTodos() {
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.get(url));
  }
}
