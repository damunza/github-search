import { Component, OnInit } from '@angular/core';
import {GithubRequestService} from '../github-http/github-request.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

user: any =[];
works: any =[];

  constructor(private gitrequest:GithubRequestService) {
    this.gitrequest.getprofile().subscribe(rep=>{
      console.log(rep)
      this.user=rep;

    });

    this.gitrequest.getrepos().subscribe(cat=>{
      console.log(cat)
      this.works=cat;
    })
   }



  ngOnInit() {
  }

}
