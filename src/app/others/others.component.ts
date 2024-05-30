import {Component, inject, OnInit} from '@angular/core';
import {ContactService} from "../services/contact/contact.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent  implements  OnInit {
  private contactService = inject(ContactService);

  contacts: any = [];
  ngOnInit() {
    this.contactService.list()
      .subscribe((contacts:any)  => {
        this.contacts = contacts;
    })
  }
}
