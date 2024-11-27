import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.page.html',
  styleUrls: ['./page-data.page.scss'],
})
export class PageDataPage implements OnInit {

  ass:any;

  myAssist={
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
  }

  qrData:string='';

  constructor(private route:Router,
              private active:ActivatedRoute) {
                this.active.queryParams.subscribe(param=>{
                  this.ass = JSON.parse(param['myAssist']);
                })
               }

  ngOnInit() {  
    this.myAssist=this.ass;

    this.generarQR();
  }

  generarQR(){
    this.qrData = "Evento : " + this.ass.eName + 
                  "/Sede : " + this.ass.eCity +
                  "/Fecha : " + this.ass.eDate +
                  "/Estudiante : " + this.ass.uName +
                  "/Rut : " + this.ass.uRut;
    console.log(this.qrData);
  }


  regresar(){
    this.route.navigate(['/page-qr']);
  }
}
