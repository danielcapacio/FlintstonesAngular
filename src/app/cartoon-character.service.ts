import { Injectable } from '@angular/core';
import {DUMMY_DATA} from './data/dummy-data';
import {CartoonCharacter} from './cartoon-character';

@Injectable()
export class CartoonCharacterService {

  constructor() { }

  getCartoonCharacters(): Promise<CartoonCharacter[]> {
    return Promise.resolve(DUMMY_DATA);
  }

}
