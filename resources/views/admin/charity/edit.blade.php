@extends('layouts.admin_layout')

@section('title')
    Змінити потребу
@endsection

@section('admin_content')
    <!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">@yield('title')</h1>
        </div><!-- /.col -->
      </div><!-- /.row -->
      @if (session('success'))
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>
            <h4><i class="icon fa fa-check"></i>{{ session('success') }}</h4>
        </div>
        @endif
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
        <div class="col-lg-12">
            <div class="card card-primary">
            
                <!-- form start -->
                <form action="{{ route('charity.update', $charity->id) }}" method="post">
                    @csrf
                    @method('PUT')

                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputTitle">Заголовок</label>
                      <input type="text" class="form-control" id="exampleInputTitle" name="title" placeholder="Введіть заголовок потреби" required value="{{ $charity->title}}">
                    </div>
                    <div class="form-group">
                      <textarea name="content" class="editor">{{$charity->content}}</textarea>
                    </div>
                    <div class="form-group">
                      <img src="{{ asset("$charity->image_path") }}" alt="" class="img-uploaded" style="display: block; width: 30rem;">
                      <input class="form-control" type="text" id="feature_image" name="image_path" value="{{ $charity->image_path }}" readonly>
                      <a href="" class="popup_selector" data-inputid="feature_image">Виберіть зображення</a>
                    </div>
                  <!-- /.card-body -->
  
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Змінити</button>
                  </div>
                </form>
              </div>
        </div>
        
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
@endsection