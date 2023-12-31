import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbutasComponent } from './abutas.component';

describe('AbutasComponent', () => {
  let component: AbutasComponent;
  let fixture: ComponentFixture<AbutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
