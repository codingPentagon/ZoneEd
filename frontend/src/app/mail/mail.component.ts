import {Component} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent {
  senderID :number =80;


  separatorKeysCodes: number[] = [ENTER, COMMA];
  mailCtrl = new FormControl('');
  filteredMails: Observable<string[]>;
  mails: string[] = [];
  allMails: string[] = ['herathhmtm.20@uom.lk', 'hitihamuhmcn.20@uom.lk', 'pemasirimptbs.20@uom.lk', 'batagallabghm.20@uom.lk', 'dissanayakedml.20@uom.lk'];

  constructor() {//TODO
    this.filteredMails = this.mailCtrl.valueChanges.pipe(
      startWith(null),
      map((mail: string | null) => (mail ? this._filter(mail) : this.allMails.slice())),
    );

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our mail
    if (value) {
      this.mails.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.mailCtrl.setValue(null);
  }

  remove(mail: string): void {
    const index = this.mails.indexOf(mail);

    if (index >= 0) {
      this.mails.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.mails.push(event.option.viewValue);
    // @ts-ignore
    this.mailInput.nativeElement.value = '';
    this.mailCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allMails.filter(mail => mail.toLowerCase().includes(filterValue));
  }

  inboxmails: any = [
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "A personal access token (classic)  with gist, read:org, repo, and workflow scopes was recently regenerated for your account. Visit https://github.com/settings/tokens for more information.",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    }
  ];
  sentboxmails: any = [
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "A personal access token (classic)  with gist, read:org, repo, and workflow scopes was recently regenerated for your account. Visit https://github.com/settings/tokens for more information.",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "A personal access token (classic)  with gist, read:org, repo, and workflow scopes was recently regenerated for your account. Visit https://github.com/settings/tokens for more information.",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    },
    {
      sender: "Mr. R.T. Meetiyagoda (Principal)",
      date: "31 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "15 min ago",
      read: false
    },
    {
      sender: "Mrs. A. Rathnayake (Zonal Director)",
      date: "26 December 2022",
      subject: "About the sport meet",
      content: "It will be held on next month",
      time: "1 day ago",
      read: false
    }
  ];

  create:boolean = false;

  createToggle(){
    this.create = !this.create;
    if (this.delete){
      this.delete = false;
    }
  }

  delete:boolean = false;

  deleteToggle(){
    this.delete = !this.delete;
    if (this.create){
      this.create = false;
    }
  }

  mailBox:string = 'inbox';

  reply(recipient : string) {
    this.createToggle();
    this.mails = [];
    this.mails.push(recipient);
  }
}
