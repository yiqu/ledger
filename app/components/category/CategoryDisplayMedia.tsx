import bakeryLogo from '../../../public/assets/category/bakery.png';
import bubble from '../../../public/assets/category/bubble-tea.png';
import burger from '../../../public/assets/category/burger.png';
import clothes from '../../../public/assets/category/clothes-hanger.png';
import coffee from '../../../public/assets/category/coffee-beans.png';
import diet from '../../../public/assets/category/diet.png';
import gas from '../../../public/assets/category/gas-station.png';
import grocery from '../../../public/assets/category/grocery.png';
import haircut from '../../../public/assets/category/haircut.png';
import laundry from '../../../public/assets/category/laundry-machine.png';
import carMaintenance from '../../../public/assets/category/maintenance.png';
import shopping from '../../../public/assets/category/mobile-shopping.png';
import popcorn from '../../../public/assets/category/popcorn.png';
import shampoo from '../../../public/assets/category/shampoo.png';
import taxi from '../../../public/assets/category/taxi.png';

function CategoryDisplayMedia({ category }: { category: string; }) {
  let logo: string | undefined = undefined;
  const trimmed = category.trim();
  switch (trimmed) {
    case 'Bakery Foods':
      logo = bakeryLogo;
      break;
    case 'Boba tea':
      logo = bubble;
      break;
    case 'Restaurants & Takeouts':
      logo = burger;
      break;
    case 'Clothing':
      logo = clothes;
      break;
    case 'Coffee':
      logo = coffee;
      break;
    case 'Food at work':
      logo = diet;
      break;
    case 'Gas':
      logo = gas;
      break;
    case 'Groceries':
      logo = grocery;
      break;
    case 'Haircuts':
      logo = haircut;
      break;
    case 'Laundry & Cleaning Services':
      logo = laundry;
      break;
    case 'Automobile Services':
      logo = carMaintenance;
      break;
    case 'Online Shopping':
      logo = shopping;
      break;
    case 'Entertainment':
      logo = popcorn;
      break;
    case 'Beauty & Personal Care':
      logo = shampoo;
      break;
    case 'Taxi':
      logo = taxi;
      break;
    default:
      break;
  }

  return (
    <img src={ logo } alt={ category }
      style={ {
        height: '2.2rem',
        opacity: 0.8
      } }
    />
  );
}

export default CategoryDisplayMedia;