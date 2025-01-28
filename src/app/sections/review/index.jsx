import React from "react";
import CustomerReviewImage from "@/app/components/reviewImages";
import CustomerReviewCard from "@/app/components/reviewCard";
import avater from "@/app/asset/svg/pm.svg";
import avater1 from "@/app/asset/svg/developer.svg";
import avater2 from "@/app/asset/svg/user.svg";
import avater3 from "@/app/asset/svg/user2.svg";
import avater4 from "@/app/asset/svg/user3.svg";

function CustomerReviews() {
  const customerReviews = [
    {
      name: "Mark Rodriguez",
      position: "Senior Product Manager at TechFlow",
      image: avater,
      stars: 4,
      feedback:
        "As a PM who can't code, I used to spend my Mondays copying data between spreadsheets. Now I just tell the AI what I want to track and it builds exactly that!",
    },
    {
      name: "Jane Smith",
      position: "Senior Product Manager at TechFlow",
      image: avater,
      stars: 5,
      feedback:
        "This platform has completely changed the way we track our key metrics. Super easy to use and very effective!",
    },
    {
      name: "Samuel Green",
      position: "Business Analyst",
      image: avater,
      stars: 4,
      feedback:
        "Tracking our progress used to be a hassle, but this tool has made it effortless and insightful.",
    },
    {
      name: "John Doe",
      position: "Marketing Manager",
      image: avater,
      stars: 4,
      feedback:
        "As a PM who can't code, I used to spend my Mondays copying data between spreadsheets. Now I just tell the AI what I want to track and it builds exactly that!",
    },
    {
      name: "Jane Smith",
      position: "Product Owner",
      image: avater,
      stars: 5,
      feedback:
        "This platform has completely changed the way we track our key metrics. Super easy to use and very effective!",
    },
    {
      name: "Samuel Green",
      position: "Business Analyst",
      image: avater,
      stars: 4,
      feedback:
        "Tracking our progress used to be a hassle, but this tool has made it effortless and insightful.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-6">
      <header className="text-center mb-8">
        <div className="flex flex-row justify-center items-center gap-4 px-6">
          <CustomerReviewImage
            images={[
           avater2,
           avater3,
           avater1,
           avater,
           avater1,
           
            ]}
          />

          <p>
            15K+ <span className="text-[#888888]">power users</span>
          </p>
        </div>
        <h1 className="text-white font-medium text-3xl md:text-[48px]">
          Hear from our customers
        </h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {customerReviews.map((review, index) => (
          <CustomerReviewCard key={index} review={review} />
        ))}
      </section>
    </div>
  );
}

export default CustomerReviews;