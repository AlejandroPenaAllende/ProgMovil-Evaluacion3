import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { Router } from '@angular/router';
import { assistGet, listGet } from 'src/interfaces/interface';

@Component({
  selector: 'app-page-qr',
  templateUrl: './page-qr.page.html',
  styleUrls: ['./page-qr.page.scss'],
})
export class PageQrPage implements OnInit {

  assist: assistGet[]=[];

  email:any;
  rut:any;

  qrData:string='';

  constructor(private api:ApiDataService,
              private route:Router) {this.email = sessionStorage.getItem('Email'); 
                             this.rut = sessionStorage.getItem('Rut');
              }

  ngOnInit() {
    this.api.getUserAssist(this.email).subscribe(data=>{
      this.assist=data;
    })
  }

  abrirAssist(Observable:any){
    this.route.navigate(['/page-data'],
      {queryParams:{myAssist: JSON.stringify(Observable)}}
    )
  }

  regresar(){
    this.route.navigate(['/tabs/tab-home']);
  }
}


