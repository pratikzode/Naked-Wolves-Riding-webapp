import { Component } from "@angular/core";
import { Events } from "./events";

@Component({
    templateUrl:'./events.component.html',
    styleUrls:['./events.component.css']
})
export class EventsComponent{
    eve:Events[]=[
        new Events("Save Environment Road Trip", new Date("2021-04-12"), "Manali", "Leh", "19 JB Street Manali Himachal Pradesh", 8275981320),
        new Events("Great Eastern Road Trip", new Date("2021-04-28"), "Guwahati", "Tawang", "07 MG Road Guwahati Assam", 9545379448),
        new Events("Bengali Tadka Road Trip", new Date("2021-05-02"), "Kolkata", "Digha", "12 Bose Street Kolkata West Bengal", 7595011671),
        new Events("Northern Delight Road Trip", new Date("2021-05-26"), "Delhi", "Agra", "04 Nehru Street Delhi", 9545843755),
        new Events("Khamma Ghani Road Trip", new Date("2021-06-14"), "Jaipur", "Jaisalmer", "07 KM Road Jaipur", 8275522886)
    ]
}



