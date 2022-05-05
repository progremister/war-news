@extends('layouts.admin_layout')

@section('title')
     Всі статті
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
            <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Статті</h3>
        
                  <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <div class="card-body p-0">
                  <table class="table table-striped projects">
                      <thead>
                          <tr>
                              <th style="width: 7%">
                                <a href="?key=id" name="id">ID</a>
                              </th>
                              <th>
                                  <a href="?key=title" name="title">Заголовок</a>
                              </th>
                              <th>
                                <a href="?key=title_en" name="title">Заголовок (eng)</a>
                            </th>
                              <th>
                                  <a href="#"> </a>
                              </th>
                              <th>
                                <a href="?key=category_id" name="category">Категорія</a>
                            </th>
                              <th>
                                <a href="?key=created_at" name="created_at">Час створення</a>
                              </th>
                              <th style="width: 25%">
                              </th>
                          </tr>
                      </thead>
                      <tbody>

                          @foreach ($posts as $post) 
                          <tr>
                            <td>
                                {{ $post->id }}
                            </td>
                            <td>
                                  <a href="/{{ $post->url_key }}" style="color: black">
                                    {{ $post->title }}
                                  </a>
                                  <br>
                            </td>
                            <td>
                                  <a href="/{{ $post->url_key }}" style="color: black">
                                    {{ $post->title_en }}
                                  </a>
                                  <br>
                            </td>
                            <td>
                                <a href="/{{ $post->url_key }}">
                                    <img src="{{ asset("$post->image_path") }}" alt="" style="width: 10rem">
                                </a>
                                <br>
                            </td>
                            <td>
                                <a>
                                  {{ $post->category->name }}
                                </a>
                                <br>
                            </td>
                            <td>
                                <a>
                                  {{ $post->created_at }}
                                </a>
                                <br>
                            </td>
                              
                              <td class="project-actions text-right">
                                <a class="btn btn-info btn-sm" href="{{ route('post.edit', $post->id) }}">
                                    <i class="fas fa-pencil-alt">
                                      </i>
                                      Змінити
                                  </a>
                                  <form action="{{ route('post.destroy', $post->id) }}" method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm delete-btn">
                                            <i class="fas fa-trash">
                                            </i>
                                            Видалити
                                        </button>
                                  </form>
                              </td>
                          </tr>
                          @endforeach
                    
                      </tbody>
                  </table>

                </div>
                <!-- /.card-body -->
                {!! $posts -> withQueryString() -> links('vendor.pagination.custom-pagination') !!}

              </div>
        
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
@endsection