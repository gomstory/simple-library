import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCoreComponent } from './simple-core.component';

describe('SimpleCoreComponent', () => {
  let component: SimpleCoreComponent;
  let fixture: ComponentFixture<SimpleCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
