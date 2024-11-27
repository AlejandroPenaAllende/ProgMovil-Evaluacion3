import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiDataService } from '../service/api-data.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard  {


  constructor(private api:ApiDataService, 
              private toast: ToastController,
              private router: Router){
  }

  canActivate():
    
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.api.isLoggedIn()){
        this.showToast('Debe iniciar sesión..');
        this.router.navigateByUrl('/inicio');
        return false;
      }
      else{
        this.api.isLoggedIn();
        return true;    
      }
      
    }

    async showToast(msg: any){
      const toast = await this.toast.create({
        message:msg,
        duration: 3000
      });
      toast.present();
    }

}
