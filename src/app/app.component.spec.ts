import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkStepperModule } from "@angular/cdk/stepper";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { SnackButtonComponent } from "./shared/snack-button/snack-button.component";
import { CardComponent } from "./list/card/card.component";
import { ResizerComponent } from "./resizer/resizer.component";
import { CursorsComponent } from "./cursors/cursors.component";
import { CursorButtonComponent } from "./cursors/cursor-button/cursor-button.component";
import { CanvasComponent } from "./cursors/canvas/canvas.component";
import { WizardContainerComponent } from "./wizard/wizard-container/wizard-container.component";
import { WizardComponent } from "./wizard/wizard/wizard.component";
import {WizardStateStore} from "./wizard/state/wizard-state.store";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        MatStepperModule,
      ],
      declarations: [
        AppComponent,
        ListComponent,
        SnackButtonComponent,
        CardComponent,
        ResizerComponent,
        CursorsComponent,
        CursorButtonComponent,
        CanvasComponent,
        WizardContainerComponent,
        WizardComponent,
      ],
      providers: [WizardStateStore]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
