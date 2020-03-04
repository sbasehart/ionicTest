import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationAddPage } from './location-add.page';

describe('LocationAddPage', () => {
  let component: LocationAddPage;
  let fixture: ComponentFixture<LocationAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
