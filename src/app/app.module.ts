import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ListComponent } from "./list/list.component";
import { CdkStepperModule } from "@angular/cdk/stepper";
import {
    MatButtonModule, MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule, MatSidenavModule,
    MatSnackBarModule,
} from "@angular/material";
import { SnackButtonComponent } from "./snack-button/snack-button.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "./list/card/card.component";
import { ResizerComponent } from "./resizer/resizer.component";
import { CursorsComponent } from './cursors/cursors.component';
import { CursorButtonComponent } from './cursors/cursor-button/cursor-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SnackButtonComponent,
    CardComponent,
    ResizerComponent,
    CursorsComponent,
    CursorButtonComponent,
  ],
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
        MatChipsModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatListModule,
        MatRippleModule,
        MatSidenavModule,
        MatButtonToggleModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
