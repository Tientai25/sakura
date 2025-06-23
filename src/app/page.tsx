import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShoppingCart, Heart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

// Sample products data
const featuredProducts = [
  {
    id: 1,
    name: 'Ghế văn phòng hiện đại',
    price: 2500000,
    originalPrice: 3000000,
    image: '/assets/office-chair.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Nội thất văn phòng',
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
    onSale: true
  }
];

const newArrivals = [
  {
    id: 5,
    name: 'Bàn sàn đa năng',
    price: 1500000,
    originalPrice: 1800000,
    image: '/assets/floor-table.jpg',
    rating: 4.5,
    reviews: 67,
    category: 'Nội thất đa năng',
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
    onSale: true
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Anh',
    role: 'Chủ doanh nghiệp',
    content: 'Sản phẩm của Sakura Home thực sự chất lượng cao. Tôi rất hài lòng với dịch vụ và sản phẩm.',
    rating: 5,
    avatar: '/assets/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Trần Văn Bình',
    role: 'Kiến trúc sư',
    content: 'Thiết kế hiện đại và chất lượng tuyệt vời. Khách hàng của tôi rất thích các sản phẩm từ Sakura Home.',
    rating: 5,
    avatar: '/assets/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Lê Thị Cẩm',
    role: 'Nhà thiết kế nội thất',
    content: 'Sakura Home cung cấp những sản phẩm đẹp và bền. Tôi thường xuyên giới thiệu cho khách hàng.',
    rating: 5,
    avatar: '/assets/testimonial-3.jpg'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Khám phá không gian sống
                <span className="block text-yellow-300">tuyệt vời</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Sakura Home mang đến cho bạn những sản phẩm chất lượng cao với thiết kế hiện đại, 
                giúp tạo nên không gian sống đẹp và thoải mái cho gia đình bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Mua sắm ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ưu đãi đặc biệt</h3>
                <p className="text-blue-100 mb-6">
                  Giảm giá lên đến 30% cho tất cả sản phẩm mới
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">30%</div>
                    <div className="text-sm">Giảm giá</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập sản phẩm chất lượng cao được thiết kế để nâng cao không gian sống của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã sử dụng sản phẩm của Sakura Home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Giảm giá mùa hè</h2>
          <p className="text-xl mb-8 text-red-100">
            Tiết kiệm lên đến 50% cho tất cả sản phẩm nội thất
          </p>
          <Link 
            href="/products" 
            className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Mua sắm ngay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm mới</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá những sản phẩm mới nhất với thiết kế độc đáo và chất lượng cao
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm phổ biến</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm được yêu thích nhất bởi khách hàng của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đối tác tin cậy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tự hào được hợp tác với những thương hiệu uy tín trong ngành
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">Logo {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
