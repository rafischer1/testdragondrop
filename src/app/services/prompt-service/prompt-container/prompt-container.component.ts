import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Prompt, PromptService } from "../state/prompt.service";
import { PromptQuery } from "../state/prompt-query.service";

@Component({
  selector: "app-prompt-container",
  templateUrl: "./prompt-container.component.html",
  styleUrls: ["./prompt-container.component.css"],
})
export class PromptContainerComponent implements OnInit {
  prompt$: Observable<Prompt>;
  wrapperClass = "hidden-wrapper";
  constructor(
    private promptsService: PromptService,
    private promptsQuery: PromptQuery
  ) {}

  ngOnInit() {
    this.prompt$ = this.promptsQuery.select("prompt").pipe();
  }

  toggleWrapperClass() {
    this.wrapperClass === "hidden-wrapper"
      ? (this.wrapperClass = "prompt-service-wrapper")
      : (this.wrapperClass = "hidden-wrapper");
  }
}
