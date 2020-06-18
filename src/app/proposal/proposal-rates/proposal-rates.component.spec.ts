import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalRatesComponent } from './proposal-rates.component';

describe('ProposalRatesComponent', () => {
  let component: ProposalRatesComponent;
  let fixture: ComponentFixture<ProposalRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
