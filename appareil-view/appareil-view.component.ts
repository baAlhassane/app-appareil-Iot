import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {





  isAuth=false
  lastUpdate= new Date();
 // title = 'monprojet-angular';
 // isAuth=false
  //appareilOne="Machine à laver"
  //appareilTwo="Téllévision"
  //appareilThree="Ordinateur"

  appareils:any[]=[];
  appareilSubscription:Subscription

  constructor(private appareilService:AppareilService){
   



    setTimeout(
      ()=>{
    this.isAuth=true;
  },1000
  );
  }

  ngOnInit(){
   // this.appareils=this.appareilService.appareils;
   this.appareilSubscription=this.appareilService.appareilSubject.subscribe(
    (appareils:any[])=> {
      this.appareils=appareils
    }
   );
   this.appareilService.emetAppareilSubject()

   
  }

  onAllumer(){ 

    this.appareilService.swichOnAll();
  }
 
  
  
  onEteintdre(){
    this.appareilService.swichOfAll();

  }

  onSave(){
    this.appareilService.saveAppareilsToServer();
  }

  onFetch(){
    this.appareilService.getAppareilsFromServer();
  
  }

}
