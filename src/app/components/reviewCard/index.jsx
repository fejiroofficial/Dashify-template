

import Image from "next/image";

const CustomerReviewCard = ({ review }) => {
  return (
    <div className="w-full md:max-w-sm bg-[#EFEFEF] border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-orange-50 text-lg ${
                index < review.stars ? "text-orange-50" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-p4 font-normal text-black-100 mb-8">
          {review.feedback}
        </p>
      </div>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={review.image}
            alt={review.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="ml-2">
          <h3 className="text-p2 font-medium text-black-100">{review.name}</h3>
          <p className="text-p4 text-gray-100">{review.position}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;