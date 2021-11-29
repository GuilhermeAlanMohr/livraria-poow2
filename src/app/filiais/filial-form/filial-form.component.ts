import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Cidade } from 'src/app/servicos-globais/cidade';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estado } from 'src/app/servicos-globais/estado';
import { FiliaisService } from '../filiais.service';
import { Filial } from '../filial';

@Component({
  selector: 'app-filial-form',
  templateUrl: './filial-form.component.html',
  styleUrls: ['./filial-form.component.css']
})
export class FilialFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  filial: any = '';
  estado: number = 0;
  cidade: any = {};

  estados: Estado[] = [];
  cidades: Cidade[] = [];
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private route: ActivatedRoute,
    private router: Router,
    private filiaisServices: FiliaisService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getEstados()
      .subscribe(dados => this.estados = dados);

      this.formulario = this.formBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        email: [null, [Validators.required, Validators.email]],
        endereco: [null, Validators.required],
        telefone: [null, [Validators.required]],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]

    });

    this.formulario.get('estado')?.valueChanges
      .pipe(
        tap(estado => console.log('Novo Estado: ',estado)),
        map(estado => this.estados.filter(e => e.sigla === estado)),
        map(estados => estados && estados.length > 0 ? estados[0].sigla : ''),
        tap(console.log),
        switchMap((estadoSigla: string) => this.dropdownService.getCidades(estadoSigla)),
        tap(console.log)
      )
      .subscribe(cidades => this.cidades = cidades);

      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.codigo = params['id'];

          this.filial = this.filiaisServices.getFilial(this.codigo);
          this.cidade = this.dropdownService.getCidade(this.filial.cidade);
          this.estado = this.cidade.estado;

          if(this.filial === null){
            this.filial = {};
          }
        }
      );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarFilial(filial:Filial){
    this.filiaisServices.editarFilial(filial);
    console.log("Filial editada com sucesso!");
    this.router.navigate(['/filiais']);
  }

  addFilial(){
    this.filiaisServices.addEditora(this.filial.nome,this.filial.email,this.filial.endereco,
      this.filial.telefone,this.filial.cidade);

    console.log("Filial adicionada com sucesso!");
    this.router.navigate(['/filiais']);
  }

  excluirFilial(filial:Filial){
    this.filiaisServices.excluirFilial(filial);
    console.log("Filial removida com sucesso!");
    this.router.navigate(['/filiais']);
  }

}
