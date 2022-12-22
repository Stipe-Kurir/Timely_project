import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ZaBazuService } from 'src/app/shared/za-bazu.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(private shared:SharedService,
    public ZaBazuService:ZaBazuService){};

  data_info=null;
  headers:Array<string>;
  signal_data=null;

  ngOnInit(): void {


    this.shared.poslani_signal.subscribe(message=>{
      console.log("Primia SIGNAL: ",message);
  this.signal_data=message;

      if(this.signal_data==true)
      {
      
      this.ZaBazuService.pozoviBazu
      ().subscribe(data=>{
        this.data_info=data;
      console.log("Prihvaćeni podaci iz baze: ",data);
      console.log("UKUPNA TABLICA: ",this.data_info);
      this.signal_data=false;
      })
      
      }
      else{
      
       console.log("nije poslan signal");
     
      }

   })

   this.ZaBazuService.pozoviBazu
   ().subscribe(data=>{
     this.data_info=data;
   console.log("Prihvaćeni podaci iz baze: ",data);
   console.log("UKUPNA TABLICA: ",this.data_info);
   })

  this.headers = [ "Project", "Start", "Stop", "Duration"];


}

}




