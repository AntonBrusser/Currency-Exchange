import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFinalComponent } from './my-final.component';

describe('MyFinalComponent', () => {
  let component: MyFinalComponent;
  let fixture: ComponentFixture<MyFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
