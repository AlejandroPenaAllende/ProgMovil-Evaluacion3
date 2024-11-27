import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {

  formData: any;

  loginF: FormGroup;

  userData={
    rut:"",
    name:"",
    email:"",
    password:"",
    image:"",
    isActive:false
  }

  constructor(private alertC:AlertController,
              private route:Router,
              private api:ApiDataService,
              private toast:ToastController,
              private formB:FormBuilder) {
                                          this.loginF = this.formB.group({
                                                                            'email':new FormControl("",[Validators.required, Validators.email]),
                                                                            'password':new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
                                                                        })}

  ngOnInit() {
  }

  
  //Metodo que verifica si el correo y contraseña ingresados en el formulario corresponden con la data
  logUser(){
    if(!this.loginF.valid){
      return;
    }
    const email = this.loginF.value.email;
    const password = this.loginF.value.password;

    this.api.getUser(email).subscribe(resp =>{
      this.formData = resp;
      console.log(this.formData);
      if(this.formData.length === 0){
        this.loginF.reset();
        this.invalidUser();
        return;
      }

      this.userData={
        rut: this.formData[0].rut,
        name: this.formData[0].name,
        email: this.formData[0].email,
        password: this.formData[0].password,
        image: this.formData[0].image,
        isActive: this.formData[0].isActive
      }

      if(this.userData.password!==password){
        this.loginF.reset();
        this.invalidUser();
        return;
      }

      this.sessionLogin(this.userData);
    })
  }
  
  //Permite el acceso a la app
  sessionLogin(user:any){
    sessionStorage.setItem('Nombre',user.name);
    sessionStorage.setItem('Rut',user.rut);
    sessionStorage.setItem('Email',user.email);
    sessionStorage.setItem('image', user.image);
    sessionStorage.setItem('Conectado', 'true');
    sessionStorage.setItem('pass',user.password )
    this.userLogged('Bienvenido '+ this.userData.name);
    this.route.navigate(['tabs/tab-home']);
  }

  //Alertas
  async userLogged(msg:any){
    const alert= await this.toast.create({
      header: 'Sesión iniciada',
      message: msg,
      buttons: ['OK']
    })
    alert.present();
  }

  async invalidUser(){
    const alert = await this.toast.create({
      header: 'Credenciales Invalidas',
      message: 'Correo y/o contraseña incorrectos',
      buttons: ['OK']
    })
    alert.present();
  }

  //Otros
  sendToRegister(){
    this.loginF.reset();
    this.route.navigate(['/page-register']);
  }
}
