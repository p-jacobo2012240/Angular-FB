import { Injectable } from '@angular/core';
import { Userlogued } from './userlogued.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class UserloguedService {
  userloguedList: AngularFireList<any>;
  selectedUserlogued : Userlogued = new Userlogued();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.userloguedList = this.firebase.list('DatosUsuarios');
    return this.userloguedList;
  }
  insertUserlogued(userlogued : Userlogued) {
    this.userloguedList.push({
      email: userlogued.email,
      clave: userlogued.clave,
      nick: userlogued.nick,
      nombres: userlogued.nombres,
      apellidos: userlogued.apellidos,
      fn : userlogued.fn,
      telefono: userlogued.telefono,
      genero: userlogued.genero,
      residencia: userlogued.residencia
    });
  }
  updateUserlogued(uslog : Userlogued){
    this.userloguedList.update(uslog.$key,{
      email: uslog.email,
      clave: uslog.clave,
      nick: uslog.nick,
      nombres: uslog.nombres,
      apellidos: uslog.apellidos,
      fn : uslog.fn,
      telefono: uslog.telefono,
      genero: uslog.genero,
      residencia: uslog.residencia
    })
 }

 deleteUserLogued(key : string){
   this.userloguedList.remove(key);
 }
 

}
