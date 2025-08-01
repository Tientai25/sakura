'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

// Sample products data
const stairImages = [
  '/assets/stair-1.jpg',
  '/assets/stair-2.jpg',
  '/assets/stair-3.jpg',
  '/assets/stair-4.jpg',
  '/assets/stair-5.jpg',
  '/assets/stair-6.jpg',
  '/assets/stair-7.jpg',
  '/assets/stair-8.jpg',
  '/assets/stair-9.jpg',
  '/assets/stair-10.jpg',
  '/assets/stair-11.jpg',
  '/assets/stair-12.jpg',
  '/assets/stair-13.jpg'
];
const products = [
  {
    id: 1,
    name: 'Mã sản phẩm Sakura 01',
    price: 2500000,
    originalPrice: 3000000,
    image: stairImages[0],
    rating: 4.8,
    reviews: 124,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 01',
    material: 'Thép, Inox, Sắt (tùy chọn theo yêu cầu)',
    thickness: '0.3mm - 2.5mm',
    design: 'Lan can sắt mỹ thuật khắc hoa văn',
    length: '70cm-1m',
    surface: 'Gia công kỹ lưỡng, xử lý bề mặt bằng công nghệ mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng trong ngành xây dựng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 2,
    name: 'Mã sản phẩm Sakura 02',
    price: 1800000,
    originalPrice: 2200000,
    image: stairImages[1],
    rating: 4.6,
    reviews: 89,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 02',
    material: 'Thép, Inox, Sắt',
    thickness: '0.3mm - 2.5mm',
    design: 'Sắt uốn theo thiết kế',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 3,
    name: 'Mã sản phẩm Sakura 03',
    price: 850000,
    originalPrice: 1200000,
    image: stairImages[2],
    rating: 4.9,
    reviews: 156,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 03',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Gỗ kết hợp các thanh sắt',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 4,
    name: 'Mã sản phẩm Sakura 04',
    price: 3200000,
    originalPrice: 3800000,
    image: stairImages[3],
    rating: 4.7,
    reviews: 203,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 04',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Gỗ kết hợp các thanh sắt',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 5,
    name: 'Mã sản phẩm Sakura 05',
    price: 1500000,
    originalPrice: 1800000,
    image: stairImages[4],
    rating: 4.5,
    reviews: 67,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 05',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Thanh sắt kết hợp với các chi tiết trang trí',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 6,
    name: 'Mã sản phẩm Sakura 06',
    price: 650000,
    originalPrice: 850000,
    image: stairImages[5],
    rating: 4.4,
    reviews: 92,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 06',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Gỗ kết hợp Kính',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 7,
    name: 'Mã sản phẩm Sakura 07',
    price: 450000,
    originalPrice: 600000,
    image: stairImages[6],
    rating: 4.6,
    reviews: 78,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 07',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Các thanh sắt uốn nóng theo thiết kế',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 8,
    name: 'Mã sản phẩm Sakura 08',
    price: 2800000,
    originalPrice: 3200000,
    image: stairImages[7],
    rating: 4.8,
    reviews: 145,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 08',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Lan can sắt mỹ thuật hiện đại',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 9,
    name: 'Mã sản phẩm Sakura 09',
    price: 1900000,
    originalPrice: 2400000,
    image: stairImages[8],
    rating: 4.7,
    reviews: 112,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 09',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Sắt uốn nghệ thuật kết hợp gỗ',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 10,
    name: 'Mã sản phẩm Sakura 10',
    price: 1200000,
    originalPrice: 1500000,
    image: stairImages[9],
    rating: 4.5,
    reviews: 89,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 10',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Lan can sắt đơn giản, tối giản',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 11,
    name: 'Mã sản phẩm Sakura 11',
    price: 3500000,
    originalPrice: 4200000,
    image: stairImages[10],
    rating: 4.9,
    reviews: 178,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 11',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Lan can sắt cao cấp với chi tiết phức tạp',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 12,
    name: 'Mã sản phẩm Sakura 12',
    price: 2200000,
    originalPrice: 2800000,
    image: stairImages[11],
    rating: 4.6,
    reviews: 134,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 12',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Sắt uốn theo hình học hiện đại',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  },
  {
    id: 13,
    name: 'Mã sản phẩm Sakura 13',
    price: 1800000,
    originalPrice: 2200000,
    image: stairImages[12],
    rating: 4.7,
    reviews: 156,
    category: 'Cơ khí cầu thang',
    brand: 'Sakura',
    onSale: true,
    code: 'Sakura 13',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Lan can sắt kết hợp kính cường lực',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
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
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const productsPerPage = 8;

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Tất cả' || product.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
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
        return a.id - b.id; // smallest ID first
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('Tất cả');
                  setSelectedBrand('Tất cả');
                  setSearchTerm('');
                }}
                className="w-full px-4 py-2 text-sm text-yellow-600 hover:text-yellow-700 font-medium"
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
                            ? 'bg-yellow-600 text-white'
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