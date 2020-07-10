import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProposalViewComponent } from "./proposal-view.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { RouterStub } from "../proposal-navigate.service.spec";

describe("ProposalViewComponent", () => {
  let component: ProposalViewComponent;
  let fixture: ComponentFixture<ProposalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ProposalViewComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
        ProposalNavigateService,
      ],
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
