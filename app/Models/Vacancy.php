<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Traits\Filterable;


class Vacancy extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;
    
    protected $table = 'vacancies';
    protected $fillable = [
        'category_id',
        'name',
        'experience',
        'salary',
        'city',
        'attend',
        'number',
        'email',
        'employment',
        'logo',
        'description',
        'demands',
        'details',
    ];
    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
