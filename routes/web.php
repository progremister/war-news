<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Main\MainController;
use App\Http\Controllers\Main\NewsController;
use App\Http\Controllers\HomeController;

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


Route::controller(MainController::class)->group(function () {
    Route::get('/','index');
    Route::get('/charity', 'charity')->name('charity');
});


Route::controller(NewsController::class)->group(function () {
    Route::get('/news', 'renderPage')->name('news');
    Route::get('/news/fetch_data', 'fetch_data')->name('fetch_data');
    Route::get('/{url_key}', 'renderPost');
});



// Route::get('/news[/{page}]', function() {
//     $postMapper = new NewsController($connection);
//     $page = isset($args['page']) ? (int) $args['page'] : 1;
//     $limit = 2;
//     $posts = $postMapper -> getList($page, $limit);
//     $latestPosts = $postMapper -> getLatest(10);

//     $pagingCount = $postMapper -> getPagingCount();
//     $body =  view('news.twig', [
//         'posts' => $posts,
//         'latestPosts' => $latestPosts,
//         'pagination' => [
//             'current' => $page,
//             'paging' => ceil($pagingCount / $limit)
//         ]
//     ]);
//     return view('main.news');
// });


Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
