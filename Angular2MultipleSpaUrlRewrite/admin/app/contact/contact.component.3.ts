import { Component, OnInit }      from '@angular/core';
import { Routes, RouterModule, Router, RouterState, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Contact, ContactService } from './contact.service';
import { UserService }    from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent implements OnInit {
  contact:  Contact;
  contacts: Contact[];

  msg = 'Loading contacts ...';
  userName = '';
  activeUrl:Observable<string>;
  constructor(private contactService: ContactService, userService: UserService, public activatedRoute: ActivatedRoute) {
    this.userName = userService.userName;
    this.activeUrl = activatedRoute.url.map(segments => segments.join(''));
  }

  ngOnInit() {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
