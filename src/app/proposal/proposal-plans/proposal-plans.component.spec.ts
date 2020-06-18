import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalPlansComponent } from './proposal-plans.component';

describe('ProposalPlansComponent', () => {
  let component: ProposalPlansComponent;
  let fixture: ComponentFixture<ProposalPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
