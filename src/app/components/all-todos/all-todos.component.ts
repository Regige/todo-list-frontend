import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent {
  todos: any = [];
  error: string = '';
  todoText: string = '';


  constructor(private http: HttpClient) {}


  async ngOnInit() {
    try {
      this.todos = await this.loadTodos();
      console.log(this.todos);
    } catch {
      this.error = "Fehler beim Laden!"
    }
  }


  loadTodos() {
    const url = environment.baseURL + '/todos/';
    return lastValueFrom(this.http.get(url));
  }

  
  async saveNewTodo() {
    try {
      const url = environment.baseURL + '/todos/';
      const body = {
        "title": this.todoText,
        "checked": false,
      };

      let resp: any = await lastValueFrom(this.http.post(url, body));
      if (resp) {
        this.todos.push(resp);
        this.todoText = '';
      }

    } catch(e) {
      alert('Erstellung fehlgeschlagen');
      console.error(e);
    }
  }
}
