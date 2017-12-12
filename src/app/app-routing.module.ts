import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevelopersComponent} from './developers/developers.component';
import {GamesComponent} from './games/games.component';
import {CharactersComponent} from './characters/characters.component';
import {DeveloperStartComponent} from './developers/developer-start/developer-start.component';
import {DeveloperDetailComponent} from './developers/developer-detail/developer-detail.component';
import {DeveloperEditComponent} from './developers/developer-edit/developer-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/developers', pathMatch: 'full' },
  { path: 'developers', component: DevelopersComponent, children: [
    { path: '', component: DeveloperStartComponent },
    { path: 'new', component: DeveloperEditComponent },
    { path: ':_id', component: DeveloperDetailComponent },
    { path: ':_id/edit', component: DeveloperEditComponent },
  ] },
  { path: 'games', component: GamesComponent, children: [
    { path: '', component: GamesComponent },
  ]},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharactersComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
