import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlNamePokemon: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any
  public isLoading: boolean = true
  public apiError: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  public getPokemon(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemons(`${this.urlNamePokemon}/${id}`)

    //faz as duas requisições ao mesmo tempo e junta ela, aí preciso fazer 1 subscribe só pra tudo
    return forkJoin([pokemon, name]).subscribe({
      next: res => {
        this.pokemon = res
        this.isLoading = false
      },
      error: err => {
        this.apiError = true
      }
    })

  }

}
