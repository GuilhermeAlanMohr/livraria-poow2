import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Cidade } from 'src/app/servicos-globais/model/cidade';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estado } from 'src/app/servicos-globais/model/estado';
import { FiliaisService } from '../service/filiais.service';
import { Filial } from '../model/filial';
import {Location} from "@angular/common";

@Component({
  selector: 'app-filial-form',
  templateUrl: './filial-form.component.html',
  styleUrls: ['./filial-form.component.css']
})
export class FilialFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  filial: Filial | undefined = new Filial();
  estado: Estado | undefined = new Estado();
  cidade: Cidade | undefined = new Cidade();

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
    private filiaisServices: FiliaisService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getEstados()
      .subscribe(dados => this.estados = dados);

    this.filial = this.route.snapshot.data['filial'];

    this.formulario = this.formBuilder.group({
      codigo: [this.filial?.getCodigo()],
      nome: [this.filial?.getNome(), [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: [this.filial?.getEmail(), [Validators.required, Validators.email]],
      endereco: [this.filial?.getEndereco(), Validators.required],
      telefone: [this.filial?.getTelefone(), [Validators.required]],
      cidade: [this.filial?.getCidade(), Validators.required],
      estado: [this.filial?.getCidade()?.getEstado(), Validators.required]
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

          this.filiaisServices.getFilial(this.codigo).subscribe(fi => {
            this.filial = fi;
          });
          this.dropdownService.getCidade(this.filial?.getCidade()?.getCodigo()).subscribe(cid => {
            this.cidade = cid;
          });
          this.estado = this.cidade?.getEstado();

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
      this.filiaisServices.salvar(this.formulario.value).subscribe(msg => {
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
