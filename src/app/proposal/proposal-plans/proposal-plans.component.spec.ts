import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalPlansComponent } from "./proposal-plans.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import { CardComponent } from "../../list/card/card.component";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterStub } from "../proposal-navigate.service.spec";
import { SnackButtonComponent } from "../../shared/snack-button/snack-button.component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatIcon,
  MatSnackBar,
  MatSnackBarModule,
} from "@angular/material";

export const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;
describe("ProposalPlansComponent", () => {
  let component: ProposalPlansComponent;
  let fixture: ComponentFixture<ProposalPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProposalPlansComponent,
        NavButtonComponent,
        CardComponent,
        SnackButtonComponent,
        MatIcon,
        MatCard,
        MatCardTitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
        MatSnackBar,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
