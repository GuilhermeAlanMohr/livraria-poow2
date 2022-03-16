import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FiliaisService } from './service/filiais.service';
import { Filial } from './model/filial';

@Component({
  selector: 'app-filiais',
  templateUrl: './filiais.component.html',
  styleUrls: ['./filiais.component.css']
})
export class FiliaisComponent implements OnInit {

  filiais: Filial[] = [];

  constructor(
    private filiaisService: FiliaisService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getFiliais();

  }

  getFiliais(){
    this.filiaisService.getFiliais().subscribe(fi => {
      this.filiais = fi
    });
  }

  verificarFilial(id: number | undefined){
    this.router.navigate(["filiais/",id]);
  }

  excluirFilial(id: number | undefined){
    console.log("Código: ",id);
    this.filiaisService.excluirFilial(id).subscribe(msg => {
      console.log(msg),
        alert(msg)
    });
  }

}
