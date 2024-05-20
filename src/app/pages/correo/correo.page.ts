import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CorreoPage implements OnInit {

  correo = '';
  usu = new Usuario ();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async recuperarContrasena() {
    const usu=await(this.correo);
    if (usu == undefined){
    this.router.navigate(['/incorrecto']);
  }else{
    this.router.navigate(['/pregunta']);
    if (!usu) {
      this.router.navigate(['/incorrecto']);
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usu
        }
      };
      this.router.navigate(['/pregunta']);
    }
  }
}

  volverAlInicio() {
    this.router.navigate(['/login'], );
  }

}
