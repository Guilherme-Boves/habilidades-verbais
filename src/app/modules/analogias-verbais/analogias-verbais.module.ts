import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogiasVerbaisComponent } from './analogias-verbais.component';
import { RouterModule } from '@angular/router';
import { ANALOGIA_VERBAIS_ROUTES } from './analogias-verbais.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnalogiasVerbaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ANALOGIA_VERBAIS_ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AnalogiasVerbaisModule { }
