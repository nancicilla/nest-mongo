import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonInterface } from './interfaces/seed.interface';
import { PokemonService } from '../pokemon/pokemon.service';

@Injectable()
export class SeedService {
  private readonly axios:AxiosInstance=axios;
  constructor(
    private readonly  pokemonService:PokemonService
  ){}
async  executeSeed(){
    const {data} = await this.axios.get<PokemonInterface>('https://pokeapi.co/api/v2/pokemon?limit=10');
  const vect=[];
    data.results.forEach(({name,url}) => {
      const id=url.split('/');
      const no=+id[id.length-2];
      vect.push( {name,no});
      
      
      
    });
    this.pokemonService.setSeed(vect);
    return vect;
   
  }
  
}
