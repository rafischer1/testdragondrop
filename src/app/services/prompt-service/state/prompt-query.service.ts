import { Injectable } from "@angular/core";
import { Query, toBoolean } from "@datorama/akita";
import { PromptState, PromptStore } from "./prompt.store";
import { filter, map, take, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PromptQuery extends Query<PromptState> {
  response$ = this.select("prompt").pipe(
    filter(toBoolean),
    map((prompt) => prompt.response),
    filter((res) => res !== undefined),
    take(1)
  );

  payload$ = this.select("prompt").pipe(
    filter(toBoolean),
    map((prompt) => prompt.payload),
    filter((res) => res !== undefined),
    take(1)
  );

  constructor(protected store: PromptStore) {
    super(store);
  }
}
