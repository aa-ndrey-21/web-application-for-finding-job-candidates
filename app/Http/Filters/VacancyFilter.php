<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;

class VacancyFilter extends AbstractFilter
{
    public const CATEGORY_ID = 'category_id';
    public const NAME = 'name';
    public const EXPERIENCE = 'experience';
    public const SALARY = 'salary';
    public const CITY = 'city';
    public const ATTEND = 'attend';
    public const EMPLOYMENT = 'employment';
    public const LOGO = 'logo';
    public const DEMANDS = 'demands';
    


    protected function getCallbacks(): array
    {
        return [
            self::CATEGORY_ID => [$this, 'categoryId'],
            self::NAME => [$this, 'name'],
            self::EXPERIENCE => [$this, 'experience'],
            self::SALARY => [$this, 'salary'],
            self::CITY => [$this, 'city'],
            self::ATTEND => [$this, 'attend'],
            self::EMPLOYMENT => [$this, 'employment'],
            self::LOGO => [$this, 'logo'],
            self::DEMANDS => [$this, 'demands'],
        ];
    }

    public function categoryId(Builder $builder, $value)
    {
        $builder->where('category_id', $value);
    }

    public function name(Builder $builder, $value)
    {
        $builder->where('name', 'like', "%{$value}%");
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

    public function city(Builder $builder, $value)
    {
        $builder->where('city', $value);
    }

    public function attend(Builder $builder, $value)
    {
        $builder->where('attend', $value);
    }

    public function employment(Builder $builder, $value)
    {
        $builder->where('employment', $value);
    }

    public function logo(Builder $builder, $value)
    {
        if ($value === 'true'){
            $result = $builder->whereNotNull('logo');
        }else{
            $result = $builder->WhereNull('logo');
        }
    }

    public function demands(Builder $builder, $value)
    {
        $builder->where('demands', 'like', "%{$value}%");
    }
}