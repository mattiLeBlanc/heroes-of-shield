/**
 * Currently not used because I have to figure out how to get data back from a dynamic component loaded in the dialog
 * https://malcoded.com/posts/angular-dynamic-components
 * https://blog.angular-university.io/angular-material-dialog/
 * https://stackoverflow.com/questions/48723439/dynamically-load-a-component-inside-a-material-matdialog
 */


import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  component: Component;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


// import { Component, OnInit, Input, Inject, ViewChild, ViewContainerRef,
//   ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// export interface DialogData {
//   title: string;
//   component: Component;
// }

// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dialog.component.html',
// })
// export class DialogComponent implements OnInit, OnDestroy {

//   @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

//   componentRef: ComponentRef<any>;

//   constructor(
//     public dialogRef: MatDialogRef<DialogComponent>,
//     private resolver: ComponentFactoryResolver,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   ngOnInit() {
//     const factory = this.resolver.resolveComponentFactory(this.data.component);
//     this.componentRef = this.vcRef.createComponent(factory);
//   }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   approve() {
//     this.dialogRef.close(this.componentRef);
//   }

//   ngOnDestroy() {
//     if (this.componentRef) {
//       this.componentRef.destroy();
//     }
//   }

// }
