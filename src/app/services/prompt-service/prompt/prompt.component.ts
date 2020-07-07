import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { PromptStore } from "../state/prompt.store";
import { FormControl } from "@angular/forms";

interface TagOption {
  id: number;
  viewValue: string;
  value: string;
}

@Component({
  selector: "app-prompt",
  templateUrl: "./prompt.component.html",
  styleUrls: ["./prompt.component.scss"],
})
export class PromptComponent implements OnInit, OnChanges {
  @ViewChild("tagPrompt", { static: true }) tagPrompt: TemplateRef<any>;
  @ViewChild("defaultPrompt", { static: true }) defaultPrompt: TemplateRef<any>;
  @ViewChild("colorPrompt", { static: true }) colorPrompt: TemplateRef<any>;
  liveTemplate: TemplateRef<any>;

  @Input() type: string;
  @Input() messages: string[];
  @Input() question: string;
  @Input() header: string;
  @Input() confirmButtonTitle: string;
  @Input() declineButtonTitle: string;

  @Output() confirm = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() changeEvent = new EventEmitter();

  promptClass = "";
  tagOptions: TagOption[] = [
    { id: 1, viewValue: "Primary", value: "primary" },
    { id: 2, viewValue: "Teal", value: "teal" },
    { id: 3, viewValue: "Red", value: "red" },
  ];
  selectedTagOption = "primary";
  tagTitleFormControl = new FormControl("");
  colorPickerValue = "#BBD64B";

  constructor(private store: PromptStore) {}

  ngOnInit() {
    this.setTemplateType(this.type);
  }

  setTemplateType(type: string) {
    switch (type) {
      case "color":
        return (this.liveTemplate = this.colorPrompt);
      case "tag":
        return (this.liveTemplate = this.tagPrompt);
      default:
        return (this.liveTemplate = this.defaultPrompt);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.changeEmit();
    }
    switch (changes.type.currentValue) {
      case "color":
        return this.togglePromptClass();
      case "tag":
        return this.togglePromptClass();
      default:
        return this.togglePromptClass();
    }
  }

  togglePromptClass() {
    this.promptClass = "show-prompt";
  }

  deletePromptEmit = () => {
    return this.delete.emit();
  };

  responseEmit = (res: string, type: string) => {
    this.changeEmit();
    if (res === "confirm" && type === "tag") {
      this.store.updatePayload({
        background: this.selectedTagOption,
        title: this.tagTitleFormControl.value,
      });
    } else if (res === "confirm" && type === "color") {
      this.store.updatePayload({
        hex: this.colorPickerValue,
      });
    }
    this.store.updateResponse(res);
  };

  changeEmit = () => this.changeEvent.emit(true);

  setColorValue(ev: any) {
    this.colorPickerValue = ev.target.value;
  }
}
