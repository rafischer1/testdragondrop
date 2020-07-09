import { Injectable } from "@angular/core";
import { PromptStore } from "./prompt.store";

export interface Prompt {
  type: string;
  header: string;
  confirmButtonTitle: string;
  declineButtonTitle: string;
  color?: string;
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
  confirmButtonTitle: string;
  declineButtonTitle: string;
  response: string;
  color: string;
  payload: any;

  constructor(private store: PromptStore) {}

  showPrompt = (
    type: string,
    header: string,
    color: string,
    confirmButtonTitle: string,
    declineButtonTitle: string
  ) => {
    return this.store.addPrompt({
      type,
      header,
      color,
      confirmButtonTitle,
      declineButtonTitle,
    });
  };

  deletePrompt = () => this.store.clearPrompt();
}
