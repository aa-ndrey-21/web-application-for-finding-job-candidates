
export default function EditInput({ className = '', name, value, onChange, placeholder, error }) {

  return (
    <>
      <input name={name} type="text" 
        className={
          `inline-block shadow appearance-none rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          ${error ? 'border-2 border-red-500' : ''} ${className}`}                                   
        value={value}  
        placeholder={placeholder} 
        onChange={onChange} 
      />
    </>
  );
}