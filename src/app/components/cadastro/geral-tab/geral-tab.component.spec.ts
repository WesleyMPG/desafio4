import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeralTabComponent } from './geral-tab.component';

describe('GeralTabComponent', () => {
  let component: GeralTabComponent;
  let fixture: ComponentFixture<GeralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeralTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeralTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
