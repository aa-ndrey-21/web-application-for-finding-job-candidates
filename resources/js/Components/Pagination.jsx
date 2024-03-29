import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

    if (links.length > 0) {
        links[0].label = "Previous"; 
        links[links.length - 1].label = "Next";
    }

    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-customColor hover:text-white focus:border-customColor bg-customColor text-white";
        } else{
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-customColor hover:text-white focus:border-customColor";
        }
    }

    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => (
                            link.url === null ?
                                    (<div  
                                            key={key}
                                            className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
                                        >{link.label}</div>) :

                                    (<Link
                                                key={key}
                                                className={getClassName(link.active)}
                                                href={ link.url }
                                            >{link.label}</Link>)
                                    ))}
                </div>
            </div>
        )
    );
}