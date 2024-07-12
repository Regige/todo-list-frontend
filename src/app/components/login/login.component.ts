import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';



  async login() { // Logik um mit backend zu kommunizieren

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const raw = JSON.stringify({
      "username": this.username,
      "password": this.password
    });

    const requestOptions:RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      let resp = await fetch(environment.baseURL + "/login/", requestOptions);
      let json = await resp.json();
      localStorage.setItem('token', json.token);
      // TODO: Redirect
    } catch(e) {
      // Show error message
      console.error(e);
    }

  }


}
