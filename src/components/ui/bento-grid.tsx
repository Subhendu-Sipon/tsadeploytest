import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-6 gap-3 max-w-full  bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  videoSrc,
  
}: {
  className?: string;
  videoSrc?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200  dark:shadow-none p-1 dark:bg-transparent dark:border-white bg-transparent border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex-1 flex items-center justify-center ">
        
        {videoSrc ? (
          <video className="w-full h-[345px] object-cover object-left-bottom rounded-xl" loop controls muted autoPlay>
            <source src={videoSrc} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    Loading...
  </div>
);