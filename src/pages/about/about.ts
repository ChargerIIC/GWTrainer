import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

public userData : string;
public repos: string;
public avatarUri: string;
public profileUri: string;
public followers: string;
public following: string;
public memberSince: string;


  constructor(public navCtrl: NavController, public http: Http) {
    //TODO: Break into Component
    http.get('https://api.github.com/users/ChargerIIC')
    .map(r => {
      var data = r.json();
      this.userData = data;
      this.repos = data.public_repos;
      this.avatarUri = data.avatar_url;
      this.profileUri = data.url;
      this.followers = data.followers;
      this.following = data.following;
      this.memberSince = data.created_at;
      return this.userData;
  }).subscribe(console.log);
  }

}
