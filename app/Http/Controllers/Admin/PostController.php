<?php

namespace App\Http\Controllers\Admin;

use App\Filters\AdminFilter;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Category;

use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(AdminFilter $request)
    {
        $posts = Post::filter($request)->paginate(10);

        return view('admin.post.index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::orderBy('name')->get();

        return view('admin.post.create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $post = new  Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image_path = $request->image_path;
        $post->content = $request->content;
        $post->url_key = $request->url_key;
        $post->category_id = $request->category_id;
        $post->save();

        return redirect()->back()->withSuccess('Post was successfully created!');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $categories = Category::orderBy('name')->get();

        return view('admin.post.edit', [
            'categories' => $categories,
            'post' =>  $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image_path = $request->image_path;
        $post->content = $request->content;
        $post->url_key = $request->url_key;
        $post->category_id = $request->category_id;
        $post->save();

        return redirect()->back()->withSuccess('Post was successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->back()->withSuccess('Post was successfully deleted!');
    }
}
