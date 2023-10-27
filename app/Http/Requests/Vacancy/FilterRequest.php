<?php

namespace App\Http\Requests\Vacancy;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'integer',
            'name' => 'string',
            'experience' => 'integer',
            'salary' => 'string',
            'city' => 'string',
            'attend' => 'string',
            'employment' => 'string',
            'logo' => 'nullable|string',
            'demands' => 'string',
        ];
    }
}
