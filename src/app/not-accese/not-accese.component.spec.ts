import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAcceseComponent } from './not-accese.component';

describe('NotAcceseComponent', () => {
  let component: NotAcceseComponent;
  let fixture: ComponentFixture<NotAcceseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAcceseComponent]
    });
    fixture = TestBed.createComponent(NotAcceseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
