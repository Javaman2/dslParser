import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parser-display-presentation',
  templateUrl: './parser-display-presentation.component.html',
  styleUrls: ['./parser-display-presentation.component.css']
})
export class ParserDisplayPresentationComponent implements OnInit {
  @Input() data:Array<CSSStyleRule>; 
  constructor() { }

  ngOnInit(): void {
  }

}
