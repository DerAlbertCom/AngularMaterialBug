import {ComponentType} from '@angular/cdk/portal';
import {Injectable, inject} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DummyDialogConfirmComponent, DummyDialogConfirmComponentData} from './dummy-dialog-confirm/dummy-dialog-confirm.component';

@Injectable({providedIn: 'root'})
export class DummyConfirmationService {
  private readonly matDialog = inject(MatDialog);

  public confirm$<T = boolean>(data?: DummyDialogConfirmComponentData<T>, options?: MatDialogConfig<DummyDialogConfirmComponentData<T>>){
    return this.dialog$<DummyDialogConfirmComponent<T>, DummyDialogConfirmComponentData<T>, T | null>(DummyDialogConfirmComponent, data, options);
  }
  public dialog$<T, D = any, R = any>(component: ComponentType<T>, data?: D, options?: MatDialogConfig<D>) {
    return this.matDialog.open<T, D, R>(component, {
      autoFocus: '.mat-mdc-dialog-actions > :last-child button',
      minWidth: '25rem',
      ...(options ?? {}),
      data,
      hasBackdrop: true,
    });
  }
}
