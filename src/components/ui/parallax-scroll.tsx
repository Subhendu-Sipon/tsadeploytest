import { useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

export const ParallaxScroll = ({
    videos,
    className,
}: {
    videos: string[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const handleClick = (video: string) => {
        setSelectedVideo(video);
    };

    const handleClose = () => {
        setSelectedVideo(null);
    };

    const third = Math.ceil(videos.length / 3);
    const firstPart = videos.slice(0, third);
    const secondPart = videos.slice(third, 2 * third);
    const thirdPart = videos.slice(2 * third);

    return (
        <div
            className={`h-[40rem] items-start overflow-y-auto no-scrollbar w-full ${className}`}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <video
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0 shadow-2xl"
                                autoPlay
                                loop
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <video
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0 shadow-2xl"
                                autoPlay
                                loop
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                            onClick={() => handleClick(el)}
                        >
                            <video
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg !m-0 !p-0 shadow-2xl"
                                autoPlay
                                loop
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={handleClose}
                >
                    <div className="max-w-full max-h-full">
                        <video
                            src={selectedVideo}
                            className="w-full h-screen"
                            controls
                            autoPlay
                            loop
                        />
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
