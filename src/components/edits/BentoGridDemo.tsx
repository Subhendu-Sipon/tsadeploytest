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

import ReelVideo1 from "@/assets/ReelVideo/ReelVideo1.mp4"
import ReelVideo2 from "@/assets/ReelVideo/ReelVideo2.mp4"
import ReelVideo3 from "@/assets/ReelVideo/ReelVideo3.mp4"
import ReelVideo4 from "@/assets/ReelVideo/ReelVideo4.mp4"
import ReelVideo5 from "@/assets/ReelVideo/ReelVideo5.mp4"
import ReelVideo6 from "@/assets/ReelVideo/ReelVideo6.mp4"
import ReelVideo7 from "@/assets/ReelVideo/ReelVideo7.mp4"

import HorizontalVideo1 from "./../../../../assets/Videos/VideoTrial1.mp4"
import HorizontalVideo2 from "./../../../../assets/Videos/VideoTrial2.webm"
import HorizontalVideo3 from "./../../../../assets/Videos/VideoTrial3.mp4"

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
   
    videoSrc: ReelVideo3
  },
  {
   
    videoSrc: ReelVideo1
  },
  {
   
    videoSrc: HorizontalVideo1
  },
  {
    
    videoSrc: ReelVideo7
  },
  {
   
    videoSrc: ReelVideo4
  },
  {
    
    videoSrc: HorizontalVideo2
  },
  {
   
    videoSrc: ReelVideo5
  },
  {
   
    videoSrc: ReelVideo6
  },
  {
   
    videoSrc: HorizontalVideo3
  },

];

export default BentoGridDemo;