import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Where Convenience <br className="hidden md:block"/> Meets Quality
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 font-light leading-relaxed">
              Discover quality. Shop with confidence. Experience the future of online shopping with NexaStore.
            </p>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Our Story - Split Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Vision</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Making online shopping simple, secure, and enjoyable.
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to NexaStore. We are dedicated to providing a modern online shopping experience that makes discovering and purchasing products effortless. We understand that online shopping is more than just buying products—it's about trust, convenience, and satisfaction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're shopping for everyday essentials or unique products, NexaStore is designed to help you find exactly what you need. By combining quality products with reliable service, we aim to become a trusted destination for shoppers everywhere.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-4xl font-extrabold text-primary-600 mb-2">100%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Dedication</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-primary-600 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Customer Focus</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-purple-200 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/NexaStore_demo.png" 
              alt="NexaStore Demo" 
              className="relative rounded-3xl shadow-2xl object-cover w-full h-auto max-h-[600px] bg-white p-4"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Building trust, one order at a time</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Quality</h4>
              <p className="text-gray-600 leading-relaxed">
                We personally vet every supplier and product to ensure they meet our rigorous standards for durability and excellence.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast Delivery</h4>
              <p className="text-gray-600 leading-relaxed">
                Our optimized supply chain ensures your orders reach your doorstep in record time, safely and securely.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">24/7 Dedicated Support</h4>
              <p className="text-gray-600 leading-relaxed">
                Our customer success team is always online, ready to help you with tracking, returns, or product questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary-900 py-20 px-10 text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Be part of our journey.</h2>
            <p className="text-xl text-primary-100 mb-10">
              Whether you're making your first purchase or returning as a valued customer, we're excited to be a part of your shopping journey.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-900 bg-white rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-xl"
            >
              Start Shopping
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
