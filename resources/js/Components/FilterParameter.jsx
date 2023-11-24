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
        className="mt-1 block w-full px-4 py-2 rounded"
      />
    </>
  );
};

export default FilterParameter;
