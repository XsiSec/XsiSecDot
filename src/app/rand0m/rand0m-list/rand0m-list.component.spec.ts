import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rand0mListComponent } from './rand0m-list.component';

describe('PostListComponent', () => {
  let component: Rand0mListComponent;
  let fixture: ComponentFixture<Rand0mListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rand0mListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rand0mListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
