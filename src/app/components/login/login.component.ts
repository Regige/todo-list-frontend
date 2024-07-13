import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private as:AuthService, private router: Router) {}


  async login() { // Logik um mit backend zu kommunizieren

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");


    // const raw = JSON.stringify({
    //   "username": this.username,
    //   "password": this.password
    // });

    // const requestOptions:RequestInit = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow"
    // };

    // try {
    //   let resp = await fetch(environment.baseURL + "/login/", requestOptions);
    //   let json = await resp.json();
    //   localStorage.setItem('token', json.token);
    //   // TODO: Redirect
    // } catch(e) {
    //   // Show error message
    //   console.error(e);
    // }

    try {
      let resp = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      this.router.navigateByUrl('/todos');
    } catch(e) {
      alert('Login fehlgeschlagen');
      console.error(e);
    }

  }

}
