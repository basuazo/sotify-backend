import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artistas';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  artistas: Artista[] = [];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('artistas')
  obtenerArtistas(): Artista[] {
    // this.artistas.push(
    //   new Artista(1, 'juan', 'bio', 'banda', 'chilena', ['rock'], 1),
    // );
    return this.artistas;
  }

  @Post('artistas')
  nuevoArtista(@Body() artista: Artista): Artista {
    this.artistas.push(artista);
    return null;
  }
}
