<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('mode', 10);
            $table->unsignedBigInteger('vacancy_id')->nullable()->unique();
            $table->unsignedBigInteger('resume_id')->nullable()->unique();
            $table->string('name');
            $table->string('surname');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('gender', 10);
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();  
        });

        Schema::table('users', function (Blueprint $table) {
            $table->foreign('vacancy_id', 'user_vacancy_fk')->references('id')->on('vacancies')->onDelete('SET NULL');
            $table->index('vacancy_id', 'user_vacancy_idx');
            $table->foreign('resume_id', 'user_resume_fk')->references('id')->on('resumes')->onDelete('SET NULL');
            $table->index('resume_id', 'user_resume_idx');
        });;
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
