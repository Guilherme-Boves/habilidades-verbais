import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogiasVerbaisComponent } from './analogias-verbais.component';

describe('AnalogiasVerbaisComponent', () => {
  let component: AnalogiasVerbaisComponent;
  let fixture: ComponentFixture<AnalogiasVerbaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalogiasVerbaisComponent]
    });
    fixture = TestBed.createComponent(AnalogiasVerbaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
