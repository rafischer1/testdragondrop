import { Component, Input, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material";

@Component({
  selector: "app-circle-button",
  templateUrl: "./circle-button.component.html",
  styleUrls: ["./circle-button.component.css"],
})
export class CircleButtonComponent implements OnInit {
  @Input() matIcon: string;
  @Input() color: ThemePalette;
  @Input() size: string;
  constructor() {}

  ngOnInit() {}
}
