// eslint-disable-next-line react/prop-types
const Card = ({ title, description, imageSrc}) => {
  return (
    <div className="relative flex flex-col text-white bg-gray-700 shadow-md bg-clip-border rounded-xl w-96" style={{ background: '#181B20'}}>
      <div className="relative h-52 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={imageSrc}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-8 pt-6 pb-6">
        <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">{title}</h5>
        <p className="block font-sans text-lg antialiased font-light leading-relaxed " style={{ color: '#94a2b8' }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

  