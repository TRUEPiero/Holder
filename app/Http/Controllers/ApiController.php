<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function project($id){
        $project = Projects::find($id);
        return $project;
    }
}
