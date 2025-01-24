import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <section className="dark:bg-gray-900">
  <div className="py-12  dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font dark:bg-orange-900 dark:text-orange-200">
          Why Choose FreshVoltStyle for Your Shopping Needs?
        </h2>
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Your go-to platform for premium clothing, electronics, and home essentials.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto dark:text-gray-300">
          We offer the latest fashion trends, cutting-edge electronics, and must-have home appliances to make your life easier.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {/* Feature 1: Fashion */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
               
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Trendy Fashion</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              Stay ahead of the trends with our curated clothing collections for men, women, and kids. From casual wear to formal attire, we have something for everyone.
            </dd>
          </div>
          {/* Feature 2: Electronics */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Latest Electronics</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              From smartphones to smart home gadgets, find the latest in electronics and technology at unbeatable prices. Upgrade your tech today!
            </dd>
          </div>
          {/* Feature 3: Home Appliances */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Home Appliances</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              Upgrade your home with the latest appliances. From washing machines to refrigerators, we offer top-quality products that make your life easier.
            </dd>
          </div>
          {/* Feature 4: Easy Returns */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Easy Returns</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              We make shopping stress-free with our easy returns policy. If yore not happy with your purchase, simply return it within 30 days.
            </dd>
          </div>
          {/* Feature 5: Secure Payment Gateway */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Secure Payment Gateway</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              Shop with confidence using our secure payment systems. We accept a variety of payment methods to make your shopping experience smooth and safe.
            </dd>
          </div>
          {/* Feature 6: Fast Delivery */}
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white dark:bg-primary-700">
              </div>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-gray-200">Fast Delivery</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
              Get your products delivered quickly with our fast and reliable shipping options. We ensure your orders arrive on time, every time.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutus
