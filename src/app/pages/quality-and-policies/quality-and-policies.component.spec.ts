import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAndPoliciesComponent } from './quality-and-policies.component';

describe('QualityAndPoliciesComponent', () => {
  let component: QualityAndPoliciesComponent;
  let fixture: ComponentFixture<QualityAndPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityAndPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAndPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
