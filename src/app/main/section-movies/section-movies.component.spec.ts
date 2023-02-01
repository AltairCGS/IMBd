import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoviesComponent } from './section-movies.component';

describe('SectionMoviesComponent', () => {
  let component: SectionMoviesComponent;
  let fixture: ComponentFixture<SectionMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
