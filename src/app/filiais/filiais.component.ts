import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiliaisService } from './filiais.service';
import { Filial } from './filial';

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

    this.filiais = this.filiaisService.getFiliais();

  }

  cadastrarFilial(){
    this.router.navigate(['/filiais/cadastrar']);
  }

}
