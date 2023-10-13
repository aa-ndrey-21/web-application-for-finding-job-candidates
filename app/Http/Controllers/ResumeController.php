<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Resume;

class ResumeController extends Controller
{
    public function index()
    {
        $resumes = Resume::all();
        // dd($resumes);

        return Inertia::render('Resumes', [
            'resumes' => $resumes,
        ]);
    }
}
