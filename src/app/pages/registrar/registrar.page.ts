import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { IonicModule } from '@ionic/angular';
import { showAlertDUOC, showToast } from 'src/app/tools/message-routines';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistrarPage implements OnInit {

  usuario = new Usuario();
  repeticionPassword = '';

  constructor( private router: Router) { }

  async ngOnInit() {
    // this.authService.usuarioAutenticado.subscribe((usuario) => {
    //   if (usuario !== null) {
    //     this.usuario = usuario!;
    //     this.repeticionPassword = usuario!.password;
    //   }
    // })
  }

  mostrarMensaje(nombreCampo:string, valor: string) {
    if (valor.trim() === '') {
      showAlertDUOC(`Debe ingresar un valor para el campo "${nombreCampo}".`);
      return false;
    }
    return true;
  }


  registro(){
    if (!this.mostrarMensaje('nombre', this.usuario.nombre)) return;
    if (!this.mostrarMensaje('apellidos', this.usuario.apellido)) return;
    if (!this.mostrarMensaje('correo', this.usuario.correo)) return;
    if (!this.mostrarMensaje('pregunta secreta', this.usuario.preguntaSecreta)) return;
    if (!this.mostrarMensaje('respuesta secreta', this.usuario.respuestaSecreta)) return;
    if (!this.mostrarMensaje('contraseña', this.usuario.password)) return;
    if (this.usuario.password !== this.repeticionPassword) {
      showAlertDUOC(`Las contraseñas escritas deben ser iguales.`);
      return;
    }
    // this.bd.guardarUsuario(this.usuario);
    // this.authService.setUsuarioAutenticado(this.usuario);
    showToast('Ha sido registrado correctamente');

  }

  volverAlInicio() {
    this.router.navigate(['/login']);
  }



}