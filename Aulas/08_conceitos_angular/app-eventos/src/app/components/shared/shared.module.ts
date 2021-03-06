import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	declarations: [
		MenuComponent,
		ModalComponent,
		ListComponent
	],
	imports: [
		CommonModule,
		CollapseModule.forRoot(),
		BsDropdownModule.forRoot(),
		RouterModule
	],
	exports: [
		MenuComponent,
		ListComponent
	]
})
export class SharedModule { }
