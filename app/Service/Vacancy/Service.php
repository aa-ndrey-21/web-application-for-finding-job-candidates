<?php

namespace App\Service\Vacancy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Vacancy;
use App\Http\Filters\VacancyFilter;

class Service extends Controller
{ 
  public function index($request){
    $data = $request->validated();
    $filter = app()->make(VacancyFilter::class, ['queryParams' => array_filter($data)]);
    $vacancies = Vacancy::filter($filter)->paginate(5)->withQueryString();
    return $vacancies;
  }

  public function show($vacancy){
    $category = $vacancy->category;
    return $category;
  }

  public function create(){
    $categories = Category::all();
    return $categories;
  }

  public function store($data){
    $vacancy = Vacancy::create($data);
    $user = auth()->user();
    $user->vacancy_id = $vacancy->id;
    $user->save();
  }

  public function edit(){
    $categories = Category::all();
    return $categories;
  }

  public function update($vacancy, $data){
    $vacancy->update($data);
  }

  public function destroy($vacancy){
    $vacancy->delete();
    $user = auth()->user();
    $user->vacancy_id = null;
    $user->save();
  }
}