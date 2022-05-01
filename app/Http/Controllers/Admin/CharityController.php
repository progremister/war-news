<?php

namespace App\Http\Controllers\Admin;

use App\Filters\AdminFilter;
use App\Http\Controllers\Controller;
use App\Models\Charity;
use Illuminate\Http\Request;

class CharityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(AdminFilter $request)
    {
        $charities = Charity::filter($request)->paginate(10);

        return view('admin.charity.index', [
            'charities' => $charities
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.charity.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $charity = new  Charity();
        $charity->title = $request->title;
        $charity->image_path = $request->image_path;
        $charity->content = $request->content;
        $charity->save();

        return redirect()->back()->withSuccess('Charity item was successfully created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function show(Charity $charity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function edit(Charity $charity)
    {
        return view('admin.charity.edit', [
            'charity' =>  $charity
        ]);    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Charity $charity)
    {
        $charity->title = $request->title;
        $charity->image_path = $request->image_path;
        $charity->content = $request->content;
        $charity->save();

        return redirect()->back()->withSuccess('Charity item was successfully updated!');    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Charity  $charity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Charity $charity)
    {
        $charity->delete();
        return redirect()->back()->withSuccess('Charity item was successfully deleted!');    }
}
