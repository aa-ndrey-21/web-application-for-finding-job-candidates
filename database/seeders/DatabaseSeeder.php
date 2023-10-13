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
        Category::factory(10)->create();
        Vacancy::factory(15)->create();
        Resume::factory(15)->create();
        User::factory(30)->create();

        
        // Users get resume or vacancy id
        // If users with some mode will be more than resumes or vacancies he is get null
        $users = User::all();
        $vacancies = Vacancy::all()->pluck('id')->toArray();
        $resumes = Resume::all()->pluck('id')->toArray();
        
        foreach ($users as $user) {
            if ($user->mode === 'worker') {
                $resumeId = array_shift($resumes);
                $user->resume_id = $resumeId;
            } elseif ($user->mode === 'employer') {
                $vacancyId = array_shift($vacancies);
                $user->vacancy_id = $vacancyId;
            }
            $user->save();
        }
    }
}
