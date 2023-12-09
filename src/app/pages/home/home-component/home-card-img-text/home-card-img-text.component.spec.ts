import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardImgTextComponent } from './home-card-img-text.component';

describe('HomeCardImgTextComponent', () => {
  let component: HomeCardImgTextComponent;
  let fixture: ComponentFixture<HomeCardImgTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardImgTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCardImgTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
