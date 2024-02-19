import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmanagerAppComponent } from './contactmanager-app.component';

describe('ContactmanagerAppComponent', () => {
  let component: ContactmanagerAppComponent;
  let fixture: ComponentFixture<ContactmanagerAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactmanagerAppComponent]
    });
    fixture = TestBed.createComponent(ContactmanagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
