import AwardCard from './AwardCard';

const ContentSection = ({ awards }) => {
  return (
    <section className="text-center py-20">
      <div className="flex justify-center space-x-6 flex-wrap">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            title={award.title}
            description={award.description}
            image={award.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
