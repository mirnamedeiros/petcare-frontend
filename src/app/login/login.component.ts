import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../service/authService/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterOutlet} from "@angular/router";


@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
      private authService: AuthService,
      private router: Router
  ) {}

  onSubmit() {
    this.router.navigate(['/home']);
    // TODO implementar validação depois de conectar com o back
    // this.authService.login(this.email, this.password).subscribe(response => {
    //   // Implementar a lógica de redirecionamento após login bem-sucedido
    //   console.log('Login bem-sucedido!', response);
    // }, error => {
    //   console.error('Erro no login', error);
    // });
  }
}
