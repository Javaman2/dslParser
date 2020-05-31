import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core"; 
import { SearchComponent } from "./components/parsing/search/search.component";
import { MatTabsModule } from "@angular/material/tabs"; 
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent, 
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
