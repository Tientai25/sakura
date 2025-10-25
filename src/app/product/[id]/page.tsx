'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const stairImages = [
  ['/assets/stair-1.jpg', '/assets/sp1.1.jpg', '/assets/sp1.2.jpg', '/assets/sp1.3.jpg', '/assets/sp1.4.jpg'], // Sản phẩm 1
  ['/assets/stair-2.jpg', '/assets/sp2.1.jpg', '/assets/sp2.2.jpg'], // Sản phẩm 2
  ['/assets/stair-3.jpg', '/assets/sp3.1.jpg', '/assets/sp3.2.jpg', '/assets/sp3.3.jpg', '/assets/sp3.4.jpg', '/assets/sp3.5.jpg'], // Sản phẩm 3
  ['/assets/stair-4.jpg', '/assets/sp4.1.jpg', '/assets/sp4.2.jpg', '/assets/sp4.3.jpg', '/assets/sp4.4.jpg'], // Sản phẩm 4
  ['/assets/stair-5.jpg', '/assets/sp5.1.jpg', '/assets/sp5.2.jpg', '/assets/sp5.3.jpg', '/assets/sp5.4.jpg'], // Sản phẩm 5
  ['/assets/stair-6.jpg', '/assets/stair-6.1.jpg', '/assets/sp6.1.jpg', '/assets/sp6.2.jpg', '/assets/sp6.3.jpg', '/assets/sp6.4.jpg', '/assets/sp6.5.jpg', '/assets/sp6.6.jpg', '/assets/sp6.7.jpg'], // Sản phẩm 6
  ['/assets/stair-7.jpg', '/assets/sp7.1.jpg', '/assets/sp7.2.jpg', '/assets/sp7.3.jpg', '/assets/sp7.4.jpg', '/assets/sp7.5.jpg', '/assets/sp7.6.jpg'], // Sản phẩm 7
  ['/assets/stair-8.jpg', '/assets/sp8.1.jpg', '/assets/sp8.2.jpg'], // Sản phẩm 8
  ['/assets/stair-9.jpg', '/assets/sp9.1.jpg', '/assets/sp9.2.jpg', '/assets/sp9.3.jpg', '/assets/sp9.4.jpg'], // Sản phẩm 9
  ['/assets/stair-10.jpg', '/assets/sp10.1.jpg'], // Sản phẩm 10
  ['/assets/stair-11.jpg', '/assets/sp11.1.jpg', '/assets/sp11.2.jpg', '/assets/sp11.3.jpg'], // Sản phẩm 11
  ['/assets/stair-12.jpg', '/assets/sp12.1.jpg', '/assets/sp12.2.jpg'], // Sản phẩm 12
  ['/assets/stair-13.jpg'], // Sản phẩm 13
  ['/assets/stair-14.jpg', '/assets/sp14.1.jpg', '/assets/sp14.2.jpg', '/assets/sp14.3.jpg', '/assets/sp14.4.jpg'], // SP14
  ['/assets/stair-15.jpg', '/assets/sp15.1.jpg', '/assets/sp15.2.jpg', '/assets/sp15.3.jpg', '/assets/sp15.4.jpg'], // SP15
  ['/assets/stair-16.jpg', '/assets/sp16.1.jpg', '/assets/sp16.2.jpg', '/assets/sp16.3.jpg', '/assets/sp16.4.jpg'], // SP16
  ['/assets/stair-17.jpg','/assets/sp17.1.jpg' ,'/assets/sp17.2.jpg' ,'/assets/sp17.3.jpg', '/assets/sp17.4.jpg'],
  ['/assets/stair-18.jpg', '/assets/sp18.1.jpg', '/assets/sp18.2.jpg', '/assets/sp18.3.jpg'] // SP18
];

const stairNames = [
  'Cầu thang gỗ tay vịn sắt hiện đại',
  'Cầu thang gỗ tay vịn uốn cong',
  'Cầu thang sắt nghệ thuật cổ điển',
  'Cầu thang sắt mạ vàng sang trọng',
  'Cầu thang inox tay vịn gỗ cao cấp',
  'Cầu thang gỗ phối sắt đơn giản',
  'Cầu thang sắt trụ tròn mạ vàng',
  'Cầu thang sắt hoa văn nghệ thuật',
  'Cầu thang đá tay vịn sắt đen',
  'Cầu thang inox phối đồng cao cấp',
  'Cầu thang gỗ tự nhiên sang trọng',
  'Cầu thang sắt mỹ thuật cao cấp',
  'Cầu thang kính cường lực hiện đại',
  'Cầu thang xoắn ốc inox 304 cao cấp',
  'Cầu thang gỗ óc chó tay vịn kính',
  'Cầu thang sắt sơn tĩnh điện hiện đại',
  'Lan can kính không khung, trụ inox vuông',
  'Lan can sắt CNC cắt hoa văn cổ điển'
];
const products = stairNames.map((name, idx) => ({
  id: idx + 1,
  name: `Mã sản phẩm Sakura ${String(idx + 1).padStart(2, '0')}`,
  code: `Sakura ${String(idx + 1).padStart(2, '0')}`,
  price: 0,
  originalPrice: 0,
  description: 'Sản phẩm cầu thang cao cấp, thiết kế hiện đại, chất liệu bền bỉ, phù hợp với nhiều không gian nội thất.',
  images: stairImages[idx] || [stairImages[idx % stairImages.length][0]],
  rating: 4.5 + (idx % 5) * 0.1,
  reviews: 50 + idx * 10,
  category: 'Cầu thang',
  brand: 'SAKURA ',
  onSale: true,
  inStock: true,
  variants: [
    { name: 'Chất liệu', options: ['Gỗ', 'Sắt', 'Inox'] },
    { name: 'Màu sắc', options: ['Nâu', 'Đen', 'Vàng'] }
  ],
  specifications: {
    'Chất liệu': 'Gỗ, Sắt, Inox',
    'Kích thước': 'Theo yêu cầu',
    'Bảo hành': '2 năm',
    'Thương hiệu': 'SAKURA '
  }
}));
const relatedProducts = products.slice(0, 4).map((product, idx) => ({
  ...product,
  images: stairImages[(idx + 1) % stairImages.length],
  name: `Mã sản phẩm Sakura ${String(idx + 1).padStart(2, '0')}`,
  code: `Sakura ${String(idx + 1).padStart(2, '0')}`,
}));

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === parseInt(params.id as string)) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleVariantChange = (variantName: string, value: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantName]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-blue-600">Sản phẩm</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4"> */}
            <div className="relative aspect-[2/4] bg-white rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {/* {product.onSale && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discountPercentage}%
                </div>
              )} */}
              {/* <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                />
              </button> */}
            </div>
            
            {/* Thumbnail Images */}
            {/* <div className="grid grid-cols-4 gap-2"> */}
            <div className="grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-32 w-32 bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg p-6">
              {/* Category and Brand */}
              <div className="mb-4">
                <span className="text-sm text-gray-500">{product.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{product.brand}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-sm text-gray-500 mb-4">Mã sản phẩm: {product.code}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.onSale && (
                  <p className="text-sm text-red-600 mt-1">
                    Tiết kiệm {formatPrice(product.originalPrice! - product.price)}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Mô tả sản phẩm</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Variants */}
              {product.variants && (
                <div className="mb-6">
                  {product.variants.map((variant) => (
                    <div key={variant.name} className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">{variant.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleVariantChange(variant.name, option)}
                            className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                              selectedVariants[variant.name] === option
                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Số lượng</h4>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mb-6">
                <button
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{product.inStock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}</span>
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="h-5 w-5 mr-3 text-green-500" />
                  <span>Miễn phí vận chuyển cho đơn hàng trên 2 triệu</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-5 w-5 mr-3 text-green-500" />
                  <span>Bảo hành chính hãng 2 năm</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <RotateCcw className="h-5 w-5 mr-3 text-green-500" />
                  <span>Đổi trả miễn phí trong 30 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Thông số kỹ thuật</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Đánh giá sản phẩm</h3>
            <div className="text-center py-8">
              <p className="text-gray-500">Chưa có đánh giá nào cho sản phẩm này.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Viết đánh giá
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]} // Sử dụng images[0] thay vì image
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {/* {product.onSale && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        Sale
                      </div>
                    )} */}
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {product.name}
                    </h4>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}