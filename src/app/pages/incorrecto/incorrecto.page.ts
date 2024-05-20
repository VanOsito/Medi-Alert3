import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';
// import { AuthService } from 'src/app/services/auth.service';
// import { DataBaseService } from 'src/app/services/data-base.service';
// import { Storage } from '@ionic/storage-angular'; //agrege esta libreria


@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,],
  // providers: [DataBaseService, AuthService, Storage] //agrege esto
})

export class IncorrectoPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {

  }

  login(){
    this.router.navigate(['/login']);
  }
}
