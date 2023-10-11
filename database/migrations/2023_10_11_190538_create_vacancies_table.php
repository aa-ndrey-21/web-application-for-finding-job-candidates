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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // ->unique()
            $table->unsignedBigInteger('category_id');
            $table->string('name', 255);
            $table->unsignedBigInteger('experience');
            $table->unsignedBigInteger('salary');
            $table->string('city', 255);
            $table->string('attend', 255);
            $table->string('employment', 255);
            $table->string('logo')->nullable();
            $table->text('description');
            $table->text('demands');
            $table->text('details')->nullable();
            $table->timestamps();
            $table->softDeletes(); 
        });

        Schema::table('vacancies', function (Blueprint $table) {
            $table->foreign('user_id', 'vacancy_user_fk')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('category_id', 'vacancy_category_fk')->references('id')->on('categories');
        });
        Schema::table('vacancies', function (Blueprint $table) {
            $table->index('user_id', 'vacancy_user_idx');
            $table->index('category_id', 'vacancy_category_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
