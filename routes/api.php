<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Projects;
use App\Http\Controllers\ApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/projects/{id}', [ApiController::class, 'project']);
