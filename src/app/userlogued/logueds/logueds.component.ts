import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { UserloguedService } from '../shared/userlogued.service';

@Component({
  selector: 'app-logueds',
  templateUrl: './logueds.component.html',
  styleUrls: ['./logueds.component.css']
})
export class LoguedsComponent implements OnInit {
 
  constructor(private userloguedService: UserloguedService) { }

   ngOnInit() {
    this.resetForm();
 }

  
  onSubmit(form: NgForm){
    if(form.value.$key == null)
    this.userloguedService.insertUserlogued(form.value);
    else
    this.userloguedService.updateUserlogued(form.value);
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.userloguedService.selectedUserlogued = {
      $key: null,
      email: '',
      clave: '',
      nick: '',
      nombres: '',
      apellidos: '',
      fn : '',
      telefono: '',
      genero:'',
      residencia: ''
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Desea eliminar este registro?') == true) {
      this.userloguedService.deleteUserLogued(form.value.$key);
      this.resetForm(form);
    }
  }
 

}
