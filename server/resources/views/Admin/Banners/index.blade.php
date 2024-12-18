@extends('Layout.master')
@section('title')
    danh mục
@endsection
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title mb-2">Danh sách banner</h5>
                    <a  href="{{ route('admins.banner.create') }}" class="btn btn-success ml-auto">Thêm mới banner</a>
                </div>
                @if (session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="table table-bordered dt-responsive nowrap table-striped align-middle"
                            style="width:100%">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Hình ảnh</th>
                                        <th scope="col">Tiêu đề</th>
                                        <th scope="col">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($banner as $item)
                                        <tr>
                                            <th scope="row">{{ $item->id }}</th>
                                            <td><img src="{{ Storage::url($item->image) }}" alt="" width="150px">
                                            </td>
                                            <td>{{ $item->title }}</td>
                                            <td>
                                                <a href="{{ route('admins.banner.edit', $item->id) }}" class="btn btn-primary"><i class="fa fa-edit"></i></a>
                                                <form action="{{ route('admins.banner.destroy', $item->id) }}" method="POST" style="display:inline-block;">
                                                    @csrf
                                                    @method('DELETE') <!-- Sử dụng phương thức DELETE -->
                                                    <button type="submit" class="btn btn-danger" onclick="return confirm('Bạn có chắc chắn xóa màu sắc này không?');">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                </form>
                                                
                                            </td>
                                        </tr>
                                    @endforeach
    
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
@endsection

@section('script-libs')
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!--datatable js-->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.2/js/buttons.html5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

    <script src="{{ asset('assets/js/pages/datatables.init.js') }}"></script>
@endsection
