import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Cidade } from 'src/app/servicos-globais/model/cidade';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estado } from 'src/app/servicos-globais/model/estado';
import { Editora } from '../model/editora';
import { EditorasService } from '../service/editoras.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-editora-form',
  templateUrl: './editora-form.component.html',
  styleUrls: ['./editora-form.component.css']
})
export class EditoraFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  editora: Editora | undefined = new Editora();
  estado: Estado = new Estado();
  cidade: Cidade = new Cidade();

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  formulario!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private editorasServices: EditorasService
  ) { }

  ngOnInit(): void {

    this.editora = this.route.snapshot.data['editora'];

    this.dropdownService.getEstados()
      .subscribe(dados => this.estados = dados);

    this.formulario = this.formBuilder.group({
      codigo: [this.editora?.getCodigo()],
      nome: [this.editora?.getNome(), [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: [this.editora?.getEmail(), [Validators.required, Validators.email]],
      endereco: [this.editora?.getEndereco(), Validators.required],
      telefone: [this.editora?.getTelefone(), [Validators.required]],
      cidade: [this.editora?.getCidade()?.getCodigo(), Validators.required],
      estado: [this.editora?.getCidade()?.getEstado()?.getSigla(), Validators.required]

    });

    this.formulario.get('estado')?.valueChanges
      .pipe(
        tap(estado => console.log('Novo Estado: ',estado)),
        map(estado => this.estados.filter(e => e.getSigla() === estado)),
        map(estados => estados && estados.length > 0 ? estados[0].getSigla() : ''),
        tap(console.log),
        switchMap((estadoSigla: string) => this.dropdownService.getCidades(estadoSigla)),
        tap(console.log)
      )
      .subscribe(cidades => this.cidades = cidades);

      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.codigo = params['id'];

          this.editorasServices.getEditora(this.codigo).subscribe(ed => {
            this.editora = ed;
          });
          this.dropdownService.getCidade(this.cidade.getCodigo()).subscribe(cid => {
            this.cidade = cid;
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
      this.editorasServices.salvar(this.formulario.value).subscribe(msg => {
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
