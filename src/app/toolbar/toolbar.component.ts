import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  loading: boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
    console.log("2.loading: " + this.loading);
  }
  //constructor(private router: Router, private route: ActivatedRoute) { }
  //navigate(path) {
  //  this.router.navigate([{ outlets: { primary: path, sidemenu: path } }],
  //    { relativeTo: this.route });
  //}

  ngOnInit() {
  }

}
