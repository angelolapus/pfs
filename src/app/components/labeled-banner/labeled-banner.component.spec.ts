import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledBannerComponent } from './labeled-banner.component';

describe('LabeledBannerComponent', () => {
  let component: LabeledBannerComponent;
  let fixture: ComponentFixture<LabeledBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabeledBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabeledBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
