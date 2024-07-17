import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  register() {
      const url = environment.baseURL + '/register/';
      const body = {
        "username": this.username,
        "email": this.email,
        "password": this.password
      };
      return lastValueFrom(this.http.post(url, body));
  }

}
