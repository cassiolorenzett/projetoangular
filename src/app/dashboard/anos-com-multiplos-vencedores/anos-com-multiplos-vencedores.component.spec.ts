import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnosComMultiplosVencedoresComponent } from './anos-com-multiplos-vencedores.component';

describe('AnosComMultiplosVencedoresComponent', () => {
  let component: AnosComMultiplosVencedoresComponent;
  let fixture: ComponentFixture<AnosComMultiplosVencedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnosComMultiplosVencedoresComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnosComMultiplosVencedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste titilo componente', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toBe('List yers with multiple winners')
  });

});
