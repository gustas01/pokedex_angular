import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
  }

  public changePage(value: string){
    this.pokeApiService.Offset = value
  }

}
