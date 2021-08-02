import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserBoxComponent } from './user-box.component';

describe('UserBoxComponent', () => {
  let component: UserBoxComponent;
  let fixture: ComponentFixture<UserBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBoxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
