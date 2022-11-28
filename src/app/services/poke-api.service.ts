import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private offset: number = 0
  private url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=100`
  private urlPokemon: string = `https://pokeapi.co/api/v2/pokemon`

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  get apiListAllPokemons(): Observable<any>{
    return this.getData().pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe({
            next: (res) => resPokemons.status = res
          })
        })
      }),
    )
  }

  public apiGetPokemons(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

  getPokemonByName(name: string): Observable<any>{
    return this.http.get<Observable<any>>(`${this.urlPokemon}/${name}`)
  }


  set Offset(value: string){
    if(this.offset + Number(value) >= 0)
      this.offset += Number(value)

      this.url = `https://pokeapi.co/api/v2/pokemon/?offset=${this.offset}&limit=100`
  }

}
