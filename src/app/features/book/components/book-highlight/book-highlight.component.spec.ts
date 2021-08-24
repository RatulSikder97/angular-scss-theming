import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHighlightComponent } from './book-highlight.component';

describe('BookHighlightComponent', () => {
  let component: BookHighlightComponent;
  let fixture: ComponentFixture<BookHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
