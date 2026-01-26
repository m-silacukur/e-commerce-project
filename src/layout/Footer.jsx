import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const title =
    "text-[#252B42] font-bold text-base leading-6 tracking-[0.1px]";
  const item =
    "text-[#737373] font-bold text-sm leading-6 tracking-[0.2px] hover:text-[#252B42]";

  return (
    <footer className="w-full bg-white font-[Montserrat]">
  
      <div className="w-full bg-[#FAFAFA]">
    
        <div className="mx-auto w-full md:w-262.5 px-11 md:px-0 md:ml-48.75 md:mr-48.75">
    
          <div className="py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-[#252B42] font-bold text-[1.5rem] leading-8 tracking-[0.1px]">
                Bandage
              </div>

              <div className="flex items-center gap-5 text-[#23A6F0]">
                <a href="#" aria-label="Facebook" className="hover:opacity-80">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-80">
                  <Instagram size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-80">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="w-full bg-white">

        <div className="mx-auto w-full md:w-262.5 px-11.5 md:px-0 md:ml-48.75 md:mr-48.75">
          <div className="py-17.5 md:py-12.5">
            <div className="flex flex-col gap-7.5 md:grid md:grid-cols-[148px_152px_148px_148px_321px] md:gap-7.5">
         
              <div className="flex flex-col gap-5">
                <h4 className={title}>Company Info</h4>
                <div className="flex flex-col gap-2.5">
                  <Link className={item} to="/about">
                    About Us
                  </Link>
                  <Link className={item} to="/carrier">
                    Carrier
                  </Link>
                  <Link className={item} to="/hiring">
                    We are hiring
                  </Link>
                  <Link className={item} to="/blog">
                    Blog
                  </Link>
                </div>
              </div>

      
              <div className="flex flex-col gap-5">
                <h4 className={title}>Legal</h4>
                <div className="flex flex-col gap-2.5">
                  <Link className={item} to="/about">
                    About Us
                  </Link>
                  <Link className={item} to="/carrier">
                    Carrier
                  </Link>
                  <Link className={item} to="/hiring">
                    We are hiring
                  </Link>
                  <Link className={item} to="/blog">
                    Blog
                  </Link>
                </div>
              </div>

           
              <div className="flex flex-col gap-5">
                <h4 className={title}>Features</h4>
                <div className="flex flex-col gap-2.5">
                  <Link className={item} to="/business">
                    Business Marketing
                  </Link>
                  <Link className={item} to="/analytics">
                    User Analytic
                  </Link>
                  <Link className={item} to="/chat">
                    Live Chat
                  </Link>
                  <Link className={item} to="/support">
                    Unlimited Support
                  </Link>
                </div>
              </div>

              
              <div className="flex flex-col gap-5">
                <h4 className={title}>Resources</h4>
                <div className="flex flex-col gap-2.5">
                  <Link className={item} to="/ios">
                    IOS &amp; Android
                  </Link>
                  <Link className={item} to="/demo">
                    Watch a Demo
                  </Link>
                  <Link className={item} to="/customers">
                    Customers
                  </Link>
                  <Link className={item} to="/api">
                    API
                  </Link>
                </div>
              </div>

          
              <div className="w-full md:w-80.25 flex flex-col gap-5">
                <h4 className={title}>Get In Touch</h4>

                <div className="w-full">
                  
                  <div className="flex h-14.5 w-full overflow-hidden rounded-md border border-[#E6E6E6]">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 text-sm font-normal text-[#737373] outline-none"
                    />
                    <button
                      type="button"
                      className="w-29.25 bg-[#23A6F0] text-sm font-bold text-white"
                    >
                      Subscribe
                    </button>
                  </div>

                  <p className="mt-1 text-[#737373] text-xs font-normal leading-7 tracking-[0.2px]">
                    Lore imp sum dolor Amit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA]">
        <div className="mx-auto w-full md:w-262.5 px-6 md:px-0 md:ml-48.75 md:mr-48.75">
          <div className="py-6.25">
            <p className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px] text-center md:text-left">
              <span className="md:hidden">
                Made With Love By <br />
                Finland All Right Reserved
              </span>
              <span className="hidden md:inline">
                Made With Love By Finland All Right Reserved
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
