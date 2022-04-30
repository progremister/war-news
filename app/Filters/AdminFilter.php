<?php

namespace App\Filters;
use App\Filters\QueryFilter;

class AdminFilter extends QueryFilter {

    public function key($key) {
        if($key == 'created_at') {
            $statement = $this->builder->orderBy($key, 'desc');
        }
        else{
            $statement = $this->builder->orderBy($key, 'asc');
        }
        
        return  $statement;
    }
}