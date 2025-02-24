import React from 'react';
import Image from 'next/image';
import icon from '@/app/asset/svg/tick.svg';

const PriceCard = ({ title, amount, listItems, buttonLabel, onButtonClick, variant = 'default' }) => {
  const isWhiteVariant = variant === 'white';

  return (
    <div
      className={`flex flex-col justify-between rounded-[16px] p-6 h-[449px] lg:w-full xl:w-[363px] text-start border border-[rgba(255,255,255,0.44)] bg-[#000] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <div className={`${isWhiteVariant ? 'text-white' : 'text-gray-50'}`}>
        <h3 className="text font-semibold pb-3">{title}</h3>
        <h2 className="pb-6">
          {amount}
          <span className="text-p1 font-medium"> 00 /month</span>
        </h2>
      </div>

      <div className="w-full pb-6">
        {listItems.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <Image src={icon} alt="Tick icon" width={16} height={16} />
            <p className={`text ${isWhiteVariant ? 'text-white' : 'text-gray-50'}`}>{item}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onButtonClick}
        className={`w-full py-3 rounded-md transition duration-300 text-[18px] ${
          isWhiteVariant
            ? 'bg-white text-black-BASE hover:bg-[whitesmoke]'
            : 'bg-gray-50 text-white hover:bg-[grey]'
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PriceCard;
