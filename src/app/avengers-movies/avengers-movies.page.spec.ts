import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvengersMoviesPage } from './avengers-movies.page';

describe('AvengersMoviesPage', () => {
  let component: AvengersMoviesPage;
  let fixture: ComponentFixture<AvengersMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengersMoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvengersMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
