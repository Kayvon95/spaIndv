import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { DevelopersComponent } from './developers/developers.component';
import { CharactersComponent } from './characters/characters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeveloperStartComponent } from './developers/developer-start/developer-start.component';
import { DeveloperListComponent } from './developers/developer-list/developer-list.component';
import {DevelopersService} from './developers/developers.service';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { DeveloperCardComponent } from './developers/developer-list/developer-card/developer-card.component';
import { DeveloperDetailComponent } from './developers/developer-detail/developer-detail.component';
import {HttpModule} from '@angular/http';
import { DeveloperEditComponent } from './developers/developer-edit/developer-edit.component';
import { GameListComponent } from './games/game-list/game-list.component';
import {GamesService} from './games/games.service';
import { GameCardComponent } from './games/game-list/game-card/game-card.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import {CharactersService} from './characters/characters.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    DevelopersComponent,
    CharactersComponent,
    DeveloperStartComponent,
    DeveloperListComponent,
    DropdownDirective,
    DeveloperCardComponent,
    DeveloperDetailComponent,
    DeveloperEditComponent,
    GameListComponent,
    GameCardComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DevelopersService, GamesService, CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
