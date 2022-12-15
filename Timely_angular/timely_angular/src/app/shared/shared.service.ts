import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  poslani_string=new Subject<string>();
  poslani_signal=new Subject();
  message=new Subject();
  poslani_dialog=new Subject();
  vraceni_dialog=new Subject(); 
  tekst:string;
  info=new Subject<string>();
  value:boolean;

  
  constructor() { }


  //KORISTITI ZA POSLATI STRING IZ POP UP!!
  communicateArray(msg){
  this.poslani_string.next(msg);
  }


   communicatePDialog(msg){
this.poslani_dialog.next(msg);
   }

   communicateVDialog(gg){
    this.vraceni_dialog.next(gg);
       
  }
communicateSignal(vr){
  this.poslani_signal.next(vr);
}

  setMessage(string)
  {
    this.info=string;
  }

  getMessage(){
    return this.info
  }
 


}
