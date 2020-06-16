import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCustomLibraryComponent } from './importcustomlibrary.component';

describe('ImportcustomlibraryComponent', () => {
  let component: ImportCustomLibraryComponent;
  let fixture: ComponentFixture<ImportCustomLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCustomLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCustomLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
