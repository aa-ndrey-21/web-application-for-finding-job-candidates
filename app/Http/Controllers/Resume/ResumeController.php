<?php

namespace App\Http\Controllers\Resume;

use App\Models\Resume;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\Resume\FilterRequest;
use App\Http\Requests\Resume\UpdateRequest;
use App\Http\Requests\Resume\StoreRequest;
use Inertia\Inertia;
use App\Http\Controllers\Resume\BaseController;


class ResumeController extends BaseController
{
    /**
     * Display all resumes.
     */
    public function index(FilterRequest $request)
    {
        $resumes = $this->service->index($request);
        $categories = $this->service->getAllCategory();
        return Inertia::render('Resume/ResumeIndex', [
            'resumes' => $resumes, 
            'categories' => $categories,
        ]);
    }

    /**
     * Display the selected resume.
     */
    public function show(Resume $resume)
    {
        $category = $this->service->show($resume);
        return Inertia::render('Resume/ResumeShow', [
            'resume' => $resume,
            'category' => $category,
        ]);
    }

    /**
     * Display resume create form.
     */
    public function create()
    {
        $categories = $this->service->create();
        return Inertia::render('Resume/ResumeCreate', [
            'categories' => $categories,
        ]);
    }

    /**
     * Create the resume.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();   
        $this->service->store($data);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    /**
     * Display resume update form.
     */
    public function edit(Resume $resume){
        $categories = $this->service->edit();
        if (auth()->user()->resume_id !== $resume->id) {
            abort(403, 'Forbidden');
        }
        return Inertia::render('Resume/ResumeEdit', [
            'resume' => $resume,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the resume.
     */
    public function update(UpdateRequest $request, Resume $resume): RedirectResponse
    {
        $data = $request->validated();
        $this->service->update($resume, $data);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    /**
     * Delete the resume.
     */
    public function destroy(Resume $resume): RedirectResponse
    {
        $this->service->destroy($resume);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }
}