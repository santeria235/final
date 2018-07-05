import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendComponent } from './recomend.component';

describe('RecomendComponent', () => {
  let component: RecomendComponent;
  let fixture: ComponentFixture<RecomendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
