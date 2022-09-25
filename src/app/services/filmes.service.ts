import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private APIBACKEND = "https://tools.texoit.com/backend-java/api/movies";

  constructor(private http:HttpClient) { }

  /**
   * Retorna os anos que tiveram mais de um vencedor
   * @returns Observable<array>
   */
   getAnosMultiplosVencedores(){
    return this.http.get(this.APIBACKEND+"?projection=years-with-multiple-winners")
                    .pipe(
                      timeout(60000),
                      take(1),
                      map((response: any) => {return response.years})
                    )
  }

  /**
 * Retorna os estudios e suas vitorias
 * @returns Observable<array>
 */
  getEstudiosxVitorias(){
    return this.http.get(this.APIBACKEND+"?projection=studios-with-win-count")
                    .pipe(
                      timeout(60000),
                      take(1),
                      map((response: any) => {return response.studios})
                    )
  }

  /**
 * Retorna produtores com maior e menor intervalo entre vitórias;
 * @returns Observable<Object>
 */
   getProdutores(){
    return this.http.get(this.APIBACKEND+"?projection=max-min-win-interval-for-producers")
                    .pipe(
                      timeout(60000),
                      take(1)
                    )
  }

  /**
 * Retorna filmes vencedores de determinado ano
 * @param ano
 * @returns Observable<array>
 */
   getFilmesVencedoresPorAno(ano:string='2018'){
    return this.http.get(this.APIBACKEND+"?winner=true&year="+ano)
                    .pipe(
                      timeout(60000),
                      take(1)
                    )
  }

  /**
 * Retorna todos os filmes
 * @returns Observable<array>
 */
   getAllFilmes(){
    return this.http.get(this.APIBACKEND+"?page=1&size=99")
                    .pipe(
                      timeout(60000),
                      take(1),
                      map((response: any) => {return response.content})
                    )
  }
}
