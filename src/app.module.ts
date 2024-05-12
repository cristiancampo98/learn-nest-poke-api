import { join } from 'path'

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'

import { AppConfiguration } from './config/app.config'
import { JoiValidationSchema } from './config/joi.validation'

import { CommonModule } from './common/common.module'
import { PokemonModule } from './pokemon/pokemon.module'
import { SeedModule } from './seed/seed.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfiguration],
      validationSchema: JoiValidationSchema,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemonsdb',
    }),

    PokemonModule,

    CommonModule,

    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
