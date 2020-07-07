import { Injectable } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";
import { Observable } from "rxjs";

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

  add(tag: Partial<Tag>, tagArr: Tag[]) {
    this.tags.push({
      title: tag.title,
      color: tag.color,
      background: tag.background,
      id: Math.floor(Math.random() * 100) + 10,
    });
    return this.tags;
  }

  remove(tag: Tag) {
    this.tags = this.tags.filter((t) => t.id !== tag.id);
    return this.tags;
  }
}
