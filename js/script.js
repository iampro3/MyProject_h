$(function(){       // 조작하고 기능을 만드는 파일js

    // 슬릭 슬라이드 시작!
   $('.slide-container').slick({    // 얘는 살려야만 dots 가 안 보인다.
        dots: false, // 지워도 안 보이는데 깜박일때, 점이 보이기 때문에 살려야 한다.
//         arrows: false,

/* 
        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤 -- 여기 지움 */


        /* 효과 */
        // fade: true,
        // cssEase: 'linear',


    //     // 네비게이션 화살표 커스텀
    //     prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    //     nextArrow: '<button class="slide-arrow next-arrow"></btton>',


    //     //******다른 슬라이드와 연결하는 옵션
    //     asNavFor: '.slide-nav',


        /* 반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ]
    })

    // //메인슬라이드와 연결    // 지워도 dot 안 보임 - 상관없었음
    // $('.slide-nav').slick ({
        //  dots: false,       // img 앞에 dots가 생기는데 false로 설정되어 있음
        //  arrows: false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,

    //     pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
    //     pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
    //     pauseOnHover: true,             // 호버 시, 자동재생 멈춤
        
    //     centerMode: true,
    //     focusOnSelect: true,
    //     asNavFor: '.slide-container',
    // }) // 슬라이드 네비게이션

    /* 메뉴닫기 */
    $('#btn-close').on('click', function() {
        $('header').animate({
            'left' : '-25rem'            
        }, 400)
        
        $('body').animate({
            'padding-left' :0
        }, 400)
    })

    /* 메뉴열기 */
    $('#btn-menu').on('click', function() {
        $('header').animate({
            'left' : 0            
        }, 400)

        $('body').animate({
            'padding-left' :'25rem'
        },400)
    })
})
