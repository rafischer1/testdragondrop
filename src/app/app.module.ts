import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListComponent } from './list/list.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatSnackBarModule} from '@angular/material';
import { SnackButtonComponent } from './snack-button/snack-button.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent, SnackButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    CdkStepperModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
