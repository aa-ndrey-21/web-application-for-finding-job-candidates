<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\Filterable;

class Resume extends Model
{
    use HasFactory;
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
        'telegram',
        'github',
        'linkedin',
        'experience',
        'salary',
        'attend',
        'employment',
        'image',
        'keywords',
        'bio',
        'opportunities',
        'background',
    ];
    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}