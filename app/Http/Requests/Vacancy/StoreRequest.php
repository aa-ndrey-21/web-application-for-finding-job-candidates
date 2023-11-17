<?php

namespace App\Http\Requests\Vacancy;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'experience' => 'required|integer|min:0',
            'salary' => 'required|numeric|min:0',
            'city' => 'required|string|max:255',
            'number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'telegram' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
            'attend' => 'required|string|max:255|in:office,remote,hybrid',
            'employment' => 'required|string|max:255|in:fullday,partday,hybrid',
            'logo' => 'nullable|image|mimes:jpeg,png,gif|max:5120',
            'keywords' => 'required|string|max:255',
            'description' => 'required|string',
            'demands' => 'required|string',
            'details' => 'nullable|string',
        ];
    }
}
