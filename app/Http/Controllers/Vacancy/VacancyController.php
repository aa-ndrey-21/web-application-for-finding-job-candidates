<?php

namespace App\Http\Controllers\Vacancy;

use App\Models\Vacancy;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\Vacancy\FilterRequest;
use App\Http\Requests\Vacancy\UpdateRequest;
use App\Http\Requests\Vacancy\StoreRequest;
use App\Http\Controllers\Vacancy\BaseController;
use Inertia\Inertia;


class VacancyController extends BaseController
{
    /**
     * Display all vacancies.
     */
    public function index(FilterRequest $request)
    {
        $vacancies = $this->service->index($request);
        $categories = $this->service->getAllCategory();
        return Inertia::render('Vacancy/VacancyIndex', [
            'vacancies' => $vacancies,
            'categories' => $categories,
        ]);
    }

    /**
     * Display the selected vacancy.
     */
    public function show(Vacancy $vacancy)
    {
        $category = $this->service->show($vacancy);
        return Inertia::render('Vacancy/VacancyShow', [
            'vacancy' => $vacancy,
            'category' => $category,
        ]);
    }

    /**
     * Display vacancy create form.
     */
    public function create()
    {
        $categories = $this->service->create();
        return Inertia::render('Vacancy/VacancyCreate', [
            'categories' => $categories,
        ]);
    }

    /**
     * Create the vacancy.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $this->service->store($data);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    /**
     * Display vacancy update form.
     */
    public function edit(Vacancy $vacancy){
        $categories = $this->service->edit();
        return Inertia::render('Vacancy/VacancyEdit', [
            'vacancy' => $vacancy,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the vacancy.
     */
    public function update(UpdateRequest $request, Vacancy $vacancy): RedirectResponse
    {
        $data = $request->validated();
        $this->service->update($vacancy, $data);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    /**
     * Delete the vacancy.
     */
    public function destroy(Vacancy $vacancy): RedirectResponse
    {
        $this->service->destroy($vacancy);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }
}