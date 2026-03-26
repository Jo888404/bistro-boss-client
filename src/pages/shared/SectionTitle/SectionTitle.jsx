const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center lg:w-3/12 md:w-3/12 w-8/12  lg:my-8 lg:mt-20 mt-12">
      <p className="text-yellow-600 italic mb-2">---{subHeading}---</p>
      <h3 className="lg:text-3xl text-2xl border-y-2 border-gray-500 py-4 text-black">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
