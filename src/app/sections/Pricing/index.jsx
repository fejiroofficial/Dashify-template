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
      className="container mx-auto relative flex flex-col justify-center items-center text-center px-6"
      id="pricing"
    >
      <p className="text-[32px] lg:text-[48px] font-medium">Clear pricing for 10x value</p>
      <p className="text-[20px] font-medium max-w-[325px] text-[#D4D4D4] pb-6">
        Flexible price plans to fit your demand and pocket size
      </p>
      <div className="absolute right-[-7rem] w-1/2 h-full bg-[#D4D4D4] opacity-10 -z-10 rounded-full overflow-hidden rotate-[60deg]"></div>
      <div className="flex flex-col lg:flex-row justify-between gap-16 py-8 px-6">
        {[
          { title: 'Executive Plan', amount: '$45', listItems: ['1 team', '1 template', '5 dashboards', 'Unlimited integrations'] },
          { title: 'Business Plan', amount: '$75', listItems: ['5 teams', '10 templates', '10 dashboards', 'Unlimited integrations'] },
          { title: 'Enterprise Plan', amount: '$150', listItems: ['Unlimited teams', 'Unlimited templates', 'Unlimited dashboards', 'Priority support'] },
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
