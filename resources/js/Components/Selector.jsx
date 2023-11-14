const Selector = ({ title, dataSelector, selected, handleChange }) => {
  return (
    <>
      <label className='underline'>{title}</label>
      <ul className="flex gap-2 mt-1 w-full">
        {dataSelector.map((item) => (
            <li key={item} className="w-full block" > 
            <label className="relative block">
              <input
                type="radio"
                value={item}
                name="gender"
                checked={selected === item}
                onChange={handleChange}
                className="absolute top-0 right-0 radio opacity-0"
              />
              <span className={`inline-block w-full text-center px-4 py-2 border-2 border-solid border-white rounded inline-block cursor-pointer transition duration-200 ease-in-out
                hover:border-2 hover:border-solid hover:border-customColor capitalize
                ${selected === item ? 'bg-customColor text-white' : ''}`}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Selector;
