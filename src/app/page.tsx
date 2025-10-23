import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShoppingCart, Heart } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

// Sample products data
const stairImages = [
  '/assets/stair-1.jpg',
  '/assets/stair-2.jpg',
  '/assets/stair-3.jpg',
  '/assets/stair-4.jpg',
  '/assets/stair-5.jpg',
];

const featuredProducts = [
  {
    id: 1,
    name: 'Mã sản phẩm Sakura 01',
    price: 2500000,
    originalPrice: 3000000,
    image: stairImages[0],
    rating: 4.8,
    reviews: 124,
    category: 'Cơ khí cầu thang',
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
    onSale: true,
    code: 'Sakura 04',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Gỗ kết hợp các thanh sắt',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  }
];

const newArrivals = [
  {
    id: 5,
    name: 'Mã sản phẩm Sakura 05',
    price: 1500000,
    originalPrice: 1800000,
    image: stairImages[4],
    rating: 4.5,
    reviews: 67,
    category: 'Cơ khí cầu thang',
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
    image: stairImages[0],
    rating: 4.4,
    reviews: 92,
    category: 'Cơ khí cầu thang',
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
    image: stairImages[1],
    rating: 4.6,
    reviews: 78,
    category: 'Cơ khí cầu thang',
    onSale: true,
    code: 'Sakura 07',
    material: 'Thép, Inox, Sắt, Gỗ',
    thickness: '0.3mm - 2.5mm',
    design: 'Các thanh sắt uốn nóng theo thiết kế',
    length: '70cm-1m',
    surface: 'Mạ kẽm/nhôm hoặc phủ sơn tĩnh điện',
    quality: 'Đạt tiêu chuẩn kiểm định chất lượng',
    origin: 'Công Ty Sakura Việt Nam'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Anh',
    role: 'Chủ doanh nghiệp',
    content: 'Sản phẩm của Sakura  thực sự chất lượng cao. Tôi rất hài lòng với dịch vụ và sản phẩm.',
    rating: 5,
    avatar: '/assets/testimonial.jpg'
  },
  {
    id: 2,
    name: 'Trần Văn Bình',
    role: 'Kiến trúc sư',
    content: 'Thiết kế hiện đại và chất lượng tuyệt vời. Khách hàng của tôi rất thích các sản phẩm từ Sakura .',
    rating: 5,
    avatar: '/assets/testimonial.jpg'
  },
  {
    id: 3,
    name: 'Lê Thị Cẩm',
    role: 'Nhà thiết kế nội thất',
    content: 'Sakura  cung cấp những sản phẩm đẹp và bền. Tôi thường xuyên giới thiệu cho khách hàng.',
    rating: 5,
    avatar: '/assets/testimonial.jpg'
  }
];

const bannerTextContent =''

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cầu Thang Bộ Sakura
                <span className="block text-yellow-300">Giải Pháp Tối Ưu Cho Không Gian Sống Hiện Đại</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                SAKURA  mang đến cho bạn những sản phẩm chất lượng cao với thiết kế hiện đại, 
                giúp tạo nên không gian sống đẹp và thoải mái cho gia đình bạn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors inline-flex items-center"
                >
                  Mua sắm ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/luxury-staircase-scaled.jpg"
                  alt="Cầu thang cao cấp SAKURA "
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 md:h-96"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Stair Design Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tầm quan trọng của cầu thang bộ trong thiết kế nhà
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Trong một ngôi nhà thiết kế cầu thang bộ vô cùng quan trọng nó đảm bảo giao thông và kết nối từ dưới đất lên các tầng với nhau nhanh và an toàn. Cầu thang còn có thể bố trí lấy ánh sáng và khí gió lưu thông. Ngoài ra một ngôi nhà đẹp và sang trọng thì cầu thang chính là điểm nhấn vô cùng quan trọng.
                </p>
                <p>
                  Khi có một cầu thang bộ đẹp và khoa học chính là niềm vui mang lại cho người sống trong ngôi nhà nhiều sức khỏe, trẻ trung và gặp muôn vàn điều may mắn.
                </p>
                <p>
                  Với sự phát triển không ít ngôi nhà có lắp cầu thang máy hiện đại, nhanh và thuận lợi. Nhưng cầu thang bộ luôn song hành thì đòi hỏi phải đồng bộ với các thiết bị, thiết kế của cầu thang máy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/stair-1.jpg"
                  alt="Cầu thang bộ thiết kế hiện đại"
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 md:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sakura Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/stair-2.jpg"
                  alt="Sản phẩm cầu thang Sakura"
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 md:h-96"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Chuyên môn của Sakura
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nhận thấy điều đó công ty chúng tôi chuyên sản xuất đồ cơ khí về inox sắt và đồng, đã thiết kế các mẫu cầu thang phù hợp lắp đặt cho mọi ngôi nhà thuận lợi nhanh chóng đem lại sự ấm cúng độc đáo bằng các chi tiết gia công tỷ mỷ chính xác bằng các máy móc chuyên dụng.
                </p>
                <p>
                  Với nhiều năm nghiên cứu về cầu thang bộ, Sakura có thể tư vấn cho mọi khách hàng về sửa chữa làm mới cầu thang, ban công. Thay thế cầu thang cũ mà không phải đập phá nhiều vừa tiết kiệm thời gian và tiền bạc nhưng vẫn có được một cầu thang, ban công sự mới mẻ đẹp đẽ bền và độc đáo theo thời gian và chúng tôi tin rằng từ trước đến giờ hiếm có sản phẩm nào trên thị trường đáp ứng được những tiêu chí trên.
                </p>
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
              className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-colors"
            >
              Xem tất cả sản phẩm
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã sử dụng sản phẩm của Sakura 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Discount Banner */}
      {/* <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Giảm giá mùa hè</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Tiết kiệm lên đến 50% cho tất cả sản phẩm nội thất
          </p>
          <Link 
            href="/products" 
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Mua sắm ngay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section> */}

      {/* New Arrivals */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

      {/* Popular Products */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}

      {/* Client Testimonials */}
      {/* <section className="py-16 bg-white">
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
      </section> */}
    </div>
  );
}
