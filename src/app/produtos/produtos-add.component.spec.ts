import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

import { ProdutosAddComponent } from './produtos-add.component';
import { TitleComponent } from '../shared/title/title.component';
import { ProdutosService } from '../shared/services/produtos.service';

describe('ProdutosAddComponent', () => {
  let component: ProdutosAddComponent;
  let fixture: ComponentFixture<ProdutosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProdutosAddComponent,
        TitleComponent
       ],
       providers: [
        ProdutosService
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
    fixture = TestBed.createComponent(ProdutosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
