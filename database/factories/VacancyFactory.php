<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vacancy>
 */
class VacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => Category::get()->random()->id,
            'name' => $this->faker->company,
            'experience' => $this->faker->numberBetween(1, 10), 
            'salary' => $this->faker->numberBetween(30000, 100000),
            'city' => $this->faker->city,
            'attend' => $this->faker->randomElement(['office', 'remote']),
            'employment' => $this->faker->randomElement(['fullday', 'partday']),
            'logo' => $this->faker->imageUrl(),
            'description' => $this->faker->text(100),
            'demands' => $this->faker->text(100),
            'details' => $this->faker->text(100),
        ];
    }
}
