import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraryconsultarComponent } from './registraryconsultar.component';

describe('RegistraryconsultarComponent', () => {
  let component: RegistraryconsultarComponent;
  let fixture: ComponentFixture<RegistraryconsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistraryconsultarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistraryconsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
