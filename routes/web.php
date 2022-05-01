<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\UserController;


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\Main\NewsController;
use App\Http\Controllers\Admin\HomeController;

use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::controller(HomeController::class)->group(function(){
    Route::get("/adminka", "index")->name("homeAdmin");
});
Route::controller(MainController::class)->group(function () {
    Route::get('/','index')->name('shelters');
    Route::get('/charity', 'charity')->name('charity');
});


Route::controller(NewsController::class)->group(function () {
    Route::get('/news', 'renderPage')->name('news');
    Route::get('/{url_key}', 'renderPost');
});


Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::get('/adminpanel', [HomeController::class, 'index'])->name('homeAdmin');
Route::middleware('role:admin')->prefix('adminka')->group(function(){
    Route::get("/", [HomeController::class, 'index'])->name("homeAdmin");

    Route::resource('category', CategoryController::class);
    Route::resource('post', PostController::class);
    Route::resource('user', UserController::class);
    
});
    
