import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private MessageService: MessageService) { }
}
