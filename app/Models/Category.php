<?php

namespace App\Models;

use App\Filters\QueryFilter;
use App\Models\Traits\Translatable;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    use Translatable;

    protected $table = 'categories';
    protected $guarded = false;
    protected $fillable = ['name_en'];

    public function scopeFilter(Builder $builder, QueryFilter $filter) {
        return $filter->apply($builder);
    }
}
