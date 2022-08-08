import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name;

  food;
  
  constructor(private dialog: MatDialog) {}

  openModal() {
   const dialogRef =  this.dialog.open(ModalComponent, {data: {name: this.name}, disableClose: true});
   dialogRef.afterClosed().subscribe((submit) => {
     if (submit) {
       this.food = submit;
     } else {
       this.food = 'Nothing...';
     }
   })
  }
}
