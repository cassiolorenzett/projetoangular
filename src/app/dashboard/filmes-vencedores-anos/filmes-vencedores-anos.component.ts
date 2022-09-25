import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { FilmesVencedoresModel } from './filmesvencedores.model';

@Component({
  selector: 'app-filmes-vencedores-anos',
  templateUrl: './filmes-vencedores-anos.component.html',
  styleUrls: ['./filmes-vencedores-anos.component.css']
})
export class FilmesVencedoresAnosComponent implements OnInit {
  ano= "2018"
  filmes:FilmesVencedoresModel[] =[]
  loadingTable:boolean=false

  constructor(private filmesServices:FilmesService) { }

  ngOnInit(): void {
    this.getFilmes()
  }
  
  getFilmes(){
    this.loadingTable = true;
    this.filmesServices.getFilmesVencedoresPorAno(this.ano)
                        .subscribe((resp:any)=>{
                          this.filmes = resp
                        },(error)=>{
                          console.error(error)
                          alert('ERRO AO CARREGAR FILMES')
                        },()=>{
                          this.loadingTable = false;
                        })
  }

}
