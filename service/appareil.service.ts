
import {Subject} from "rxjs"
import {HttpClient} from "@angular/common/http"
import{Injectable} from  "@angular/core" 

@Injectable()
export class AppareilService{

  constructor(private httpClient:HttpClient){}
 
    appareilSubject =new Subject<any[]>()
    private appareils:any[]=[]
      //   {
      //     id:1,
      //     name:"Machine à laver",
      //     status:"allumer"
      // },
      //   {
      //     id:2,
      //     name:"Télévision",
      //     status:"allumer"
      // },
      //   {
      //     id:3,
      //     name:"Ordinateur",
      //     status:"eteint"
      // }
    
      //]
appareiObj= {
  id:-1,
  name: 'appareil',
  status: 'status',
};

      onAllumerAll(){

        for(let appareil of this.appareils){
            appareil.status="allumer";

        }
        this.emetAppareilSubject();
      }

      swichOfAll(){
        for(let appareil of this.appareils){
            appareil.status="eteint"
        }
        this.emetAppareilSubject();
      }

      swichOnAll(){
        for(let appareil of this.appareils){
          appareil.status="allumer"
      }
      this.emetAppareilSubject();
      }

      switchOnOne(index:number){

        this.appareils[index].status="allumer"
        this.emetAppareilSubject();
      }
      switchOfOne(index:number){

        this.appareils[index].status="eteint"
        this.emetAppareilSubject();
      }



        getAppareilById(id:number){
       const appareil= this.appareils.find((obj): boolean => obj.id === id
        );
        if(appareil){
              return appareil
        }
        else{

          const  appareil={
            id:-1,
            name:"Ce  appareil n'existe pas",
            status:" Ce status n'existe pas "
           }
          return appareil
        }
       

      }



      emetAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice())
      }


adAppareil(name : string, status:string){
  const appareiObject={
    id:0,
    name:"",
    status:""
  }
  appareiObject.name=name;
  appareiObject.status=status;
  appareiObject.id=this.appareils[this.appareils.length-1].id+1;
  this.appareils.push(appareiObject);

}



saveAppareilsToServer(){
  this.httpClient.put("https://http-client-demo-c2aa0-default-rtdb.europe-west1.firebasedatabase.app/appareils.json", this.appareils)
  .subscribe(
    ()=>{ console.log("Enregistrement terminé !");},
    (error)=>console.log("Erreur de saub=vegarde de type "+ error)
  )
}

getAppareilsFromServer(){

  this.httpClient.get<any[]>("https://http-client-demo-c2aa0-default-rtdb.europe-west1.firebasedatabase.app/appareils.json")
  .subscribe(
    (response)=>{
      this.appareils=response;
      this.emetAppareilSubject()
    },
    (error)=>{
      console.log("Erreur de chargement "+ error)
     }
  )
  
}






}

