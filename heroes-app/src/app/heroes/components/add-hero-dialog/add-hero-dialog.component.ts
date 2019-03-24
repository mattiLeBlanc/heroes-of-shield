
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

export interface DialogData {
  title: string;
  component: Component;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './add-hero-dialog.component.html',
})
export class AddHeroDialogComponent {
  private heroForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  cancel(): void {
    this.dialogRef.close();
  }

  newHero(formRef: FormGroup) {
    this.heroForm = formRef;
  }

  save(): void {
    if (this.heroForm.valid) {
      this.dialogRef.close(this.heroForm.value);
    }
  }
}
