import { Injectable } from "@angular/core";
import { Tag } from "../shared/tag-button/tag-button.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TagsService {
  tags: Tag[] = [
    { id: 1, title: "Anthem", background: "teal", tagColor: "primary" },
    { id: 2, title: "Dental", background: "primary", tagColor: "primary" },
    { id: 3, title: "Aetna", background: "teal", tagColor: "primary" },
    { id: 4, title: "health", background: "primary", tagColor: "primary" },
    { id: 5, title: "peo", background: "red", tagColor: "primary" },
  ];
  constructor() {}

  getAll = () => this.tags;

  get = (id: number) => this.tags.filter((t) => t.id === +id)[0];

  add(tag: Partial<Tag>, tagArr: Tag[]) {
    this.tags.push({
      title: tag.title,
      tagColor: tag.tagColor,
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
