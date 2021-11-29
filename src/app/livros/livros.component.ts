import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from './livro';
import { LivrosService } from './livros.service';

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

    this.livros = this.livrosService.getLivros();

  }

  cadastrarLivro(){
    this.router.navigate(['/livros/cadastrar']);
  }

}
