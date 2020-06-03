import { ListComponent } from "../../list/list.component";
import { ResizerComponent } from "../../resizer/resizer.component";
import { CursorsComponent } from "../../cursors/cursors.component";

export interface WizardStage {
  order: number;
  title: string;
  navTo: any;
  navFrom: any;
  completed: boolean;
  tasks: Task[];
}

export interface Task {
  description: string;
  order: number;
}

export const defaultWizardStages: WizardStage[] = [
  {
    order: 1,
    navFrom: "",
    navTo: "resize",
    completed: false,
    title: "Stage One",
    tasks: [
      { description: "Move plans from master list to offered list.", order: 1 },
    ],
  },
  {
    order: 2,
    navFrom: "list",
    navTo: "cursors",
    completed: false,
    title: "Stage Two",
    tasks: [
      { description: "Resize and move cards to desired placement.", order: 1 },
      { description: "Lock cards into position", order: 2 },
    ],
  },
  {
    order: 3,
    navFrom: "resize",
    navTo: "",
    completed: false,
    title: "Stage Three",
    tasks: [
      { description: "Compose and save text", order: 1 },
      { description: "Choose theme", order: 2 },
      { description: "Draw a pretty picture", order: 3 },
    ],
  },
];
