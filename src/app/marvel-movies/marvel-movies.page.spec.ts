import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarvelMoviesPage } from './marvel-movies.page';

describe('MarvelMoviesPage', () => {
  let component: MarvelMoviesPage;
  let fixture: ComponentFixture<MarvelMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelMoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
