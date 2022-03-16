import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoginService} from "../login/service/login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class JwtinterceptorService implements HttpInterceptor{

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const usuario_logado = this.loginService.usuarioLogado();
    console.log('JWT Interceptor');

    if(usuario_logado){

      console.log('Token do o usuário logado');
      console.log(usuario_logado.token);
      console.log('Usuario Logado acessado');
      console.log(usuario_logado);
      const authRequest = req.clone(
        {setHeaders:{'Authorization':'Bearer '+usuario_logado.token}}
      );
      return next.handle(authRequest);
    }else {
      return next.handle(req);
    }

  }

}
