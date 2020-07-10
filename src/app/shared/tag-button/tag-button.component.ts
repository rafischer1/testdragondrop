import { Component, Input, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material";

export interface Tag {
  id: number;
  title: string;
  background: string;
  tagColor: ThemePalette;
}

@Component({
  selector: "app-tag-button",
  templateUrl: "./tag-button.component.html",
  styleUrls: ["./tag-button.component.css"],
})
export class TagButtonComponent implements OnInit {
  @Input() tag: Tag;
  @Input() selected: boolean;
  constructor() {}

  ngOnInit() {}

  isRed = () => this.tag.background === "red";
  isTeal = () => this.tag.background === "teal";
}
