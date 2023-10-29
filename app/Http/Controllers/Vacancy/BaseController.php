<?php

namespace App\Http\Controllers\Vacancy;

use App\Http\Controllers\Controller;
use App\Service\Vacancy\Service;

class BaseController extends Controller
{
  public $service;
  public function __construct(Service $service){
    $this->service = $service;
  }
}