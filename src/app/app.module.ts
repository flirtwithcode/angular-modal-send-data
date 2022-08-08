import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule ],
  declarations: [ AppComponent, ModalComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ ModalComponent ]
})
export class AppModule { }
