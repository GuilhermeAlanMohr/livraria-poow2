import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Cidade } from 'src/app/servicos-globais/cidade';
import { DropdownService } from 'src/app/servicos-globais/dropdown.service';
import { Estado } from 'src/app/servicos-globais/estado';
import { Editora } from '../editora';
import { EditorasService } from '../editoras.service';

@Component({
  selector: 'app-editora-form',
  templateUrl: './editora-form.component.html',
  styleUrls: ['./editora-form.component.css']
})
export class EditoraFormComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();
  editora: any = '';
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
    private editorasServices: EditorasService
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

          this.editora = this.editorasServices.getEditora(this.codigo);
          this.cidade = this.dropdownService.getCidade(this.editora.cidade);
          this.estado = this.cidade.estado;

          if(this.editora === null){
            this.editora = {};
          }
        }
      );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarEditora(editora:Editora){
    this.editorasServices.editarEditora(editora);
    console.log("Editora editada com sucesso!");
    this.router.navigate(['/editoras']);
  }

  addEditora(){
    this.editorasServices.addEditora(this.editora.nome,this.editora.email,this.editora.endereco,
      this.editora.telefone,this.editora.cidade);

    console.log("Editora adicionada com sucesso!");
    this.router.navigate(['/editoras']);
  }

  excluirEditora(editora:Editora){
    this.editorasServices.excluirEditora(editora);
    console.log("Editora removida com sucesso!");
    this.router.navigate(['/editoras']);
  }

}
