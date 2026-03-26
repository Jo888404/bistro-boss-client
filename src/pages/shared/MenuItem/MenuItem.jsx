const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div>
      <div className="flex gap-4  items-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-md rounded-tr-4xl rounded-br-4xl rounded-bl-4xl"
        />

        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {name}----------------------
            </h3>
            <p className="text-yellow-500 text-sm">${price}</p>
          </div>
          <p className="text-gray-500 text-sm">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
