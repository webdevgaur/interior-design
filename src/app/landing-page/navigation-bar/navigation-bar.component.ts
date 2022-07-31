import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public navLinks!: MenuItem[];
  public activeItem!: MenuItem;
  

  constructor() { }

  ngOnInit(): void {
    
    this.navLinks = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'About', icon: 'pi pi-fw pi-calendar'},
      {label: 'Our Gallery', icon: 'pi pi-fw pi-pencil'},
      {label: 'Services', icon: 'pi pi-fw pi-file'},
    ];

    this.activeItem = this.navLinks[0];
  }

}
