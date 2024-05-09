import { Injectable } from '@nestjs/common'
import { PokeResponse } from './interfaces/poke-response.interface'

@Injectable()
export class SeedService {
  async executedSeed () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
    const data: PokeResponse = await response.json()

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]
    })
    return data.results
  }
}
