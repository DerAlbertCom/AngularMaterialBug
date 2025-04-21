import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, TemplateRef, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';


export interface DummyDialogConfirmComponentAction<T> {
  label: string;
  value: T;
  testId?: string;
}

export interface DummyDialogConfirmComponentActionButton<T> extends DummyDialogConfirmComponentAction<T> {
}

export interface DummyDialogConfirmComponentActionIconButton<T> extends DummyDialogConfirmComponentAction<T> {
  icon?: string;
}

export interface DummyDialogConfirmComponentData<T = unknown> {
  actions?: (DummyDialogConfirmComponentActionButton<T> & DummyDialogConfirmComponentActionIconButton<T>)[];
  contentTemplateRef?: TemplateRef<any>;
  actionsTemplateRef?: TemplateRef<any>;
  details?: string;
  label?: string;
  testId?: string;
}

@Component({
  selector: 'dummy-dialog-confirm',
  templateUrl: './dummy-dialog-confirm.component.html',
  styleUrls: ['./dummy-dialog-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatDialogModule, MatTooltipModule, ],
})
export class DummyDialogConfirmComponent<T> {
  readonly cfg: DummyDialogConfirmComponentData<T> | null = inject(MAT_DIALOG_DATA, {optional: true});


  readonly defaultActions: (DummyDialogConfirmComponentActionButton<T> & DummyDialogConfirmComponentActionIconButton<T>)[] = [
  ];
}
