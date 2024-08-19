import { Injectable } from '@nestjs/common';
import { PokemonInterface } from './interfaces/seed.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
 import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    
    private readonly http:AxiosAdapter 
  ){}
async  executeSeed(){
    const data = await this.http.get<PokemonInterface>('https://pokeapi.co/api/v2/pokemon?limit=650');
  const vect=[];
 await this.pokemonModel.deleteMany();
    data.results.forEach(({name,url}) => {
      const id=url.split('/');
      const no=+id[id.length-2];
      vect.push( {name,no});
      
      
      
    });
    //this.pokemonService.setSeed(vect);
    this.pokemonModel.insertMany(vect);
    return vect;
   
  }
  
}
