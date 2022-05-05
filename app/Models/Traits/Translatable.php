<?php

namespace App\Models\Traits;
use Illuminate\Support\Facades\App;
use LogicException;

trait Translatable {

    protected $defaultLocale = 'ua';
    public  function  __($originFieldName){
        $locale = App::getLocale() ?? $this->defaultLocale ;
        if($locale === 'en'){
            $fieldName = $originFieldName .= '_en';
        } 
        else {
            $fieldName = $originFieldName;
        }

        $attributes =  array_keys($this->attributes);
        if(!in_array($fieldName, $attributes)){
            throw new LogicException('No such attribute ' . get_class($this) );
        } 

        if(is_null($this->fieldName) || empty($this->fieldName)){
            return $this->$originFieldName;
        }

        return $this->fieldName;
    }
}