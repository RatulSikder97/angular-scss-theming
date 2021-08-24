import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFontstyleComponent } from './book-fontstyle.component';

describe('BookFontstyleComponent', () => {
  let component: BookFontstyleComponent;
  let fixture: ComponentFixture<BookFontstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFontstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFontstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
