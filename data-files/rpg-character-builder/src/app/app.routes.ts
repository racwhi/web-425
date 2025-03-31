import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'create-character',
    component: CreateCharacterComponent,
  },
  {
    path: 'create-guild',
    component: CreateGuildComponent,
  },
  {
    path: 'character-faction',
    component: CharacterFactionComponent
  },
];
