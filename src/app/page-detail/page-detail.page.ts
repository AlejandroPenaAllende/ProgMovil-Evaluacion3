import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import { ApiDataService } from '../service/api-data.service';
import { assistPost, commentGet, commentPost, eventGet, listPost } from 'src/interfaces/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {

  myEvent:any;

  qrData:string;
  email:any;
  rut:any;
  name:any;
  image:any;

  event: eventGet[]=[];
  comment: commentGet[]=[];

  commentF:FormGroup;

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
              private formB:FormBuilder,
              private api:ApiDataService) {
                                            this.activeR.queryParams.subscribe(param=>{
                                              this.myEvent = JSON.parse(param['event'])
                                            })
                                            this.qrData='';
                                            this.email = sessionStorage.getItem('Email');
                                            this.rut = sessionStorage.getItem('Rut');
                                            this.name = sessionStorage.getItem('Nombre');
                                            this.image = sessionStorage.getItem('image');

                                            this.commentF = this.formB.group({
                                              'text': new FormControl("",[Validators.required, Validators.maxLength(75)])
                                            })
                                          }

  ngOnInit() {
    this.api.getEventComment(this.myEvent.id).subscribe(data=>{
      this.comment=data;
    })
  }

  createComment(){
    if(!this.commentF.valid){
      return;
    }
    this.api.getUser(this.email).subscribe(resp=>{
      this.userData = resp;
      this.newComment.uEmail = this.userData[0].email;
      this.newComment.uName = this.userData[0].name;
      this.newComment.uImage = this.userData[0].image;
      this.newComment.eId = this.myEvent.id;
      this.newComment.text = this.commentF.value.text;
      this.api.newComment(this.newComment).subscribe();
      location.reload();
    })
  }

  Participate(){
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

  sendToList(Observable:eventGet){
    this.route.navigate(['/page-detail2'],{queryParams:{event: JSON.stringify(Observable)}})
  }

  regresar(){
    this.route.navigate(['/tabs/tab-event']);
  }
}
