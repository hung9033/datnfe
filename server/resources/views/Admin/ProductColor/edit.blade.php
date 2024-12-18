@extends('Layout.master')
@section('title')
Cập nhật màu sắc
@endsection
@section('content')
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h5 class="card-title align-content-center mb-0">Cập nhật màu sắc</h5>
            </div><!-- end card header -->

            <div class="card-body">
                @if (session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif
                @if (session('error'))
                    <div class="alert alert-danger">
                        {{ session('error') }}
                    </div>
                @endif
                <form action="{{ route('admins.product_colors.update', $productcolors->id) }}" method="POST">
                    @csrf
                    @method('PUT') <!-- Phương thức cập nhật -->
                    
                    <div>
                        <label for="name" class="mt-2">Tên màu</label>
                        <input type="text" id="name" name="name" class="form-control" value="{{ old('name', $productcolors->name) }}">
                        @error('name')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div>
                        <label for="name" class="mt-2">Mã màu</label>
                        <input type="text" id="name" name="color_code" class="form-control" value="{{ $productcolors->color_code }}">
                        @error('color_code')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
            
                    <button type="submit" class="btn btn-success mt-2">Cập nhật</button> <!-- Đổi từ Create sang Update -->
                </form>
            </div>
        </div>
    </div>
@endsection
