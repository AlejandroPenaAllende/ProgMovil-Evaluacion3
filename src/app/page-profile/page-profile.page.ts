import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { userI } from 'src/interfaces/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.page.html',
  styleUrls: ['./page-profile.page.scss'],
})
export class PageProfilePage implements OnInit {

  email:any;
  name:any;
  image:any;
  rut:any;
  isActive:any;
  password:any;

  user:any;
  
  userData:any;

  update={
    rut:"",
    name:"",
    email:"",
    password:"",
    image:"",
    isActive: false
  }

  url:any=""

  perfil:any;

  constructor(private api:ApiDataService,
              private route: Router,
              private imageC:NgxImageCompressService,
              private activeR:ActivatedRoute
              ) { this.email = sessionStorage.getItem('Email');
                  this.rut = sessionStorage.getItem('Rut');
                  this.isActive = sessionStorage.getItem('Conectado');
                  this.image = sessionStorage.getItem('image');
                  this.name = sessionStorage.getItem('Nombre');
                  this.password = sessionStorage.getItem('pass');
                }

  ngOnInit() {
    this.email;
    this.rut;
    this.name;
    this.password;
    this.image;
    this.isActive;
  }

  regresar(){
    this.route.navigate(['/tabs/tab-home']);
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

  updateImage(){
    this.imageC.uploadFile().then(({image, orientation}) => {
      this.imageC.compressFile(image, orientation, 50, 50).then(
        result => {
          this.url = result;

          sessionStorage.setItem('iamge', this.url);

          this.update={
            name: this.name,
            rut: this.rut,
            email: this.email,
            password: this.password,
            isActive: true,
            image: this.url
          }
          this.api.deleteUser(this.update).subscribe();
        }
      );
    });
  }

  /*compressF(){
    this.imageC.uploadFile().then(({image, orientation}) => {
      this.imageC.compressFile(image, orientation, 50, 50).then(
        result => {
          this.url = result;
        }
      );
    });
  }*/

  /*updateImage(){
    this.api.getUser(this.email).subscribe(resp=>{
      this.userData = resp;

      this.imageC.uploadFile().then(({image, orientation}) => {
        this.imageC.compressFile(image, orientation, 50, 50).then(
          result => {
            this.url = result;

            this.update={
              rut: this.email,
              name: this.userData[0].value.name,
              email: this.userData[0].value.email,
              password: this.userData[0].value.password,
              isActive: this.userData[0].isActive,
              image: this.url
            }
            this.api.putUser(this.update).subscribe();
          }
        );
      });
    })
  }*/


}
