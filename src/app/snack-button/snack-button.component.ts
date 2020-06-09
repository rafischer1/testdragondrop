import { Component, Input, OnInit } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material";

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
  @Input() horizontalPosition: MatSnackBarHorizontalPosition;
  @Input() verticalPosition: MatSnackBarVerticalPosition;

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
