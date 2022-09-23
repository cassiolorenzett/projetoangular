import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AnosComMultiplosVencedoresComponent } from './anos-com-multiplos-vencedores/anos-com-multiplos-vencedores.component';
import {TableModule} from 'primeng/table';
import { EstudiosVitoriasComponent } from './estudios-vitorias/estudios-vitorias.component';
import { ProdutoresComponent } from './produtores/produtores.component';
import { FilmesVencedoresAnosComponent } from './filmes-vencedores-anos/filmes-vencedores-anos.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AnosComMultiplosVencedoresComponent,
    EstudiosVitoriasComponent,
    ProdutoresComponent,
    FilmesVencedoresAnosComponent,
    ListaFilmesComponent  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
