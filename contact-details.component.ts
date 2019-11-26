import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../models/contact-model';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private service: ContactService,
    private activeRoute: ActivatedRoute
  ) { }
  @Input() model: ContactModel;
 
  ngOnInit() {
     let selectedId = this.activeRoute.snapshot.params.id;
     this.service.getAllDetails(selectedId).subscribe(data=>this.model=data);
  }
  diagnostic(){
    return JSON.stringify(this.model);
  }

}



