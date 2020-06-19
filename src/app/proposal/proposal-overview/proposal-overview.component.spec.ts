import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalOverviewComponent } from './proposal-overview.component';

describe('ProposalOverviewComponent', () => {
  let component: ProposalOverviewComponent;
  let fixture: ComponentFixture<ProposalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
