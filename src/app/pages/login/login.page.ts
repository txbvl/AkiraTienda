import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Manriquez";
  edad: number = 25;
  correo: String = "";

  Persona: any = {
    nombre: 'José',
    apellido: 'Rodriguez',
    edad: 29
  }

  listaP: any = [
    {
      id:1,
      nombre: 'Alejo'
    },
    {
      id:2,
      nombre: 'Tobal'
    },
    {
      id:3,
      nombre: 'Akira'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
