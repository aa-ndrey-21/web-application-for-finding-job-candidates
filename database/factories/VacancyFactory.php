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
            'experience' => $this->faker->numberBetween(1, 15), 
            'salary' => $this->faker->numberBetween(300, 10000),
            'city' => $this->faker->city,
            'number' => $this->faker->tollFreePhoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'telegram' => $this->faker->url(),
            'linkedin' => $this->faker->url(),
            'attend' => $this->faker->randomElement(['office', 'remote', 'hybrid']),
            'employment' => $this->faker->randomElement(['fullday', 'partday', 'hybrid']),
            'logo' => $this->faker->imageUrl(),
            'keywords' => $this->faker->text(200),
            'description' => $this->faker->text(800),
            'demands' => $this->faker->text(800),
            'details' => $this->faker->text(800),
        ];
    }
}
