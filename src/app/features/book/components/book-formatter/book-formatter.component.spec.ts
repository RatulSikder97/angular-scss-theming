import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormatterComponent } from './book-formatter.component';

describe('BookFormatterComponent', () => {
  let component: BookFormatterComponent;
  let fixture: ComponentFixture<BookFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
