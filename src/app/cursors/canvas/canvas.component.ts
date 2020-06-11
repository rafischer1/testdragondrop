import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"],
})
export class CanvasComponent implements OnInit {
  @ViewChild("canvas", { static: false }) canvasRef: ElementRef;
  isDrawing: boolean;
  x: number;
  y: number;
  lineWidth: number;
  color = "black";
  constructor() {}

  ngOnInit() {
    this.isDrawing = false;
    this.lineWidth = 10;
  }

  paint(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
    this.isDrawing = true;
  }

  painting(e: MouseEvent) {
    if (this.isDrawing === true) {
      this.drawLine(
        this.canvasRef.nativeElement.getContext("2d"),
        this.x,
        this.y,
        e.offsetX,
        e.offsetY
      );
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }

  painted(e: MouseEvent) {
    this.drawLine(
      this.canvasRef.nativeElement.getContext("2d"),
      this.x,
      this.y,
      e.offsetX,
      e.offsetY
    );
    this.x = 0;
    this.y = 0;
    this.isDrawing = false;
  }

  drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

  savePaint() {
    console.log("saved....?");
  }

  clearPaint() {
    this.canvasRef.nativeElement
      .getContext("2d")
      .clearRect(this.x, this.y, 500, 350);
  }

  selectColor(color: string) {
    this.color = color;
  }

  thicker() {
    this.lineWidth++;
  }

  thinner() {
    this.lineWidth--;
  }
}
