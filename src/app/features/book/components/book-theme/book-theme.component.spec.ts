import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookThemeComponent } from './book-theme.component';

describe('BookThemeComponent', () => {
  let component: BookThemeComponent;
  let fixture: ComponentFixture<BookThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
