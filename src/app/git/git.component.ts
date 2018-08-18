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
public results;
public majibu;
searchItem:string ;

  constructor(private gitrequest:GithubRequestService) {
    this.gitrequest.getprofile().subscribe(rep=>{
      // console.log(rep)
      this.user=rep;

    });

    this.gitrequest.getrepos().subscribe(cat=>{
      // console.log(cat)
      this.works=cat;
    })
   }

tafuta(){
  this.gitrequest.updateProfile(this.searchItem)
  // this.gitrequest.updateProfile(searchItem.value).subscribe(data => {
  //   this.results = data;
  //   console.log (this.results)
  // });
  // this.gitrequest.updateRepo(searchItem.value).subscribe(cow =>{
  //   this.majibu=cow;
  //   console.log(this.majibu)
  // })

    // was inside the constructor

    this.gitrequest.getprofile().subscribe(rep=>{
      // console.log(rep)
      this.user=rep;

    });

    this.gitrequest.getrepos().subscribe(cat=>{
      // console.log(cat)
      this.works=cat;
    })
}


  ngOnInit() {
  }

}
