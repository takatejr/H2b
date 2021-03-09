import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

  @Input() photo;

  constructor(public modal: MatDialog) { }

  openModal(photoData) {
    this.modal.open(PhotoModal, {
      data: {
        photo: photoData
      }
    });
  }
}
@Component({
  selector: 'photo-modal',
  templateUrl: 'photo.modal.html',
  styleUrls: ['./photo.modal.scss']
})
export class PhotoModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
