

import bannerMain from './assets/banner-main.png'

const Banner = ({ addCoins }) => {
    return (
      <div className="bg-black p-6 text-center">

<div className="flex items-center justify-center  ">
<img src={bannerMain} alt="" className="w-[100px] h-[100px]" />
</div>
        <h2 className="text-3xl font-bold mb-4 font-mono text-white mt-8">Assemble Your Ultimate Bpl Cricket Team </h2>
        <p className="text-lg mb-4 text-white">
          Beyond Boundries Beybond limits
        </p>
        <button
          onClick={addCoins}
          className="bg-green-700 hover:bg-yellow-700 text-white px-6 py-2 rounded-full mt-8"
        >
         claim free credits
        </button>
      </div>
    );
  };
  
  export default Banner;
  