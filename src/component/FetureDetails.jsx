import { useParams } from "react-router-dom";
import { categories, featureProducts } from "./demoData";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const FetureDetails = () => {
  const { categoryId } = useParams();

  // Convert categoryId to a number for comparison
  const category = featureProducts.find(
    (cat) => cat.id === parseInt(categoryId, 10)
  );

  if (!category) {
    return <p>Category not found!</p>;
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <img
        src={category.img}
        alt={category.name}
        className="w-40 h-40 object-cover my-4"
      />
      <p className="text-gray-600">name: {category.name}</p>
    </div>
  );
};

export default FetureDetails;
