import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rand0mDetailComponent } from './rand0m-detail.component';

describe('PostDetailComponent', () => {
  let component: Rand0mDetailComponent;
  let fixture: ComponentFixture<Rand0mDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rand0mDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rand0mDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
