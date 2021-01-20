import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeUpdateComponent } from './notice-update.component';

describe('NoticeUpdateComponent', () => {
  let component: NoticeUpdateComponent;
  let fixture: ComponentFixture<NoticeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
