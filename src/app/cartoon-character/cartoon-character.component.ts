import { Component, OnInit } from '@angular/core';
import {CartoonCharacter} from '../cartoon-character';
import {CartoonCharacterService} from '../cartoon-character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon-character',
  templateUrl: './cartoon-character.component.html',
  styleUrls: ['./cartoon-character.component.css']
})

export class CartoonCharacterComponent implements OnInit {
  selected: CartoonCharacter;
  characters: CartoonCharacter[];

  constructor(
    private cartoonService: CartoonCharacterService,
    private router: Router
  ) { }

  onSelect(character: CartoonCharacter): void {
    this.selected = character;
  }

  getCartoonCharacters(): void {
    this.cartoonService.getCartoonCharacters()
      .then(characters => this.characters = characters);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selected.PersonId]);
  }

  ngOnInit(): void {
    this.getCartoonCharacters();
  }
}
