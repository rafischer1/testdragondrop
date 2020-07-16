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
  selectedTag: Tag;
  tagPayload: TagOptionPayload;
  brandColors = ["#BA19A2", "#49BFA2", "#BBD64B"];
  chosenColor: string;
  colorToDelete: string;
  anthemTag: Tag = {
    title: "ANTHEM",
    tagColor: "primary",
    background: "teal",
    id: 1,
  };
  dentalTag: Tag = {
    title: "DENTAL",
    tagColor: "primary",
    background: "primary",
    id: 2,
  };

  constructor(
    private tagsService: TagsService,
    public promptService: PromptService,
    private query: PromptQuery
  ) {}

  ngOnInit() {
    this.tags = this.tagsService.getAll();
    this.resetSelectedTag();
    this.colorToDelete = "";
  }

  resetSelectedTag = () =>
    (this.selectedTag = {
      title: "",
      background: "",
      id: 0,
      tagColor: "primary",
    });

  addTag() {
    this.promptService.showPrompt("tag", "CREATE TAG", "", "SAVE TAG", "CLOSE");

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.promptService.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          this.tagPayload = payload;
          this.tags = this.tagsService.add(
            {
              title: this.tagPayload.title,
              background: this.tagPayload.background,
              tagColor: "primary",
            },
            this.tags
          );
          this.closePrompt();
        });
      }
    });
  }

  addColor() {
    this.promptService.showPrompt(
      "color",
      "SELECT COLOR",
      this.chosenColor,
      "SAVE COLOR",
      "CLOSE"
    );

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.promptService.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          this.chosenColor = payload.hex;
          this.brandColors.push(payload.hex);
          this.closePrompt();
        });
      }
    });
  }

  closePrompt() {
    setTimeout(() => {
      this.promptService.deletePrompt();
    }, 200);
  }

  deleteTag() {
    this.tags = this.tagsService.remove(this.selectedTag);
    return this.resetSelectedTag();
  }

  selectTag = (tag: Tag) => (this.selectedTag = tag);

  benefitAction() {
    alert("ADDITIONAL BENEFIT 1 CLICKED 🥎");
  }

  addServiceOrBenefit() {
    alert("ADD SERVICE OR BENEFIT CLICKED 🥎");
  }

  deleteColor() {
    this.brandColors = this.brandColors.filter(
      (color) => color !== this.colorToDelete
    );
    this.colorToDelete = "";
  }

  selectColorToDelete(color: string) {
    this.colorToDelete = color;
  }

  peoBrandImageUpload() {
    alert("BRAND IMAGE UPLOAD CLICKED 🏝");
  }

  planEmitFromSection = (ev: any) =>
    alert("Plan Emitted: " + ev.plan + " section: " + ev.section);

  handleFileSelect(ev: any) {
    alert("File selected: " +  ev.target.files[0].name)
  }
}
