<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('AboutPage', []);
})->name("about");
Route::get('/resume', function () {
  return Inertia::render('ResumePage', []);
})->name('resume');
Route::get('/projects', function () {
  return Inertia::render('ProjectsPage', []);
})->name('projects');
Route::get('/certificates', function () {
  return Inertia::render('CertificatesPage', []);
})->name('certificates');
Route::get('/skills', function () {
  return Inertia::render('SkillsPage', []);
})->name('skills');
Route::get('/contact', function () {
  return Inertia::render('ContactPage', []);
})->name('contact');
Route::get('/test', function () {
  return Inertia::render('Testing', []);
})->name('test');

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
