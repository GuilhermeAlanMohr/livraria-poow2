import { Genero } from './../model/genero';
import { Livro } from './../model/livro';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Editora } from 'src/app/editoras/model/editora';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { LivrosService } from '../service/livros.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  editoras: Editora[] = [];
  generos: Genero[] = [];
  formulario!: FormGroup;
  submitted: boolean = false;
  livro: Livro | undefined = new Livro();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private livrosServices: LivrosService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getGeneros().subscribe(ge => {
      this.generos = ge;
    });
    this.dropdownService.getEditoras().subscribe(ed => {
      this.editoras = ed;
    });

    this.livro = this.route.snapshot.data['livro'];

    this.formulario = this.formBuilder.group({
      codigo: [this.livro?.getCodigo()],
      nome: [this.livro?.getNome(), [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeAutor: [this.livro?.getNomeAutor(), [Validators.required, Validators.minLength(3),
        Validators.maxLength(50)]],
      valor: [this.livro?.getValor(), [Validators.required]],
      genero: [this.livro?.getGenero(), [Validators.required]],
      editora: [this.livro?.getEditora(), [Validators.required]],

    });

  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      console.log('submit');
      this.livrosServices.salvar(this.formulario.value).subscribe(msg => {
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
