<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/admin', function(){
    return 'Панель администратора';
});
Route::get('/{any}', [MainController::class,'index'])->where('any', '.*');
