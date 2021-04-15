import { Component } from "@angular/core";
import { Members} from "./members";

@Component({
    templateUrl:'./members.component.html',
    styleUrls:['./members.component.css']
})
export class MembersComponent{
    mem:Members[]=[
        new Members("Pratik", "NW", "pratik.zode@gmail.com", 9822543780, "Mumbai", "assets/images/crysis_3.jpg"),
        new Members("Rajesh", "NW", "rajesh@yahoo.com", 9545843755, "Pune", "assets/images/crysis_3.jpg"),
        new Members("Anon", "NW", "anon@yahoo.com", 8275522886, "Mumbai", "assets/images/crysis_3.jpg"),
        new Members("Shivam", "NW", "Shivam@gmail.com", 9823677490, "Pune", "assets/images/crysis_3.jpg"),
        new Members("Surojit", "NW", "surojit@gmail.com", 7359688241, "Mumbai", "assets/images/crysis_3.jpg"),
        new Members("Sachin", "NW", ".Sachin@gmail.com", 8275981320, "Pune", "assets/images/crysis_3.jpg"),
        new Members("Gaurav", "NW", "Gourav@yahoo.com", 9545379448, "Mumbai", "assets/images/crysis_3.jpg"),
        new Members("Shubham", "NW", "Shubham@gmail.com", 9822676391, "Pune", "assets/images/crysis_3.jpg"),
        new Members("Tej", "NW", "Tej@gmail.com", 9545843755, "Mumbai", "assets/images/crysis_3.jpg"),
        new Members("Rahul", "NW", "Rahul@gmail.com", 7595011671, "Pune", "assets/images/crysis_3.jpg")
    ]
}
