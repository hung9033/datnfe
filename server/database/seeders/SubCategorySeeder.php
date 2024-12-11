<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sub_category = [];
        $category=Category::query()->pluck('id')->toArray();
        for($i=0;$i<10;$i++){
            $sub_category[] = [
                'name'=>fake()->name(),
                'image'=>fake()->image(),
                'status'=>fake()->numberBetween(0,1),
                'category_id' =>fake()->randomElement($category),
            ];
        }
        SubCategory::query()->insert($sub_category);
    }
}
