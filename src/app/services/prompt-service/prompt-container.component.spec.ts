import { RouterTestingModule } from "@angular/router/testing";
import { PromptContainerComponent } from "./prompt-container.component";
import { PromptComponent } from "./prompt/prompt.component";
import { createTestComponentFactory, Spectator } from "@ngneat/spectator/jest";

describe("Prompt Container Component init tests", () => {
  let spectator: Spectator<PromptContainerComponent>;
  const createComponent = createTestComponentFactory({
    component: PromptContainerComponent,
    declarations: [PromptComponent],
    imports: [RouterTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it("should create", () => {
    expect(spectator.component).toBeDefined();
  });
});
