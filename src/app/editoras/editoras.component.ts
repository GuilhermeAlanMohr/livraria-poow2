import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from './model/editora';
import { EditorasService } from './service/editoras.service';

@Component({
  selector: 'app-editoras',
  templateUrl: './editoras.component.html',
  styleUrls: ['./editoras.component.css']
})
export class EditorasComponent implements OnInit {

  editoras: Editora[] = [];

  constructor(
    private editorasService: EditorasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEditoras();
  }

  cadastrarEditora(){
    this.router.navigate(['/editoras/cadastrar']);
  }

  getEditoras(){
    this.editorasService.getEditoras().subscribe(edi =>{
      this.editoras = edi;
    });
  }

  verificarEditora(id: number | undefined){
    this.router.navigate(["editoras/",id]);
  }

  excluirEditora(id: number | undefined){
    console.log("Código: ",id);
    this.editorasService.excluirEditora(id).subscribe(
      success => {
        console.log("Editora excluída com sucesso"),
          alert("Editora excluída com sucesso")
      },
      error => {
        console.log("Erro ao excluir editora"),
          alert("Erro ao excluir editora")
      }
    );
  }

}
