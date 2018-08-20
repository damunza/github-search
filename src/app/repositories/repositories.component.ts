import { Component, OnInit } from '@angular/core';

import {GithubRequestService} from '../github-http/github-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  works: any =[];

  searchItem:string ;

  constructor(private gitrequest:GithubRequestService) {
    this.gitrequest.getrepos().subscribe(cat=>{
      // console.log(cat)
      this.works=cat;
    })
  }

  tafuta(){
    this.gitrequest.updateProfile(this.searchItem)
    this.gitrequest.getrepos().subscribe(cat=>{
      // console.log(cat)
      this.works=cat;
    })
}

  ngOnInit() {
  }

}
