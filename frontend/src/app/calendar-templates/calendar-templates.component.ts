import {Component, Input} from '@angular/core';
import {CalendarDetail} from "../models/calendar.model";
import {CalendarService} from "../services/calendar.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-calendar-templates',
  templateUrl: './calendar-templates.component.html',
  styleUrls: ['./calendar-templates.component.css']
})
export class CalendarTemplatesComponent {
  @Input() sclID:number = 0;
  @Input() disableCreation:boolean = false;
  create:boolean = false;
  delete:boolean = false;
  templates: CalendarDetail[] = [];
  selectedTemplate!:CalendarDetail;
  deleteItemIDs:number[] = [];

  constructor(private calendarService:CalendarService) {
  }

  ngOnInit() {
    this.getTemplates();
  }

  createToggle(){
    this.create = !this.create;
    this.delete = false;
    console.log(this.selectedTemplate)
  }

  deleteToggle(){
    this.delete = !this.delete;
    this.create = false;
  }

  getTemplates(){
    if (this.disableCreation){
      this.calendarService.fetchPendingCalendars().subscribe(res => {
        this.templates = res;
        this.selectedTemplate = res[0];
      })
    }
    else {
      this.calendarService.fetchCalendars(this.sclID).subscribe(res => {
        this.templates = res;
        this.selectedTemplate = res[0];
      })
    }
  }

  createTemplate(form: NgForm) {
    const template:CalendarDetail = {
      id: 0,
      name: form.value.name,
      sclID: this.sclID,
      year: form.value.year,
      status: 'Not Submitted'
    }

    this.calendarService.addCalendar(template).subscribe({
      complete: () => {
        this.getTemplates();
        this.createToggle();
      }
    });
  }

  deleteTemplate() {
    this.calendarService.removeCalendars(this.deleteItemIDs).subscribe({
      complete: () => {
        this.getTemplates();
        this.deleteToggle();
      }
    });
  }

  toggleDeleteItem(id: number) {
    const index = this.deleteItemIDs.indexOf(id);
    if (index > -1) {
      this.deleteItemIDs.splice(index, 1);
    }
    else {
      this.deleteItemIDs.push(id);
    }
  }

  updateApproval(isApproved: boolean) {
    this.selectedTemplate.status = isApproved ? 'Approved' : 'Rejected';
    this.calendarService.addCalendar(this.selectedTemplate).subscribe({
      complete: () => {
        this.getTemplates();
      }
    })
  }

  submitTemplate() {
    this.selectedTemplate.status = 'Pending'
    this.calendarService.addCalendar(this.selectedTemplate).subscribe({
      complete: () => {
        this.getTemplates();
      }
    })
  }
}
