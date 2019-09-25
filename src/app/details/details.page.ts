import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit() {
  }

  save(){//function to save data
  	//alert("Am saving");
  	this.common.presentAlert('Todo apps', 'Saving');
  }

}
