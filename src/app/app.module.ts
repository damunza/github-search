import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import {GithubRequestService} from './github-http/github-request.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './routing/routing.module';

const routes:Routes=[
  {path:"git", component:GitComponent},
  {path:"repositories", component:RepositoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
