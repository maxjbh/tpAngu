import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon, PokeDetail } from '../pokemon';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  selectedPokeId: string = '';
  searchPokeName = '';
  pokies: Pokemon[] = [];
  pokeDetail: PokeDetail;

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {
    //this.pokies.push(new Pokemon('1', "pikachuuu"));
    //this.pokies.push(new Pokemon('2', "mario"));
    //this.pokies.push(new Pokemon('3', "Bart"));
    //this.pokies.push(new Pokemon('4', "Peter"));
   }

  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokies.push(new Pokemon(""+(index+1), e.name));
      })
    });
  }

  //function linked with the go button
  go(){
    this.pokeShareInfoService.setValue(this.selectedPokeId);
    //if a pokemon is selected, create a pokeDetail object 
    if(this.selectedPokeId != ""){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe((data) => 
      { this.pokeDetail = data;
      })
    }
  }

}
