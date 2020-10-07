import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string = '';
  selectedPokeId: string = '';
  searchPokeName = '';
  pokies: Pokemon[] = [];

  constructor() {
    this.pokies.push(new Pokemon('1', "pikachuuu"));
    this.pokies.push(new Pokemon('2', "mario"));
    this.pokies.push(new Pokemon('3', "Bart"));
    this.pokies.push(new Pokemon('4', "Peter"));
   }

  ngOnInit(): void {
  }

}
