import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  show_window:boolean=false;
  
 constructor(private shared:SharedService){}
  

  string_name:string;
  null_string;
  info;


   ngOnInit(){
    this.shared.poslani_dialog.subscribe(message=>{
      console.log("Primia POP UP T ili F: ",message);
      this.info=message;

    this.show_window=true;

   })

  }

  closeForm(){  
    console.log("info koji vracas : ",!this.info);
    this.shared.communicateVDialog(!this.info);
    this.show_window=false;
  }
    

SendInfo(project_name:string){
this.null_string=project_name;

  if(this.null_string.project_name)
  {
    this.string_name=project_name;
    console.log("UPISANI STRING: ",this.string_name);
    this.shared.setMessage(this.string_name);
    this.info=true;
    console.log("POSLANI INFO ZA SUBMIT: ",this.info);
    this.shared.communicateVDialog(this.info);
  }
  else{
   
    alert("Niste unijeli naziv");
    return;
  }

  this.show_window=false;       

}

}

