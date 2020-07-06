import { Component, OnInit } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";
import { TagsService } from "../services/tags.service";

@Component({
  selector: "app-peo-view",
  templateUrl: "./peo-view.component.html",
  styleUrls: ["./peo-view.component.css"],
})
export class PeoViewComponent implements OnInit {
  plans = [1, 2, 3, 4, 5];
  tags: Tag[];
  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.tags = this.tagsService.getAll();
  }

  addTag() {
    const tagName = prompt("NAME OF TAG:");
    const backgroundColor = prompt("COLOR OF TAG (teal, red, or primary)");
    this.tagsService.add({
      title: tagName,
      background: backgroundColor,
      color: "primary",
    });
  }

  addColor() {
    alert("Create color selection to give hex code....");
  }
}
