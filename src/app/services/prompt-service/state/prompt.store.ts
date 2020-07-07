import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Prompt } from "./prompt.service";

export interface PromptState {
  prompt: Prompt;
}

export function createInitialState(): PromptState {
  return {
    prompt: undefined,
  };
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "prompts-store" })
export class PromptStore extends Store<PromptState> {
  constructor() {
    super(createInitialState());
  }

  addPrompt(prompt: Prompt) {
    this.update(old => {
      return { prompt };
    });
  }

  clearPrompt() {
    this.update(createInitialState());
  }

  updateResponse(response: string) {
    this.update(old => {
      return { prompt: { ...old.prompt, response } };
    });
  }

  updatePayload(payload: any) {
    this.update(old => {
      return { prompt: { ...old.prompt, payload } };
    });
  }
}
