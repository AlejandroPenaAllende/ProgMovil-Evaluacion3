import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../service/api-data.service';
import { assistGet, eventGet, userI } from 'src/interfaces/interface';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  user: userI[]=[];

  users: userI={
    rut:"",
    name:"",
    email:"",
    image:"",
    password:"",
    isActive:true
  };

  
  events: eventGet[]=[];
  randomE: eventGet[]=[]

  email: any;
  image:any;

  /*myAssist: assistGet={
    id:"",
    uEmail:"",
    uRut:"",
    uName:"",
    eId:"",
    eName:"",
    eCity:"",
    eImage:"",
    eDate:"",
    confirm:false
  }*/

  


  constructor(private api:ApiDataService,
              private route:Router
  ) { this.email = sessionStorage.getItem('Email');
      this.image = sessionStorage.getItem('image');
  }

  /*ngOnInit() {
    this.api.getAllUser().subscribe(data=>{
      this.user = data;
    })
    this.email;
  }*/

  ngOnInit(){

    this.api.getAllEvent().subscribe(data=>{
      this.events=data;

      let r = Math.floor(Math.random() * this.events.length);
      this.randomE = [this.events[r]]
    })
  }

  sendToqr(){
    this.route.navigate(['/page-qr']);
  }

  sendToProfile(){
    this.route.navigate(['/page-profile']);
  }

  logOut(){
    sessionStorage.setItem('Nombre',"");
    sessionStorage.setItem('Rut',"");
    sessionStorage.setItem('Email',"");
    sessionStorage.setItem('image',"");
    sessionStorage.setItem('Conectado', "false");
    sessionStorage.clear();
    this.route.navigate(['page-login']);
  }

  getRandom(){
    let r = Math.floor(Math.random() * this.events.length);
    this.randomE = [this.events[r]]
  }

  openEvent(Observable : eventGet){
    this.route.navigate(['/page-detail'],{queryParams:{event: JSON.stringify(Observable)}});
  }

}
