/**
 * SMART FISH COMPANY - CENTRAL ASSETS CONFIGURATION
 * 
 * Put every image path in this ONE file.
 * Key names requested:
 * - aboutFarm
 * - facilityTanks
 * - ras
 * - productFresh
 * - productMarinated
 * - productFingerlings
 * - fleet
 * 
 * To swap any photo with your real company imagery, simply replace the file
 * or update the path here without touching any component code.
 */

// High-fidelity domain photographic placeholders
import aboutFarmImg from '@/src/assets/images/about_farm_exterior_1791720364210.jpg';
import facilityTanksImg from '@/src/assets/images/hero_aquaculture_1791719319495.jpg';
import rasTechImg from '@/src/assets/images/ras_technology_1791719330588.jpg';
import productFreshImg from '@/src/assets/images/fish_products_1791719351579.jpg';
import productMarinatedImg from '@/src/assets/images/product_marinated_1791720377004.jpg';
import productFingerlingsImg from '@/src/assets/images/hatchery_nursery_1791719341380.jpg';
import fleetImg from '@/src/assets/images/delivery_fleet_1791720393199.jpg';

export interface ImageAsset {
  src: string;
  altAr: string;
  altEn: string;
}

export const ASSETS = {
  // Brand Logo (White version for dark navy background)
  logo: {
    whiteSvg: '/assets/logo-white.svg',
    whiteMarkSvg: '/assets/logo-mark.svg',
    alt: 'Smart Fish Company Logo - شركة الأسماك الذكية',
  },

  // Hero Backdrop
  heroBackdrop: {
    src: facilityTanksImg,
    altAr: 'منشأة شركة الأسماك الذكية للاستزراع المائي بنظام التدوير المغلق بالخرج',
    altEn: 'Smart Fish Company RAS Aquaculture Facility in Al-Kharj',
  },

  // Key Section Images (Exactly 7 high-priority slots as requested)
  images: {
    // 1. About Us: Wide image of the farm/facility
    aboutFarm: {
      src: aboutFarmImg,
      altAr: 'منشأة ومزارع شركة الأسماك الذكية الحديثة في محافظة الخرج',
      altEn: 'Smart Fish Company modern aquaculture farm facility in Al-Kharj',
    },

    // 2. Facility / Divisions: Fish tanks (RAS hall)
    facilityTanks: {
      src: facilityTanksImg,
      altAr: 'أحواض استزراع الأسماك الدائرية المتطورة بنظام التدوير المغلق',
      altEn: 'Advanced circular fish rearing tanks in the RAS facility hall',
    },

    // 3. Technology (RAS): Water treatment system
    ras: {
      src: rasTechImg,
      altAr: 'منظومة تنقية ومعالجة المياه الحيوية والميكانيكية بنظام RAS المتطور',
      altEn: 'Advanced RAS biological and mechanical water treatment filtration system',
    },

    // 4. Products: Fresh fish
    productFresh: {
      src: productFreshImg,
      altAr: 'أسماك طازجة كاملة ومنظفة من مزارعنا بالخرج على الثلج',
      altEn: 'Fresh whole and cleaned market fish on ice from our Al-Kharj farm',
    },

    // 5. Products: Marinated ready-to-cook fish
    productMarinated: {
      src: productMarinatedImg,
      altAr: 'أسماك متبلة جاهزة للطهي الفوري بتتبيلات فاخرة وأعشاب طبيعية',
      altEn: 'Marinated ready-to-cook fresh fish fillets with herbs and lemon',
    },

    // 6. Products: Fingerlings
    productFingerlings: {
      src: productFingerlingsImg,
      altAr: 'إصبعيات سمكية نشطة وصحية عالية الحيوية في مفرخة وحضانة الشركة',
      altEn: 'Healthy active fish fingerlings in the company hatchery and nursery',
    },

    // 7. Sales & Distribution: Refrigerated delivery fleet
    fleet: {
      src: fleetImg,
      altAr: 'أسطول شاحنات وسيارات النقل والتوزيع المبرد التابع للشركة',
      altEn: 'Company temperature-controlled refrigerated delivery logistics fleet',
    },
  },

  // External Links & Placeholders
  links: {
    onlineStoreUrl: 'https://alasmakalthkyh.com/',
    whatsappUrl: 'https://wa.me/966559393703?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B3%D9%85%D8%A7%D9%83%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14555.751875896012!2d47.2367959!3d24.208952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e255b5e4e137903%3A0xcaee5081e691a8ac!2z2LTYsdmD2Kkg2KfZhNin2LPZhdin2YMg2KfZhNiw2YPZitip!5e0!3m2!1sen!2ssa!4v1791756986523!5m2!1sen!2ssa',
    googleMapsDirectionUrl: 'https://maps.google.com/?q=Al-Kharj+Saudi+Arabia',
  },

  // Contact details easily editable
  contact: {
    phone: '+966 [PHONE]',
    phoneRaw: '+966000000000',
    email: 'social.alasmakalthkyh@gmail.com',
    addressAr: 'محافظة الخرج، منطقة الرياض، المملكة العربية السعودية',
    addressEn: 'Al-Kharj, Riyadh Province, Kingdom of Saudi Arabia',
    commercialRegistration: 'CR: [COMMERCIAL_REGISTRATION_NUMBER]',
  },
};
