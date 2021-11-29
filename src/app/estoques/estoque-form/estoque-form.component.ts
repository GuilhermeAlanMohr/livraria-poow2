import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Filial } from 'src/app/filiais/filial';
import { Livro } from 'src/app/livros/livro';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estoque } from '../estoque';
import { EstoquesService } from '../estoques.service';

@Component({
  selector: 'app-estoque-form',
  templateUrl: './estoque-form.component.html',
  styleUrls: ['./estoque-form.component.css']
})
export class EstoqueFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  estoque: any = '';
  filial: any = {};
  livro: any = {};

  livros: Livro[] = [];
  filiais: Filial[] = [];
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private estoquesServices: EstoquesService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getFiliais()
      .subscribe(dados => this.filiais = dados);

    this.dropdownService.getLivros()
      .subscribe(dados => this.livros = dados);

      this.formulario = this.formBuilder.group({
        quantidade: [null, Validators.required],
        genero: [null, [Validators.required]],
        editora: [null, Validators.required]

    });

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.estoque = this.estoquesServices.getEstoque(this.codigo);
        this.livro = this.dropdownService.getLivro(this.estoque.livro);
        this.filial = this.dropdownService.getFilial(this.estoque.filial);

        if(this.estoque === null){
          this.estoque = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarEstoque(estoque:Estoque){
    this.estoquesServices.editarEstoque(estoque);
    console.log("Estoque editado com sucesso!");
    this.router.navigate(['/estoques']);
  }

  addEstoque(){
    this.estoquesServices.addEstoque(this.estoque.livro,this.estoque.filial, this.estoque.quantidade);

    console.log("Estoque adicionado com sucesso!");
    this.router.navigate(['/estoques']);
  }

  excluirEstoque(estoque:Estoque){
    this.estoquesServices.excluirEstoque(estoque);
    console.log("Estoque removido com sucesso!");
    this.router.navigate(['/estoques']);
  }

}
