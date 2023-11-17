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
            $table->unsignedBigInteger('category_id');
            $table->string('name', 255);
            $table->unsignedBigInteger('experience');
            $table->unsignedBigInteger('salary');
            $table->string('city', 255);
            $table->string('number', 15);
            $table->string('email', 255);
            $table->string('telegram', 255)->nullable();
            $table->string('linkedin', 255)->nullable();
            $table->string('attend', 255);
            $table->string('employment', 255);
            $table->string('logo')->nullable();
            $table->text('keywords', 255);
            $table->text('description');
            $table->text('demands');
            $table->text('details')->nullable();
            $table->timestamps();
        });

        Schema::table('vacancies', function (Blueprint $table) {
            $table->foreign('category_id', 'vacancy_category_fk')->references('id')->on('categories');
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
