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
    public const OPPORTUNITIES = 'opportunities';

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
            self::OPPORTUNITIES => [$this, 'opportunities'],
        ];
    }

    public function categoryId(Builder $builder, $value)
    {
        $builder->where('category_id', $value);
    }

    public function age(Builder $builder, $value)
    {
        $ageRange = explode('-', $value);
        if (count($ageRange) == 2) {
            $minAge = (int) $ageRange[0];
            $maxAge = (int) $ageRange[1];
            $builder->whereBetween('age', [$minAge, $maxAge]);
        }elseif (count($ageRange) == 1) {
            $builder->where('age', $value);
        }else{
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
        if (count($salaryRange) == 2) {
            $minSalary = (int) $salaryRange[0];
            $maxSalary = (int) $salaryRange[1];
            $builder->whereBetween('salary', [$minSalary, $maxSalary]);
        }elseif (count($salaryRange) == 1) {
            $builder->where('salary', $value);
        }else{
            abort(404);
        }
    }

    public function attend(Builder $builder, $value)
    {
        $builder->where('attend', $value);
    }

    public function employment(Builder $builder, $value)
    {
        $builder->where('employment', $value);
    }

    public function image(Builder $builder, $value)
    {
        if ($value === 'true'){
            $result = $builder->whereNotNull('image');
        }else{
            $result = $builder->WhereNull('image');
        }
    }

    public function opportunities(Builder $builder, $value)
    {
        $builder->where('opportunities', 'like', "%{$value}%");
    }
}