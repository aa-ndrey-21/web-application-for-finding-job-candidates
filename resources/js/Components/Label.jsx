
export default function Label({ className = '', title }) {

  return (
    <>
      <label
        className={`underline block text-gray-700 font-bold ${className}`}
      >
        {title}
      </label>
  </>
  );
}