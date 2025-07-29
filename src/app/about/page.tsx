import { Users, Award, Target, Heart, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ông Nguyễn Viết Ngọc',
      role: 'Giám đốc',
      image: '/assets/team-1.jpg',
      bio: 'Lãnh đạo công ty với tầm nhìn chiến lược, dẫn dắt SAKURA  trở thành thương hiệu hàng đầu trong lĩnh vực sản xuất cơ khí inox cao cấp.'
    },
    {
      name: 'Phòng Kế toán',
      role: 'Quản lý tài chính',
      image: '/assets/team-2.jpg',
      bio: 'Đảm bảo quản lý tài chính hiệu quả và minh bạch, hỗ trợ tối ưu cho hoạt động sản xuất và kinh doanh của công ty.'
    },
    {
      name: 'Phòng Sản xuất',
      role: 'Sản xuất cơ khí',
      image: '/assets/team-3.jpg',
      bio: 'Đội ngũ sản xuất có kinh nghiệm, trình độ chuyên môn cao, áp dụng công nghệ tiên tiến để tạo ra sản phẩm chất lượng.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Chất lượng cao',
      description: 'Cam kết cung cấp các sản phẩm cơ khí inox cao cấp với độ hoàn thiện và độ chính xác cao.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Sáng tạo thiết kế',
      description: 'Thiết kế kết cấu cơ khí chuyên nghiệp, đảm bảo tỉ lệ vàng trong từng chi tiết.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Khách hàng là trung tâm',
      description: 'Đáp ứng nhu cầu riêng biệt của khách hàng trong việc tạo ra không gian sống đẹp và cá nhân hóa.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Uy tín và trách nhiệm',
      description: 'Xây dựng niềm tin với khách hàng, đóng góp cho cộng đồng và bảo vệ môi trường.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      label: 'Năm kinh nghiệm'
    },
    {
      number: '1000+',
      label: 'Dự án hoàn thành'
    },
    {
      number: '500+',
      label: 'Khách hàng hài lòng'
    },
    {
      number: '50+',
      label: 'Đối tác tin cậy'
    }
  ];

  const testimonials = [
    {
      name: 'Phạm Thị Dung',
      role: 'Chủ doanh nghiệp',
      content: 'SAKURA  đã giúp tôi tạo nên không gian nội thất chuyên nghiệp với các sản phẩm cơ khí inox cao cấp. Chất lượng và dịch vụ tuyệt vời!',
      rating: 5
    },
    {
      name: 'Hoàng Văn Em',
      role: 'Kiến trúc sư',
      content: 'Là đối tác lâu năm của SAKURA , tôi luôn tin tưởng vào chất lượng sản phẩm cơ khí và dịch vụ thiết kế của họ.',
      rating: 5
    },
    {
      name: 'Vũ Thị Phương',
      role: 'Nhà thiết kế nội thất',
      content: 'SAKURA  cung cấp những sản phẩm cơ khí inox đẹp và bền. Khách hàng của tôi rất hài lòng với các sản phẩm từ SAKURA .',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Về SAKURA </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Công ty Cổ Phần SAKURA - Thương hiệu hàng đầu trong lĩnh vực sản xuất cơ khí, 
            phụ kiện phổ thông đến cao cấp tại thành phố Hà Nội từ năm 2009.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sứ mệnh của chúng tôi</h2>
              <p className="text-lg text-gray-600 mb-6">
                SAKURA  cam kết cung cấp các sản phẩm cơ khí inox cao cấp theo thiết kế riêng với chất lượng cao, 
                đáp ứng nhu cầu riêng biệt của khách hàng trong việc tạo ra một không gian sống đẹp, sang trọng và cá nhân hóa.
              </p>
              <p className="text-lg text-gray-600">
                Trở thành một trong những thương hiệu sản xuất cơ khí hàng đầu trên thị trường Việt Nam, 
                đồng thời tạo ra những giá trị đích thực cho khách hàng, nhân viên và cộng đồng.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Hình ảnh về sứ mệnh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lịch sử phát triển</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hành trình 15 năm phát triển của SAKURA 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-yellow-600 mb-4">
                <h3 className="text-2xl font-bold">Giai đoạn 1 (2009-2019)</h3>
              </div>
              <p className="text-gray-600">
                Giai đoạn hình thành và phát triển, tập trung vào nghiên cứu chất liệu, mẫu mã sản phẩm. 
                Các sản phẩm chính: gia công cơ khí sắt, thép, inox, sản xuất các cấu kiện kim loại.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-yellow-600 mb-4">
                <h3 className="text-2xl font-bold">Giai đoạn 2 (2019-nay)</h3>
              </div>
              <p className="text-gray-600">
                Áp dụng quy trình sản xuất hiện đại, cho ra đời các dòng sản phẩm cầu thang, hành lang, 
                cơ khí inox cao cấp với độ hoàn thiện và độ chính xác cao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của SAKURA 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Thành tựu của chúng tôi</h2>
            <p className="text-xl text-gray-300">
              Những con số ấn tượng phản ánh sự tin tưởng của khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cơ cấu tổ chức</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Đội ngũ chuyên nghiệp đang tạo nên sự khác biệt tại SAKURA 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-200">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Ảnh</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã tin tưởng và sử dụng sản phẩm của SAKURA 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Khám phá bộ sưu tập sản phẩm cơ khí inox cao cấp của chúng tôi và tạo nên không gian sống tuyệt vời
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Xem sản phẩm
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Liên hệ chúng tôi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 