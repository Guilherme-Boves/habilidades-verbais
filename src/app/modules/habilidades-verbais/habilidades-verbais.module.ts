import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesVerbaisComponent } from './habilidades-verbais.component';
import { RouterModule } from '@angular/router';
import { HABILIDADES_VERBAIS_ROUTES } from './habilidades-verbais.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HabilidadesVerbaisComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HABILIDADES_VERBAIS_ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HabilidadesVerbaisModule { }
