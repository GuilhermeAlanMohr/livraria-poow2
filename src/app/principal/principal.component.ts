import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login/service/login.service";
import {Usuario} from "../servicos-globais/model/usuario";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario: Usuario = new Usuario();
  url: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.url = router.url;
    this.usuario = this.loginService.usuarioLogado();
  }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
  }

}
