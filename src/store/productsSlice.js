import { createSlice } from "@reduxjs/toolkit";

import p1 from "../assets/product-s1.png";
import p2 from "../assets/product-s2.png";
import p3 from "../assets/product-s3.png";
import p4 from "../assets/product-s4.png";
import p5 from "../assets/product-s5.png";
import p6 from "../assets/product-s6.png";
import p7 from "../assets/product-s7.png";
import p8 from "../assets/product-s8.png";
import p9 from "../assets/product-s9.png";
import p10 from "../assets/product-s10.png";
import p11 from "../assets/product-s11.png";
import p12 from "../assets/product-s12.png";

const initialState = {
  items: [
    { id: 1, img: p1, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 2, img: p2, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 3, img: p3, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 4, img: p4, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 5, img: p5, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 6, img: p6, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 7, img: p7, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 8, img: p8, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 9, img: p9, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 10, img: p10, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 11, img: p11, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { id: 12, img: p12, title: "Graphic Design", department: "English Department", priceOld: 16.48, priceNew: 6.48, colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
  ],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
