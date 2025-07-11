// Курс рубля к тенге (можно изменять)
export const EXCHANGE_RATE = 5.8;

// Путь к файлу прайс-листа (можно изменять)
export const PRICE_FILE_PATH = 'src/data/prise_last (3).csv';

export interface PriceItem {
  stockTons: number;
  weightPerPiece: number;
  price1to5: number;
  price5to15: number;
  priceOver15: number;
  branch: string;
  name: string;
  size: string;
  length: string;
  gost: string;
  category: string;
  lengthValue: number;
}

// Данные из прайс-листа (будет автоматически загружаться из PRICE_primer.csv)
export const priceData: PriceItem[] = [
  // КРУГИ СТАЛЬНЫЕ
  {
    stockTons: 0.99,
    weightPerPiece: 335.509,
    price1to5: 66200,
    price5to15: 66100,
    priceOver15: 66000,
    branch: "ЧЕРЕПОВЕЦ",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03
  },
  {
    stockTons: 7.70,
    weightPerPiece: 335.509,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ЯРОСЛАВЛЬ",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03
  },
  {
    stockTons: 40.03,
    weightPerPiece: 335.509,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ИЖЕВСК",
    name: "Круг Ст40Х",
    size: "95мм",
    length: "3ГП",
    gost: "ГОСТ2590,4543/ТУ14-1-5228-93",
    category: "Круг стальной",
    lengthValue: 6.03
  },
  {
    stockTons: 6.22,
    weightPerPiece: 33.466,
    price1to5: 65200,
    price5to15: 65100,
    priceOver15: 65000,
    branch: "ЯРОСЛАВЛЬ",
    name: "Круг Ст40Х",
    size: "30мм",
    length: "",
    gost: "ГОСТ2590,4543-2016",
    category: "Круг стальной",
    lengthValue: 6.03
  },
  {
    stockTons: 18.50,
    weightPerPiece: 33.300,
    price1to5: 65700,
    price5to15: 65600,
    priceOver15: 65500,
    branch: "ЧЕЛНЫ",
    name: "Круг Ст40Х",
    size: "30мм",
    length: "",
    gost: "ГОСТ2590,4543-2016",
    category: "Круг стальной",
    lengthValue: 6
  },
  {
    stockTons: 2.72,
    weightPerPiece: 2772.853,
    price1to5: 133600,
    price5to15: 133500,
    priceOver15: 133400,
    branch: "САМАРА",
    name: "Круг Ст45",
    size: "310мм",
    length: "3ГП",
    gost: "ТУ14-1-2118-98 ГОСТ1050-88 3ГП",
    category: "Круг стальной",
    lengthValue: 4.68
  },
  
  // ТРУБЫ СТАЛЬНЫЕ (особое внимание!)
  {
    stockTons: 10.09,
    weightPerPiece: 37.572,
    price1to5: 182100,
    price5to15: 182000,
    priceOver15: 182000,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.6
  },
  {
    stockTons: 5.45,
    weightPerPiece: 39.887,
    price1to5: 183000,
    price5to15: 183000,
    priceOver15: 183000,
    branch: "ЛОБНЯ",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.6
  },
  {
    stockTons: 3.50,
    weightPerPiece: 37.145,
    price1to5: 186000,
    price5to15: 186000,
    priceOver15: 186000,
    branch: "НОВОСИБИРСК",
    name: "Труба БШ",
    size: "38×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.5
  },
  {
    stockTons: 3.54,
    weightPerPiece: 37.539,
    price1to5: 183500,
    price5to15: 183500,
    priceOver15: 183500,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "42×3,5",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 11.3
  },
  {
    stockTons: 17.71,
    weightPerPiece: 44.964,
    price1to5: 183500,
    price5to15: 183500,
    priceOver15: 183500,
    branch: "КАЗАНЬ",
    name: "Труба БШ",
    size: "42×4,0",
    length: "НД",
    gost: "ГОСТ 8732-78",
    category: "Труба стальная",
    lengthValue: 12.1
  },
  {
    stockTons: 4.58,
    weightPerPiece: 254.568,
    price1to5: 68100,
    price5to15: 68000,
    priceOver15: 67900,
    branch: "КУРСК",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12
  },
  {
    stockTons: 5.09,
    weightPerPiece: 254.496,
    price1to5: 72600,
    price5to15: 72500,
    priceOver15: 72400,
    branch: "КИРОВ",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12
  },
  {
    stockTons: 27.37,
    weightPerPiece: 255.829,
    price1to5: 67100,
    price5to15: 67000,
    priceOver15: 66900,
    branch: "ЕКАТЕРИНБУРГ",
    name: "Труба ЭС",
    size: "219×4,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12.06
  },
  {
    stockTons: 4.33,
    weightPerPiece: 618.480,
    price1to5: 74100,
    price5to15: 74000,
    priceOver15: 73900,
    branch: "САРАНСК",
    name: "Труба ЭС",
    size: "219×10,0",
    length: "(12+нд)",
    gost: "ГОСТ 10704-91",
    category: "Труба стальная",
    lengthValue: 12
  },
  
  // ТРУБЫ ПРОФИЛЬНЫЕ
  {
    stockTons: 5.55,
    weightPerPiece: 231.228,
    price1to5: 85800,
    price5to15: 85600,
    priceOver15: 85500,
    branch: "ТИТАРОВКА",
    name: "Труба проф ст09Г2С",
    size: "160×160×4,0",
    length: "(12 м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12
  },
  {
    stockTons: 11.10,
    weightPerPiece: 231.228,
    price1to5: 85300,
    price5to15: 85100,
    priceOver15: 85000,
    branch: "РОСТОВ",
    name: "Труба проф ст09Г2С",
    size: "160×160×4,0",
    length: "(12 м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12
  },
  {
    stockTons: 11.32,
    weightPerPiece: 3.659,
    price1to5: 79800,
    price5to15: 79600,
    priceOver15: 79500,
    branch: "ЯРОСЛАВЛЬ",
    name: "Труба проф",
    size: "15×15×1,5",
    length: "(6м)",
    gost: "Северсталь",
    category: "Труба профильная",
    lengthValue: 6
  },
  {
    stockTons: 14.30,
    weightPerPiece: 3.660,
    price1to5: 79300,
    price5to15: 79100,
    priceOver15: 79000,
    branch: "ЧЕХОВ",
    name: "Труба проф",
    size: "15×15×1,5",
    length: "(6м)",
    gost: "Северсталь",
    category: "Труба профильная",
    lengthValue: 6
  },
  {
    stockTons: 7.25,
    weightPerPiece: 186.000,
    price1to5: 79800,
    price5to15: 79600,
    priceOver15: 79500,
    branch: "УФА",
    name: "Труба проф",
    size: "160×100×4,0",
    length: "(12м)",
    gost: "ГОСТ 30245-03",
    category: "Труба профильная",
    lengthValue: 12
  }
];

// Функция для получения цены в зависимости от объема
export const getPriceByVolume = (item: PriceItem, tons: number): number => {
  if (tons >= 15) return item.priceOver15;
  if (tons >= 5) return item.price5to15;
  return item.price1to5;
};

// Функция для конвертации рублей в тенге
export const convertToTenge = (rubles: number): number => {
  return rubles * EXCHANGE_RATE;
};

// Функция для получения уникальных категорий
export const getCategories = (): string[] => {
  return [...new Set(priceData.map(item => item.category))];
};

// Функция для получения товаров по категории
export const getItemsByCategory = (category: string): PriceItem[] => {
  return priceData.filter(item => item.category === category);
};

// Функция для поиска товаров
export const searchItems = (query: string): PriceItem[] => {
  const lowerQuery = query.toLowerCase();
  return priceData.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.size.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery) ||
    item.branch.toLowerCase().includes(lowerQuery)
  );
};

// Функция для получения размеров по категории
export const getSizesByCategory = (category: string): string[] => {
  const items = getItemsByCategory(category);
  return [...new Set(items.map(item => item.size))].sort();
};

// Функция для фильтрации по размеру
export const getItemsBySize = (category: string, size: string): PriceItem[] => {
  return priceData.filter(item => item.category === category && item.size === size);
};
