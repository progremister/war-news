<?php

namespace App\Filters;
use App\Filters\QueryFilter;

class PostFilter extends QueryFilter {

    public function category_id($id) {
        return  $this->builder->where('category_id','=', $id);
    }

    public function search($search_string) {
        return $this->builder->where('title', 'LIKE', "%{$search_string}%")->orWhere('content', 'LIKE', "%{$search_string}%")->orWhere('created_at', 'LIKE', "%{$search_string}%");
    }

    public function date($date_string){
        $date = explode('.', $date_string);
        return  $this->builder->whereMonth('created_at','=', $date[0])->whereYear('created_at','=', $date[1]);
    }
}