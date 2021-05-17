import Link from "next/link";

import CartSummary from "components/CartSummary";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-99 flex justify-between items-center px-3 w-full h-12 bg-light text-sm uppercase">
      <div className="font-subheading">Menu</div>

      <Link href="/">
        <a title="Return to Chromaxoma">
          <p className="font-heading">X</p>
        </a>
      </Link>

      <div className="font-subheading">Cart</div>
    </header>
  );
}

export default Header;

// // import Link from "next/link";

// // import CartSummary from "./CartSummary";

// // import LogoSVG from "../svg/logo.svg";

// // function Header() {
// //   return (
// //     <header className="md:absolute md:left-0 md:top-0 w-full z-10">
// //       <div className="py-3 lg:py-5 flex items-center">
// //         <Link href="/">
// //           <a title="Return to ChopChop">Shop</a>
// //         </Link>
// //         <span className="pr-1">,</span>
// //         <CartSummary />
// //       </div>

// //       <Link href="/">
// //         <a title="Return to ChopChop">
// //           <LogoSVG className="w-full" />
// //         </a>
// //       </Link>
// //     </header>
// //   );
// // }

// // export default Header;
