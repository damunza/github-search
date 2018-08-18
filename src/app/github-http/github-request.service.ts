import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

private username: string;

  constructor(private http:HttpClient) {

    this.username= 'damunza'


  }

getprofile(){
  // return this.http.get('https://api.github.com/users/damunza?access_token=4688146874771f2ec799329662a4432e2b280111')

  // return this.http.get(environment.apiUrl)

  return this.http.get(environment.mzizi + this.username + '?access_token=' + environment.token)
}
getrepos(){
    return this.http.get(environment.mzizi + this.username + '/repos?access_token=' + environment.token)
}

updateProfile(searchItem:string){
  // let search_url = `${environment.mzizi}${searchItem}?access_token=${environment.token}`
  // return this.http.get(search_url);
  this.username=searchItem
}
updateRepo(searchItem:string){
  let api_url=`${environment.mzizi}${searchItem}/repos?access_token=${environment.token}`
  return this.http.get(api_url)
}

}
