import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import { FilmesModel } from './filmes.model';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  options=[{name:"Yes",code:'true'},{name:"No",code:'false'}]
  filmes:FilmesModel[] =[]
  loadingTable:boolean=false

  constructor(private filmesServices:FilmesService) { }

  ngOnInit(): void {
    this.loadingTable = true;
    this.filmesServices.getAllFilmes()
                        .subscribe((resp:FilmesModel[])=>{
                          this.filmes = resp
                        },(error)=>{
                          console.error(error)
                          alert('ERRO AO CARREGAR FILMES')
                        },()=>{
                          this.loadingTable = false;
                        })
  }

}
