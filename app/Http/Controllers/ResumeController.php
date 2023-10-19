<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Resume;
use App\Models\Category;

class ResumeController extends Controller
{
    public function index()
    {
        $resumes = Resume::all();
        return Inertia::render('Resume/Resumes', [
            'resumes' => $resumes,
        ]);
    }

    public function show(Resume $resume)
    {
        $category = $resume->category;
        return Inertia::render('Resume/ResumeShow', [
            'resume' => $resume,
            'category' => $category,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Resume/ResumeCreate', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'age' => 'required|integer',
            'gender' => 'required|in:male,female,other',
            'city' => 'required|string|max:255',
            'number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'telegram' => 'nullable|string|max:255',
            'whatsApp' => 'nullable|string|max:255',
            'signal' => 'nullable|string|max:255',
            'experience' => 'required|integer|min:0',
            'salary' => 'required|numeric|min:0',
            'attend' => 'required|string|max:255',
            'employment' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,gif|max:2048',
            'bio' => 'required|string',
            'opportunities' => 'required|string',
            'background' => 'required|string',
        ]);

        $resume = Resume::create([
            'category_id' => $request->category_id, 
            'name' => $request->name, 
            'surname' => $request->surname, 
            'age' => $request->age, 
            'gender' => $request->gender, 
            'city' => $request->city, 
            'number' => $request->number, 
            'email' => $request->email, 
            'telegram' => $request->telegram, 
            'whatsApp' => $request->whatsApp, 
            'signal' => $request->signal, 
            'experience' => $request->experience, 
            'salary' => $request->salary, 
            'attend' => $request->attend, 
            'employment' => $request->employment, 
            'image' => $request->image, 
            'bio' => $request->bio, 
            'opportunities' => $request->opportunities, 
            'background' => $request->background, 
        ]);

        $user = auth()->user();
        $user->resume_id = $resume->id;
        $user->save();
        
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    public function edit(Resume $resume){
        $categories = Category::all();
        return Inertia::render('Resume/ResumeEdit', [
            'resume' => $resume,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Resume $resume): RedirectResponse
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'age' => 'required|integer',
            'gender' => 'required|in:male,female,other',
            'city' => 'required|string|max:255',
            'number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'telegram' => 'nullable|string|max:255',
            'whatsApp' => 'nullable|string|max:255',
            'signal' => 'nullable|string|max:255',
            'experience' => 'required|integer|min:0',
            'salary' => 'required|numeric|min:0',
            'attend' => 'required|string|max:255',
            'employment' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,gif|max:2048',
            'bio' => 'required|string',
            'opportunities' => 'required|string',
            'background' => 'required|string',
        ]);
        $resume->update([
            'category_id' => $request->category_id, 
            'name' => $request->name, 
            'surname' => $request->surname, 
            'age' => $request->age, 
            'gender' => $request->gender, 
            'city' => $request->city, 
            'number' => $request->number, 
            'email' => $request->email, 
            'telegram' => $request->telegram, 
            'whatsApp' => $request->whatsApp, 
            'signal' => $request->signal, 
            'experience' => $request->experience, 
            'salary' => $request->salary, 
            'attend' => $request->attend, 
            'employment' => $request->employment, 
            'image' => $request->image, 
            'bio' => $request->bio, 
            'opportunities' => $request->opportunities, 
            'background' => $request->background, 
        ]);
        return redirect()->intended(RouteServiceProvider::HOME); 
    }

    public function destroy(Resume $resume): RedirectResponse
    {
        $resume->delete();
        $user = auth()->user();
        $user->resume_id = null;
        $user->save();
        return redirect()->intended(RouteServiceProvider::HOME); 
    }
}
