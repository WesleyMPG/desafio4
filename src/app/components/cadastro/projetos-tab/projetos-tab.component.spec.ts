import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosTabComponent } from './projetos-tab.component';

describe('ProjetosTabComponent', () => {
  let component: ProjetosTabComponent;
  let fixture: ComponentFixture<ProjetosTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
