import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetanceComponent } from './competance.component';

describe('CompetanceComponent', () => {
  let component: CompetanceComponent;
  let fixture: ComponentFixture<CompetanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetanceComponent]
    });
    fixture = TestBed.createComponent(CompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});