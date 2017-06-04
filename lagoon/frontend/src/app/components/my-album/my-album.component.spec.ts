import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlbumComponent } from './my-album.component';

describe('MyAlbumComponent', () => {
  let component: MyAlbumComponent;
  let fixture: ComponentFixture<MyAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
