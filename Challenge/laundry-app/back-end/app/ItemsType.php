<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\ItemsType
 *
 * @property int $id
 * @property string $title
 * @property float $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\ItemsType onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\ItemsType whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\ItemsType withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\ItemsType withoutTrashed()
 * @mixin \Eloquent
 */
class ItemsType extends Model
{
    use SoftDeletes;

    public $table = 'items_types';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'title',
        'price',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
