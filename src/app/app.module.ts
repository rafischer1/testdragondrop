import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ListComponent } from "./list/list.component";
import { CdkStepperModule } from "@angular/cdk/stepper";
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule, MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBar,
    MatSnackBarModule,
    MatStepperModule,
} from "@angular/material";
import { SnackButtonComponent } from "./shared/snack-button/snack-button.component";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from "./list/card/card.component";
import { ResizerComponent } from "./resizer/resizer.component";
import { CursorsComponent } from "./cursors/cursors.component";
import { CursorButtonComponent } from "./cursors/cursor-button/cursor-button.component";
import { CanvasComponent } from "./cursors/canvas/canvas.component";
import { WizardContainerComponent } from "./wizard/wizard-container/wizard-container.component";
import { WizardComponent } from "./wizard/wizard/wizard.component";
import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service";
import { WizardStateStore } from "./wizard/state/wizard-state.store";
import { ProposalLoginComponent } from "./proposal/proposal-login/proposal-login.component";
import { ProposalViewComponent } from "./proposal/proposal-view/proposal-view.component";
import { ProposalPlansComponent } from "./proposal/proposal-plans/proposal-plans.component";
import { ProposalRatesComponent } from "./proposal/proposal-rates/proposal-rates.component";
import { NavButtonComponent } from "./shared/nav-button/nav-button.component";
import { ProposalOverviewComponent } from "./proposal/proposal-overview/proposal-overview.component";
import { HttpClientModule } from "@angular/common/http";
import { PeoViewComponent } from "./peo-view/peo-view.component";
import { CircleButtonComponent } from "./shared/circle-button/circle-button.component";
import { TagButtonComponent } from "./shared/tag-button/tag-button.component";
import { PromptContainerComponent } from "./services/prompt-service/prompt-container.component";
import { PromptComponent } from "./services/prompt-service/prompt/prompt.component";
import { RouterModule } from "@angular/router";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { PeoSectionComponent } from './peo-view/peo-section/peo-section.component';

@NgModule({
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
    PeoSectionComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule,
        DragDropModule,
        CdkStepperModule,
        MatSnackBarModule,
        MatRippleModule,
        MatFormFieldModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatStepperModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
    ],
  providers: [
    WizardStateStore,
    MatSnackBar,
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: "https://jsonplaceholder.typicode.com" },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
