export default function ProgressBar({ className = '' }) {
  return (
      <>
        <div className="w-full bg-white-700 border border-customColor rounded-full h-2.5 dark:bg-white-700">
            <div className={`${className} bg-customColor h-full rounded-full`}></div>
        </div>
      </>
  );
}
