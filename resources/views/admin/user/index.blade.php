@extends('layouts.admin_layout')

@section('title')
    Всі користувачі
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
                  <h3 class="card-title">Користувачі</h3>
        
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
                                  <a href="?key=username" name="username">Ім'я користувача</a>
                              </th>
                              <th>
                                <a href="?key=email" name="email">Email</a>
                              </th>
                              <th>
                                <a href="?key=created_at" name="registered">Час реєстрації</a>
                              </th>
                              <th style="width: 40%">
                              </th>
                          </tr>
                      </thead>
                      <tbody>

                          @foreach ($users as $user) 
                          <tr>
                              <td>
                                  {{ $user->id }}
                              </td>
                              <td>
                                  <a>
                                    {{ $user->username }}
                                  </a>
                                  <br>
                              </td>
                              <td>
                                <a>
                                  {{ $user->email }}
                                </a>
                                <br>
                            </td>
                              <td>
                                <a>
                                  {{ $user->created_at }}
                                </a>
                                <br>
                            </td>
                            <td class="project-actions text-right">
                                  <a class="btn btn-info btn-sm" href="{{ route('user.edit', $user->id) }}">
                                      <i class="fas fa-display-code">
                                      </i>
                                      Зробити адміном
                                  </a>
                                  <form action="{{ route('user.destroy', $user->id) }}" method="POST" style="display: inline-block;">
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
              </div>
        
    </div><!-- /.container-fluid -->
  </section>
  <!-- /.content -->
@endsection