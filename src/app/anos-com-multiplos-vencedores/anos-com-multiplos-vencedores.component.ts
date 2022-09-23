import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { AnosModel } from './anos.model';

@Component({
  selector: 'app-anos-com-multiplos-vencedores',
  templateUrl: './anos-com-multiplos-vencedores.component.html',
  styleUrls: ['./anos-com-multiplos-vencedores.component.css']
})
export class AnosComMultiplosVencedoresComponent implements OnInit {
  anos:AnosModel[] =[]
  loadingTable:boolean=false

  constructor(private filmesServices:FilmesService) { }

  ngOnInit(): void {
    this.loadingTable = true;
    this.filmesServices.getAnosMultiplosVencedores()
                        .subscribe((resp:AnosModel[])=>{
                          this.anos = resp;                          
                        },(error)=>{                          
                          console.error(error)
                          alert('ERRO AO CARREGAR ANOS COM MULTIPLOS VENCEDORES')
                        },()=>{
                          this.loadingTable = false;
                        })
  }

}
