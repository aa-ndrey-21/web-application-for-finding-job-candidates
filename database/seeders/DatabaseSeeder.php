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

        $users = User::all();
        $vacancies = Vacancy::all()->pluck('id')->toArray();
        $resumes = Resume::all()->pluck('id')->toArray();
        
        foreach ($users as $user) {
            if ($user->mode === 'worker') {
                if (!empty($resumes)) {
                    $resumeId = array_shift($resumes);
                    $user->resume_id = $resumeId;
                } else {
                    $user->mode = 'employer'; // Меняем mode на employer
                    $vacancyId = array_shift($vacancies);
                    $user->vacancy_id = $vacancyId;
                }
            } elseif ($user->mode === 'employer') {
                if (!empty($vacancies)) {
                    $vacancyId = array_shift($vacancies);
                    $user->vacancy_id = $vacancyId;
                } else {
                    $user->mode = 'worker'; // Меняем mode на worker
                    $resumeId = array_shift($resumes);
                    $user->resume_id = $resumeId;
                }
            }
            $user->save();
        }
    }
}
