import React from 'react';

export default function ResumeCard({ resume, categories }) {
  const foundCategory = categories.find(cat => cat.id === resume.category_id);
  const category = foundCategory.title;

  return (
    <>
      <a href={route('resume.show', { resume: resume.id })}>
        <div className='p-4 mt-2 h-44 flex border-2 border-customColor rounded-md transition duration-300 ease-in-out hover:bg-gray-200'>
          {resume.image ?
            <div className="inline-block h-28 w-28 shrink-0 bg-slate-200 rounded-full overflow-hidden">
              <img 
                src={resume.image.startsWith('resume/') ? `/storage/${resume.image}` : resume.image} 
                alt={resume.name} 
                className="w-full h-full object-cover" />
            </div>
          : null}
          <div className='ml-2'>
            <div className="font-bold text-lg">
              {category}  -  {resume.salary}$ 
            </div>
            <div className="font-medium text-lg">
              {resume.name} {resume.surname} 
            </div>
            <div>
              {resume.bio} 
            </div>
          </div>
        </div>
      </a>
    </>
  );
}