import { Livro } from './../livro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livrosService: LivrosService
  ) {}

  codigo: number = 0;
  nome: string = '';
  nomeAutor: string = '';
  valor: number = 0;

  ngOnInit(): void {

    const livro = this.route.snapshot.data['livro'];
    this.codigo = livro.id;
    this.nome = livro.nome;
    this.nomeAutor = livro.nomeAutor;
    this.valor = livro.valor;
    if(livro.codigo == 0){
      console.log("Livro não encontrado");
      this.router.navigate(['/livros']);
    }
  }

  editarLivro(){
    this.router.navigate(['/livros', this.codigo, 'editar']);
  }

}
