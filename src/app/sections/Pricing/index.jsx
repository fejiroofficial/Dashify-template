'use client';

import { useState } from 'react';
import PriceCard from '@/app/components/PriceCard';

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const handleGetStarted = () => {
    alert('Get Started Clicked!');
  };

  return (
    <section
      className="container mx-auto relative flex flex-col justify-center items-center text-center px-6 pt-16 mb-16"
      id="pricing"
    >
      <p className="text-[32px] lg:text-[48px] font-medium">Clear pricing for 10x value</p>
      <p className="text-[20px] font-medium max-w-[325px] text-[#D4D4D4] pb-6">
        Flexible price plans to fit your demand and pocket size
      </p>
      <div className="absolute right-10 w-[30%] h-1/4 rounded-full bg-[rgba(146,146,146,1)] blur-[460px] -z-10"></div>


      <div className="flex flex-col lg:flex-row justify-between gap-16 py-8 px-6">
        {[
          { title: 'Basic Plan', amount: '$45', listItems: ['1 team', '1 template', '5 dashboards', 'Unlimited integrations'] },
          { title: 'Business Plan', amount: '$45', listItems: ['5 teams', '10 templates', '10 dashboards', 'Unlimited integrations'] },
          { title: 'Enterprise Plan', amount: '$45', listItems: ['Unlimited teams', 'Unlimited templates', 'Unlimited dashboards', 'Priority support'] },
        ].map((plan, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleCardClick(plan.title)}
          >
            <PriceCard
              title={plan.title}
              amount={plan.amount}
              listItems={plan.listItems}
              buttonLabel="Get Started"
              onButtonClick={handleGetStarted}
              variant={selectedCard === plan.title ? 'white' : 'default'}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
