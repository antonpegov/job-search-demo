import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCardModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    DragDropModule,
    MatTooltipModule,
    MatDialogModule,
 ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    DragDropModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: [
  ],
})
export class MaterialModule {}
