/*import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'virtual-taco-stand' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('virtual-taco-stand');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, virtual-taco-stand');
  });
});*/

 import { TestBed } from '@angular/core/testing';
 import { AppComponent } from './app.component';
 import { ActivatedRoute } from '@angular/router';
 import { of } from 'rxjs';
 import { RouterTestingModule } from '@angular/router/testing';
 import { MenuComponent } from './menu/menu.component';
 import { Routes, Router } from '@angular/router';

 describe('AppComponent (Standalone)', () => {
   let router: Router;

   beforeEach(async () => {
     const activatedRouteStub = {
       snapshot: {
         paramMap: {
           get: () => 'staticValue',
         },
       },
       queryParams: of({}),
     };

     const routes: Routes = [{ path: 'menu', component: MenuComponent }];

     await TestBed.configureTestingModule({
       imports: [
         AppComponent, // Import AppComponent directly as it's standalone
         RouterTestingModule.withRoutes(routes), // Include RouterTestingModule to handle routing for MenuComponent
       ],
       providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
     }).compileComponents();

     router = TestBed.inject(Router); // Initialize the Router here
   });

   it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent); // Directly create the component
     const app = fixture.componentInstance;
     expect(app).toBeTruthy(); // Check if the app instance is created successfully
   });

   it('should have correct route for Menu Component', () => {
     const route = router.config.find((r) => r.path === 'menu'); // Find the route for 'menu'
     expect(route).toBeDefined(); // Check if the route is defined
     if (route) {
       expect(route.component).toBe(MenuComponent); // Check if the component is MenuComponent
     }
   });
 });


