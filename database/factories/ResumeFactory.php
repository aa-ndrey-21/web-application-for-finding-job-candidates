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
            'telegram' => $this->faker->url(),
            'github' => $this->faker->url(),
            'linkedin' => $this->faker->url(),
            'experience' => $this->faker->numberBetween(1, 15), 
            'salary' => $this->faker->numberBetween(300, 10000),
            'attend' => $this->faker->randomElement(['office', 'remote', 'hybrid']),
            'employment' => $this->faker->randomElement(['fullday', 'partday', 'hybrid']),
            'image' => $this->faker->imageUrl(),
            'keywords' => $this->faker->text(200),
            'bio' => $this->faker->text(800),
            'opportunities' => $this->faker->text(800),
            'background' => $this->faker->text(800),
        ];
    }
}
