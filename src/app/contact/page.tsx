'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Địa chỉ',
      content: 'Số 54 Đường 19/5, Văn Quán, Hà Đông, Hà Nội'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Hotline',
      content: '0913281869'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'Sakura@gmail.com'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Thứ 7: 7h30 – 17h30 | Chủ nhật: Nghỉ (Hỗ trợ tư vấn qua hotline)'
    }
  ];

  const faqs = [
    {
      question: 'Làm thế nào để đặt hàng?',
      answer: 'Bạn có thể đặt hàng trực tuyến thông qua website của chúng tôi hoặc liên hệ qua điện thoại để được hỗ trợ.'
    },
    {
      question: 'Thời gian giao hàng là bao lâu?',
      answer: 'Thời gian giao hàng thường từ 2-5 ngày làm việc tùy thuộc vào địa điểm và sản phẩm.'
    },
    {
      question: 'Có chính sách đổi trả không?',
      answer: 'Chúng tôi có chính sách đổi trả miễn phí trong vòng 30 ngày kể từ ngày nhận hàng.'
    },
    {
      question: 'Có bảo hành sản phẩm không?',
      answer: 'Tất cả sản phẩm của chúng tôi đều có bảo hành chính hãng từ 1-3 năm tùy theo loại sản phẩm.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Liên hệ chúng tôi</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bạn đang cần tư vấn về thiết kế lan can và ban công hoặc cần báo giá nhanh chóng cho công trình của mình? Đừng ngần ngại liên hệ với chúng tôi ngay hôm nay!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cảm ơn bạn!</h3>
                <p className="text-gray-600 mb-4">
                  Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Chủ đề *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="general">Thông tin chung</option>
                      <option value="product">Hỏi về sản phẩm</option>
                      <option value="order">Đặt hàng</option>
                      <option value="support">Hỗ trợ kỹ thuật</option>
                      <option value="complaint">Khiếu nại</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Vui lòng mô tả chi tiết vấn đề hoặc câu hỏi của bạn..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Gửi tin nhắn</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-yellow-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vị trí của chúng tôi</h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096484300000000!2d105.7744!3d20.9721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zNTQgxJB1b3VuZyAxOS81LCBQaMaw4budIFbEg24gUXVhbiwgSMOgIMSQ4bqnaCwgSMOgIE5haSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sakura Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Câu hỏi thường gặp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-yellow-600 mb-4 flex justify-center">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gọi điện thoại</h3>
            <p className="text-gray-600 mb-4">
              Liên hệ trực tiếp với chúng tôi qua điện thoại để được hỗ trợ nhanh chóng
            </p>
            <a
              href="tel:0913281869"
              className="text-yellow-600 font-semibold hover:text-yellow-700"
            >
              0913281869
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-yellow-600 mb-4 flex justify-center">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gửi email</h3>
            <p className="text-gray-600 mb-4">
              Gửi email cho chúng tôi để được tư vấn chi tiết và chuyên nghiệp
            </p>
            <a
              href="mailto:Sakura@gmail.com"
              className="text-yellow-600 font-semibold hover:text-yellow-700"
            >
              Sakura@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-yellow-600 mb-4 flex justify-center">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Giờ làm việc</h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi sẵn sàng phục vụ bạn trong giờ làm việc
            </p>
            <p className="text-yellow-600 font-semibold">
              Thứ 2 - Thứ 7: 7h30 – 17h30
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Chủ nhật: Nghỉ (Hỗ trợ tư vấn qua hotline)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 