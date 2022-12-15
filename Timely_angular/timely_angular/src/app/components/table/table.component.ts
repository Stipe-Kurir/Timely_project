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
    
  
  podatak=null;
  podaci=null;
  headers:Array<string>;

signal_za_prikaz=null;



  ngOnInit(): void {


    this.shared.poslani_signal.subscribe(message=>{
      console.log("Primia SIGNAL: ",message);
  this.signal_za_prikaz=message;

      if(this.signal_za_prikaz==true)
{
      //RADI!!! UZIMA IZ BAZE I PRIKAZUJE U TABLICU!!
      this.ZaBazuService.pozoviBazu
      ().subscribe(data=>{
        this.podaci=data;
      console.log("Prihvaćeni podaci iz baze: ",data);
      console.log("UKUPNA TABLICA: ",this.podaci);
      this.signal_za_prikaz=false;
      })
      }
      else{
      
       console.log("nije poslan signal");
     
      }

   })


   this.ZaBazuService.pozoviBazu
   ().subscribe(data=>{
     this.podaci=data;
   console.log("Prihvaćeni podaci iz baze: ",data);
   console.log("UKUPNA TABLICA: ",this.podaci);
   })

  this.headers = [ "Project", "Start", "Stop", "Duration"];


}

}




