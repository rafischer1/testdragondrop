import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalViewComponent } from "./proposal-view.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";

describe("ProposalViewComponent", () => {
  let component: ProposalViewComponent;
  let fixture: ComponentFixture<ProposalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ProposalViewComponent],
      providers: [Router]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
