import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Editora } from '../editora';
import { EditorasService } from '../editoras.service';

@Component({
  selector: 'app-editora-detalhe',
  templateUrl: './editora-detalhe.component.html',
  styleUrls: ['./editora-detalhe.component.css']
})
export class EditoraDetalheComponent implements OnInit {

  codigo: number = 0;
  inscricao: Subscription = new Subscription();

  editora: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editorasService: EditorasService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.codigo = params['id'];

        this.editora = this.editorasService.getEditora(this.codigo);

        if(this.editora == null){
          console.log("Editora não encontrada");
          this.router.navigate(['/editoras']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarEditora(){
    this.router.navigate(['/editoras', this.editora.id, 'editar']);
  }

}
