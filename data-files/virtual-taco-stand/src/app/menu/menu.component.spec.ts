/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
let component: MenuComponent;
let fixture: ComponentFixture<MenuComponent>;

beforeEach(async () => {
await TestBed.configureTestingModule({
  imports:[MenuComponent]
}).compileComponents();

fixture = TestBed.createComponent(MenuComponent);
component = fixture.componentInstance;
//fixture.componentInstance; fixture.detectChanges();
//menu item property initialize
component.menu = [
  {
    name: 'Carnitas Taco',
    description:
      'Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Queso Birria Taco',
    description:
      'Cheesy birria with cilantro, onions, and consomé for dipping.',
    price: 3.5,
  },
  {
    name: 'Al Pastor Taco',
    description:
      'Marinated pork with pineapple, cilantro, and onions on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Tacos de Lengua',
    description:
      'Tender beef tongue with cilantro and onions on a corn tortilla.',
    price: 3.5,
  },
  {
    name: 'Chicken Taco',
    description:
      'Grilled chicken with lettuce, tomatoes, and salsa on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Fish Taco',
    description:
      'Battered fish with cabbage slaw and creamy sauce on a flour tortilla.',
    price: 3.25,
  },
  {
    name: 'Veggie Taco',
    description:
      'Grilled vegetables with black beans, cheese, and salsa on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Chicharron Taco',
    description: 'Crispy pork rinds with salsa on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Potato Taco',
    description:
      'Fried potatoes with lettuce, cheese, and salsa on a corn tortilla.',
    price: 3.25,
  },
  {
    name: 'Chorizo Taco',
    description: 'Spicy sausage with onions and cilantro on a corn tortilla.',
    price: 3.25,
  },
];
fixture.detectChanges(); //trigger data binding
});

/**
* Created by default when the component is generated * Unit test 1
*/
it('should create', () => {
expect(component).toBeTruthy(); });

/**
* Unit test 2
*/
it('should correctly display a list of tacos', () => {

const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
const menuItems = compiled.querySelectorAll('.menu-item'); // Get all the menu items
expect(menuItems.length).toEqual(component.menu.length); // Check if the number of menu items is equal to the number of items in the menu array
}); });
