import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { ProdutoresModel } from './produtores.model';

@Component({
  selector: 'app-produtores',
  templateUrl: './produtores.component.html',
  styleUrls: ['./produtores.component.css']
})
export class ProdutoresComponent implements OnInit {

  produtores_max:ProdutoresModel[] =[]
  produtores_min:ProdutoresModel[] =[]
  loadingTable:boolean=false

  constructor(private filmesServices:FilmesService) { }

  ngOnInit(): void {
    this.loadingTable = true;
    this.filmesServices.getProdutores()
                        .subscribe((resp:any)=>{
                          this.produtores_max = resp.max
                          this.produtores_min = resp.min
                          this.loadingTable = false;
                        },(error)=>{
                          this.loadingTable = false;
                          console.error(error)
                          alert('ERRO AO CARREGAR OS ESTUDIOS COM MAIS VITORIAS')
                        })
  }

}
