export interface WizardStage {
  order: number;
  title: string;
  navTo: any;
  navFrom: any;
  completed: boolean;
}
