import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  allowNewComics = false;
  addNewComicsStatus: string = 'offline';
  title = 'COMICS';
  comicsName = 'Comics';
  comicsCreated = false;
  comicses = ['Comics', 'Comics2'];
  loading = true;
  constructor(private router: Router) {
    this.addNewComicsStatus = Math.random() > 0.5 ? 'offline' : 'online';
    setTimeout(() => {
      this.allowNewComics = true
    }, 2000);

  }
  onCreateComics() {
    this.comicsCreated = true;
    this.comicses.push(this.comicsName);
    this.loading = false;
    this.addNewComicsStatus = 'Comics Created and the name is ' + this.comicsName;
    

  }
  onUpdateComicsName($event: Event) {
    this.comicsName = (<HTMLInputElement>event.target).value;
  }
  getUrl() {
    return "url('app/2bf6ea4859164d8e36afddcc5eebddba.jpg')";
  }
  getComicsStatus() {
    return this.addNewComicsStatus;
  }
  getColor() {
    return this.addNewComicsStatus === 'online' ? 'green' : 'red';
  }
  goToAboutPage() {
    this.router.navigate(['marvel']); // here "About" is name not path
  }
  onDistroyComics() {
    this.comicses.splice(0,1);
  }

}
