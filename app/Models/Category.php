<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Category extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $table = 'categories';
    protected $fillable = [
        'title',
    ];
    public function vacancies(){
        return $this->hasMany(Vacancy::class, 'category_id', 'id');
    }
    public function resumes(){
        return $this->hasMany(Resume::class, 'category_id', 'id');
    }
}
