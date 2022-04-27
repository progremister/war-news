<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Charity;


class MainController extends Controller
{

    /**
     * Render INDEX page
     */
    public function index(){
        return view('main.index');
    }

    /**
     * Render CHARITY page
     */
    public function charity(){
        return view('main.charity', [
            'donates' => Charity::get()
        ]);
    }
}
