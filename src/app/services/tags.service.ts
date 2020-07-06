import { Injectable } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";

@Injectable({
  providedIn: "root",
})
export class TagsService {
  tags: Tag[] = [
    { id: 1, title: "Anthem", background: "teal", color: "primary" },
    { id: 2, title: "Dental", background: "primary", color: "primary" },
    { id: 3, title: "Aetna", background: "teal", color: "primary" },
    { id: 4, title: "health", background: "primary", color: "primary" },
    { id: 5, title: "peo", background: "red", color: "primary" },
  ];
  constructor() {}

  getAll = () => this.tags;

  get = (id: number) => this.tags.filter((t) => t.id === +id)[0];

  add(tag: Partial<Tag>) {
    this.tags.push({
      title: tag.title,
      color: tag.color,
      background: tag.background,
      id: this.tags[this.tags.length - 1].id + 1,
    });
  }
}
