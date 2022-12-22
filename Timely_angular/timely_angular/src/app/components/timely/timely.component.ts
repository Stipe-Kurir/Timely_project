import { Component,OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SharedService } from 'src/app/shared/shared.service';
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

start="START";
dialog_signal:boolean=true;
returned_dialog;  //vr_dg
final_duration_time;
signal_for_data=false;

start_time=new Date().getTime();     
stop_time=new Date().getTime();      
duration_time:any=this.stop_time-this.start_time;  
dialog_name_string;  //na_str

start_time_string:string=new Date().toLocaleString();  
stop_time_string:string=new Date().toLocaleString();   
duration_string:string="string";
duration=null;
name_string;
string_Id;



onClick()        
{
  if(this.start=='START')
  {
    this.onclickStart();  
  }
  else
  {
   
    this.shared.communicatePDialog(this.dialog_signal);
    this.shared.vraceni_dialog.subscribe(message=>{
    this.returned_dialog=message;
    
   if(this.returned_dialog==true)
   {
    this.onclickStop();
    this.start="START";
    this.returned_dialog=false;
   }  
   else
   {
    console.log("DOŠLO JE F: ",this.returned_dialog );
    this.start="STOP";
    this.returned_dialog=true;
   }
})

} 

} 

  ngOnInit(){ }

  onclickStart()
  {
    this.start_time_string=new Date().toLocaleString();
    this.start_time=new Date().getTime();
    console.log("vrime start: ", this.start_time);
    this.start="STOP";
  }
  onclickStop()
  {

   this.stop_time_string=new Date().toLocaleString();
   this.stop_time=new Date().getTime();
   this.duration_time=this.stop_time-this.start_time;

   this.final_duration_time=Math.floor((this.duration_time / (1000 * 60 * 60)) % 24) + " : "+
   Math.floor((this.duration_time / (1000 * 60)) % 60)+" : "+
   Math.floor((this.duration_time) / 1000) % 60 ;
   this.duration_string=this.final_duration_time.toLocaleString();
   this.dialog_name_string=this.shared.getMessage();
        
  this.name_string=this.dialog_name_string.project_name;
  this.duration=this.duration_string;

  const newFormData = {Id:this.string_Id, Project_name:this.name_string, Start_time:this.start_time_string, Stop_time:this.stop_time_string, Duration:this.duration};
  
      
      this.ZaBazuService.posaljiBazi(newFormData).subscribe(data=>{
      console.log("uspješno slanje",data);
      this.signal_for_data=true;
      this.shared.communicateSignal(this.signal_for_data);
          
          });

  } 

} 

  
















