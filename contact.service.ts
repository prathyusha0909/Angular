import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact-model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as ENV } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactList:ContactModel[]=[];

  constructor( private http: HttpClient) {

    // this.customerList.push(new CustomerModel('111','hpe','radha','banglore','india'));
    // this.customerList.push(new CustomerModel('222','canarys','prathyusha','banglore','india'));
    // this.customerList.push(new CustomerModel('333','ndt','tulasi','chenai','india'));
   }
   getAll(){
    //return this.customerList;
    return this.http.get<ContactModel[]>(ENV.contactUrl);
    // returns and observable<CustomerModel> list
  }
   getAllDetails(ContID:number)
   {
  return this.http.get<ContactModel>(`${ENV.contactUrl}/${ContID}`);
   }

    create(item: ContactModel ) 
    {
     var body=JSON.stringify(item);
     var url=`${ENV.contactUrl}`;
     var headers= new HttpHeaders({
       "content-Type":"application/json"
      })
    return this.http.post<ContactModel>(url,body,{headers:headers});
  
    }
    update(item:ContactModel){
    var body=JSON.stringify(item);
   var url=`${ENV.contactUrl}/${item.ContId}`;
    var headers= new HttpHeaders({
    "content-Type":"application/json"
    })
   return this.http.put<ContactModel>(url,body,{headers:headers});
  }


  }