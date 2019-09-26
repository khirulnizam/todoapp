import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  detailId:any;
  receipt:any;
  //setter & getter 
  getDetailId() {
    return this.detailId;
  }
  setDetailId(detaildid){
    //return 
    this.detailId=detaildid;
  }
  //setter & getter 
  getReceipt() {
    return this.receipt;
  }
  setReceipt(receipt){
    //return 
    this.receipt=receipt;
  }

  constructor(
  	private alertController: AlertController,
  	private loadingController: LoadingController) { }

  async presentAlert(title: string, content: string){
  	const alert=await this.alertController.create({
  		header: title,
  		message:content,
  		buttons: ['OK']
  	});
  	await alert.present();
  }//end presentAlert

  async loading(){
  	const loading = await this.loadingController.create({
  		message: 'loading...'
  	});
  	return loading;
  }
}
