import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerNavComponent } from './home-banner-nav.component';

describe('TilesComponent', () => {
  let component: HomeBannerNavComponent;
  let fixture: ComponentFixture<HomeBannerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBannerNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
