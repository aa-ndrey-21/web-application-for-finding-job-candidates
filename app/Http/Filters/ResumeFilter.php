<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class ResumeFilter extends AbstractFilter
{
    public const CATEGORY_ID = 'category_id';
    public const AGE = 'age';
    public const GENDER = 'gender';
    public const CITY = 'city';
    public const EXPERIENCE = 'experience';
    public const SALARY = 'salary';
    public const ATTEND = 'attend';
    public const EMPLOYMENT = 'employment';
    public const IMAGE = 'image';
    public const KEYWORDS = 'keywords';

    protected function getCallbacks(): array
    {
        return [
            self::CATEGORY_ID => [$this, 'categoryId'],
            self::AGE => [$this, 'age'],
            self::GENDER => [$this, 'gender'],
            self::CITY => [$this, 'city'],
            self::EXPERIENCE => [$this, 'experience'],
            self::SALARY => [$this, 'salary'],
            self::ATTEND => [$this, 'attend'],
            self::EMPLOYMENT => [$this, 'employment'],
            self::IMAGE => [$this, 'image'],
            self::KEYWORDS => [$this, 'keywords'],
        ];
    }

    public function categoryId(Builder $builder, $value)
    {
        $builder->where('category_id', $value);
    }

    public function age(Builder $builder, $value)
    {
        $ageRange = explode('-', $value);
    
        if (count($ageRange) == 2 && $ageRange[0] !== '' && $ageRange[1] !== '') {
            $minAge = (int) $ageRange[0];
            $maxAge = (int) $ageRange[1];
            $builder->whereBetween('age', [$minAge, $maxAge]);
        }elseif (substr($value, -1) === '-') {
            $minAge = (int) rtrim($value, '-');
            $builder->where('age', '>', $minAge);
        }elseif (substr($value, 0, 1) === '-') {
            $maxAge = (int) substr($value, 1);
            $builder->where('age', '<=', $maxAge);
        } else {
            abort(404);
        }
    }

    public function gender(Builder $builder, $value)
    {
        $builder->where('gender', $value);
    }

    public function city(Builder $builder, $value)
    {
        $builder->where('city', $value);
    }

    public function experience(Builder $builder, $value)
    {
        $builder->where('experience', '>=', $value);
    }

    public function salary(Builder $builder, $value)
    {
        $salaryRange = explode('-', $value);
    
        if (count($salaryRange) == 2 && $salaryRange[0] !== '' && $salaryRange[1] !== '') {
            $minSalary = (int) $salaryRange[0];
            $maxSalary = (int) $salaryRange[1];
            $builder->whereBetween('salary', [$minSalary, $maxSalary]);
        }elseif (substr($value, -1) === '-') {
            $minSalary = (int) rtrim($value, '-');
            $builder->where('salary', '>', $minSalary);
        }elseif (substr($value, 0, 1) === '-') {
            $maxSalary = (int) substr($value, 1);
            $builder->where('salary', '<=', $maxSalary);
        } else {
            abort(404);
        }
    }

    public function attend(Builder $builder, $value)
    {
        $builder->where('attend', $value)->orWhere('attend', 'hybrid');
    }

    public function employment(Builder $builder, $value)
    {
        $builder->where('employment', $value)->orWhere('employment', 'hybrid');
    }

    public function image(Builder $builder, $value)
    {
        if ($value === 'with'){
            $result = $builder->whereNotNull('image');
        }else{
            $result = $builder->WhereNull('image');
        }
    }

    public function keywords(Builder $builder, $value)
    {
        $builder->where('keywords', 'like', "%{$value}%");
    }
}