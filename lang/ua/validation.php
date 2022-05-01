<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => ' :attribute має бути прийнятим',
    'accepted_if' => ' :attribute має бути прийнятим, якщо :other is :value.',
    'active_url' => ' :attribute не має правильної URL.',
    'after' => ' :attribute має мати дату після :date.',
    'after_or_equal' => ' :attribute має мати дату більшу або рівну :date.',
    'alpha' => ' :attribute має містити лише літери',
    'alpha_dash' => ' :attribute  має містити лише літери, цифри, спец.символи.',
    'alpha_num' => ' :attribute  має містити лише літери та цифри.',
    'array' => ' :attribute  має бути в масиві.',
    'before' => ' :attribute має мати дату до :date.',
    'before_or_equal' => ' :attribute має мати дату меншу або рівну :date.',
    'between' => [
        'array' => ' :attribute має бути між :min та :max елементами.',
        'file' => ' :attribute має бути між :min та :max кілобайтів.',
        'numeric' => ' :attribute має бути між :min та :max.',
        'string' => ' :attribute має бути між :min та :max символами.',
    ],
    'boolean' => ' :attribute поле має бути true або false.',
    'confirmed' => ' :attribute підтвердження не підходить.',
    'current_password' => 'Неправильний пароль.',
    'date' => ' :attribute не правильна дата.',
    'date_equals' => ' :attribute має бути датою, рівною :date.',
    'date_format' => ' :attribute не підходить за форматом :format.',
    'declined' => ' :attribute має бути скасований.',
    'declined_if' => ' :attribute має бути скасований, якщо :other = :value.',
    'different' => ' :attribute та :other мають відрізнятися.',
    'digits' => ' :attribute має мати :digits знаків.',
    'digits_between' => ' :attribute має мати між :min та :max символів.',
    'dimensions' => ' :attribute має неправильні розширення зображення.',
    'distinct' => ' :attribute поле має дублікат.',
    'email' => ' :attribute має мати правильну пошту.',
    'ends_with' => ' :attribute має закінчуватися: :values.',
    'enum' => 'Вибраний :attribute неправильний.',
    'exists' => 'Вибраний :attribute неправильний.',
    'file' => ' :attribute має бути файлом.',
    'filled' => ' :attribute має бути значенням.',
    'gt' => [
        'array' => ' :attribute має мати більше :value елементів.',
        'file' => ' :attribute має бути більшим, ніж :value кілобайтів.',
        'numeric' => ' :attribute має бути більшим, ніж :value.',
        'string' => ' :attribute має мати більше, ніж :value символів.',
    ],
    'gte' => [
        'array' => ' :attribute має мати :value елементів або більше.',
        'file' => ' :attribute має бути більшим або рівним :value кілобайтів.',
        'numeric' => ' :attribute має бути більшим або рівним :value.',
        'string' => ' :attribute має мати більше або рівно :value символів.',
    ],
    'image' => ' :attribute має бути зображенням.',
    'in' => ' вибраний :attribute неправильний.',
    'in_array' => ' :attribute поле не існує в :other.',
    'integer' => ' :attribute має бути цілим числом.',
    'ip' => ' :attribute має бути правильною IP адресою.',
    'ipv4' => ' :attribute має бути правильною IPv4 адресою.',
    'ipv6' => ' :attribute має бути правильною IPv6 адресою.',
    'json' => ' :attribute має бути правильним JSON рядком.',
    'lt' => [
        'array' => ' :attribute має мати мінімум :value елементів.',
        'file' => ' :attribute має мати мінімум :value кілобайтів.',
        'numeric' => ' :attribute має бути мінімум :value.',
        'string' => ' :attribute має мати мінімум :value символів.',
    ],
    'lte' => [
        'array' => ' :attribute має мати мінімум :value елементів.',
        'file' => ' :attribute має бути меншим або рівним :value кілобайтів.',
        'numeric' => ' :attribute має бути меншим або рівним :value.',
        'string' => ' :attribute must має бути меншим або рівним :value characters.',
    ],
    'mac_address' => ' :attribute має бути правильною MAC адресою.',
    'max' => [
        'array' => ' :attribute не має мати більше, ніж :max елементів.',
        'file' => ' :attribute не має бути більше, ніж :max kilobytes.',
        'numeric' => ' :attribute не має бути більше, ніж :max.',
        'string' => ' :attribute не має мати більше, ніж :max символів.',
    ],
    'mimes' => ' :attribute має бути файлом типу: :values.',
    'mimetypes' => ' :attribute має бути файлом типу: :values.',
    'min' => [
        'array' => ' :attribute має мати мінімум :min елементів.',
        'file' => ' :attribute має бути мвнвмум :min кілобайтів.',
        'numeric' => ' :attribute має бути мінімум :min.',
        'string' => ' :attribute має мати мінімум :min символів.',
    ],
    'multiple_of' => ' :attribute має бути кратним :value.',
    'not_in' => ' вибраний :attribute неправильний.',
    'not_regex' => ' :attribute неправильного формату.',
    'numeric' => ' :attribute має бути числом.',
    'password' => ' неправильний пароль.',
    'present' => ' :attribute має бути відображеним.',
    'prohibited' => ' :attribute заборонений.',
    'prohibited_if' => ' :attribute хаборонений, якщо :other = :value.',
    'prohibited_unless' => ' :attribute заборонений, якщо не :other серед значень :values.',
    'prohibits' => ' :attribute заборонений :other бути відображеним.',
    'regex' => ' :attribute неправильного формату.',
    'required' => ' :attribute необхідне.',
    'required_array_keys' => ' :attribute має містити записи для: :values.',
    'required_if' => ' :attribute необхідний, якщо :other = :value.',
    'required_unless' => ' :attribute необхідний, якщо не :other серед значень :values.',
    'required_with' => ' :attribute необхідний, якщо :values  відображено.',
    'required_with_all' => ' :attribute необхідний, якщо :values не відображено.',
    'required_without' => ' :attribute необхідний, якщо :values не відображено.',
    'required_without_all' => ' :attribute необхідний, якщо ніщо з :values не відображено.',
    'same' => ' :attribute та :other мають співпадати.',
    'size' => [
        'array' => ' :attribute має містити :size елементів.',
        'file' => ' :attribute має бути :size кілобайтів.',
        'numeric' => ' :attribute має бути :size.',
        'string' => ' :attribute має мати :size символів.',
    ],
    'starts_with' => ' :attribute має починатися так: :values.',
    'string' => ' :attribute має бути словесним рядком.',
    'timezone' => ' :attribute має бути в правильному часовому поясі.',
    'unique' => ' :attribute вже зайнятий.',
    'uploaded' => ' :attribute не вдалося вивантажити.',
    'url' => ' :attribute має бути правильним URL.',
    'uuid' => ' :attribute має бути правильним UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
