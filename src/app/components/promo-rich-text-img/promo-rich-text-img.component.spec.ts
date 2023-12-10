import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoRichTextImgComponent } from './promo-rich-text-img.component';

describe('PromoRichTextImgComponent', () => {
  let component: PromoRichTextImgComponent;
  let fixture: ComponentFixture<PromoRichTextImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoRichTextImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoRichTextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
