import { ListComponent } from "../../list/list.component";
import { ResizerComponent } from "../../resizer/resizer.component";
import { CursorsComponent } from "../../cursors/cursors.component";

export interface WizardStage {
  order: number;
  title: string;
  navTo: any;
  navFrom: any;
  completed: boolean;
}

export const defaultWizardStages: WizardStage[] = [
  {
    order: 1,
    navFrom: ListComponent,
    navTo: ResizerComponent,
    completed: false,
    title: "Stage One",
  },
  {
    order: 2,
    navFrom: ResizerComponent,
    navTo: CursorsComponent,
    completed: false,
    title: "Stage Two",
  },
  {
    order: 3,
    navFrom: CursorsComponent,
    navTo: ListComponent,
    completed: false,
    title: "Stage Three",
  },
];
