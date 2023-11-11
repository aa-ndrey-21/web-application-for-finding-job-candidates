<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Resume;
use App\Models\Vacancy;
use App\Models\Category;

class WelcomeController extends Controller
{
  public function __invoke(){
    $randomResume = Resume::inRandomOrder()->first();
    $randomResumes = Resume::inRandomOrder()->take(5)->get();
    $randomVacancies = Vacancy::inRandomOrder()->take(5)->get(); 
    return Inertia::render('Welcome', [
      'randomResume' => $randomResume,
      'randomResumes' => $randomResumes,
      'randomVacancies' => $randomVacancies,
    ]);
  }
}