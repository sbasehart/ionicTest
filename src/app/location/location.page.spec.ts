import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LocationPage } from './location.page';

describe('LocationPage', () => {
  let component: LocationPage;
  let fixture: ComponentFixture<LocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
