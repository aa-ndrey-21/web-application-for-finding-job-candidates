<?php

namespace App\Http\Requests\Resume;

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
            'page' => 'integer',
            'per_page' => 'integer',
            'category_id' => 'integer',
            'age' => 'string',
            'gender' => 'string',
            'city' => 'string',
            'experience' => 'integer',
            'salary' => 'string',
            'attend' => 'string',
            'employment' => 'string',
            'image' => 'nullable|string',
            'opportunities' => 'string',
        ];
    }
}
