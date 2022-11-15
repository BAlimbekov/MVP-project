//$( ".flex-container" ).hide();
const ENV = "production";

let apiURL = ENV == "dev" ? "http://localhost:3300" : "https://mvp-server.onrender.com/";
console.log("API:", apiURL);




$("#button").on("click", function(){
    // $(".flex-containte").clear();
    const $input = $("#input");
   // $( ".flex-container" ).show();
    //console.log($input.val())
    clear();
    
    fetch('http://localhost:3300/workouts')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            for(i=0; i<result.length; i++){
                let $card = $('<div class="card" style="width: 30rem;"></div>');
                let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                $image.attr('src', result[i].picture)
                let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                let $cardText = $(`<p class="card-text">${result[i].quote}</p>`);
                let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                let $list1 = $(`<li class="list-group-item">Workout Id:${result[i].id}</li>`);
                let $list2 = $(`<li class="list-group-item">Day number:${result[i].day_num}</li>`);
                let $list3 = $(`<li class="list-group-item">Warmup:${result[i].warmup}</li>`);
                let $list4 = $(`<li class="list-group-item">Pushups:${result[i].pushups}</li>`);
                let $list5 = $(`<li class="list-group-item">Situps:${result[i].situps}</li>`);
                let $list6 = $(`<li class="list-group-item">Run:${result[i].run}</li>`);
                $cardBody.append($cardTitle, $cardText);
                $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                $card.append($image, $cardBody, $mainList)
                $('.flex-container').append($card)

            }
        });
});


function clear(){
    $('.flex-container').empty()
}

$("#createbutton")


$("#day1").on("click", function(){
    clear();
    
    fetch('http://localhost:3300/api/workouts/1')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            let $card = $('<div class="card" style="width: 30rem;"></div>');
            let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
            $image.attr('src', result[0].picture)
            let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
            let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
            let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
            let $mainList = $('<ul class="list-group list-group-flush"></ul>');
            let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
            let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
            let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
            let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
            let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
            let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
            $cardBody.append($cardTitle, $cardText);
            $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
            $card.append($image, $cardBody, $mainList)
            $('.flex-container').append($card)
        })
});

$("#day2").on("click", function(){
    clear();
    
    fetch('http://localhost:3300/api/workouts/2')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            let $card = $('<div class="card" style="width: 30rem;"></div>');
            let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
            $image.attr('src', result[0].picture)
            let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
            let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
            let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
            let $mainList = $('<ul class="list-group list-group-flush"></ul>');
            let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
            let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
            let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
            let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
            let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
            let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
            $cardBody.append($cardTitle, $cardText);
            $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
            $card.append($image, $cardBody, $mainList)
            $('.flex-container').append($card)
        });
    });

    $("#day3").on("click", function(){
        clear();
        
        fetch('http://localhost:3300/api/workouts/3')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let $card = $('<div class="card" style="width: 30rem;"></div>');
                let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                $image.attr('src', result[0].picture)
                let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
                let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
                let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
                let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
                let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
                let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
                let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
                $cardBody.append($cardTitle, $cardText);
                $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                $card.append($image, $cardBody, $mainList)
                $('.flex-container').append($card)
            });
        });
        $("#day4").on("click", function(){
            clear();
            
            fetch('http://localhost:3300/api/workouts/4')
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    let $card = $('<div class="card" style="width: 30rem;"></div>');
                    let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                    $image.attr('src', result[0].picture)
                    let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                    let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                    let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
                    let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                    let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
                    let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
                    let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
                    let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
                    let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
                    let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
                    $cardBody.append($cardTitle, $cardText);
                    $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                    $card.append($image, $cardBody, $mainList)
                    $('.flex-container').append($card)
                });
            });

            $("#day5").on("click", function(){
                clear();
                
                fetch('http://localhost:3300/api/workouts/5')
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        let $card = $('<div class="card" style="width: 30rem;"></div>');
                        let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                        $image.attr('src', result[0].picture)
                        let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                        let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                        let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
                        let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                        let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
                        let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
                        let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
                        let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
                        let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
                        let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
                        $cardBody.append($cardTitle, $cardText);
                        $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                        $card.append($image, $cardBody, $mainList)
                        $('.flex-container').append($card)
                    });
                });
                $("#day6").on("click", function(){
                    clear();
                    
                    fetch('http://localhost:3300/api/workouts/6')
                        .then(response => response.json())
                        .then(result => {
                            console.log(result)
                            let $card = $('<div class="card" style="width: 30rem;"></div>');
                            let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                            $image.attr('src', result[0].picture)
                            let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                            let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                            let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
                            let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                            let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
                            let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
                            let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
                            let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
                            let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
                            let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
                            $cardBody.append($cardTitle, $cardText);
                            $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                            $card.append($image, $cardBody, $mainList)
                            $('.flex-container').append($card)
                        });
                    });

                    $("#day7").on("click", function(){
                        clear();
                        
                        fetch('http://localhost:3300/api/workouts/7')
                            .then(response => response.json())
                            .then(result => {
                                console.log(result)
                                let $card = $('<div class="card" style="width: 30rem;"></div>');
                                let $image = $(`<img class="card-img-top" src='' height='280' style="width:100%">`);
                                $image.attr('src', result[0].picture)
                                let $cardBody = $('<div class="card-body" style="align-item:center"></div>');
                                let $cardTitle = $('<h5 class="card-title">Plan for today</h5>');
                                let $cardText = $(`<p class="card-text">${result[0].quote}</p>`);
                                let $mainList = $('<ul class="list-group list-group-flush"></ul>');
                                let $list1 = $(`<li class="list-group-item">Workout Id:${result[0].id}</li>`);
                                let $list2 = $(`<li class="list-group-item">Day number:${result[0].day_num}</li>`);
                                let $list3 = $(`<li class="list-group-item">Warmup:${result[0].warmup}</li>`);
                                let $list4 = $(`<li class="list-group-item">Pushups:${result[0].pushups}</li>`);
                                let $list5 = $(`<li class="list-group-item">Situps:${result[0].situps}</li>`);
                                let $list6 = $(`<li class="list-group-item">Run:${result[0].run}</li>`);
                                $cardBody.append($cardTitle, $cardText);
                                $mainList.append($list1, $list2, $list3, $list4, $list5, $list6)
                                $card.append($image, $cardBody, $mainList)
                                $('.flex-container').append($card)
                            });
                        });