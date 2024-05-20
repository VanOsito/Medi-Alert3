import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoService } from 'src/app/services/photo.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.component.html',
  styleUrls: ['./escaneo.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class EscaneoComponent  implements OnInit {

  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  capturedPhoto() {
    this.photoService.addNewToGallery();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  deletePhoto(position: number) {
    this.photoService.deletePhoto(position);
  }

  

}


