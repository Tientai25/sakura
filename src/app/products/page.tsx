'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Ghế văn phòng hiện đại',
    price: 2500000,
    originalPrice: 3000000,
    image: '/assets/office-chair.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Nội thất văn phòng',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 2,
    name: 'Bàn làm việc sang trọng',
    price: 1800000,
    originalPrice: 2200000,
    image: '/assets/stylish-table.jpg',
    rating: 4.6,
    reviews: 89,
    category: 'Nội thất văn phòng',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 3,
    name: 'Đèn bàn thiết kế độc đáo',
    price: 850000,
    originalPrice: 1200000,
    image: '/assets/table-lamp.jpg',
    rating: 4.9,
    reviews: 156,
    category: 'Đèn chiếu sáng',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 4,
    name: 'Ghế sofa sàn hiện đại',
    price: 3200000,
    originalPrice: 3800000,
    image: '/assets/floor-sofa.jpg',
    rating: 4.7,
    reviews: 203,
    category: 'Nội thất phòng khách',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 5,
    name: 'Bàn sàn đa năng',
    price: 1500000,
    originalPrice: 1800000,
    image: '/assets/floor-table.jpg',
    rating: 4.5,
    reviews: 67,
    category: 'Nội thất đa năng',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 6,
    name: 'Đồng hồ treo tường hiện đại',
    price: 650000,
    originalPrice: 850000,
    image: '/assets/modern-clock.jpg',
    rating: 4.4,
    reviews: 92,
    category: 'Đồ trang trí',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 7,
    name: 'Lọ hoa đen sang trọng',
    price: 450000,
    originalPrice: 600000,
    image: '/assets/vase-black.jpg',
    rating: 4.6,
    reviews: 78,
    category: 'Đồ trang trí',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 8,
    name: 'Tranh treo tường nghệ thuật',
    price: 1200000,
    originalPrice: 1500000,
    image: '/assets/wall-art.jpg',
    rating: 4.8,
    reviews: 134,
    category: 'Đồ trang trí',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 9,
    name: 'Ghế sang trọng cao cấp',
    price: 2800000,
    originalPrice: 3500000,
    image: '/assets/luxury-seat.jpg',
    rating: 4.9,
    reviews: 189,
    category: 'Nội thất phòng khách',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 10,
    name: 'Bảng vẽ tại nhà',
    price: 750000,
    originalPrice: 950000,
    image: '/assets/drawing-board.jpg',
    rating: 4.3,
    reviews: 56,
    category: 'Đồ dùng học tập',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 11,
    name: 'Lọ hoa trắng cao cấp',
    price: 550000,
    originalPrice: 750000,
    image: '/assets/vase-white.jpg',
    rating: 4.7,
    reviews: 98,
    category: 'Đồ trang trí',
    brand: 'Sakura',
    onSale: true
  },
  {
    id: 12,
    name: 'Lọ hoa đặc biệt',
    price: 950000,
    originalPrice: 1200000,
    image: '/assets/special-vase.jpg',
    rating: 4.8,
    reviews: 145,
    category: 'Đồ trang trí',
    brand: 'Sakura',
    onSale: true
  }
];

const categories = ['Tất cả', 'Nội thất văn phòng', 'Nội thất phòng khách', 'Đèn chiếu sáng', 'Đồ trang trí', 'Nội thất đa năng', 'Đồ dùng học tập'];
const brands = ['Tất cả', 'Sakura', 'Premium', 'Modern', 'Classic'];
const sortOptions = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'price-low', label: 'Giá tăng dần' },
  { value: 'price-high', label: 'Giá giảm dần' },
  { value: 'rating', label: 'Đánh giá cao nhất' },
  { value: 'popular', label: 'Phổ biến nhất' }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedBrand, setSelectedBrand] = useState('Tất cả');
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const productsPerPage = 8;

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Tất cả' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.reviews - a.reviews;
      default:
        return b.id - a.id; // newest first
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + productsPerPage);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tất cả sản phẩm</h1>
          <p className="text-gray-600">
            Khám phá bộ sưu tập đa dạng với {products.length} sản phẩm chất lượng cao
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              Bộ lọc
              {showFilters ? <ChevronUp className="h-5 w-5 ml-2" /> : <ChevronDown className="h-5 w-5 ml-2" />}
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thương hiệu</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="lg:w-64 hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bộ lọc</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Danh mục</h4>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Thương hiệu</h4>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Khoảng giá</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('Tất cả');
                  setSelectedBrand('Tất cả');
                  setPriceRange([0, 5000000]);
                  setSearchTerm('');
                }}
                className="w-full px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Xóa bộ lọc
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Hiển thị {startIndex + 1}-{Math.min(startIndex + productsPerPage, sortedProducts.length)} trong tổng số {sortedProducts.length} sản phẩm
              </p>
            </div>

            {/* Products */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp với bộ lọc của bạn.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Trước
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    const isCurrentPage = page === currentPage;
                    
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          isCurrentPage
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Sau
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 