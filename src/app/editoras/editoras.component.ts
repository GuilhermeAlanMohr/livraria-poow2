import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from './editora';
import { EditorasService } from './editoras.service';

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

    this.editoras = this.editorasService.getEditoras();

  }

  cadastrarEditora(){
    this.router.navigate(['/editoras/cadastrar']);
  }

}
