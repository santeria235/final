import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedAreaComponent } from './recomended-area.component';

describe('RecomendedAreaComponent', () => {
  let component: RecomendedAreaComponent;
  let fixture: ComponentFixture<RecomendedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
