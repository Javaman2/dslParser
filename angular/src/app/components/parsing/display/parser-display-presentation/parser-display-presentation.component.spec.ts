import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ParserDisplayPresentationComponent } from "./parser-display-presentation.component";

describe("ParserDisplayPresentationComponent", () => {
  let component: ParserDisplayPresentationComponent;
  let fixture: ComponentFixture<ParserDisplayPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParserDisplayPresentationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserDisplayPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
