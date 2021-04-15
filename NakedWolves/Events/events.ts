export class Events{
    eventName:string;
    eventDate:Date;
    from:string;
    to:string;
    address:string;
    contactNo:number;

    constructor(eventName:string, eventDate:Date, from:string, to:string, address:string, contactNo:number){
    this.eventName=eventName;
    this.eventDate=eventDate;
    this.from=from;
    this.to=to;
    this.address=address;
    this.contactNo=contactNo;

    }
}
