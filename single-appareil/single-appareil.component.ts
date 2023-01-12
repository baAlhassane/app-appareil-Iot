import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../service/appareil.service';



@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name:string="name"
  status:string="status"
  constructor( private appareilService: AppareilService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id=this.route.snapshot.params["id"]
    console.log(id)
    this.name=this.appareilService.getAppareilById(+id).name
    //console.log(this.appareilService.getAppareilById(+id))
    this.status=this.appareilService.getAppareilById(+id).status
  }

}
