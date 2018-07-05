import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoonjaComponent } from './joonja.component';

describe('JoonjaComponent', () => {
  let component: JoonjaComponent;
  let fixture: ComponentFixture<JoonjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoonjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoonjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
