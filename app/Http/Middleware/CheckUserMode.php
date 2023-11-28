<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUserMode
{
    public function handle(Request $request, Closure $next, $allowedMode)
    {
        $user = auth()->user();

        if ($user->mode !== $allowedMode) {
            return redirect()->route('welcome.index');
        }

        return $next($request);
    }
}
