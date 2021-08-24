import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLayoutsComponent } from './book-layouts.component';

describe('BookLayoutsComponent', () => {
  let component: BookLayoutsComponent;
  let fixture: ComponentFixture<BookLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
