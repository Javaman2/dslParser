import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserSeachDisplayComponent } from './parser-seach-display.component';

describe('ParserSeachDisplayComponent', () => {
  let component: ParserSeachDisplayComponent;
  let fixture: ComponentFixture<ParserSeachDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParserSeachDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserSeachDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
