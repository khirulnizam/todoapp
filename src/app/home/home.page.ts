import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  receipts:any;
  constructor(private router: Router, 
    private common: CommonService,
    private fbase: FirebaseService) {

      this.subscribeToReceipt();

  }//end constructor

  async subscribeToReceipt(){
    let loading=await this.common.loading();
    loading.present();
    this.receipts=[];
    let receipt=await this.fbase.read();//terima data dari firebase

    //if read success
    if(receipt.success){
      receipt.value.subscribe(res=>{
        console.log(res);//tulis ke console
        this.receipts=[];
        res.map(r=>{//create data map
          let temp=Object.assign({id:r.payload.doc.id}, r.payload.doc.data());
          console.log(temp);
          this.receipts.push(temp);
        });

        loading.dismiss();//buang status bar
        console.log(this.receipts);
      });

    }//end receipt succes
    else{
      loading.dismiss();
      this.common.presentAlert("Error",receipt.value);
    }
  }//end subscribeToReceipt

  toDetails(obj){
     this.common.setDetailId(obj.id);
     this.common.setReceipt(obj);
     this.router.navigate(['/details']);
  }

  goToDetails(){
  	//alert("Hi user");
    //this.common.presentAlert('Todo apps', 'Loading details');
    this.common.setDetailId("0");
    //this.common.setReceipt(null);
  	this.router.navigate(['/details']);
    //this.alert
  	//this.router
  }

}
