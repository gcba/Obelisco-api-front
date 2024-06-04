import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasAllDataComponent } from './areas-all-data.component';

describe('AreasAllDataComponent', () => {
  let component: AreasAllDataComponent;
  let fixture: ComponentFixture<AreasAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasAllDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
