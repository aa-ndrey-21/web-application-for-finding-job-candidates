<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\VacancyController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// });

Route::get('/', WelcomeController::class)->name('welcome.index');

Route::middleware('auth')->group(function () {
    Route::get('/resume', [ResumeController::class, 'index'])->name('resume.index');
    Route::get('/resume/create', [ResumeController::class, 'create'])->name('resume.create');
    Route::post('/resume/create', [ResumeController::class, 'store'])->name('resume.store');
    Route::get('/resume/{resume}', [ResumeController::class, 'show'])->name('resume.show');
    Route::get('/resume/{resume}/edit', [ResumeController::class, 'edit'])->name('resume.edit');
    Route::patch('/resume/{resume}', [ResumeController::class, 'update'])->name('resume.update');
    Route::delete('/resume/{resume}', [ResumeController::class, 'destroy'])->name('resume.destroy');
});
Route::middleware('auth')->group(function () {
    Route::get('/vacancy', [VacancyController::class, 'index'])->name('vacancy.index');
    Route::get('/vacancy/create', [VacancyController::class, 'create'])->name('vacancy.create');
    Route::post('/vacancy/create', [VacancyController::class, 'store'])->name('vacancy.store');
    Route::get('/vacancy/{vacancy}', [VacancyController::class, 'show'])->name('vacancy.show');
    Route::get('/vacancy/{vacancy}/edit', [VacancyController::class, 'edit'])->name('vacancy.edit');
    Route::patch('/vacancy/{vacancy}', [VacancyController::class, 'update'])->name('vacancy.update');
    Route::delete('/vacancy/{vacancy}', [VacancyController::class, 'destroy'])->name('vacancy.destroy');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
