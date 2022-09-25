import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AnosComMultiplosVencedoresComponent } from './dashboard/anos-com-multiplos-vencedores/anos-com-multiplos-vencedores.component';
import {TableModule} from 'primeng/table';
import { EstudiosVitoriasComponent } from './dashboard/estudios-vitorias/estudios-vitorias.component';
import { ProdutoresComponent } from './dashboard/produtores/produtores.component';
import { FilmesVencedoresAnosComponent } from './dashboard/filmes-vencedores-anos/filmes-vencedores-anos.component';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
