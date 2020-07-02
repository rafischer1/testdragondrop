import { Component, Input, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material";

@Component({
  selector: "app-tag-button",
  templateUrl: "./tag-button.component.html",
  styleUrls: ["./tag-button.component.css"],
})
export class TagButtonComponent implements OnInit {
  @Input() tag: string;
  @Input() color: ThemePalette;
  @Input() background: string;
  constructor() {}

  ngOnInit() {}

  isRed = () => this.background === "red";
  isTeal = () => this.background === "teal";
}
