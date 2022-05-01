@extends('layouts.admin_layout')

@section('title')
    Edit Post
@endsection

@section('admin_content')
    <!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">@yield('title'): {{ $post->title }}</h1>
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
                <form action="{{ route('post.update', $post->id) }}" method="post">
                    @csrf
                    @method('PUT')
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputTitle">Title</label>
                      <input type="text" class="form-control" id="exampleInputTitle" name="title" placeholder="Enter the title of a post" required value="{{ $post->title }}">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputUrlKey">Url Key</label>
                      <input type="text" class="form-control" id="exampleInputUrlKey" name="url_key" placeholder="Enter the url key of a post" required value="{{ $post->url_key }}">
                    </div>
                    <div class="form-group">
                      <label>Category</label>
                      <select class="form-control"  name="category_id">
                        @foreach ($categories as $category)
                        <option value="{{ $category->id }}"@if($category->id == $post->id) selected @endif>{{ $category->name }}</option>
                        @endforeach
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputDescription">Description</label>
                      <input type="text" class="form-control" id="exampleInputDescription" name="description" placeholder="Enter the description of a post" required value="{{ $post->description }}">
                    </div>
                    <div class="form-group">
                      <textarea name="content" class="editor">{{ $post->content }}</textarea>
                    </div>
                    <div class="form-group">
                      <img src="{{ asset("$post->image_path") }}" alt="" class="img-uploaded" style="display: block; width: 30rem;">
                      <input class="form-control" type="text" id="feature_image" name="image_path" value="{{ $post->image_path }}">
                      <a href="" class="popup_selector" data-inputid="feature_image">Select Image</a>
                    </div>
                  <!-- /.card-body -->
  
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Update</button>
                  </div>
                </form>
              </div>
        </div>
        
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
@endsection