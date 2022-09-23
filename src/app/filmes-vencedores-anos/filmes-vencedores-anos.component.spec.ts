import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesVencedoresAnosComponent } from './filmes-vencedores-anos.component';

describe('FilmesVencedoresAnosComponent', () => {
  let component: FilmesVencedoresAnosComponent;
  let fixture: ComponentFixture<FilmesVencedoresAnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesVencedoresAnosComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesVencedoresAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('teste titilo componente', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toBe('List movie winners by year');
  });
});
