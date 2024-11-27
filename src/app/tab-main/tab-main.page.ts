import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.page.html',
  styleUrls: ['./tab-main.page.scss'],
})
export class TabMainPage implements OnInit {

  constructor(private menuC:MenuController) { }

  ngOnInit() {
  }

  tabMenu(){
    this.menuC.enable(true);
    this.menuC.open('menu');
  }

}
