import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalLoginComponent } from "./proposal-login.component";

describe("ProposalLoginComponent", () => {
  let component: ProposalLoginComponent;
  let fixture: ComponentFixture<ProposalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalLoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
