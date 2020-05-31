import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import { Observable, from, of } from "rxjs";
 

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, AfterViewInit {
  filtered;
  results;
  allClasses;
  allIds;
  allBrackets;
  allBoxShadows;
  checked = true;
  data;
  matchlength = 0;
  matches = `Matches ${this.matchlength}`;
  show = true;
  sort = true;

  constructor(private cdf: ChangeDetectorRef) {}

  filters = {
    color: /color.*?(?=[\} ;])/,
    dotToEndBracket: /\..*?\}/,
    classes: /(?=\.[^\d])/g,
    ids: /#.*\}?/g,
    boxShadows: /box-shadow.*?\}/g,
    brackets: /\{.*?\}/g,
    backGroundColor: /background-color.*?(?=[\} ;])/,
  };
  onSelectChanged(event){
     let select:HTMLSelectElement = event.target;
     let option = select.options[select.selectedIndex] as HTMLOptionElement;
     let regex = new RegExp(this.filters[option.text]);    
     this.runSearch(regex);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    let search = document.getElementById("search") as HTMLInputElement;
    this.getData();
    this.show = false;
    this.cdf.detectChanges();  
  }
  getKeys() {
    return Object.keys(this.filters);
  }

  addNewLines(items) {
    let newItems = items.reduce((acc, item) => acc + item + "\n");
    return newItems;
  }

  private async getData() {
    let styles = document.getElementsByTagName("style");
    this.setDataBinding(styles);
    this.resetFiltered();
  }

  private setDataBinding(styles: HTMLCollectionOf<HTMLStyleElement>) {
    let oneArray = Array.from(styles);
    let oneArrayValues = oneArray.map((item) => {
      return item.innerText;
    });
    this.data = oneArrayValues;
  }

  private resetFiltered() {
    this.filtered = this.data;
  }
  onCheckBoxClicked() {
    this.sort = !this.sort;
  }

  public onSearchKeyDown(event, input) {
  
    if (event.key != "Enter") {
      return;
    }
    if (input.value) {
      this.search(input);
      return;
    }
    this.resetFiltered();
  }
  private async search(input: any) {
    let searchkey = input.value;
    let regex = new RegExp(`${searchkey}`, "g");  
    await this.runSearch(regex);
  }
  private async runSearch(regex: RegExp) {
    let allData = this.data[0];
    let matches = allData.match(regex);
    if (this.sort) {
      matches.sort();
    }
    this.filtered =this.addNewLines(matches); 
    console.log({ matches });
    let ready = await from(matches);
    this.cdf.detectChanges();
  } 
}
