<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resume>
 */
class ResumeFactory extends Factory
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
            'name' => fake()->name(),
            'surname' => fake()->lastName(),
            'age' => $this->faker->numberBetween(18, 70),
            'gender' => $this->faker->randomElement(['male', 'female', 'other']),
            'city' => $this->faker->city,
            'number' => $this->faker->tollFreePhoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'experience' => $this->faker->numberBetween(1, 10), 
            'salary' => $this->faker->numberBetween(30000, 100000),
            'attend' => $this->faker->randomElement(['office', 'remote']),
            'employment' => $this->faker->randomElement(['fullday', 'partday']),
            'image' => $this->faker->imageUrl(),
            'bio' => $this->faker->text(100),
            'opportunities' => $this->faker->text(100),
            'background' => $this->faker->text(100),
        ];
    }
}
