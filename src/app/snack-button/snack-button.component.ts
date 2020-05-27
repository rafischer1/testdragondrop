import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-snack-button",
  templateUrl: "./snack-button.component.html",
  styleUrls: ["./snack-button.component.css"],
})
export class SnackButtonComponent implements OnInit {
  @Input() message: string;
  @Input() action: string;
  @Input() type: string;
  @Input() color: string;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }
}
