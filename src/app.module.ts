import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvConfig } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
//console.log(process.env.MONGODB)
@Module({
  imports: [
    ConfigModule.forRoot({
      load:[EnvConfig],
      validationSchema:JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    MongooseModule.forRoot(process.env.MONGODB,{
      dbName:'pokemonsdb'
    }),
 // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule,

    CommonModule,

    SeedModule,
   

  ],
})
export class AppModule {
 constructor(
  private readonly configService:ConfigService
 ){
 // console.log(configService)
 
 }
}
