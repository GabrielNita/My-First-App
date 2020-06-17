import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent  {
  constructor(private router: Router) {
    this.router.navigateByUrl('marvel');



  }
  //constructor(private router: Router, private route: ActivatedRoute) { }
  //navigate(path) {
  //  this.router.navigate([{ outlets: { primary: path, sidemenu: path } }],
  //    { relativeTo: this.route });
  //}
getUrl() {
  return "url('assets/img/2bf6ea4859164d8e36afddcc5eebddba.jpg')";
    }
  

}
