import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {GitComponent} from '../git/git.component';
import {RepositoriesComponent} from '../repositories/repositories.component';

// Routes

const routes:Routes=[
  {path:"git", component:GitComponent},
  {path:"repositories", component:RepositoriesComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
