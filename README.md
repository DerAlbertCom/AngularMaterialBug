

Go to ng-mono folder, run `npm run lib:build`.

`cat '.\dist\@dummy\unity-lib\confirm\dummy-confirmation.service.d.ts'`

```ts
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material/dialog';
import { DummyDialogConfirmComponent, DummyDialogConfirmComponentData } from './dummy-dialog-confirm/dummy-dialog-confirm.component';
import * as i0 from "@angular/core";
export declare class DummyConfirmationService {
    private readonly matDialog;
    confirm$<T = boolean>(data?: DummyDialogConfirmComponentData<T>, options?: MatDialogConfig<DummyDialogConfirmComponentData<T>>): import("@angular/material/dialog.d-Dvsbu-0E").MatDialogRef<DummyDialogConfirmComponent<T>, T | null>;
    dialog$<T, D = any, R = any>(component: ComponentType<T>, data?: D, options?: MatDialogConfig<D>): import("@angular/material/dialog.d-Dvsbu-0E").MatDialogRef<T, R>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DummyConfirmationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DummyConfirmationService>;
}
```
The Import includes the hash, which is wrong ;)
