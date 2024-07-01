import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="p-4 mx-9">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
         
          videoSrc={item.videoSrc}
          className={i === 2 || i === 5  || i === 8 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
   
    videoSrc: "https://d243wifbt6aeh5.cloudfront.net/l8xrm2%2Fpreview%2F58909389%2Fmain_x360.mp4?response-content-disposition=inline%3Bfilename%3D%22main_x360.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719662700&Signature=FGLV61uUcntNunS2nA0K7~7Hu1M1zRoQO8-86h5sXtTlRwEmuELjxjexJr0QSZbOK5cQfiUMZClGEIzgCbJS1~d7j1rYB5HBIDMsYw8Ns1f2kc~73EYwVqkqdffUhco2awNmT-Kar~Xp1Vawc2-6s0Qk~BUy1xH7RYImz7DbxgXQH3z8jbTqUGrUb~AlSXggxIWqds6sytPwSvmi7J0dtoxbxiy9CBUEeKZhmWvz4HupeQ5Km2Kf7DTk9hTQ9rOQn7CUQfuzZ5v79CberTanZzqg8mArgD1m0087q0Kt7EiaCoU1aoqnzHWvS8A1LkfZP7SqvU4kATnhYqi9f8YvZw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
  },
  {
   
    videoSrc: "https://d3q44e7ubi1hi2.cloudfront.net/a84xds%2Ffile%2Ffbcd1b65e8274b3305997eb5b145e5fd_f5032d9f8f3b254a8a9acb2fb202441e.mp4?response-content-disposition=inline%3Bfilename%3D%22fbcd1b65e8274b3305997eb5b145e5fd_f5032d9f8f3b254a8a9acb2fb202441e.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719685710&Signature=MRgrcPPBlTQhsM1D4-B-27UzKki6aZrWoFGNvo6LB4dm9xgHLHPvJWq~qEVfkAz2aqz8NvU8a21D10P4ezheCbDJw7N2vyG5rT2ErZEOiRYaoDI1xrTte00kN9s9oSmjvRr80LMcMlDKEvavdAirLFtg3-PKpO1dAlNNsBTz2KYh0p-hUFGDEoBNxYwFJcMlMG-pN6AmuDv3XPh6hDcFhgIB4uOo1WmK0bANqj3IN9fxrLTdt0OZ723j996F5-kXpdHa~u0vL1KlRAw3aUh6lhY7Lc~62KvnBrKxkZ05WGHtVn0ZmvCmZG5XCYV1oveYobdMHztuf2Xi5iRFKFLl-w__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
  },
  {
   
    videoSrc: "https://path-to-your-third-video/video3.mp4"
  },
  {
    
    videoSrc: "https://path-to-your-fourth-video/video4.mp4"
  },
  {
   
    videoSrc: "https://path-to-your-fifth-video/video5.mp4"
  },
  {
    
    videoSrc: "https://path-to-your-sixth-video/video6.mp4"
  },
  {
   
    videoSrc: "https://path-to-your-seventh-video/video7.mp4"
  },
  {
   
    videoSrc: "https://path-to-your-seventh-video/video7.mp4"
  },
  {
   
    videoSrc: "https://path-to-your-seventh-video/video7.mp4"
  },

];

export default BentoGridDemo;