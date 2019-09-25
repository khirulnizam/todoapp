import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private common: CommonService,) {

  }

  goToDetails(){
  	//alert("Hi user");
    this.common.presentAlert('Todo apps', 'Loading details');
  	this.router.navigate(['/details']);
    //this.alert
  	//this.router
  }

}
