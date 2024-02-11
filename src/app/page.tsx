export default function Home() {
  return (
    <>
      <div>
        <img className="absolute w-full h-[716px]" src="/hero.png" alt="hero" />
      </div>
      <div className="relative h-[443px] w-[643px] bg-[#FFF3E3] px-[49px] pt-[62px] pb-[67px] ml-[50%] mt-[153px] ">
        <p className="font-bold">New Arrrival</p>
        <h1 className="text-[#B88E2F] font-bold text-[52px] text-balance">
          Discover Our New Collection
        </h1>
        <p className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-[46px] bg-[#B88E2F] py-6 px-[72px] text-white">
          BUY NOW
        </button>
      </div>
    </>
  );
}
