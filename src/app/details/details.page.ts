import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { FirebaseService } from '../service/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
	details:{title:string, desc:string};
	detailId:any;
	tag:any;
	result:any;

  constructor(private common: CommonService, 
  	private fbase: FirebaseService,
  	private navCtrl: NavController ) { }

  ngOnInit() {
  	this.initValue();
  	if(!(this.detailId=='0') || this.detailId==0){
  		//additional to divert with or without record selected
  		this.details=this.common.getReceipt();
  	}
  }
  initValue(){
  	this.detailId=this.common.getDetailId();
  	this.details={
  		title: "",
  		desc: ""
  	}
  }

  deleteIf(){
  	return this.detailId=='0' ? false : true;
  }

	//SAVE record
  async save(){//function to save data
  	//alert("Am saving");
  	//async to push to firebase
  	//this.common.presentAlert('Todo apps', 'Saving');
  	//await this.fbase.create(this.details);

  	let loading = await this.common.loading();
  	loading.present();
  	switch (this.detailId){
  		case 0:
  		case '0':
  			this.create(loading);
  			break;
  		default:
  			this.update(loading);

  	}
  	

  }//end save

  async create (loading){
  	try {
  		const rec = await this.fbase.create(this.details);
  		if (rec.success){
  			loading.dismiss();
  			this.common.presentAlert('Todo App','Details saved');
  			this.navCtrl.back();
  		}else{
  			loading.dismiss();
  			this.common.presentAlert('Error',rec.value);
  		}
  	}catch(err){
  			loading.dismiss();
  			this.common.presentAlert('Error',err.message);
  	}
  }

  async update (loading){
  		const update = await this.fbase.update(this.details,this.detailId);
  		if(update.success){
  			loading.dismiss();
  			this.common.presentAlert('Todo App','Details updated');
  			this.navCtrl.back();
  		}else{
  			loading.dismiss();
  			this.common.presentAlert('Error',update.value);
  		}
  }

  async remove(){//function to save data
  	//alert("Am saving");
  	//async to push to firebase
  	this.common.presentAlert('Todo apps', 'Deleting');
  	await this.fbase.delete(this.detailId);
  	

  }
}
