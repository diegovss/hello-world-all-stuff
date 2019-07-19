import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestecursoComponent } from './testecurso.component';

describe('TestecursoComponent', () => {
  let component: TestecursoComponent;
  let fixture: ComponentFixture<TestecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
