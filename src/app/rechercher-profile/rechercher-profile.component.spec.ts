import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherProfileComponent } from './rechercher-profile.component';

describe('RechercherProfileComponent', () => {
  let component: RechercherProfileComponent;
  let fixture: ComponentFixture<RechercherProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercherProfileComponent]
    });
    fixture = TestBed.createComponent(RechercherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
