import { Livro } from './../model/livro';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LivrosService } from '../service/livros.service';

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

  livro: Livro = new Livro();

  ngOnInit(): void {

    this.livro = this.route.snapshot.data['livro'];
    if(this.livro.getCodigo() == 0){
      alert("Livro não encontrado");
      console.log("Livro não encontrado");
      this.router.navigate(['/livros']);
    }

  }

  editarLivro(){
    this.router.navigate(['/livros/', this.livro.getCodigo(), '/editar']);
  }

}
