"use client";

import Image from "next/image";
import { Tabs } from "../../ui/tabs";
import Image1 from "@/assets/projectimg/projectimg7.jpg";

export default function ServiceSectionTest() {
  const tabs = [
    {
      title: "Marketing",
      value: "marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Marketing Solutions</p>
          <MarketingContent />
        </div>
      ),
    },
    {
      title: "Brand",
      value: "brand",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Brand Solutions</p>
          <BrandContent />
        </div>
      ),
    },
    {
      title: "Media",
      value: "media",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <MediaContent />
        </div>
      ),
    },
    {
      title: "Tech",
      value: "tech",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tech solutions</p>
          <TechContent />
        </div>
      ),
    },
    {
      title: "Resources",
      value: "resources",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Resources</p>
          <ResourcesContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[35rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-[180rem]  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const MarketingContent = () => {
  return (
    <div className=" mt-5 grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <h1 className="underline">Performance Marketing</h1>
          <p className="font-oswald font-thin">Performance marketing is a results-driven strategy where you  only pay for actions, like clicks or sales. This data-focused approach lets you target specific audiences and maximize your return on investment.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Search Engine Optimization</h1>
          <p className="font-oswald font-thin">To establish you as a leader in the field, we create focused campaigns with SEO-optimized content and effective outreach (influencers, social media). Draw attention and increase natural traffic. </p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Social Media Management</h1>
          <p className="font-oswald font-thin">Our social media management service is your secret weapon for building brand awareness, driving engagement, and achieving real results.</p>
        </div>
        
      </div>
      <div className="relative h-full">
        <Image
          src={Image1}
          alt="dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

const BrandContent = () => {
  return (
    <div className=" mt-5 grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <h1 className="underline">Content and Copywriting</h1>
          <p className="font-oswald font-thin">Our skilled writing team produces engaging material that engages, informs, and teaches your audience. We write content for websites, blogs, articles, and social media captions that appeal to the people in your target market.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Graphic Design, Iconography and Illustrations</h1>
          <p className="font-oswald font-thin">Our graphic designers produce captivating images, icons, and illustrations that improve the visual appeal and usability of your website or page.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Video Editing and Animation</h1>
          <p className="font-oswald font-thin">We can help you generate compelling social media content, product presentations, and explainer films with our expert video editing and animation services.</p>
        </div>
        
      </div>
      <div className="relative h-full">
        <Image
          src={Image1}
          alt="dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

const MediaContent = () => {
  return (
    <div className=" mt-5 grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <h1 className="underline">Media Buying </h1>
          <p className="font-oswald font-thin">Our media buyers use their connections in the industry and experience in the field to bargain for the best prices and placements for their ads across a range of platforms, including social media, display, video, and podcast sponsorships.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Media Planning</h1>
          <p className="font-oswald font-thin">Our media planning experts will conduct in-depth research to understand your target audience and develop a data-driven media plan. This plan identifies the most impactful channels to reach your audience and outlines a strategic allocation of your advertising budget.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Performance Marketing</h1>
          <p className="font-oswald font-thin">Our performance marketing experts create focused programs using a variety of media and monitor important data to make sure your advertising spend is contributing to your company objectives.
          </p>
        </div>
        
      </div>
      <div className="relative h-full">
        <Image
          src={Image1}
          alt="dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

const TechContent = () => {
  return (
    <div className=" mt-5 grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <h1 className="underline">Custom Web Development</h1>
          <p className="font-oswald font-thin">Building websites with features and functionality that are particular to your needs is our area of expertise in customized web development. Regardless of the complexity of the e-commerce platform or the basic brochure website you require, our skilled development team will create a website that flawlessly represents your business and offers an outstanding user experience.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">UI/UX</h1>
          <p className="font-oswald font-thin">A successful website is built on the foundations of user interface (UI) and user experience (UX) design. Our team of UI/UX specialists is dedicated to developing visually stunning, intuitive, and user-friendly websites. We guarantee that your website is simple to use and aids users in quickly achieving their objectives.
          </p>
        </div>
        <div className="mb-4">
          <h1 className="underline">E-Commerce</h1>
          <p className="font-oswald font-thin">Our all-inclusive e-commerce solutions turn your website into an online store with complete functionality. We will provide you with everything you need to start selling online and increase your income, from secure payment processing and fulfillment choices to product listings and shopping carts.
          </p>
        </div>
        
      </div>
      <div className="relative h-full">
        <Image
          src={Image1}
          alt="dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

const ResourcesContent = () => {
  return (
    <div className=" mt-5 grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <h1 className="underline">Performance Marketing</h1>
          <p className="font-oswald font-thin">Performance marketing is a results-driven strategy where you  only pay for actions, like clicks or sales. This data-focused approach lets you target specific audiences and maximize your return on investment.</p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Search Engine Optimization</h1>
          <p className="font-oswald font-thin">To establish you as a leader in the field, we create focused campaigns with SEO-optimized content and effective outreach (influencers, social media). Draw attention and increase natural traffic. </p>
        </div>
        <div className="mb-4">
          <h1 className="underline">Social Media Management</h1>
          <p className="font-oswald font-thin">Our social media management service is your secret weapon for building brand awareness, driving engagement, and achieving real results.</p>
        </div>
        
      </div>
      <div className="relative h-full">
        <Image
          src={Image1}
          alt="dummy image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
