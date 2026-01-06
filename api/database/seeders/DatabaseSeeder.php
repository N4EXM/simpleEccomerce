<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'user1',
            'email' => 'user1@example.com',
            'user_type' => 'admin',
            'password' => 'pass1234'
        ]);
        User::factory()->create([
            'name' => 'user2',
            'email' => 'user2@example.com',
            'user_type' => 'user',
            'password' => 'pass2345'
        ]);
        User::factory()->create([
            'name' => 'user3',
            'email' => 'user3@example.com',
            'user_type' => 'user',
            'password' => 'pass3456'
        ]);
        User::factory()->create([
            'name' => 'user4',
            'email' => 'user4@example.com',
            'user_type' => 'user',
            'password' => 'pass4567'
        ]);
        User::factory()->create([
            'name' => 'user5',
            'email' => 'user5@example.com',
            'user_type' => 'user',
            'password' => 'pass5678'
        ]);

    }
}
