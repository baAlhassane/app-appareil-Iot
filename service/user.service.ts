import { Subject } from "rxjs";
import { User } from "../models/user.model";

export class  UserService{
    private users :User[]=[
        {
            firstName:"James",
            lastName:"Smith",
            email:"james@smith.com",
            drinkPreference:"Coca",
            hobbies:[
             "Coder", "Degustation de café"
            ]

        }
    ]
    userSubject=new Subject<User[]>();
    
    emitUsers(){
        this.userSubject.next(this.users.slice())
    }

    addUser(user: User){
  this.users.push(user)
  this.emitUsers();
    }
    
}