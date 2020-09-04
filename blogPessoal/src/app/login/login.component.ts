import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
  }

  entrar() {
    if (this.userLogin.usuario == null || this.userLogin.senha == null) {
      this.alert.showAlertDanger('Coloque seu email e senha!')

    } else {
          this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
          this.userLogin = resp 
          localStorage.setItem('token', this.userLogin.token)
          this.router.navigate(['/feed']) 
      }, error => {
        if(error.status == 500) {
          this.alert.showAlertInfo('Usuário não cadastrado!')
          this.router.navigate(['/cadastro'])
        }
      })
    }
  }
}
