import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { EstudiosModel } from './estudios.model';

@Component({
  selector: 'app-estudios-vitorias',
  templateUrl: './estudios-vitorias.component.html',
  styleUrls: ['./estudios-vitorias.component.css']
})
export class EstudiosVitoriasComponent implements OnInit {

  estudios:EstudiosModel[] =[]
  loadingTable:boolean=false

  constructor(private filmesServices:FilmesService) { }

  ngOnInit(): void {
    this.loadingTable = true;
    this.filmesServices.getEstudiosxVitorias()
                        .subscribe((resp:EstudiosModel[])=>{
                          this.estudios = resp.slice(0,3);                         
                        },(error)=>{                         
                          console.error(error)
                          alert('ERRO AO CARREGAR OS ESTUDIOS COM MAIS VITORIAS')
                        },()=>{
                          this.loadingTable = false;
                        })
  }


}
