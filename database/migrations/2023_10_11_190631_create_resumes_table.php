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
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name', 255);
            $table->string('surname', 255);
            $table->smallInteger('age');
            $table->string('gender', 255);
            $table->string('city', 255); 
            $table->string('number', 15);
            $table->string('email', 255);
            $table->string('telegram', 255)->nullable();
            $table->string('whatsApp', 255)->nullable();
            $table->string('signal', 255)->nullable();
            $table->unsignedBigInteger('experience');
            $table->unsignedBigInteger('salary');
            $table->string('attend', 255);
            $table->string('employment', 255);
            $table->string('image')->nullable();
            $table->text('bio');
            $table->text('opportunities');
            $table->text('background');
            $table->timestamps();
            $table->softDeletes(); 
        });
        Schema::table('resumes', function (Blueprint $table) {
            $table->foreign('category_id', 'resume_category_fk')->references('id')->on('categories');
            $table->index('category_id', 'resume_category_idx');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
