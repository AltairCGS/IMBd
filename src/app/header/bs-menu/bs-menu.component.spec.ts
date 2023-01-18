import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsMenuComponent } from './bs-menu.component';

describe('BsMenuComponent', () => {
  let component: BsMenuComponent;
  let fixture: ComponentFixture<BsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
