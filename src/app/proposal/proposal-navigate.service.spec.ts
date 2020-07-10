import { TestBed } from "@angular/core/testing";

import { ProposalNavigateService } from "./proposal-navigate.service";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

export class RouterStub {
  navigate(url: string) {
    return url;
  }
}

describe("ProposalNavigateService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
      ],
    })
  );

  it("should be created", () => {
    const service: ProposalNavigateService = TestBed.get(
      ProposalNavigateService
    );
    expect(service).toBeTruthy();
  });
});
