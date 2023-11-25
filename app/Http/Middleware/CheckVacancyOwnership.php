<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Vacancy;

class CheckVacancyOwnership
{
    public function handle(Request $request, Closure $next)
    {
        $vacancy = $request->route('vacancy');
        
        if (auth()->user()->vacancy_id !== $vacancy->id) {
            abort(403, 'Forbidden');
        }

        return $next($request);
    }
}
