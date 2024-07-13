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

    try {
      let resp: any = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      localStorage.setItem('token', resp['token']);
      this.router.navigateByUrl('/todos');
    } catch(e) {
      alert('Login fehlgeschlagen');
      console.error(e);
    }
  }


}
