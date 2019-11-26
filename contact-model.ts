export class ContactModel {
    constructor(
        public ContId :Number,
        public FirstName:string,
        public MiddleName:string,
        public LastNAme:string,
        public BirthDate:string,
        public EmailId:string,
        public MobileNo:string,
        public workPhone:string,
        public HomePhone:string,
        public IsActive:boolean,
    ){
        this.ContId=ContId;
        this.FirstName=FirstName;
        this.MiddleName=MiddleName;
        this.LastNAme=LastNAme;
        this.BirthDate=BirthDate;
        this.EmailId=EmailId;
        this.MobileNo=MobileNo;
        this.workPhone=workPhone;
        this.HomePhone=HomePhone;
        this.IsActive=IsActive;
    }
}
