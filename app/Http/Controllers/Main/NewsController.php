<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Filters\PostFilter;
use App\Models\Post;
use App\Models\Category;
use DB;

use Illuminate\Http\Request;
class NewsController extends Controller
{       

    /**
     * Render all news page
     */
    public function renderPage(PostFilter $request) {
        $latestPosts = $this -> getLatest(10);

        // if ($categoryId) {
        //     $posts = Post::orderBy('published_date', 'desc')->where('category_id','=', $categoryId)->where('category_id','<>',null)->paginate(2);
        // } else if($mounth != null && $year != null) {
        //     $posts = Post::orderBy('published_date', 'desc')->whereMonth('published_date','=', $mounth)->whereYear('published_date','=',$year)->paginate(2);
        // }
        // else {
            if($request){
                $posts = Post::orderBy('published_date', 'desc')->filter($request)->paginate(2);
            }

        return view('main.news', [
            'posts' => $posts,
            'categories' => Category::orderBy('name')->get(),
            'latestPosts' => $latestPosts,
        ]);
     }

     
     /**
     * Render post page
     */
    public function renderPost(string $urlKey){
        $post = $this -> getByUrlKey($urlKey);
        $latestPosts = $this -> getLatest(10);

        if(!empty($post)) {
            return view('main.post', [
                'post' => $post,
                'latestPosts' => $latestPosts,
                'categories' => Category::orderBy('name')->get(),
            ]);
        } 
    }

    function sortByCategory($categoryId)
    {
        $posts = Post::get();
        if($categoryId){
            $posts = Post::orderBy('published_date', 'desc')
            ->where('category_id', '=', $categoryId)->where('category_id', '<>', null)->paginate(2);
        }
        return $posts;
    }

    public function getByUrlKey(string $urlKey){
        //$statement =  $this -> connection -> prepare('SELECT * FROM posts WHERE url_key = :url_key');
        $statement = Post::where('url_key', '=', $urlKey)->first();

        return $statement;
    }

    function fetch_data(Request $request){
        dd($request);
        if($request->ajax()){
            // $posts = DB::table('posts')->orderBy('published_date', 'desc')->paginate(2);
            // // ->where('title', 'LIKE', "%{$s}%")
            // // ->orWhere('content', 'LIKE', "%{$s}%")
            // // ->orWhere('published_date', 'LIKE', "%{$s}%")
            // return view('partials.pagination_data', compact('posts')->render());
            return "ajax call";
        }

        else return "Not a ajax call";
    }

     

      public function getLatest(int $limit){
        $posts = new Post();
        //$statement =  $this -> connection -> prepare('SELECT * FROM posts ORDER BY published_date DESC LIMIT ' . $limit );
        $statement = $posts
        ->orderBy('published_date', 'desc')
        ->limit($limit)
        -> get();

        return $statement;
    }
}


