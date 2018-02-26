import { Component } from '@angular/core';
import { Routes, RouterModule, Router, RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <h2>{{activatedRoute.url|json}}</h2>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
      <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(v3)';
  
  constructor(public activatedRoute: ActivatedRoute) {
    
    
  }
}
