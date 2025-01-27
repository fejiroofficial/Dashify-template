// import Image from "next/image";
import review from '@/app/asset/svg/reviewBanner.svg';
// const CustomerReviewImage = ({ images }) => {
//   return (
//     <div className="flex items-center">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="w-12 h-12 rounded-full border-2 border-white overflow-hidden -ml-4 first:ml-0 shadow-md"
//           style={{ zIndex: images.length - index }}
//         >
//           <Image
//             src={review}
//             alt='click-me'
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomerReviewImage;


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
            src={review}
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