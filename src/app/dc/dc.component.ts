import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor() { }
  getUrl() {
    return "url('assets/img/2bf6ea4859164d8e36afddcc5eebddba.jpg')";
  }

  ngOnInit() {
  }

}
