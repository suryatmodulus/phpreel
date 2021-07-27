@extends(AppConfig::themeLayout("layout"))

@section('title')
    {{ AppConfig::name() }}
@endsection

@section('style')
    <link rel="stylesheet" href="{{ Asset::css('slider.css') }}">
@endsection

@section('content')
    <div class="jumbotron jumbotron-fluid ne-jumbotron ne-jumbotron-animation ne-margin-top-under-nav">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    @if($subscribed == false)
                        <p class="ne-jumbotron-text text-center">
                            {{ __('Get a subscription and start watching movies and series') }}
                        </p>
                    @else
                        <p class="ne-jumbotron-text text-center">
                            {{ __('Start watching movies and series') }}
                        </p>
                    @endif
                </div>
            </div>
    
            <div class="row">
                <div class="col-12">
                    @if($subscribed == false)
                        <p class="text-center">
                            <a href="{{ UrlRoutes::subscribe() }}" class="btn ne-try-now-btn">
                                {{ __('Try now') }}
                            </a>
                        </p>
                    @else
                        <p class="ne-jumbotron-text text-center">
                            <p class="text-center">
                                <a href="{{ UrlRoutes::allMovies() }}" class="btn ne-try-now-btn">
                                    {{ __('Start watching') }}
                                </a>
                            </p>
                        </p>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <!--EndJumbotron-->
    
    @if($movies->count() != 0)
        <div class="container">
            <div class='ne-h1-title-link text-center mb-3'>
                <a href="{{ UrlRoutes::allMovies() }}" class="ne-remove-link">
                    {{ __('Latest movies') }}
                </a>
            </div>
            
            <div class="slideContainer">
                <ul class="slideList">
                    <div class="container-fluid">
                        <div class="row">
                            @foreach ($movies as $movie)
                                <div class="col-sm-12 col-md-6 col-lg-4 slide slider1" id="{{'item' . $loop->index}}">                              
                                    <div class="ne-image-container my-2">
                                        <a href="{{ UrlRoutes::movie($movie->movie_id) }}">
                                            <img src="{{ Asset::image($movie->image_name, $movie->image_storage) }}" class="card-img">
                                        </a>
                                    </div>      
                                </div>
                            @endforeach  
                            
                            <div class="nextImg" id="nextImgBtn" onclick="slider1.nextImage()">&#10095;</div>
                            <div class="prevImg" id="prevImgBtn" onclick="slider1.prevImage()">&#10094;</div>
                        </div>
                    </div>
                </ul>
            </div>
        </div> 
    @endif

    @if($series->count() != 0)
        <div class="container">
            <a href="{{ UrlRoutes::allSeries() }}" class='ne-h1-title-link text-center'>
                <div class="mb-3 mt-3">
                    {{ __('Latest series') }}
                </div>
            </a>
            
            <div class="slideContainer">
                <ul class="slideList">
                    <div class="container-fluid">
                        <div class="row">
                            @foreach ($series as $s)
                                <div class="col-sm-12 col-md-6 col-lg-4 slide slider2" id="{{'item' . $loop->index}}">                              
                                    <div class="ne-image-container my-2">
                                        <a href="{{ UrlRoutes::movie($s->series_id) }}">
                                            <img src="{{ Asset::image($s->image_name, $s->image_storage) }}" class="card-img">
                                        </a>
                                    </div>      
                                </div>
                            @endforeach 

                            <div class="nextImg" onclick="slider2.nextImage()">&#10095;</div>
                            <a class="prevImg" onclick="slider2.prevImage()">&#10094;</a>
                        </div>
                    </div>
                </ul>
            </div>
        </div> 
    @endif
</div>

<div class="container-fluid ne-footer">
    <div class="row">
        <div class="offset-md-1 col-md-5">
            <a class="ne-footer-item" href="{{ UrlRoutes::home() }}">
                {{ __('Home') }}
            </a><br>

            <a class="ne-footer-item" href="{{ UrlRoutes::allMovies() }}">
                {{ __('Movies') }}
            </a><br>

            <a class="ne-footer-item" href="{{ UrlRoutes::allSeries() }}">
                {{ __('Series') }}
            </a><br>

            <a class="ne-footer-item" href="{{ UrlRoutes::subscribe() }}">
                {{ __('Subscribe') }}
            </a><br>
        </div>
    </div>

    <div class="row">
        <div class="offset-md-1 col-md-11 ne-footer-item my-2">
            © {{ Utilities::currentYear() }} {{ AppConfig::name() }}
        </div>
    </div>
</div>
@endsection

@section('script')
    <script src="{{ Asset::js('slider.js') }}"></script>

    <script>
        let slider1 = new Slider("slider1");
        let slider2 = new Slider("slider2");

        function update() 
        {
            slider1.updateStep();
            slider2.updateStep();
        }

        window.addEventListener('resize', update);
        update();
    </script>
@endsection