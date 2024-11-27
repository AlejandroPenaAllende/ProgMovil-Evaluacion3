import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { ApiDataService } from '../service/api-data.service';
import { assistPost, eventGet, commentPost, commentGet, listPost, listGet } from 'src/interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-detail2',
  templateUrl: './page-detail2.page.html',
  styleUrls: ['./page-detail2.page.scss'],
})
export class PageDetail2Page implements OnInit {

  myEvent:any;

  qrData:string;
  email:any;
  rut:any;
  name:any;
  image:any;

  event: eventGet[]=[];
  comment: commentGet[]=[];
  list: listGet[]=[];

  newComment:commentPost={
    uEmail:"",
    uName:"",
    uImage:"",
    eId:"",
    text:""
  }

  Newassist:assistPost={
    uEmail:"",
    uName:"",
    uRut:"",
    eId:"",
    eName:"",
    eCity:"",
    eImage:"",
    eDate:"",
    confirm:false
  }

  newList:listPost={
    uEmail:"",
    uName:"",
    uImage:"",
    eId:""
  }

  emailData:any;
  emailData2:any;
  idData:any;

  userData:any;

  constructor(private activeR: ActivatedRoute,
              private route:Router,
              private alertC:AlertController,
              private toast:ToastController,
              private api:ApiDataService) {
                                            this.activeR.queryParams.subscribe(param=>{
                                              this.myEvent = JSON.parse(param['event'])
                                            })
                                            this.qrData='';
                                            this.email = sessionStorage.getItem('Email');
                                            this.rut = sessionStorage.getItem('Rut');
                                            this.name = sessionStorage.getItem('Nombre');
                                            this.image = sessionStorage.getItem('image');
                                          }

  ngOnInit() {
    this.api.getListId(this.myEvent.id).subscribe(data=>{
      this.list=data;
    })
  }

  sendToComment(Observable:eventGet){
    this.route.navigate(['/page-detail'],{queryParams:{event: JSON.stringify(Observable)}})
  }

  regresar(){
    this.route.navigate(['/tabs/tab-event']);
  }

  /*Participate(){
    this.api.getAssistEmail(this.email).subscribe(resp=>{
      this.emailData = resp;
      this.api.getAssistId(this.myEvent.id).subscribe(resp=>{
        this.idData = resp;
        if(this.emailData.length>0 && this.idData.length>0){
          this.ErrorDup();
        }
        else{
          this.Newassist.uEmail = this.email;
          this.Newassist.uName = this.name;
          this.Newassist.uRut = this.rut.slice(0,8);
          this.Newassist.eId = this.myEvent.id;
          this.Newassist.eName = this.myEvent.name;
          this.Newassist.eDate = this.myEvent.date;
          this.Newassist.eCity = this.myEvent.city;
          this.Newassist.eImage = this.myEvent.image;
          this.Newassist.confirm = false;
          this.api.newAssist(this.Newassist).subscribe();

          this.api.getUser(this.email).subscribe(data=>{
            this.emailData2 = data;
            this.newList.eId = this.myEvent.id;
            this.newList.uName = this.name;
            this.newList.uEmail = this.email;
            this.newList.uImage = this.image;

            this.api.newList(this.newList).subscribe();
            this.asistEvent();
            location.reload();
          })
        }
      })
    })
  }*/

    Participate(){
    this.api.getAssistData(this.email,this.myEvent.id).subscribe(resp=>{
      this.idData = resp;
      if(this.idData.length>0){
        this.ErrorDup();
      }
      else{
        this.Newassist.uEmail = this.email;
        this.Newassist.uName = this.name;
        this.Newassist.uRut = this.rut.slice(0,8);
        this.Newassist.eId = this.myEvent.id;
        this.Newassist.eName = this.myEvent.name;
        this.Newassist.eDate = this.myEvent.date;
        this.Newassist.eCity = this.myEvent.city;
        this.Newassist.eImage = this.myEvent.image;
        this.Newassist.confirm = false;
        this.api.newAssist(this.Newassist).subscribe();

        this.api.getUser(this.email).subscribe(data=>{
          this.emailData2 = data;
          this.newList.eId = this.myEvent.id;
          this.newList.uName = this.name;
          this.newList.uEmail = this.email;
          this.newList.uImage = this.image;

          this.api.newList(this.newList).subscribe();
          this.asistEvent();
        })
      }
      })
    }    

  async ErrorDup(){
    const alert = await this.toast.create({
      header: 'Ya te encuentras regitrado en este evento',
      buttons: ['OK']
    })
    alert.present();
  }

  async asistEvent(){
    const alert = await this.toast.create({
      header: 'Registrado exitosamente!',
      buttons: ['OK']
    })
    alert.present();
  }

}
