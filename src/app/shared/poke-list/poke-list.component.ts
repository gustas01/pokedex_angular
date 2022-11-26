import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private AllPokemons: any;
  public Pokemons: any;

  public previous: boolean = true
  public next: boolean = true

  public apiError: boolean = false

  constructor(private pokeApiService: PokeApiService) { }
  @Output() public emmitNext: EventEmitter<string> = new EventEmitter();
  @Output() public emmitPrevious: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.AllPokemons = res.results
        this.Pokemons = this.AllPokemons
      },
      error: err => {
        this.apiError = true
      }

    })
    this.disablePagination()
  }

  public getSearch(value: string){
    const filteredPokemons = this.AllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.Pokemons = filteredPokemons;
  }

  private disablePagination(){
    this.pokeApiService.getData().subscribe({
      next: res => {
        this.previous = !!res.previous;
        this.next = !!res.next
      }
    })
  }

  public nextPage(){
    this.emmitNext.emit('100')

    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.AllPokemons = res.results
        this.Pokemons = this.AllPokemons
      },
      error: err => {
        this.apiError = true
      }

    })
    this.disablePagination()
  }

  public previousPage(){
    this.emmitPrevious.emit('-100')

    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.AllPokemons = res.results
        this.Pokemons = this.AllPokemons
      },
      error: err => {
        this.apiError = true
      }

    })
    this.disablePagination()
  }




}
