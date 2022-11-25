import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private AllPokemons: any;
  public Pokemons: any;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.AllPokemons = res.results
        this.Pokemons = this.AllPokemons
      },

    })
  }

  public getSearch(value: string){
    const filteredPokemons = this.AllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.Pokemons = filteredPokemons;
  }

}
