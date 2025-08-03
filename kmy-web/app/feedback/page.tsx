"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <main className="overflow-x-hidden px-[10vw] py-[8vh]">
      {/* Title Section */}
      <section className="text-center space-y-4 mb-[8vh]">
        <h1 className="text-[3rem] font-bold text-[#44305a]">Choose Skynode</h1>
        <p className="text-2xl text-[#44305a]" style={{ fontFamily: 'cursive' }}>
          “Real voices, real impact — we grow through your words.”
        </p>
      </section>

      {/* Swiper Carousel */}
      <section className="mb-[10vh]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {[...Array(6)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-lg hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="flex items-center gap-4">
                  <Image
                    src={`/images/review${idx + 1}.png`} 
                    alt={`review ${idx + 1}`}
                    width={384}
                    height={256}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Feedback Form */}
      <section className="w-full">
        <div
          id="feedback-form"
          className="relative text-[#44305a] rounded-2xl shadow-lg p-10 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-semibold mb-2">Leave Your Feedback</h2>
          <p className="mb-8 mt-4 text-lg">We value your thoughts — share your experience with us!</p>

          <form className="space-y-8">
            {/* Rating System */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Rate your experience *</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`cursor-pointer text-3xl transition ${
                      star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Your name *"
              className="w-full rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
            />
            <textarea
              placeholder="Your feedback *"
              rows={5}
              className="w-full rounded-xl p-3 bg-transparent border outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#7e45f3] rounded-full shadow hover:bg-gray-100 transition font-medium cursor-pointer"
            >
              Submit Feedback →
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
