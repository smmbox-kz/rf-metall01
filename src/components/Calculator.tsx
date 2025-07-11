import React, { useState, useEffect } from 'react';
import { 
  Calculator, Package, Truck, Clock, CheckCircle, Zap, Star, Award, Target,
  Search, Filter, MapPin, Factory, TrendingUp, DollarSign, Gauge,
  ShoppingCart, AlertCircle, Info, ArrowRight, Building, Sliders,
  ChevronDown, ChevronUp, Settings, Layers, BarChart3
} from 'lucide-react';
import { 
  priceData, 
  PriceItem, 
  getPriceByVolume, 
  convertToTenge, 
  getCategories, 
  getItemsByCategory,
  searchItems,
  getSizesByCategory,
  getItemsBySize,
  EXCHANGE_RATE 
} from '../data/priceData';

interface CalculatorResult {
  selectedItem: PriceItem;
  quantity: number;
  totalWeight: number;
  pricePerTon: number;
  totalPriceRub: number;
  totalPriceTenge: number;
  deliveryTime: string;
  savings: number;
  priceCategory: string;
}

const MetalCalculator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Труба стальная');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<PriceItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [showSizeSelector, setShowSizeSelector] = useState<boolean>(true);
  const [calculatorResult, setCalculatorResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const categories = getCategories();
  const [filteredItems, setFilteredItems] = useState<PriceItem[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredItems(searchItems(searchQuery));
    } else if (selectedSize) {
      setFilteredItems(getItemsBySize(selectedCategory, selectedSize));
    } else {
      setFilteredItems(getItemsByCategory(selectedCategory));
    }
  }, [selectedCategory, selectedSize, searchQuery]);

  useEffect(() => {
    setAvailableSizes(getSizesByCategory(selectedCategory));
    setSelectedSize('');
    setSelectedItem(null);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedItem && quantity > 0) {
      calculatePrice();
    }
  }, [selectedItem, quantity]);

  const calculatePrice = () => {
    if (!selectedItem) return;

    setIsCalculating(true);
    
    setTimeout(() => {
      const totalWeight = (selectedItem.weightPerPiece * quantity) / 1000; // в тоннах
      const pricePerTonRub = getPriceByVolume(selectedItem, totalWeight);
      const totalPriceRub = pricePerTonRub * totalWeight;
      const totalPriceTenge = convertToTenge(totalPriceRub);
      
      const priceCategory = totalWeight >= 15 ? 'Оптовая цена (>15т)' : 
                           totalWeight >= 5 ? 'Средний опт (5-15т)' : 
                           'Розничная цена (1-5т)';
      
      const deliveryTime = totalWeight > 10 ? '7-10 дней' : '5-7 дней';
      const savings = Math.round(totalPriceTenge * 0.15); // 15% экономия

      setCalculatorResult({
        selectedItem,
        quantity,
        totalWeight,
        pricePerTon: pricePerTonRub,
        totalPriceRub,
        totalPriceTenge,
        deliveryTime,
        savings,
        priceCategory
      });
      setIsCalculating(false);
    }, 1000);
  };

  const handleOrderClick = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Труба стальная': return '🔧';
      case 'Труба профильная': return '⬜';
      case 'Круг стальной': return '⚪';
      default: return '📦';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Труба стальная': return 'from-blue-600 to-blue-700';
      case 'Труба профильная': return 'from-green-600 to-green-700';
      case 'Круг стальной': return 'from-orange-600 to-orange-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-8 py-4 mb-8">
            <Calculator className="h-7 w-7 text-orange-400 mr-3" />
            <span className="text-orange-300 font-bold text-xl">Калькулятор металлопроката</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Точная стоимость
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              за 30 секунд! 🚀
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 p-8 rounded-3xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <BarChart3 className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-green-300 font-bold text-xl">1000+</p>
                  <p className="text-blue-200">позиций в наличии</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <DollarSign className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="text-orange-300 font-bold text-xl">{EXCHANGE_RATE} ₸/₽</p>
                  <p className="text-blue-200">актуальный курс</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="text-yellow-300 font-bold text-xl">15%</p>
                  <p className="text-blue-200">экономия от рынка</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-7 w-7 text-gray-400" />
              <input
                type="text"
                placeholder="🔍 Поиск по названию, размеру, филиалу... (например: 'труба 219', 'круг 95', 'КАЗАНЬ')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-6 border-3 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 text-xl font-medium transition-all placeholder-gray-400"
              />
            </div>
          </div>

          {/* Category Selection */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900 flex items-center">
                <Layers className="h-8 w-8 text-blue-600 mr-3" />
                КАТЕГОРИЯ ПРОДУКЦИИ:
              </h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <Settings className="h-5 w-5" />
                <span>{showFilters ? 'Скрыть' : 'Показать'} фильтры</span>
                {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category) => {
                const itemCount = getItemsByCategory(category).length;
                const isPopular = category === 'Труба стальная';
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative p-8 rounded-3xl border-3 transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? `border-blue-500 bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-2xl`
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow-xl'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                        ХИТ ПРОДАЖ! 🔥
                      </div>
                    )}
                    
                    <div className="text-6xl mb-4">{getCategoryIcon(category)}</div>
                    <div className="font-bold text-xl mb-2">{category}</div>
                    <div className={`text-sm ${selectedCategory === category ? 'text-blue-100' : 'text-gray-500'}`}>
                      {itemCount} позиций в наличии
                    </div>
                    
                    {isPopular && (
                      <div className={`mt-3 text-sm font-semibold ${selectedCategory === category ? 'text-orange-200' : 'text-orange-600'}`}>
                        Самый ходовой товар из РФ!
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Selector */}
          {showFilters && availableSizes.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Sliders className="h-7 w-7 text-orange-600 mr-3" />
                  РАЗМЕРЫ {selectedCategory.toUpperCase()}:
                </h3>
                <button
                  onClick={() => setShowSizeSelector(!showSizeSelector)}
                  className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
                >
                  <span>{showSizeSelector ? 'Скрыть' : 'Показать'} размеры</span>
                  {showSizeSelector ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              {showSizeSelector && (
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <button
                      onClick={() => setSelectedSize('')}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                        selectedSize === ''
                          ? 'border-gray-500 bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:shadow-md'
                      }`}
                    >
                      Все размеры
                    </button>
                    {availableSizes.map((size) => {
                      const sizeItems = getItemsBySize(selectedCategory, size);
                      const minPrice = Math.min(...sizeItems.map(item => convertToTenge(item.priceOver15)));
                      
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                            selectedSize === size
                              ? `border-orange-500 bg-gradient-to-r ${getCategoryColor(selectedCategory)} text-white shadow-lg`
                              : 'border-gray-300 bg-white text-gray-700 hover:border-orange-300 hover:shadow-md'
                          }`}
                        >
                          <div className="text-sm font-bold mb-1">{size}</div>
                          <div className={`text-xs ${selectedSize === size ? 'text-orange-100' : 'text-gray-500'}`}>
                            от {Math.round(minPrice).toLocaleString()} ₸/т
                          </div>
                          {sizeItems.length > 1 && (
                            <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              {sizeItems.length}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Products Grid */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Package className="h-8 w-8 text-purple-600 mr-3" />
              ВЫБЕРИТЕ ПРОДУКЦИЮ:
              <span className="ml-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-xl">
                {filteredItems.length} позиций
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-4">
              {filteredItems.map((item, index) => {
                const priceInTenge = convertToTenge(item.priceOver15);
                const isInStock = item.stockTons > 5;
                const isLowStock = item.stockTons > 0 && item.stockTons <= 5;
                
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    className={`relative p-6 rounded-3xl border-3 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedItem === item
                        ? 'border-purple-500 bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-2xl'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:shadow-xl'
                    }`}
                  >
                    {/* Stock Status */}
                    {isInStock && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        В НАЛИЧИИ ✅
                      </div>
                    )}
                    {isLowStock && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        МАЛО! ⚠️
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-2 leading-tight">{item.name}</h4>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-2xl font-bold ${selectedItem === item ? 'text-orange-200' : 'text-blue-600'}`}>
                          {item.size}
                        </span>
                        {item.length && (
                          <span className={`text-sm px-2 py-1 rounded-full ${selectedItem === item ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'}`}>
                            {item.length}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${selectedItem === item ? 'text-purple-200' : 'text-gray-500'}`}>
                        {item.gost}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center">
                          <Gauge className="h-4 w-4 mr-1" />
                          На складе:
                        </span>
                        <span className="font-bold">{item.stockTons.toFixed(1)} т</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          Филиал:
                        </span>
                        <span className="font-bold text-xs">{item.branch}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center">
                          <Package className="h-4 w-4 mr-1" />
                          Вес шт:
                        </span>
                        <span className="font-bold">{item.weightPerPiece.toFixed(1)} кг</span>
                      </div>
                      
                      <div className="border-t pt-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold mb-1">
                            {Math.round(priceInTenge).toLocaleString()} ₸/т
                          </div>
                          <div className={`text-xs ${selectedItem === item ? 'text-purple-200' : 'text-gray-500'}`}>
                            ({Math.round(item.priceOver15).toLocaleString()} ₽/т)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantity Selection */}
          {selectedItem && (
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <ShoppingCart className="h-8 w-8 text-green-600 mr-3" />
                КОЛИЧЕСТВО: 
                <span className="ml-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-2xl">
                  {quantity} шт.
                </span>
              </h3>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200">
                <div className="flex items-center justify-center space-x-8 mb-8">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl text-4xl font-bold transition-all transform hover:scale-110 shadow-lg"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-40 h-20 text-center border-3 border-green-300 rounded-2xl focus:ring-4 focus:ring-green-500/50 focus:border-green-500 text-3xl font-bold"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl text-4xl font-bold transition-all transform hover:scale-110 shadow-lg"
                  >
                    +
                  </button>
                </div>

                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Package className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Вес единицы:</p>
                    <p className="text-2xl font-bold text-blue-700">{selectedItem.weightPerPiece.toFixed(2)} кг</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Gauge className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Общий вес:</p>
                    <p className="text-2xl font-bold text-green-700">
                      {((selectedItem.weightPerPiece * quantity) / 1000).toFixed(2)} т
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <Building className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Длина:</p>
                    <p className="text-2xl font-bold text-orange-700">{selectedItem.lengthValue} м</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <MapPin className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Склад:</p>
                    <p className="text-lg font-bold text-purple-700">{selectedItem.branch}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {calculatorResult && (
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-12 rounded-3xl border-3 border-blue-200 shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full font-bold text-2xl mb-8">
                  <CheckCircle className="h-8 w-8 mr-4" />
                  РАСЧЕТ ЗАВЕРШЕН! 🎉
                </div>
                
                <h3 className="text-4xl font-bold text-blue-800 mb-8">
                  {calculatorResult.selectedItem.name} • {calculatorResult.selectedItem.size}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg">
                    {calculatorResult.priceCategory}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg">
                    Общий вес: {calculatorResult.totalWeight.toFixed(2)} т
                  </span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg">
                    Склад: {calculatorResult.selectedItem.branch}
                  </span>
                </div>
              </div>

              {/* Price Display */}
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-20 py-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                    {isCalculating ? (
                      <div className="flex items-center space-x-6">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white"></div>
                        <span className="text-4xl font-bold">Расчет стоимости...</span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-6xl font-bold mb-4">
                          {Math.round(calculatorResult.totalPriceTenge).toLocaleString()} ₸
                        </div>
                        <div className="text-2xl opacity-90 mb-3">
                          ({Math.round(calculatorResult.totalPriceRub).toLocaleString()} ₽)
                        </div>
                        <div className="text-xl text-green-300 font-semibold">
                          💰 Экономия: {calculatorResult.savings.toLocaleString()} ₸
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-bounce">
                    ЗАКАЗАТЬ СЕЙЧАС! 🚀
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <DollarSign className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-700 mb-2">
                    {Math.round(convertToTenge(calculatorResult.pricePerTon)).toLocaleString()} ₸
                  </p>
                  <p className="text-gray-600 font-medium">за тонну</p>
                </div>
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <Truck className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-green-700 mb-2">{calculatorResult.deliveryTime}</p>
                  <p className="text-gray-600 font-medium">доставка</p>
                </div>
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <Factory className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-orange-700 mb-2">{calculatorResult.selectedItem.branch}</p>
                  <p className="text-gray-600 font-medium">склад поставщика</p>
                </div>
                <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all">
                  <Gauge className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-purple-700 mb-2">
                    {calculatorResult.selectedItem.stockTons.toFixed(1)} т
                  </p>
                  <p className="text-gray-600 font-medium">в наличии</p>
                </div>
              </div>

              {/* Technical Info */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-10 rounded-3xl mb-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Info className="h-7 w-7 text-blue-600 mr-3" />
                  Техническая информация:
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
                  <div className="space-y-3">
                    <p><strong>ГОСТ/ТУ:</strong> {calculatorResult.selectedItem.gost}</p>
                    <p><strong>Длина изделия:</strong> {calculatorResult.selectedItem.lengthValue} м</p>
                    <p><strong>Категория:</strong> {calculatorResult.selectedItem.category}</p>
                  </div>
                  <div className="space-y-3">
                    <p><strong>Курс валют:</strong> {EXCHANGE_RATE} ₸/₽</p>
                    <p><strong>Количество:</strong> {calculatorResult.quantity} шт.</p>
                    <p><strong>Филиал:</strong> {calculatorResult.selectedItem.branch}</p>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <div className="text-center">
                <button 
                  onClick={handleOrderClick}
                  className="group bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 hover:from-orange-700 hover:via-red-700 hover:to-orange-700 text-white px-20 py-10 rounded-3xl text-3xl font-bold transition-all transform hover:scale-105 shadow-2xl mb-8"
                >
                  <span className="flex items-center justify-center">
                    📞 Заказать за {Math.round(calculatorResult.totalPriceTenge).toLocaleString()} ₸
                    <ArrowRight className="ml-6 h-10 w-10 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-2xl">
                  <p className="text-lg text-gray-700 font-medium">
                    ⚡ <strong>Цены актуальны на сегодня!</strong> Курс: {EXCHANGE_RATE} ₸/₽
                    <br />
                    📞 Звоните прямо сейчас: <span className="font-bold text-blue-600 text-xl">+7 (747) 219-93-69</span>
                    <br />
                    🚚 Доставка по всему Казахстану • 💯 Гарантия качества
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-12 max-w-2xl w-full text-center shadow-2xl">
            <div className="bg-green-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-10">
              <CheckCircle className="h-20 w-20 text-green-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Заявка успешно отправлена! 🎉</h3>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              Наш менеджер свяжется с вами в течение <strong>15 минут</strong> для уточнения деталей заказа 
              и подтверждения стоимости доставки
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl"
            >
              Отлично! Жду звонка 📞
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MetalCalculator;
