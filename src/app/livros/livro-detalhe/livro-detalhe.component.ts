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

  codigo: number = 0;
  inscricao: Subscription = new Subscription();

  livro: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livrosService: LivrosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.livro = this.livrosService.getLivro(this.codigo);

        if(this.livro == null){
          console.log("Livro não encontrado");
          this.router.navigate(['/livros']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarLivro(){
    this.router.navigate(['/livros', this.livro.codigo, 'editar']);
  }

}
