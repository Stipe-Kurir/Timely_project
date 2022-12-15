import { Component,OnInit } from '@angular/core';
import { DatePipe, formatCurrency, getLocaleTimeFormat } from '@angular/common';
import { SharedService } from 'src/app/shared/shared.service';
//import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
//import { DialogComponent } from './components/dialog/dialog.component';
import { Subscription } from 'rxjs';
import { ZaBazuService } from 'src/app/shared/za-bazu.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-timely',
  templateUrl: './timely.component.html',
  styleUrls: ['./timely.component.css']
})


export class TimelyComponent implements OnInit {

 
constructor(private http:HttpClient,
   public datepipe: DatePipe, 
   private shared:SharedService,
   public ZaBazuService:ZaBazuService)
   {}


 podaci_za_bazu;

POD:any;
start="START";
dialog:boolean=true;
vraceni_dialog;
poslani_tekst;
vr_dg;
dura;
signal_za_prikaz=false;

//varijable za mjerit vrime!
  start_m=new Date().getTime();
  stop_m=new Date().getTime();
  trajanje:any=this.stop_m-this.start_m;
  na_str;

//VARIJABLE KOJE SPREMAŠ U TABLICU!!
  start_v:string=new Date().toLocaleString();
  stop_v:string=new Date().toLocaleString();
  duration_string:string="string";
  dur=null;
  name_string;
  sta=null;


 
podaci;
  id;
  SId;


onClick()         //VIDI OVO SA KLIKOM!!!!
{
  
  if(this.start=='START')
  {
    this.onclickStart();
   
  }
  else
  {
    //BOTUN JE STOP-->šaljemo signal da je stop pritisnut
    console.log("1.ŠALJEM SIGNAL : ", this.dialog);
    this.shared.communicatePDialog(this.dialog);

    //VRACA NAM SE PORUKA JELI PRITISNUT STOP TIMER ILI CLOSE
    this.shared.vraceni_dialog.subscribe(message=>{
    console.log(" TIMELY Primia T ili F: ",message);
    this.vr_dg=message;
    
    //AKO JE TRUE->to znaci da je pritisnut stop timer
    // i da ce se objavit podaci!!
   if(this.vr_dg==true)
   {
    this.onclickStop();
    this.start="START";
    this.vr_dg=false;
   }  
   else{
        //KLIKNIA JE CLOSE ŠTO ZNACI NE PREKIDAJ NISTA!!  
    console.log("DOŠLO JE F: ",this.vr_dg );
    this.start="STOP";
    this.vr_dg=true;
  }
})

} //KRAJ ELSE


} //KRAJ ON CLICK


  ngOnInit(){ }

  

 //FUNKCIJA KOJA KADA PRITISNEMO BOTUN START
 //POCNE MJERIT VRIME I BOTUN POSTANE STOP!
  onclickStart()
  {
    this.start_v=new Date().toLocaleString();
    //MJERAČ VREMENA POČINJE!!
    this.start_m=new Date().getTime();
    console.log("vrime start: ", this.start_m);
    this.start="STOP";
    //this.value_botun=false;
  }


  onclickStop()
  {

       //ovo se zapiše u tablicu kao  string podatak za stop!!
       this.stop_v=new Date().toLocaleString();
   
       //VRIME KADA SE ZAUSTAVILO KOJEKORISTIŠ ZA IZRAČUN
         this.stop_m=new Date().getTime();
         console.log("vrime stop :", this.stop_m); 
   
        //ODUZEA RAZLIKU STARTA I STOPA
        this.trajanje=this.stop_m-this.start_m;
        console.log("DURATION: ",this.trajanje);

        //trajanje funkcija-->duration_string ide u tablicu!!!
        this.dura=Math.floor((this.trajanje / (1000 * 60 * 60)) % 24) + " : "+
        Math.floor((this.trajanje / (1000 * 60)) % 60)+" : "+
        Math.floor((this.trajanje) / 1000) % 60 ;
        console.log("VRIJEME: u tablicu: ",this.dura);
        this.duration_string=this.dura.toLocaleString();
        console.log("pretvorba vremena u string: ",this.duration_string)
        
    
        this.na_str=this.shared.getMessage();
        console.log("DOHVAĆENI STR:",this.na_str.project_name);
        

            this.name_string=this.na_str.project_name;

            this.dur=this.duration_string;

     
        this.podaci=[this.name_string,this.start_v,this.stop_v,this.duration_string];
        console.log("NOVI PODACI: ",this.podaci);

//RADI
      const newFormData = {Id:this.SId, Project_name:this.name_string, Start_time:this.start_v, Stop_time:this.stop_v, Duration:this.dur};
  
      //radi!!
      this.ZaBazuService.posaljiBazi(newFormData).subscribe(data=>{
      console.log("uspješno slanje",data);
      this.signal_za_prikaz=true;
      this.shared.communicateSignal(this.signal_za_prikaz);
          
          });


     
  

  } //KRAJ ON CLICK stop



} //KRAJ CONSTRUCTOR

  
















