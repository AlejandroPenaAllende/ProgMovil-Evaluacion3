import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private route:Router) {
    
  }

  profile(){
    this.route.navigate(['/page-profile'])
  }

  event(){
    this.route.navigate(['/tabs/tab-event'])
  }

  qr(){
    this.route.navigate(['/page-qr'])
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

}
