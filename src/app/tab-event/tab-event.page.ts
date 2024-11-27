import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { eventGet, eventPost, userI} from 'src/interfaces/interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-event',
  templateUrl: './tab-event.page.html',
  styleUrls: ['./tab-event.page.scss'],
})
export class TabEventPage implements OnInit {

  event: eventGet[]=[];

  email:any;
  myUser:any;

  constructor(private api:ApiDataService,
              private route:Router) { this.email = sessionStorage.getItem('Email')}

  ngOnInit() {
    this.api.getAllEvent().subscribe(data=>{
      this.event=data;
    })

    this.api.getUser(this.email).subscribe(data=>{
      this.myUser=data;
    })
    }

  openEvent(Observable : eventGet){
    this.route.navigate(['/page-detail'],{queryParams:{event: JSON.stringify(Observable)}});
  }

}
