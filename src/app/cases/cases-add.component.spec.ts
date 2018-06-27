import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

import { CasesAddComponent } from './cases-add.component';
import { TitleComponent } from '../shared/title/title.component';
import { CasesService } from '../shared/services/cases.service';

describe('CasesAddComponent', () => {
  let component: CasesAddComponent;
  let fixture: ComponentFixture<CasesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CasesAddComponent,
        TitleComponent
       ],
       providers: [
        CasesService
       ],
       imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
