import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule } from "@angular/core";
import { ParserDataComponent } from "./parserdata/parserdata.component";
import { ParserDisplayComponent } from "./parserdisplay/parserdisplay.component";
import { ParserHomeComponent } from "./paserhome/parserhome.component";
import { ParserSearchComponent } from "./pasersearch/parsersearch.component";
import { ParserTabComponent } from "./parsertab/pasertab.component";

@NgModule({
  declarations: [
    ParserDataComponent,
    ParserDisplayComponent,
    ParserTabComponent,
    ParserHomeComponent,
    ParserSearchComponent,
  ],
  imports: [CommonModule, MatTabsModule, MatProgressSpinnerModule],
  exports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    ParserHomeComponent,
    ParserDisplayComponent,
    ParserDataComponent,
    ParserSearchComponent,
    ParserTabComponent,
  ],
})
export class ParserModule {}
