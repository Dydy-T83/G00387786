import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarvelCharactersPage } from './marvel-characters.page';

describe('MarvelCharactersPage', () => {
  let component: MarvelCharactersPage;
  let fixture: ComponentFixture<MarvelCharactersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelCharactersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarvelCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
