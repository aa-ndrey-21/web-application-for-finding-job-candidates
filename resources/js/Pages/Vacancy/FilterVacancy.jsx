import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import FilterParameter from '@/Components/FilterParameter';
import Selector from '@/Components/Selector';

const FilterVacancy = ( {categories} ) => {
    function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of queryParams.entries()) {
        params[key] = value;
    }
    return params;
    }

    const urlParams = getQueryParams();
    const { data, setData } = useForm({
        per_page: urlParams['per_page'] || '',
        category_id: urlParams['category_id'] || '',
        name: urlParams['name'] || '',
        experience: urlParams['experience'] || '',
        minSalary: urlParams['salary'] ? urlParams['salary'].split('-')[0] : '',
        maxSalary: urlParams['salary'] ? urlParams['salary'].split('-')[1] : '',
        city: urlParams['city'] || '',
        attend: urlParams['attend'] || '',
        employment: urlParams['employment'] || '',
        logo: urlParams['logo'] || '',
        demands: urlParams['demands'] || '',
    });
    
    const dataAttend = ['office', 'remote'];
    const [selectedAttend, setSelectedAttend] = useState(data.attend || '');
    const handleAttendChange = (e) => {
    setSelectedAttend(e.target.value);
    setData('attend', e.target.value, () => {
    });
    };
    const dataEmployment = ['partday', 'fullday'];
    const [selectedEmployment, setSelectedEmployment] = useState(data.employment || '');
    const handleEmploymentChange = (e) => {
    setSelectedEmployment(e.target.value);
    setData('employment', e.target.value, () => {
    });
    };
    const dataLogo = ['with', 'without'];
    const [selectedLogo, setSelectedLogo] = useState(data.logo || '');
    const handleLogoChange = (e) => {
        setSelectedLogo(e.target.value);
    setData('logo', e.target.value, () => {
    });
    };
    
    const handleFilterApply = () => {
    let urlWithParams = '/vacancy?';
    if (data.per_page && data.per_page !== "") {
        urlWithParams += `per_page=${data.per_page}&`;
    } 
    if (data.category_id && data.category_id !== "") {
        urlWithParams += `category_id=${data.category_id}&`;
    } 
    if (data.name && data.name !== "") {
        urlWithParams += `name=${data.name}&`;
    }  
    if (data.experience && data.experience !== "") {
        urlWithParams += `experience=${data.experience}&`;
    }
    if (data.minSalary && data.maxSalary) {
        urlWithParams += `salary=${data.minSalary}-${data.maxSalary}&`;
    } else if (data.minSalary) {
        urlWithParams += `salary=${data.minSalary}-&`;
    } else if (data.maxSalary) {
        urlWithParams += `salary=-${data.maxSalary}&`;
    }  
    if (data.city && data.city !== "") {
        urlWithParams += `city=${data.city}&`;
    }  
    if (data.attend && data.attend !== "") {
        urlWithParams += `attend=${data.attend}&`;
    }   
    if (data.employment && data.employment !== "") {
        urlWithParams += `employment=${data.employment}&`;
    }   
    if (data.logo && data.logo !== "") {
        urlWithParams += `logo=${data.logo}&`;
    }   
    if (data.demands && data.demands !== "") {
        urlWithParams += `demands=${data.demands}&`;
    }    
    router.visit(urlWithParams, {
        method: 'get',
        })
    };
    const handleFilterReset = () => {
        let urlWithoutParams = '/vacancy';
        router.visit(urlWithoutParams, {
            method: 'get',
        })
    };

    return (
        <>    
        <div className="h-min w-3/12 p-4 ml-2 mt-2 border-2 border-customColor rounded-md">
        <h2 className='font-bold text-lg text-center'>Filter</h2>
        <div>
            <label className='underline'>Category</label>
            <select
                className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:border-customColor focus:outline-none focus:ring-0"
                id="category_id"
                name="category_id"
                onChange={(e) => setData('category_id', e.target.value)}
                defaultValue={data.category_id || ''}
            >
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{ category.title }</option>
                ))}
            </select>
        </div>
        <div>
            <FilterParameter label='Company name' name='name' value={data.name} onChange={(e) => setData("name", e.target.value)} />
        </div>
        <div>
            <FilterParameter label='Years experience' name='experience' value={data.experience} onChange={(e) => setData("experience", e.target.value)} />
        </div>
        <div>
            <label className='underline'>Salary</label>
            <div className='flex gap-4'>
                <FilterParameter label='' placeholder={'...min'} name='minSalary' value={data.minSalary} onChange={(e) => setData("minSalary", e.target.value)} />
                <FilterParameter label='' placeholder={'...max'} name='maxSalary' value={data.maxSalary} onChange={(e) => setData("maxSalary", e.target.value)} />
            </div>
        </div> 
        <div>
            <FilterParameter label='City' name='city' value={data.city} onChange={(e) => setData("city", e.target.value)} />
        </div>
        <div>
            <Selector title='Attend' dataSelector={dataAttend} selected={selectedAttend} handleChange={handleAttendChange}/>
        </div>
        <div>
            <Selector title='Employment' dataSelector={dataEmployment} selected={selectedEmployment} handleChange={handleEmploymentChange}/>
        </div>
        <div>
            <Selector title='Logo' dataSelector={dataLogo} selected={selectedLogo} handleChange={handleLogoChange}/>
        </div>
        <div>
            <FilterParameter label='Keywords' name='demands' value={data.demands} onChange={(e) => setData("demands", e.target.value)} />
        </div>
        <div className="flex justify-between">
            <button 
                type='button' 
                className='mt-3 p-2 text-white bg-red-500 rounded-md hover:text-gray-300'
                onClick={handleFilterReset}>
                    Reset
            </button>
            <button 
                type='button' 
                className='mt-3 p-2 text-white bg-customColor rounded-md hover:text-gray-300'
                onClick={handleFilterApply}>
                    Apply
            </button>
        </div>
    </div>
    </>
    );
};

export default FilterVacancy;
