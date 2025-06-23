import { Users, Award, Target, Heart, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Nguyễn Văn An',
      role: 'Giám đốc điều hành',
      image: '/assets/team-1.jpg',
      bio: 'Với hơn 15 năm kinh nghiệm trong ngành nội thất, anh An đã dẫn dắt Sakura Home trở thành một trong những thương hiệu hàng đầu.'
    },
    {
      name: 'Trần Thị Bình',
      role: 'Giám đốc thiết kế',
      image: '/assets/team-2.jpg',
      bio: 'Chị Bình là kiến trúc sư tài năng với đam mê tạo ra những sản phẩm đẹp và thiết thực cho cuộc sống hiện đại.'
    },
    {
      name: 'Lê Văn Cường',
      role: 'Giám đốc kinh doanh',
      image: '/assets/team-3.jpg',
      bio: 'Anh Cường có kinh nghiệm sâu rộng trong lĩnh vực kinh doanh và marketing, giúp Sakura Home mở rộng thị trường.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Chất lượng cao',
      description: 'Chúng tôi cam kết cung cấp những sản phẩm chất lượng cao nhất với giá cả hợp lý.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Sáng tạo',
      description: 'Luôn đổi mới và sáng tạo trong thiết kế để mang đến những sản phẩm độc đáo.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Khách hàng là trung tâm',
      description: 'Đặt nhu cầu và sự hài lòng của khách hàng lên hàng đầu trong mọi quyết định.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Uy tín',
      description: 'Xây dựng niềm tin với khách hàng thông qua sự minh bạch và trách nhiệm.'
    }
  ];

  const achievements = [
    {
      number: '5000+',
      label: 'Khách hàng hài lòng'
    },
    {
      number: '1000+',
      label: 'Sản phẩm chất lượng'
    },
    {
      number: '50+',
      label: 'Đối tác tin cậy'
    },
    {
      number: '10+',
      label: 'Năm kinh nghiệm'
    }
  ];

  const testimonials = [
    {
      name: 'Phạm Thị Dung',
      role: 'Chủ doanh nghiệp',
      content: 'Sakura Home đã giúp tôi tạo nên không gian văn phòng chuyên nghiệp và hiện đại. Sản phẩm chất lượng và dịch vụ tuyệt vời!',
      rating: 5
    },
    {
      name: 'Hoàng Văn Em',
      role: 'Kiến trúc sư',
      content: 'Là đối tác lâu năm của Sakura Home, tôi luôn tin tưởng vào chất lượng sản phẩm và dịch vụ của họ.',
      rating: 5
    },
    {
      name: 'Vũ Thị Phương',
      role: 'Nhà thiết kế nội thất',
      content: 'Sakura Home cung cấp những sản phẩm đẹp và bền. Khách hàng của tôi rất hài lòng với các sản phẩm từ Sakura Home.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Về Sakura Home</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Chúng tôi là thương hiệu hàng đầu trong lĩnh vực nội thất và đồ trang trí nhà, 
            mang đến những sản phẩm chất lượng cao với thiết kế hiện đại và giá cả hợp lý.
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
                Sakura Home cam kết mang đến cho khách hàng những sản phẩm nội thất chất lượng cao, 
                thiết kế hiện đại và giá cả hợp lý. Chúng tôi tin rằng mọi ngôi nhà đều xứng đáng có 
                những sản phẩm đẹp và bền bỉ.
              </p>
              <p className="text-lg text-gray-600">
                Với đội ngũ thiết kế tài năng và kinh nghiệm sản xuất lâu năm, chúng tôi tự tin 
                có thể đáp ứng mọi nhu cầu của khách hàng, từ những sản phẩm cơ bản đến những 
                thiết kế độc đáo và sang trọng.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Hình ảnh về sứ mệnh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của Sakura Home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Thành tựu của chúng tôi</h2>
            <p className="text-xl text-blue-100">
              Những con số ấn tượng phản ánh sự tin tưởng của khách hàng
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gặp gỡ những con người tài năng đang tạo nên sự khác biệt tại Sakura Home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Ảnh</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã tin tưởng và sử dụng sản phẩm của Sakura Home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Khám phá bộ sưu tập sản phẩm chất lượng cao của chúng tôi và tạo nên không gian sống tuyệt vời
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Xem sản phẩm
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Liên hệ chúng tôi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 