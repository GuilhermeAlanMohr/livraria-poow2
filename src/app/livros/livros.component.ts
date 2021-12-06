import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Livro } from './livro';
import { LivrosService } from './livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];
  livros$!: Observable<Livro[]>;

  constructor(
    private livrosService: LivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.livros$ = this.livrosService.getLivros();

  }

  verificarLivro(id: number){
    this.router.navigate(["livros/",id]);
  }

  excluirLivro(id: number){
    console.log("id: ",id);
    this.livrosService.excluirLivro(id).subscribe(
      success => console.log("Livro excluído com sucesso"),
      error => console.log("Erro ao excluir livro")
    );
  }

}
