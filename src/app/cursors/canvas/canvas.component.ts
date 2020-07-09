import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PdfService } from "../../services/pdf.service";
import { PromptService } from "../../services/prompt-service/state/prompt.service";
import { PromptQuery } from "../../services/prompt-service/state/prompt-query.service";

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
  chosenColor = "#333333";
  constructor(
    private pdfService: PdfService,
    private prompt: PromptService,
    private query: PromptQuery
  ) {}

  ngOnInit() {
    this.isDrawing = false;
    this.lineWidth = 14;
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

  customColorSelect() {
    this.prompt.showPrompt(
      "color",
      "SELECT COLOR",
      this.chosenColor,
      "SELECT COLOR",
      "CLOSE"
    );

    this.query.response$.subscribe((res) => {
      if (res === "decline") {
        this.prompt.deletePrompt();
      }
      if (res === "confirm") {
        this.query.payload$.subscribe((payload) => {
          this.chosenColor = payload.hex;
          this.selectColor(payload.hex);
          this.prompt.deletePrompt();
        });
      }
    });
  }

  savePaint = () => this.toPDF();

  clearPaint = () =>
    this.canvasRef.nativeElement
      .getContext("2d")
      .clearRect(this.x, this.y, 800, 400);

  selectColor = (color: string) => (this.color = color);

  thicker = () => this.lineWidth++;

  thinner = () => this.lineWidth--;

  toPDF = () =>
    this.pdfService.pdfDownloadToCanvas(this.canvasRef.nativeElement, "canvas");
}
