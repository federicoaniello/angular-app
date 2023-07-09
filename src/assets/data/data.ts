import { ILinksData } from "src/models/ILinksData";
import { ISwiperData } from "src/models/ISwiperData";

export const swiper_data: ISwiperData[] = [
  {
    img: "/carousel/carousel-01.jpg",
    titles: {
      first: "<strong>Extending</strong> tables",
      second: "See all",
    },
  },
  {
    img: "/carousel/carousel-02.jpg",
  },
  {
    img: "/carousel/carousel-03.jpg",
  },
];

export const links_data: ILinksData[] = [
  {
    name: "New Arrivals",
    api: "/data/new_arrivals.json",
    isDefault: true,
  },
  {
    name: "Best Seller",
    api: "/data/best_seller.json",
    isDefault: false,
  },
  {
    name: "Most View",
    api: "/data/most_view.json",
    isDefault: false,
  },
];
