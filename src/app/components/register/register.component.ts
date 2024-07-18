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
  password_2: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  async register() {
    try {
      const url = environment.baseURL + '/register/';
      const body = {
        "username": this.username,
        "first_name": this.firstName,
        "last_name": this.lastName,
        "email": this.email,
        "password": this.password,
        "password2": this.password_2
      };
      let resp = await lastValueFrom(this.http.post(url, body));
      if(resp) {
        this.router.navigateByUrl('/login');
      }
    } catch(e) {
      console.error(e);
    }
  }

}
