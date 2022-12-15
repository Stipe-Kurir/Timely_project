import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  prikaz_prozora:boolean=false;
  //this:boolean=false;


  constructor(private shared:SharedService){}
  
  project;
  str:string;
  null_str;
  info;


   ngOnInit(){
    this.shared.poslani_dialog.subscribe(message=>{
      console.log("Primia POP UP T ili F: ",message);
      this.info=message;

    this.prikaz_prozora=true;

   })

  }



  closeForm(){  //AKO PRITISNEŠ CLOSED! U REDU
    console.log("info koji vracas : ",!this.info);//INFO BI TREBA BITI FALSE!
    this.shared.communicateVDialog(!this.info);
    //this.shared.setMessage(false);//VRACAS FALSE JER NIJE GOTOVO!
    this.prikaz_prozora=false;
  }
    

  //DODAJ KAD UPIŠE IME ONDA ŠALJE,nemoš slat prazno!
  //USPIJA SI DA ŠALJE STRING
  //NAPRAVI DA ONO ŠTO SE NAPIŠE U FORMI DA SE PRENESE 
  //VAMO I ONDA TO POSLAT

SendInfo(project_name:string){
this.null_str=project_name;
console.log("null_str",this.null_str.project_name);

  if(this.null_str.project_name)
  {
    this.str=project_name;
    console.log("UPISANI STRING: ",this.str);
    this.shared.setMessage(this.str);
    this.info=true;
    console.log("POSLANI INFO ZA SUBMIT: ",this.info);
    this.shared.communicateVDialog(this.info);
  }
  else{
   
    alert("Niste unijeli naziv");
    return;
  }

  this.prikaz_prozora=false;       //POČETNI PRIKAZ PROZORA!

}



}

