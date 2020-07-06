import { Component, OnInit } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";
import { TagsService } from "../services/tags.service";
import { MatDialog } from "@angular/material";
import { PromptService } from "../services/prompt-service/state/prompt.service";
import { PromptQuery } from "../services/prompt-service/state/prompt-query.service";

@Component({
  selector: "app-peo-view",
  templateUrl: "./peo-view.component.html",
  styleUrls: ["./peo-view.component.css"],
})
export class PeoViewComponent implements OnInit {
  plans = [1, 2, 3, 4, 5];
  tags: Tag[];
  constructor(
    private tagsService: TagsService,
    public promptService: PromptService,
    private query: PromptQuery
  ) {}

  ngOnInit() {
    this.tags = this.tagsService.getAll();
  }

  addTag() {
    // const tagName = prompt("NAME OF TAG:");
    // const backgroundColor = prompt("COLOR OF TAG (teal, red, or primary)");
    // this.tagsService.add({
    //   title: tagName,
    //   background: backgroundColor,
    //   color: "primary",
    // });
    this.promptService.showPrompt(
      "tag",
      ["get that tag right"],
      "What is tag???",
      "TAG PROMPT",
      "SAVE TAG",
      "CLOSE"
    );

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.promptService.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          console.log("payload:", payload);
        });
      }
    });
  }

  addColor() {
    alert("Create color selection to give hex code....");
  }
}
