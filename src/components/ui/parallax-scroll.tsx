import { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Image2 from "@/assets/photo-tsa-2.jpg"

interface Item {
  src: string;
  type: "video" | "image";
}

interface ParallaxScrollProps {
  items: Item[];
  className?: string;
}

export const ParallaxScroll = ({ items, className }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const third = Math.ceil(items.length / 3);
  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto no-scrollbar w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((item, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              onClick={() => handleClick(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                  height="400"
                  width="400"
                  autoPlay
                  loop
                  alt="video thumbnail"
                  
                />
              ) : (
                <Image
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl designbuttonkadibba"
                  height="400"
                  width="400"
                  alt="image thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              onClick={() => handleClick(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                  height="400"
                  width="400"
                  loop
                  autoPlay
                  alt="video thumbnail"
                />
              ) : (
                <Image
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl designbuttonkadibba"
                  height="400"
                  width="400"
                  alt="image thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              onClick={() => handleClick(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl"
                  height="400"
                  width="400"
                  autoPlay
                  loop
                  alt="video thumbnail"
                />
              ) : (
                <Image
                  src={item.src}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 shadow-2xl designbuttonkadibba"
                  height="400"
                  width="400"
                  alt="image thumbnail"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 flex items-center justify-center z-50"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              onClick={handleClose}
            >
              {selectedItem.type === "video" ? (
                <div className="max-w-[97%] mx-auto">
                  <video
                    src={selectedItem.src}
                    className="w-full rounded-lg"
                    controls
                    autoPlay
                    loop
                  />
                </div>
              ) : (
                <div className="max-w-[97%} mx-auto">
                <Image
                  src={selectedItem.src}
                  className="h-full w-full object-cover object-left-top rounded-lg designbuttonkadibba"
                  height="1080"
                  width="2180"
                  alt="image"
                />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

//WORKING ONE

// import { useRef, useState } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   AnimatePresence,
// } from "framer-motion";
// import Image from "next/image";
// import Image62 from "@/assets/pexels-luisdelrio-15286.jpg";

// export const ParallaxScroll = ({
//   videos,
//   className,
// }: {
//   videos: string[];
//   className?: string;
// }) => {
//   const gridRef = useRef<any>(null);
//   const { scrollYProgress } = useScroll({
//     container: gridRef,
//     offset: ["start start", "end start"],
//   });

//   const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   const handleClick = (video: string, ) => {
//     setSelectedVideo(video);
//   };

//   const handleClose = () => {
//     setSelectedVideo(null);
//   };

//   const third = Math.ceil(videos.length / 3);
//   const firstPart = videos.slice(0, third);
//   const secondPart = videos.slice(third, 2 * third);
//   const thirdPart = videos.slice(2 * third);

//   return (
//     <div
//       className={`h-[40rem] items-start overflow-y-auto no-scrollbar w-full ${className}`}
//       ref={gridRef}
//     >
//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
//         ref={gridRef}
//       >
//         <div className="grid gap-10">
//           {firstPart.map((el, idx) => (
//             <motion.div
//               style={{ y: translateFirst }}
//               key={"grid-1" + idx}
//               onClick={() => handleClick(el)}
//             >
//               <video
//                 src={el}
//                 className="h-80 w-full object-cover object-center rounded-lg !m-0 !p-0 shadow-2xl"
//                 autoPlay
//                 loop
//               />
//               <Image
//                 src={Image62}
//                 className="max-w-full max-h-full mt-16"
//                 alt="selected"
//               />
//             </motion.div>

//           ))}
//         </div>
//         <div className="grid gap-10">
//           {secondPart.map((el, idx) => (
//             <motion.div
//               style={{ y: translateSecond }}
//               key={"grid-2" + idx}
//               onClick={() => handleClick(el)}
//             >
//               <video
//                 src={el}
//                 className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0 shadow-2xl"
//                 autoPlay
//                 loop
//               />
//             </motion.div>
//           ))}
//         </div>
//         <div className="grid gap-10">
//           {thirdPart.map((el, idx) => (
//             <motion.div
//               style={{ y: translateThird }}
//               key={"grid-3" + idx}
//               onClick={() => handleClick(el)}
//             >
//               <video
//                 src={el}
//                 className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0 shadow-2xl"
//                 autoPlay
//                 loop
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 flex items-center justify-center z-50"
//             style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
//             onClick={handleClose}
//           >
//             <div className="max-w-[97%] mx-auto">
//               <video
//                 src={selectedVideo}
//                 className="w-full rounded-lg"
//                 controls
//                 autoPlay
//                 loop
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
