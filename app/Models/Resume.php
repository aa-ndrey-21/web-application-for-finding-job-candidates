<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Traits\Filterable;

class Resume extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;
    
    protected $table = 'resumes';
    protected $fillable = [
        'category_id',
        'name',
        'surname',
        'age',
        'gender',
        'city',
        'number',
        'email',
        'experience',
        'salary',
        'attend',
        'employment',
        'image',
        'bio',
        'opportunities',
        'background',
    ];
    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}