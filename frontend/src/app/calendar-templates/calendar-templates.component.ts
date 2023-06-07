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
  @Input() userRole:string = 'zonal';
  create:boolean = false;
  delete:boolean = false;
  templates: CalendarDetail[] = [];
  selectedTemplateID:number = 0;
  deleteItemIDs:number[] = [];

  constructor(private calendarService:CalendarService) {
  }

  ngOnInit() {
    this.getTemplates();
  }

  createToggle(){
    this.create = !this.create;
    this.delete = false;
  }

  deleteToggle(){
    this.delete = !this.delete;
    this.create = false;
  }

  getTemplates(){
    this.calendarService.fetchTemplates(this.sclID).subscribe(res => {
      this.templates = res;
      this.selectedTemplateID = this.templates[0].id;
    })
  }

  createTemplate(form: NgForm) {
    const template:CalendarDetail = {
      id: 0,
      name: form.value.name,
      sclID: this.sclID,
      year: form.value.year,
      status: ''
    }

    this.calendarService.addTemplate(template).subscribe();
  }

  deleteTemplate() {
    this.calendarService.removeTemplates(this.deleteItemIDs).subscribe();
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
}
