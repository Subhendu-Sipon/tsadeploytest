import {ParallaxScroll} from '../ui/parallax-scroll';
import Image1 from "@/assets/photo-tsa-1.jpg"
import Image2 from "@/assets/photo-tsa-2.jpg"
import Image3 from "@/assets/photo-tsa-3.jpg"

const items = [
  { src: 'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719933904&Signature=fmWK42dc6aLdYYhieaSGoUGm72TPrW1uRdN6ikj6Gx5ssRFwsi2Q6MeNKpCm8WRSux-GMtlsUvOpS8w5Hu4wAhGCDPyPr2oGkKfM29OMkDi7o-pzmV8-mTLg5Ft7PkY92OHk8RgNBpGwwbsZrROtbWzTHAsTMmLOMezbGDg6l-87GQFXh2Ct-fdRzkPheVqyyfXhyTz5tPAorNxfQOOH71xOccVJZB0PWQAp6JMR0PZGfDtTP6pxC7pawTks-ExEX5FfTqYmE9CGH4hoWtO6mHeZl5sl4agvnDZjdSiidxCqJE9KDQ5RWCYmpPFiKvoSHufjUqZe-4tkLAYJuwkkuA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ', type: 'video' },
  { src: Image2, type: 'image' },
  { src: 'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719933904&Signature=fmWK42dc6aLdYYhieaSGoUGm72TPrW1uRdN6ikj6Gx5ssRFwsi2Q6MeNKpCm8WRSux-GMtlsUvOpS8w5Hu4wAhGCDPyPr2oGkKfM29OMkDi7o-pzmV8-mTLg5Ft7PkY92OHk8RgNBpGwwbsZrROtbWzTHAsTMmLOMezbGDg6l-87GQFXh2Ct-fdRzkPheVqyyfXhyTz5tPAorNxfQOOH71xOccVJZB0PWQAp6JMR0PZGfDtTP6pxC7pawTks-ExEX5FfTqYmE9CGH4hoWtO6mHeZl5sl4agvnDZjdSiidxCqJE9KDQ5RWCYmpPFiKvoSHufjUqZe-4tkLAYJuwkkuA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ', type: 'video' },
  { src: Image2, type: 'image' },
  { src: 'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719933904&Signature=fmWK42dc6aLdYYhieaSGoUGm72TPrW1uRdN6ikj6Gx5ssRFwsi2Q6MeNKpCm8WRSux-GMtlsUvOpS8w5Hu4wAhGCDPyPr2oGkKfM29OMkDi7o-pzmV8-mTLg5Ft7PkY92OHk8RgNBpGwwbsZrROtbWzTHAsTMmLOMezbGDg6l-87GQFXh2Ct-fdRzkPheVqyyfXhyTz5tPAorNxfQOOH71xOccVJZB0PWQAp6JMR0PZGfDtTP6pxC7pawTks-ExEX5FfTqYmE9CGH4hoWtO6mHeZl5sl4agvnDZjdSiidxCqJE9KDQ5RWCYmpPFiKvoSHufjUqZe-4tkLAYJuwkkuA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ', type: 'video' },
  { src: Image3, type: 'image' },
  { src: Image3, type: 'image' },
  { src: Image1, type: 'image' },
  { src: 'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719933904&Signature=fmWK42dc6aLdYYhieaSGoUGm72TPrW1uRdN6ikj6Gx5ssRFwsi2Q6MeNKpCm8WRSux-GMtlsUvOpS8w5Hu4wAhGCDPyPr2oGkKfM29OMkDi7o-pzmV8-mTLg5Ft7PkY92OHk8RgNBpGwwbsZrROtbWzTHAsTMmLOMezbGDg6l-87GQFXh2Ct-fdRzkPheVqyyfXhyTz5tPAorNxfQOOH71xOccVJZB0PWQAp6JMR0PZGfDtTP6pxC7pawTks-ExEX5FfTqYmE9CGH4hoWtO6mHeZl5sl4agvnDZjdSiidxCqJE9KDQ5RWCYmpPFiKvoSHufjUqZe-4tkLAYJuwkkuA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ', type: 'video' },
  // Add more items to the array...
];

export function ParallaxScrollDemo() {
  return (
    <div className="container mx-auto p-4">
      <ParallaxScroll items={items} />
    </div>
  );
};


// const mediaData = [
//     { type: "image", url: Image1 },
//     Image2,
//     { type: "video", url: "https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719572652&Signature=Vv3G56EU~ZSCJUDjhQu-jL3TozijAEV-fY3uDNC0Jrjn6p43LBjSXK8eFFGEtMn6jKr1E7QMH7sz1NMaVy3OHTPpAOV8xwpI9DrJTQhnAJ-b8Q3-u0bSWTofnEP4Ik-FStKMG6~LnVWkfI8pq5~8HOR3Cgt1vSkb20EJQdai-7l3OS3oKLQZVEBZUiVAsWUnjeAHwyWqxoLLqZgykAyHPTdMQLpPP300wOZ8jz~Cn63sA6KLK6TXAzceeM0VLZutWc-KXTM6FirtXpN9mK8jF96zbhxat2BHaXY3ivDEKA~BDN~byMCZ0-ggjM-AqJdnNewevq5q-6cakV8-7OyaBA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" },
//     { type: "video", url: "https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719572652&Signature=Vv3G56EU~ZSCJUDjhQu-jL3TozijAEV-fY3uDNC0Jrjn6p43LBjSXK8eFFGEtMn6jKr1E7QMH7sz1NMaVy3OHTPpAOV8xwpI9DrJTQhnAJ-b8Q3-u0bSWTofnEP4Ik-FStKMG6~LnVWkfI8pq5~8HOR3Cgt1vSkb20EJQdai-7l3OS3oKLQZVEBZUiVAsWUnjeAHwyWqxoLLqZgykAyHPTdMQLpPP300wOZ8jz~Cn63sA6KLK6TXAzceeM0VLZutWc-KXTM6FirtXpN9mK8jF96zbhxat2BHaXY3ivDEKA~BDN~byMCZ0-ggjM-AqJdnNewevq5q-6cakV8-7OyaBA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" },
//     // Add more images and videos as needed
// ];





//WORKING ONE


// "use client";
// import { ParallaxScroll } from "../ui/parallax-scroll";

// export function ParallaxScrollDemo() {
//   return <ParallaxScroll videos={videourl} />;
// }
// const videourl = [
//   'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719572652&Signature=Vv3G56EU~ZSCJUDjhQu-jL3TozijAEV-fY3uDNC0Jrjn6p43LBjSXK8eFFGEtMn6jKr1E7QMH7sz1NMaVy3OHTPpAOV8xwpI9DrJTQhnAJ-b8Q3-u0bSWTofnEP4Ik-FStKMG6~LnVWkfI8pq5~8HOR3Cgt1vSkb20EJQdai-7l3OS3oKLQZVEBZUiVAsWUnjeAHwyWqxoLLqZgykAyHPTdMQLpPP300wOZ8jz~Cn63sA6KLK6TXAzceeM0VLZutWc-KXTM6FirtXpN9mK8jF96zbhxat2BHaXY3ivDEKA~BDN~byMCZ0-ggjM-AqJdnNewevq5q-6cakV8-7OyaBA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ',
//   'https://mohanpranit.netlify.app/static/media/Video1.1299c79f322dc4b88487.mp4',
//   'https://mohanpranit.netlify.app/static/media/Video2.9375b53a964615e04b0f.mp4',
//   'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719572652&Signature=Vv3G56EU~ZSCJUDjhQu-jL3TozijAEV-fY3uDNC0Jrjn6p43LBjSXK8eFFGEtMn6jKr1E7QMH7sz1NMaVy3OHTPpAOV8xwpI9DrJTQhnAJ-b8Q3-u0bSWTofnEP4Ik-FStKMG6~LnVWkfI8pq5~8HOR3Cgt1vSkb20EJQdai-7l3OS3oKLQZVEBZUiVAsWUnjeAHwyWqxoLLqZgykAyHPTdMQLpPP300wOZ8jz~Cn63sA6KLK6TXAzceeM0VLZutWc-KXTM6FirtXpN9mK8jF96zbhxat2BHaXY3ivDEKA~BDN~byMCZ0-ggjM-AqJdnNewevq5q-6cakV8-7OyaBA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ',
//   'https://mohanpranit.netlify.app/static/media/Video2.9375b53a964615e04b0f.mp4',
//   'https://cs56.clideo.com/p/ufTRD-oXV9ut-fHD1-TI6w/8890e0a993227d4ab8297fc46038f33f/unveiling-rise-of-odisha-building-tomorrow-with-duramix-ready-mix-concrete-ne_EySKqGEd.mp4 ',
//   'https://mohanpranit.netlify.app/static/media/Video3.3860567b58d6304ba456.mp4',
//   'https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719572652&Signature=Vv3G56EU~ZSCJUDjhQu-jL3TozijAEV-fY3uDNC0Jrjn6p43LBjSXK8eFFGEtMn6jKr1E7QMH7sz1NMaVy3OHTPpAOV8xwpI9DrJTQhnAJ-b8Q3-u0bSWTofnEP4Ik-FStKMG6~LnVWkfI8pq5~8HOR3Cgt1vSkb20EJQdai-7l3OS3oKLQZVEBZUiVAsWUnjeAHwyWqxoLLqZgykAyHPTdMQLpPP300wOZ8jz~Cn63sA6KLK6TXAzceeM0VLZutWc-KXTM6FirtXpN9mK8jF96zbhxat2BHaXY3ivDEKA~BDN~byMCZ0-ggjM-AqJdnNewevq5q-6cakV8-7OyaBA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ',
// ];
