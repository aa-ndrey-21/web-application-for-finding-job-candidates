<?php

namespace App\Service\Resume;

use App\Models\Resume;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Filters\ResumeFilter;
use Illuminate\Support\Facades\Storage;


class Service extends Controller
{ 
  public function index($request){
    $data = $request->validated();
    $page = $data['page'] ?? 1;
    $per_page = $data['per_page'] ?? 10; 
    $filter = app()->make(ResumeFilter::class, ['queryParams' => array_filter($data)]);
    $resumes = Resume::filter($filter)->paginate($per_page, ['*'], 'page', $page)->withQueryString();
    return $resumes;
  }
  
  public function getAllCategory(){
    $categories = Category::all();
    return $categories;
  }

  public function show($resume){
    $category = $resume->category;
    return $category;
  }

  public function create(){
    $categories = Category::all();
    return $categories;
  }

  public function store($data){
    if (request()->hasFile('image')){
      $imagePath = request()->file('image')->store('resume', 'public');
      $data['image'] = $imagePath;
    }
    $resume = Resume::create($data);
    $user = auth()->user();
    $user->resume_id = $resume->id;
    $user->save();
  }

  public function edit(){
    $categories = Category::all();
    return $categories;
  }

  public function update($resume, $data){
    if (request()->hasFile('image')){
      $imagePath = request()->file('image')->store('resume', 'public');
      $data['image'] = $imagePath;
      Storage::disk('public')->delete($resume->image);  
    }
    $resume->update($data);
  }

  public function destroy($resume){
    $resume->delete();
    $user = auth()->user();
    $user->resume_id = null;
    $user->save();
  }
}