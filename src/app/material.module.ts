// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatCardModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
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
    MatToolbarModule,
    MatIconModule,
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
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
  ],
})
export class MaterialModule {}
