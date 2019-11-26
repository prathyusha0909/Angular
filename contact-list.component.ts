import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from '../models/contact-model';
import { ContactService } from '../service/contact.service';
//import { CustomerModel } from '../models/customer-model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() ContactList : ContactModel[];
  selectedContact : ContactModel;
  @Output() selectContactEvent = new EventEmitter<ContactModel>();

  contactList:ContactModel[] = [];
 

  constructor(
    private router:Router,
    private service:ContactService
  ) { }

  ngOnInit() {
     // this.customerList.push(new CustomerModel('111','hpe','radha','banglore','india'));
    // this.customerList.push(new CustomerModel('222','canarys','prathyusha','banglore','india'));
    // this.customerList.push(new CustomerModel('333','ndt','tulasi','chenai','india'));
   // console.log(this.customerList);
   this.service.getAll().subscribe(data=> this.contactList = data);
  }
  goBack() {
    this.router.navigate(['/contact']);
  }
  getAll()
  {
    this.getAll();
  }
  select(value){
    this.selectContactEvent.emit(value);
  }

}


  

