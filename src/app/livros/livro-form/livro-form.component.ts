import { Genero } from './../genero';
import { Livro } from './../livro';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Editora } from 'src/app/editoras/editora';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { LivrosService } from '../livros.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  editoras$!: Observable<Editora[]>;
  generos$!: Observable<Genero[]>;
  formulario!: FormGroup;
  submitted: boolean = false;

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

    this.generos$ = this.dropdownService.getGeneros();
    this.editoras$ = this.dropdownService.getEditoras();

    const livroSelecionado = this.route.snapshot.data['livro'];

    this.formulario = this.formBuilder.group({
      id: [livroSelecionado.id],
      nome: [livroSelecionado.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      nomeAutor: [livroSelecionado.nomeAutor, [Validators.required, Validators.minLength(3),
        Validators.maxLength(50)]],
      valor: [livroSelecionado.valor, [Validators.required]],
      genero: [null, [Validators.required]],
      editora: [null, [Validators.required]],

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

      let msgSuccess = 'Livro criado com sucesso!';
      let msgError = 'Erro ao criar livro, tente novamente!';
      if (this.formulario.value.id) {
        msgSuccess = 'Livro atualizado com sucesso!';
        msgError = 'Erro ao atualizar livro, tente novamente!';
      }
      this.livrosServices.salvar(this.formulario.value).subscribe(
        success => {
          console.log(msgSuccess),
          this.location.back()
        },
        error => console.log(msgError)
      );

    }
  }

  onCancel(){
    this.submitted = false;
    this.formulario.reset();
  }

}
