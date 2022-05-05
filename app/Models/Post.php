<?php

namespace App\Models;

use App\Filters\QueryFilter;
use App\Models\Traits\Translatable;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use Translatable;

    protected $table = 'posts';
    protected $guarded = false;

    protected $fillable = ['title_en', 'description_en', 'content_en'];

    public function scopeFilter(Builder $builder, QueryFilter $filter) {
        return $filter->apply($builder);
    }

    public function category(){
        return $this->belongsTo('App\Models\Category', 'category_id');
    }
}
