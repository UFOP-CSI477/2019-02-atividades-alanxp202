<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaginasController extends Controller{

    public function welcome(){
        return view('welcome');
    }

    public function index(){
        return view('index');
    }

    public function listar(){
        $lista = ['Ana', 'Bruna', 'Hugo', 'João', 'Pedro'];

        return view('lista')->with('lista', $lista);
    }

}