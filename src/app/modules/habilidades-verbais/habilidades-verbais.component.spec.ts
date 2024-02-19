import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesVerbaisComponent } from './habilidades-verbais.component';

describe('HabilidadesVerbaisComponent', () => {
  let component: HabilidadesVerbaisComponent;
  let fixture: ComponentFixture<HabilidadesVerbaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesVerbaisComponent]
    });
    fixture = TestBed.createComponent(HabilidadesVerbaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
