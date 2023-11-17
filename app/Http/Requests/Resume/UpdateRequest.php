<?php

namespace App\Http\Requests\Resume;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'surname' => 'required|string|max:255',
            'age' => 'required|integer|min:16|max:135',
            'gender' => 'required|in:male,female,other',
            'city' => 'required|string|max:255',
            'number' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'telegram' => 'nullable|string|max:255',
            'github' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
            'experience' => 'required|integer|min:0',
            'salary' => 'required|numeric|min:0',
            'attend' => 'required|string|max:255|in:office,remote,hybrid',
            'employment' => 'required|string|max:255|in:fullday,partday,hybrid',
            'image' => 'nullable',
            'keywords' => 'required|string|max:255', 
            'bio' => 'required|string',
            'opportunities' => 'required|string',
            'background' => 'required|string',
        ];
    }
}
