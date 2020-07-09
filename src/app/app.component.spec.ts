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
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule, MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatStepperModule,
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {HttpClientModule} from "@angular/common/http";
import {ProposalLoginComponent} from "./proposal/proposal-login/proposal-login.component";
import {ProposalViewComponent} from "./proposal/proposal-view/proposal-view.component";
import {ProposalPlansComponent} from "./proposal/proposal-plans/proposal-plans.component";
import {ProposalRatesComponent} from "./proposal/proposal-rates/proposal-rates.component";
import {NavButtonComponent} from "./shared/nav-button/nav-button.component";
import {ProposalOverviewComponent} from "./proposal/proposal-overview/proposal-overview.component";
import {PeoViewComponent} from "./peo-view/peo-view.component";
import {CircleButtonComponent} from "./shared/circle-button/circle-button.component";
import {TagButtonComponent} from "./shared/tag-button/tag-button.component";
import {PromptContainerComponent} from "./services/prompt-service/prompt-container.component";
import {PromptComponent} from "./services/prompt-service/prompt/prompt.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
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
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
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
        ProposalLoginComponent,
        ProposalViewComponent,
        ProposalPlansComponent,
        ProposalRatesComponent,
        NavButtonComponent,
        ProposalOverviewComponent,
        PeoViewComponent,
        CircleButtonComponent,
        TagButtonComponent,
        PromptContainerComponent,
        PromptComponent,
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
