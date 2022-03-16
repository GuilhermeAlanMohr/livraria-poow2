import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Livro } from './model/livro';
import { LivrosService } from './service/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(
    private livrosService: LivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getLivros();

  }

  getLivros(){
    this.livrosService.getLivros().subscribe(li => {
      this.livros = li;
    });
  }

  verificarLivro(id: number | undefined){
    this.router.navigate(["livros/",id]);
  }

  excluirLivro(id: number | undefined){
    console.log("Código: ",id);
    this.livrosService.excluirLivro(id).subscribe(msg => {
      console.log(msg),
      alert(msg)
    });
  }

}
