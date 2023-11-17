import React from 'react';

export default function VacancyCard({ vacancy, categories }) {
  const foundCategory = categories.find(cat => cat.id === vacancy.category_id);
  const category = foundCategory.title;

  return (
    <>
      <a href={route('vacancy.show', { vacancy: vacancy.id })}>
        <div className='p-4 mt-2 h-44 flex border-2 border-customColor rounded-md transition duration-300 ease-in-out hover:bg-gray-200'>
          {vacancy.logo ?
            <div className="inline-block h-28 w-28 shrink-0 bg-slate-200 rounded-full overflow-hidden">
              <img 
                src={vacancy.logo.startsWith('vacancy/') ? `/storage/${vacancy.logo}` : vacancy.logo}  
                alt={vacancy.name} 
                className="w-full h-full object-cover" />
            </div>
          : null}
          <div className='ml-2'>
            <div className="font-bold text-lg">
              {category}  -  {vacancy.salary}$ 
            </div>
            <div className="font-medium text-lg">
              {vacancy.name}
            </div>
            <div>
              {vacancy.keywords} 
            </div>
          </div>
        </div>
      </a>
    </>
  );
}