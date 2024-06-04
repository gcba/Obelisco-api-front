import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasByIdComponent } from './areas-by-id.component';

describe('AreasByIdComponent', () => {
  let component: AreasByIdComponent;
  let fixture: ComponentFixture<AreasByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
