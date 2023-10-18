<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Vacancy;
use App\Models\Category;

class VacancyController extends Controller
{
    public function index()
    {
        $vacancies = Vacancy::all();
        return Inertia::render('Vacancy/Vacancies', [
            'vacancies' => $vacancies,
        ]);
    }

    public function show(Vacancy $vacancy)
    {
        $category = $vacancy->category;
        return Inertia::render('Vacancy/VacancyShow', [
            'vacancy' => $vacancy,
            'category' => $category,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Vacancy/VacancyCreate', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'experience' => 'required|integer|min:0',
            'salary' => 'required|numeric|min:0',
            'city' => 'required|string|max:255',
            'attend' => 'required|string|max:255',
            'employment' => 'required|string|max:255',
            'number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,gif|max:2048',
            'description' => 'required|string',
            'demands' => 'required|string',
            'details' => 'nullable|string',
        ]);

        $vacancy = Vacancy::create([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'experience' => $request->experience,
            'salary' => $request->salary,
            'city' => $request->city,
            'attend' => $request->attend,
            'employment' => $request->employment,
            'number' => $request->number, 
            'email' => $request->email, 
            'logo' => $request->logo, 
            'description' => $request->description,
            'demands' => $request->demands,
            'details' => $request->details,
        ]);

        $user = auth()->user();
        $user->vacancy_id = $vacancy->id;
        $user->save();
        
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    public function edit(){
        $categories = Category::all();
        return Inertia::render('Vacancy/VacancyEdit', [
            'categories' => $categories,
        ]);
    }

    public function destroy(Vacancy $vacancy): RedirectResponse
    {
        $vacancy->delete();
        $user = auth()->user();
        $user->vacancy_id = null;
        $user->save();
        return Redirect::to('/');
    }
}
