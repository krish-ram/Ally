import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AccordionComponent } from "./accordion/accordion.component";

export const COMPONENTS = [AccordionComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, HttpClientModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
