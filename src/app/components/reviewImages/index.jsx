import review from '@/app/asset/svg/reviewBanner.svg';
import Image from "next/image";

const CustomerReviewImage = ({ images }) => {
  return (
    <div className="flex items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-8 md:w-6 h-8 md:h-6 rounded-full border-2 border-white overflow-hidden shadow-md"
          style={{
            marginLeft: index === 0 ? 0 : '-10px',
            zIndex: images.length - index,
          }}
        >
          <Image
            src={image}
            alt='icon'
            className="w-full h-full object-cover"
            width={32}
            height={32}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomerReviewImage