import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FilmesService } from './filmes.service';

describe('FilmesService', () => {
  let service: FilmesService;
  let http : HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FilmesService);
    http = TestBed.inject(HttpClient);
  });

  it('Instancia HTTP criada filmes services', () => {
    expect(service).toBeTruthy();
  });

  it('Chamar metodo GET serviços filmes', () => {
    const spy = spyOn(http,'get').and.callThrough()
    service.getProdutores();
    service.getAllFilmes();
    service.getAnosMultiplosVencedores();
    service.getEstudiosxVitorias();
    service.getFilmesVencedoresPorAno();
    expect(spy).toHaveBeenCalled();
  });
});
