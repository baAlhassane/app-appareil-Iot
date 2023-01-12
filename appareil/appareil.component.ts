import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  
  @Input() appareilName: string;//string | undefined;
  @Input() appareilStatus:string;
  @Input() indexOfAppareil:number;
  @Input() id:number=-1;
  constructor(private appareilService:AppareilService) { 
   // this.appareilName="appareil"
   // this.appareilStatus="eteint";
    //this.indexOfAppareil=-1;
  }

  ngOnInit(): void {
  }

  //appareilName="Machine à laver"
  //appareilStatus="eteint"
  isEteint(){
    if( this.appareilStatus=="eteint" )
    return true;
    else{
      return false;
     }
    
  }

  getColor(){
    if(this.appareilStatus=="allumer"){
      return "lime"
    }
    else
    {
      return "red";
    }
  }


  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOf(){
    this.appareilService.switchOfOne(this.indexOfAppareil)
  }
}
