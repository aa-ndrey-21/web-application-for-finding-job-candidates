const FilterParameter = ({ label, name, value, onChange, placeholder }) => {
  return (
    <>
      {label ?
        <label className='underline'>{label}</label>
      : ''}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full px-4 py-2 border-2 border-solid border-customColor focus:border-customColor focus:outline-none focus:ring-0 rounded"
      />
    </>
  );
};

export default FilterParameter;
