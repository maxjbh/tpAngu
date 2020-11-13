import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PokeDetail, PokeServiceRes } from './pokemon';

const serviceUrl = "https://pokeapi.co/api/v2/pokemon/";

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(serviceUrl);
  }
  getPokemonInfo(id:string): Observable<PokeDetail>{
    return this.http.get<PokeDetail>(serviceUrl + id + '/');
  }
}
