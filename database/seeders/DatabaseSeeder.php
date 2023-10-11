<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\User;
use App\Models\Vacancy;
use App\Models\Resume;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Category::factory(30)->create();
        User::factory(30)->create();
        Vacancy::factory(30)->create();
        Resume::factory(30)->create();
    }
}
