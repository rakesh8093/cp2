import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpverifyComponent } from './cpverify.component';

describe('CpverifyComponent', () => {
  let component: CpverifyComponent;
  let fixture: ComponentFixture<CpverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
