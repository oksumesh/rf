import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsSectionComponent } from './guards-section.component';

describe('GuardsSectionComponent', () => {
  let component: GuardsSectionComponent;
  let fixture: ComponentFixture<GuardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
