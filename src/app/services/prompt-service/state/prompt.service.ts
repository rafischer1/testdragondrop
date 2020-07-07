import { Injectable } from "@angular/core";
import { PromptStore } from "./prompt.store";

export interface Prompt {
  type: string;
  header: string;
  messages: string[];
  question: string;
  confirmButtonTitle: string;
  declineButtonTitle: string;
  response?: string;
  payload?: any;
}

export interface TagOptionPayload {
  background: string;
  title: string;
}

@Injectable({
  providedIn: "root",
})
export class PromptService implements Prompt {
  type: string;
  header: string;
  messages: string[];
  question: string;
  confirmButtonTitle: string;
  declineButtonTitle: string;
  response: string;
  payload: any;

  constructor(private store: PromptStore) {}

  showPrompt = (
    type: string,
    messages: string[],
    question: string,
    header: string,
    confirmButtonTitle: string,
    declineButtonTitle: string
  ) => {
    return this.store.addPrompt({
      type,
      messages,
      question,
      header,
      confirmButtonTitle,
      declineButtonTitle,
    });
  };

  deletePrompt = () => this.store.clearPrompt();
}
