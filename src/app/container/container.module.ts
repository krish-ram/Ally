import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ContainerComponent],
})
export class ContainerModule {}
