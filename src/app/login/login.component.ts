import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../servicos-globais/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.formBuilder.group(
    {
      login: this.formBuilder.control('',[Validators.required, Validators.minLength(3)]),
      senha: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }


  ngOnInit(): void {

  }

  logar(){

   if(this.formLogin.valid){

      let email = this.formLogin.value.login;
      let senha = this.formLogin.value.senha;
      console.log('Tentando fazer login');

      this.loginService.login(new Usuario(email, senha, '','')).subscribe(u =>{
        console.log('Usuário retornado no login');
        console.log(u);
        this.loginService.setarUsuarioLogado(u);
        this.router.navigate(['/principal']);
      });

    }else{
      alert('Preencha os campos corretamente! ');
    }
  }

}
