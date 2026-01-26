import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const linkDesktop =
    "text-sm leading-6 tracking-[0.2px] font-bold text-[#737373] hover:text-[#252B42]";

  return (
    <header className="w-full bg-white font-[Montserrat]">

      <div className="hidden md:block bg-[#252B42]">
        <div className="mx-auto max-w-[89.94rem] px-4 h-14.5 flex items-center">
          <div className="w-full h-11.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-white" />
                <span className="text-white font-bold text-sm">
                  (225) 555-0118
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-2.5">
                <Mail size={16} className="text-white" />
                <span className="text-white font-bold text-sm">
                  michelle.rivera@example.com
                </span>
              </div>
            </div>


            <span className="text-white font-bold text-sm">
              Follow Us and get a chance to win 80% off
            </span>


            <div className="flex items-center gap-2.5">
              <span className="text-white font-bold text-sm">Follow Us :</span>
              <Instagram size={16} className="text-white" />
              <Youtube size={16} className="text-white" />
              <Facebook size={16} className="text-white" />
              <Twitter size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="mx-auto max-w-[89.8rem] px-4 h-14.5 flex items-center justify-between">

          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>


          <nav className="hidden md:flex items-center gap-6">
            <NavLink exact to="/" className={linkDesktop}>
              Home
            </NavLink>

            <NavLink to="/shop" className="text-sm font-medium text-[#252B42]">
              <span className="flex items-center gap-2">
                Shop <ChevronDown size={14} />
              </span>
            </NavLink>

            <NavLink to="/about" className={linkDesktop}>
              About
            </NavLink>
            <NavLink to="/blog" className={linkDesktop}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={linkDesktop}>
              Contact
            </NavLink>
            <NavLink to="/pages" className={linkDesktop}>
              Pages
            </NavLink>
          </nav>


          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 text-[#23A6F0] font-bold text-sm"
            >
              <User size={12} />
              Login / Register
            </Link>

            <button className="mx-3 text-[#23A6F0]">
              <Search size={16} />
            </button>

            <Link
              to="/cart"
              className="flex items-center gap-1 text-[#23A6F0] mx-3"
            >
              <ShoppingCart size={16} />
              <span className="text-xs">1</span>
            </Link>

            <Link to="/wishlist" className="flex items-center gap-1 text-[#23A6F0]">
              <Heart size={16} />
              <span className="text-xs">1</span>
            </Link>
          </div>


          <div className="md:hidden flex items-center gap-6 text-[#252B42]">
            <Search size={22} />
            <ShoppingCart size={22} />
            <button onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>


      {open && (
        <div className="md:hidden fixed inset-0 bg-white z-50">

          <div className="h-14.5 px-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-[#252B42]">Bandage</span>

            <div className="flex items-center gap-6 text-[#252B42]">
              <Search size={22} />
              <ShoppingCart size={22} />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="pt-16 pb-10 flex flex-col items-center gap-10">
            {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-[2rem] font-semibold text-[#737373]"
              >
                {item}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center gap-3 text-[#23A6F0] text-xl font-bold"
            >
              <User size={22} />
              Login / Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
