import { Component } from "@angular/core";

@Component({
    selector:'home-comp',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class homecomponent{
    about:string="About Naked Wolves :-Naked wolves is a group of motorcycle enthusiasts who ride bajaj pulsar NS200";
//    "  Purpose of the group"
//    " 1. To spread awareness about safe riding principles."
//    " 2. Follow what we preach, all the members use proper safety gear while riding."
//    " 3. Ride.Ride.Ride."

imgpath:string="assets/images/NW.png";
    // w:number="500";
    // h:number="300";
    
    desc:string="Purpose of the group : 1] To spread awareness about safe riding principles. 2] Follow what we preach, all the members use proper safety gear while riding. 3] Ride.Ride.Ride.";
}


