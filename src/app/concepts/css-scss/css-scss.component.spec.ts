import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssScssComponent } from './css-scss.component';

describe('CssScssComponent', () => {
  let component: CssScssComponent;
  let fixture: ComponentFixture<CssScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssScssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
