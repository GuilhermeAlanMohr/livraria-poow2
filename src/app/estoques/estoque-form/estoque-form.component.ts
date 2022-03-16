import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Filial } from 'src/app/filiais/model/filial';
import { Livro } from 'src/app/livros/model/livro';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estoque } from '../model/estoque';
import { EstoquesService } from '../service/estoques.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-estoque-form',
  templateUrl: './estoque-form.component.html',
  styleUrls: ['./estoque-form.component.css']
})
export class EstoqueFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  estoque: Estoque | undefined = new Estoque();
  filial: Filial = new Filial();
  livro: Livro = new Livro();

  livros: Livro[] = [];
  filiais: Filial[] = [];
  formulario!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private estoquesServices: EstoquesService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getFiliais()
      .subscribe(dados => this.filiais = dados);

    this.dropdownService.getLivros()
      .subscribe(dados => this.livros = dados);

    this.estoque = this.route.snapshot.data['estoque'];

    this.formulario = this.formBuilder.group({
      codigo: [this.estoque?.getCodigo()],
      quantidade: [this.estoque?.getQuantidade, Validators.required],
      livros: [this.estoque?.getLivro(), [Validators.required]],
      filiais: [this.estoque?.getFilial(), Validators.required]
    });

    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        this.estoque = this.route.snapshot.data['estoque'];

        this.estoquesServices.getEstoque(this.codigo).subscribe(est => {
          this.estoque = est;
        });
        this.dropdownService.getLivro(this.estoque?.getLivro()?.getCodigo()).subscribe(li => {
          this.livro = li;
        });
        this.dropdownService.getFilial(this.estoque?.getFilial()?.getCodigo()).subscribe( fi => {
          this.filial = fi;
        });

      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('submit');
      this.estoquesServices.salvar(this.formulario.value).subscribe(msg => {
        console.log(msg),
        alert(msg),
        this.location.back()
      });

    }
  }

  onCancel(){
    this.submitted = false;
    this.formulario.reset();
  }

}
