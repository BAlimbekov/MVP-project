//$( ".flex-container" ).hide();
const ENV = "production";
//const ENV = 'dev';
let apiURL = ENV == "dev" ? "http://localhost:3300/" : "https://mvp-server.onrender.com/";





$("#button").on("click", function(){
    // $(".flex-containte").clear();
    const $input = $("#input");
   // $( ".flex-container" ).show();
    //console.log($input.val())
    clear();
    
    fetch(apiURL + 'workouts')
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
};
function clearBody(){
    $('#body').empty()
};

$("#createbutton")


$("#day1").on("click", function(){
    clear();
    
    fetch(apiURL + 'api/workouts/1')
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
    
    fetch(apiURL + 'api/workouts/2')
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
        
        fetch(apiURL + 'api/workouts/3')
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
            
            fetch(apiURL + 'api/workouts/4')
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
                
                fetch(apiURL + 'api/workouts/5')
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
                    
                    fetch(apiURL + 'api/workouts/6')
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
                        
                        fetch(apiURL + 'api/workouts/7')
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


                        $("#createbutton").on("click", function(e){
                            clear();
                            // $(".flex-container").hide();
                            // $("#addDiv").hide();
                            // $("#header").hide();
                            $("footer").hide();
                            e.preventDefault();
                            $div=$("<div id='addDiv' class='card' style='width:25rem:'></div>")
                            $input=$('<input class="form-control" type="text" placeholder="quote" aria-label="default input example">')
                            $input1=$('<input class="form-control" type="text" placeholder="dayNumber" aria-label="default input example">')
                            $input2=$('<input class="form-control" type="text" placeholder="warmup in minutes" aria-label="default input example">')
                            $input3=$('<input class="form-control" type="text" placeholder="pushups" aria-label="default input example">')
                            $input4=$('<input class="form-control" type="text" placeholder="situps" aria-label="default input example">')
                            $input5=$('<input class="form-control" type="text" placeholder="run" aria-label="default input example">')
                            var $a=$("<a id='submit' class='btn btn-primary'>Submit</a>");
                            $("#body").append($div)
                            $div.append($input, $input1, $input2, $input3, $input4, $input5, $a)  
                            $('#submit').on('click', function(){
                                console.log($input.val());
                                fetch(apiURL + 'api/workouts', {
                                    method:"POST",
                                    body:JSON.stringify({
                                        quote:$input.val(),
                                        day_num:$input1.val(),
                                        warmup:$input2.val(),
                                        pushups:$input3.val(),
                                        situps:$input4.val(),
                                        run:$input5.val()
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                .then(res => res.json())
                                .then(data =>{
                                    $div.hide()
                                    var $newWorkoutDiv =$("<div class='ty'></div>")
                                    $(".flex-container").append($newWorkoutDiv)
                                    var $img=$("<img class='card-img-top' height='900px'></img>");
                                    $img.attr('src', 'https://media.tenor.com/N7u5cEzdT-YAAAAC/neon-sign-check-mark.gif')
                                    $newWorkoutDiv.append($img)
                                })
                            })                        
                        });
                        
                        $("#deletebutton").on("click", function(){
                            fetch(apiURL + "api/workouts/" + $("#deleteinput").val(), {
                                method: 'DELETE',
                            })
                            .then (res => res.text())
                            .then(data => {
                                console.log("deleted")
                                    clear();
                                    
                                    fetch(apiURL + 'workouts')
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
                                
                            });
                        

                            $("#editbutton").on("click", function(e){
                            clear();
                            $("footer").hide();
                            e.preventDefault();
                            $div=$("<div id='addDiv' class='card' style='width:25rem:'></div>")
                            $input=$('<input class="form-control" type="text" placeholder="quote" aria-label="default input example">')
                            $input1=$('<input class="form-control" type="text" placeholder="dayNumber" aria-label="default input example">')
                            $input2=$('<input class="form-control" type="text" placeholder="warmup in minutes" aria-label="default input example">')
                            $input3=$('<input class="form-control" type="text" placeholder="pushups" aria-label="default input example">')
                            $input4=$('<input class="form-control" type="text" placeholder="situps" aria-label="default input example">')
                            $input5=$('<input class="form-control" type="text" placeholder="run" aria-label="default input example">')
                            var $a=$("<a id='submit' class='btn btn-primary'>Submit</a>");
                            $("#body").append($div)
                            $div.append($input, $input1, $input2, $input3, $input4, $input5, $a)  
                            $('#submit').on('click', function(){
                                console.log($input.val());
                                fetch(apiURL + 'api/workouts/' + $("#deleteinput").val(), {
                                    method:"PATCH",
                                    body:JSON.stringify({
                                        quote:$input.val(),
                                        day_num:$input1.val(),
                                        warmup:$input2.val(),
                                        pushups:$input3.val(),
                                        situps:$input4.val(),
                                        run:$input5.val()
                                    }),
                                    headers: {
                                        "Content-type": "application/json; charset=UTF-8"
                                    }
                                })
                                .then(res => res.json())
                                .then(data =>{
                                    $div.hide()
                                    var $newWorkoutDiv =$("<div class='ty'></div>")
                                    $(".flex-container").append($newWorkoutDiv)
                                    var $img=$("<img class='card-img-top' height='900px'></img>");
                                    $img.attr('src', 'https://www.wordher.com/wp-content/uploads/2015/04/bigstock-Updated-Red-D-Realistic-Paper-63435205-680x453.jpg')
                                    $newWorkoutDiv.append($img)
                                })
                            })                        
                        });