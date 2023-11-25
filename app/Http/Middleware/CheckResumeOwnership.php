<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Resume;

class CheckResumeOwnership
{
    public function handle(Request $request, Closure $next)
    {
        $resume = $request->route('resume');
        
        if (auth()->user()->resume_id !== $resume->id) {
            abort(403, 'Forbidden');
        }

        return $next($request);
    }
}
