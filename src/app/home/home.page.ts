import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,) {

  }

  goToDetails(){
  	//alert("Hi user");
  	this.router.navigate(['/details']);
  	//this.router
  }

}
