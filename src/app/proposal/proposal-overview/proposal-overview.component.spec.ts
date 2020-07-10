import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalOverviewComponent } from "./proposal-overview.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import { SnackButtonComponent } from "../../shared/snack-button/snack-button.component";
import {MatButton, MatIcon, MatSnackBarModule} from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterStub } from "../proposal-navigate.service.spec";

describe("ProposalOverviewComponent", () => {
  let component: ProposalOverviewComponent;
  let fixture: ComponentFixture<ProposalOverviewComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule],
      declarations: [
        ProposalOverviewComponent,
        NavButtonComponent,
        SnackButtonComponent,
        MatIcon,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
