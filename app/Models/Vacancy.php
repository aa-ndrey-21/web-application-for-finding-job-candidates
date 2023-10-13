<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Vacancy extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $table = 'vacancies';
    protected $fillable = [
        'category_id',
        'name',
        'experience',
        'salary',
        'city',
        'attend',
        'employment',
        'logo',
        'shortInfo',
        'demands',
        'addInfo',
    ];
    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
