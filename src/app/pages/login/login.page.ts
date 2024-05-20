import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})

export class LoginPage implements OnInit {
  correo = '';
  password = '';


  constructor( private router: Router) { }

  ngOnInit() {
  }

  ingreso() {
    this.router.navigate(['/inicio']);
    // showToast('click boton ingresar')
    // this.authService.login(this.correo, this.password);
  }

  contrasena(){
    this.router.navigate(['/correo']);
  }

  registro(){
    this.router.navigate(['/registrar']);
  }

  

}


