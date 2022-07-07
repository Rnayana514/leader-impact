import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/Chptr1', title: 'A Working Faith'},
    { path: '/Chptr2', title: 'A New Identity'},
    { path: '/Chptr3', title: 'Forgiven And Free'},
    { path: '/Chptr4', title: 'Power For Living'},
    { path: '/Chptr5', title: 'Knowing God - Really!!'},
    { path: '/Chptr6', title: 'Using the Owner\'s Manual'},
    { path: '/Chptr7', title: 'Potent Prayer'},
    { path: '/Chptr8', title: 'Work - The Original Design'},
    { path: '/Chptr9', title: 'Stewardship'},
    { path: '/Chptr10', title: 'Your Calling'}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
