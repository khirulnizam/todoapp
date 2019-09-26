import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
	details:{title:string, desc:string};
	detailId:any;

  constructor(private common: CommonService, 
  	private fbase: FirebaseService) { }

  ngOnInit() {
  	this.initValue();
  }
  initValue(){
  	this.details={
  		title: "",
  		desc: ""
  	}
  }

  async save(){//function to save data
  	//alert("Am saving");
  	//async to push to firebase
  	this.common.presentAlert('Todo apps', 'Saving');
  	await this.fbase.create(this.details);
  	

  }

  async remove(){//function to save data
  	//alert("Am saving");
  	//async to push to firebase
  	this.common.presentAlert('Todo apps', 'Deleting');
  	await this.fbase.delete(this.detailId);
  	

  }
}
