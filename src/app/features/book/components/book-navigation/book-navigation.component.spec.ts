import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNavigationComponent } from './book-navigation.component';

describe('BookNavigationComponent', () => {
  let component: BookNavigationComponent;
  let fixture: ComponentFixture<BookNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
