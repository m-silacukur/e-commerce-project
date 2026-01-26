import { Link } from "react-router-dom";
import { Clock3, BarChart3, ChevronRight } from "lucide-react";

import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";

const posts = [
  { id: 1, img: blog1 },
  { id: 2, img: blog2 },
  { id: 3, img: blog3 },
];

export default function BlogCard() {
  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div
        className="
          mx-auto w-full max-w-262.5
          px-6
          py-20 md:py-28
        "
      >
        
        <div className="mx-auto flex max-w-173 flex-col items-center gap-2 text-center md:gap-3">
          <p className="text-sm font-bold leading-6 tracking-[0.2px] text-[#23A6F0]">
            Practice Advice
          </p>

          <h2 className="text-[40px] font-bold leading-12.5 tracking-[0.2px] text-[#252B42]">
            Featured Posts
          </h2>

          <p className="max-w-117.25 text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between <br className="hidden md:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 justify-items-center gap-7.5 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="
                w-full max-w-82
                overflow-hidden
                border border-[#F2F2F2]
                bg-white
                shadow-[0_2px_4px_0_rgb(0_0_0/10%)]
              "
            >

              <div className="relative h-75 w-full">
                <img
                  src={p.img}
                  alt="Blog cover"
                  className="h-full w-full object-cover"
                />


                <span
                  className="
                    absolute left-5 top-5
                    inline-flex h-6 items-center justify-center
                    rounded-[3px]
                    bg-[#E74040]
                    px-2.5
                    text-sm font-bold leading-6 tracking-[0.2px]
                    text-white
                  "
                >
                  NEW
                </span>
              </div>


              <div className="flex flex-col gap-2.5 px-6.25 pt-6.25 pb-8.75">
                <div className="flex items-center gap-3.75 text-xs leading-4 tracking-[0.2px]">
                  <span className="text-[#8EC2F2]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>

                <h3 className="text-[20px] font-normal leading-7.5 tracking-[0.2px] text-[#252B42]">
                  Loudest à la Madison #1 <br />
                  (L&apos;integral)
                </h3>

                <p className="text-sm font-normal leading-5 tracking-[0.2px] text-[#737373]">
                  We focus on ergonomics and meeting <br />
                  you where you work. It&apos;s only a <br />
                  keystroke away.
                </p>

                <div className="flex items-center justify-between py-3.75">
                  <div className="flex items-center gap-1.25">
                    <Clock3 size={14} className="text-[#23A6F0]" />
                    <span className="text-xs font-normal leading-4 tracking-[0.2px] text-[#737373]">
                      22 April 2021
                    </span>
                  </div>

                  <div className="flex items-center gap-1.25">
                    <BarChart3 size={16} className="text-[#23856D]" />
                    <span className="text-xs font-normal leading-4 tracking-[0.2px] text-[#737373]">
                      10 comments
                    </span>
                  </div>
                </div>

                <Link
                  to="/blog"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-bold leading-6 tracking-[0.2px]
                    text-[#737373]
                  "
                >
                  Learn More
                  <ChevronRight size={18} className="text-[#23A6F0]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
