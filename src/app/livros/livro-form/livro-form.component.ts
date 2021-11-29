import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Editora } from 'src/app/editoras/editora';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Genero } from '../genero';
import { Livro } from '../livro';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  livro: any = '';
  genero: any = {};
  editora: any = {};

  editoras: Editora[] = [];
  generos: Genero[] = [];
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private livrosServices: LivrosService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getEditoras()
      .subscribe(dados => this.editoras = dados);

    this.dropdownService.getGeneros()
      .subscribe(dados => this.generos = dados);

      this.formulario = this.formBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        nomeAutor: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        valor: [null, [Validators.required]],
        genero: [null, Validators.required],
        editora: [null, [Validators.required]],

    });

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.livro = this.livrosServices.getLivro(this.livro);
        this.genero = this.dropdownService.getGenero(this.livro.genero);
        this.editora = this.dropdownService.getEditora(this.livro.editora);

        if(this.livro === null){
          this.livro = {};
        }
      }
    );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarLivro(livro:Livro){
    this.livrosServices.editarLivro(livro);
    console.log("Livro editado com sucesso!");
    this.router.navigate(['/livros']);
  }

  addLivro(){
    this.livrosServices.addLivro(this.livro.nome,this.livro.nomeAutor,this.livro.valor,
      this.livro.editora,this.livro.genero);

    console.log("Livro adicionado com sucesso!");
    this.router.navigate(['/livro']);
  }

  excluirLivro(livro:Livro){
    this.livrosServices.excluirLivro(livro);
    console.log("Livro removida com sucesso!");
    this.router.navigate(['/livros']);
  }

}
