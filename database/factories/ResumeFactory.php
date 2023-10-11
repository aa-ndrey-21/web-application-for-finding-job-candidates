<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
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
        $user = User::inRandomOrder()->first();
        return [
            'user_id' => $user->id,
            'category_id' => Category::get()->random()->id,
            'name' => $user->name,
            'surname' => $user->surname,
            'age' => $this->faker->numberBetween(18, 70),
            'gender' => $user->gender,
            'city' => $this->faker->city,
            'number' => $this->faker->tollFreePhoneNumber(),
            'email' => $user->email,
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
