import { Injectable } from '@angular/core';
//additional for firestore
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
  	private afstore: AngularFirestore,
  	) { }

  //create record
  async create(details){
  	try{
  		const receipt = await this.afstore.collection('details').add(details);
  		//push data to firebase, if success
  		return {
  			value: receipt.id,
  			success: true
  		}
  	}//end try
  	catch(err){
  		//fail to push data to firebase
  		return{
	  		value: err.message,
	  		success: false
  		}
  	}//end catch
  }//end create

  //delete record
  async delete(id){
  	try{
  		const rec = await this.afstore.doc('details/'+id).delete();
  		//push data to firebase, if success
  		return {
  			value: rec,
  			success: true
  		}
  	}//end try
  	catch(err){
  		//fail to delete data from firebase
  		return{
	  		value: err.message,
	  		success: false
  		}
  	}//end catch

  }//end delete

  //update record
  async update(details, id){
  	try{
  		delete details.id;
  		const rec = await this.afstore.doc('details/'+id).set(details);
  		//push data to firebase, if success
  		return {
  			value: rec,
  			success: true
  		}
  	}//end try
  	catch(err){
  		//fail to delete data from firebase
  		return{
	  		value: err.message,
	  		success: false
  		}
  	}//end catch
  }//end update
}
