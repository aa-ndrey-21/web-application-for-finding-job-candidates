<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Service\Resume\Service;

class BaseController extends Controller
{
  public $service;
  public function __construct(Service $service){
    $this->service = $service;
  }
}