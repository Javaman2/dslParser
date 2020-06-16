import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule } from "@angular/core";
import { ParserDataComponent } from "./parserdata/parserdata.component";
import { ParserDisplayComponent } from "./display/parserdisplay/parserdisplay.component";
import {ParserDisplayPresentationComponent} from "./display/parser-display-presentation/parser-display-presentation.component";
import { ParserHomeComponent } from "./paserhome/parserhome.component";
import { ParserSearchComponent } from "./pasersearch/parsersearch.component";
import { ParserTabComponent } from "./parsertab/pasertab.component";
import { ParserSeachDisplayComponent } from './display/parser-seach-display/parser-seach-display.component';

@NgModule({
  declarations: [
    ParserDataComponent,
    ParserDisplayComponent,
    ParserDisplayPresentationComponent,
    ParserTabComponent,
    ParserHomeComponent,
    ParserSearchComponent,
    ParserSeachDisplayComponent,
  ],
  imports: [CommonModule, MatTabsModule, MatProgressSpinnerModule],
  exports: [
    MatTabsModule,
    MatProgressSpinnerModule,
    ParserHomeComponent,
    ParserDisplayComponent,
    ParserDataComponent,
    ParserDisplayPresentationComponent,
    ParserSearchComponent,
    ParserTabComponent,
  ],
})
export class ParserModule {}
