import { Component,OnInit,  OnDestroy } from '@angular/core';
//import { Observable } from 'rxjs-compat/Observable';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';
//import "rxjs/Rx"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  secondes:number;
  compteurSubscription:Subscription


  constructor(){}

  ngOnInit(): void {
      const counter =interval(1000);
      this.compteurSubscription=counter.subscribe(
         (value)=>{
        this.secondes=value;

      }
  ) ;

}


ngOnDestroy(): void {
    this.compteurSubscription.unsubscribe();
}

}
  
