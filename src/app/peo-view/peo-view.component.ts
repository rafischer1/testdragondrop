import { Component, OnInit } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";
import { TagsService } from "../services/tags.service";
import {
  PromptService,
  TagOptionPayload,
} from "../services/prompt-service/state/prompt.service";
import { PromptQuery } from "../services/prompt-service/state/prompt-query.service";

@Component({
  selector: "app-peo-view",
  templateUrl: "./peo-view.component.html",
  styleUrls: ["./peo-view.component.css"],
})
export class PeoViewComponent implements OnInit {
  plans = [1, 2, 3, 4, 5];
  tags: Tag[];
  tagPayload: TagOptionPayload;
  brandColors = ["#BA19A2", "#49BFA2", "#BBD64B"];

  constructor(
    private tagsService: TagsService,
    public promptService: PromptService,
    private query: PromptQuery
  ) {}

  ngOnInit() {
    this.tags = this.tagsService.getAll();
  }

  addTag() {
    this.promptService.showPrompt(
      "tag",
      [""],
      "",
      "CREATE TAG",
      "SAVE TAG",
      "CLOSE"
    );

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.promptService.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          this.tagPayload = payload;
          this.tagsService.add({
            title: this.tagPayload.title,
            background: this.tagPayload.background,
            color: "primary",
          });
          setTimeout(() => {
            this.promptService.deletePrompt();
          }, 500);
        });
      }
    });
  }

  addColor() {
    this.promptService.showPrompt(
      "color",
      [""],
      "",
      "SELECT COLOR",
      "SAVE COLOR",
      "CLOSE"
    );

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.promptService.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          this.brandColors.push(payload.hex);
          setTimeout(() => {
            this.promptService.deletePrompt();
          }, 500);
        });
      }
    });
  }
}
