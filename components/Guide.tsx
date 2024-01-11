import React from "react";
import Image from "next/image";

const Guide = () => {
  return (
    <section className="flex-col flexCenter">
      <div className=" padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to easy path
          </h2>
          <p className="regular-16 text-grey-30 xl:max-w-[520px]">
            Only wit the hilink applicatoin you will no longer get lost and
            again, because we already support offline map when there is no
            internet connection in the field. Invite you friends, relative and
            firends, to have fun in the wilderness throught thevallery and reach
            the top of the mountain
          </p>
        </div>

        <div className="flexCenter mt-10 max-container relative w-full  ">
          <Image
            className="w-full object-cover object-center 2xl:rounded-5xl"
            src="/boat.png"
            alt="boat"
            width={1400}
            height={580}
          />
          <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="h-full w-auto"
            />
            <div className="flexBetween flex-col">
              <div className="flex w-full flex-col">
                <div className="flexBetween w-full">
                  <p className="regular-16 text-gray-20">Destination</p>
                  <p className="bold-16 text-green-50">48 min</p>
                </div>
                <p className="bold-20 mt-2">Aguas Calientes</p>
              </div>

              <div className="flex w-full flex-col">
                <p className="regular-16 text-gray-20">Start track</p>
                <h4></h4>
                <h4 className="bold-20 mt-2 whitespace-nowrap">
                  Wonrejo Pasuruan
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
