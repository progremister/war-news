@extends('layouts.admin_layout')

@section('title')
    All Categories
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
                  <h3 class="card-title">Categories</h3>
        
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
                                  <a href="?key=name" name="name">Title</a>
                              </th>
                              <th>
                                <a href="?key=created_at" name="created_at">Created</a>
                              </th>
                              <th style="width: 40%">
                              </th>
                          </tr>
                      </thead>
                      <tbody>

                          @foreach ($categories as $category) 
                          <tr>
                              <td>
                                  {{ $category->id }}
                              </td>
                              <td>
                                  <a>
                                    {{ $category->name }}
                                  </a>
                                  <br>
                              </td>
                              <td>
                                <a>
                                  {{ $category->created_at }}
                                </a>
                                <br>
                            </td>
                              
                              <td class="project-actions text-right">
                                  <a class="btn btn-info btn-sm" href="{{ route('category.edit', $category->id) }}">
                                      <i class="fas fa-pencil-alt">
                                      </i>
                                      Edit
                                  </a>
                                  <form action="{{ route('category.destroy', $category->id) }}" method="POST" style="display: inline-block;">
                                    @csrf
                                    @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm delete-btn">
                                            <i class="fas fa-trash">
                                            </i>
                                            Delete
                                        </button>
                                  </form>
                              </td>
                          </tr>
                          @endforeach
                    
                      </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
        
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
@endsection