import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ToolbarNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ToolbarNavigationComponent]
})
export class SharedModule { }
