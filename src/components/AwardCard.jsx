const AwardCard = ({ title, description, image }) => {
    return (
      <div className="p-4 bg-gray-800 rounded-lg max-w-xs">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
        {image && <img src={image} alt={title} className="mx-auto mt-4 w-16 h-16"/>}
      </div>
    );
  };
  
  export default AwardCard;
  