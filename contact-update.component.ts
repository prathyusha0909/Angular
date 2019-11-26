import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ContactModel } from '../models/contact-model';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  constructor(
    private service: ContactService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder  
  ) { }
  model: ContactModel;
  fg: FormGroup;
  
  ngOnInit() {
    let custId = this.activeRoute.snapshot.params.id;      // getting the custId
this.model = new ContactModel(0,'','','','','','','','',false);
this.fg = this.fb.group(
{
 contId: new FormControl(this.model.ContId),    //extracting each individual values
 firstName: new FormControl(this.model.FirstName),
 middleName: new FormControl(this.model.MiddleName),
 lastName: new FormControl(this.model.LastNAme),
 birthdate: new FormControl(this.model.BirthDate),
 emailId: new FormControl(this.model.EmailId),
 mobileNo: new FormControl(this.model.MobileNo),
 workphone: new FormControl(this.model.workPhone),
 homephone: new FormControl(this.model.HomePhone),
 isactive: new FormControl(this.model.IsActive)
});
this.service.getAllDetails(custId) .subscribe(data=>{this.model = data;
this.fg.patchValue({
  contId:this.model.ContId,                // patching the extrcated values to textboxes
  firstName:this.model.FirstName,
  middleName: this.model.MiddleName,
  lastName: this.model.LastNAme,
  birthdate: this.model.BirthDate,
  emailId:this.model.EmailId,
  mobileNo:this.model.MobileNo,
  workphone:this.model.workPhone,
  homephone:this.model.HomePhone,
  isactive:this.model.IsActive,
})
});
}
 
get f() { return this.fg.controls; }
 
submit(){
this.model.ContId = this.f.contId.value;     //upon clicking update all values will get
this.model.FirstName = this.f.firstName.value;    // updated and redirected to list page
this.model.MiddleName =this.f.middleName.value;
this.model.LastNAme =this.f.lastName.value;
this.model.BirthDate =this.f.birthdate.value;
this.model.EmailId =this.f.emailId.value;
this.model.MobileNo =this.f.mobileNo.value;
this.model.workPhone =this.f.workphone.value;
this.model.HomePhone = this.f.homephone.value;
this.model.IsActive = this.f.isactive.value;

this.service.update(this.model).subscribe(() => {
  this.router.navigate(['/customers/list']);
});
  }

}


// import { CustomerService } from '../services/customer.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { CustomerModel } from '../models/customer-model';
 

