'use client';

import PriceCard from '@/app/components/PriceCard';

const Pricing = () => {
  const handleGetStarted = () => {
    alert('Get Started Clicked!');
  };

  return (
    <section className="container mx-auto relative flex flex-col justify-center items-center text-center px-6" id='pricing'>
      <p className="text-[32px] lg:text-[48px] font-medium">Clear pricing for 10x value</p>
      <p className="text-[20px] font-medium max-w-[325px] text-[#D4D4D4] pb-6">
        Flexible price plans to fit your demand and pocket size
      </p>
      <div className="absolute lg:top-[0rem] right-[-4rem] w-[46%] h-1/4 bg-white opacity-10 -z-10 rounded-full overflow-hidden"></div>
      <div className="flex flex-col lg:flex-row justify-between gap-16 py-8 px-6">
        <PriceCard
          title="Executive Plan"
          amount="$45"
          listItems={[
            '1 team',
            '1 template',
            '5 dashboards',
            'Unlimited integrations',
          ]}
          buttonLabel="Get Started"
          onButtonClick={handleGetStarted}
        />
        <PriceCard
          title="Business Plan"
          amount="$45"
          listItems={[
            '5 teams',
            '10 templates',
            '10 dashboards',
            'Unlimited integrations',
          ]}
          buttonLabel="Get Started"
          onButtonClick={handleGetStarted}
          variant="white"
        />
        <PriceCard
          title="Enterprise Plan"
          amount="$45"
          listItems={[
            'Unlimited teams',
            'Unlimited templates',
            'Unlimited dashboards',
            'Priority support',
          ]}
          buttonLabel="Get Started"
          onButtonClick={handleGetStarted}
        />
      </div>
    </section>
  );
};

export default Pricing;
