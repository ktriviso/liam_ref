$(document).ready(function(){
    // modal
    var modal = document.getElementById('myModal');
    var trigger = document.getElementById("modal-trigger");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
    // this is the blinking text when the modal opens
    function blink(selector){
        $(selector).fadeOut('slow', function(){
            $(this).fadeIn('slow', function(){
                blink(this);
            });
        });
    }
    blink('.blink');

    // API REQUEST ONE
    var date = '2017/7';
    var url = "https://api.nytimes.com/svc/archive/v1/" + date + ".json?api-key=1d9999a0598e4f1f8342f51cab13e017";

    var request = $.ajax({
        dataType: "json",
        url: url,
        method: 'GET'
    });

    request.done(function(result){
          var feed = result.response.docs.slice(0, 20);
          console.log(feed);
          var feed_range_one = feed[0].lead_paragraph;
          var feed_range_two = feed[1].lead_paragraph;
          var feed_range_three = feed[2].lead_paragraph;
          var feed_range_four = feed[3].lead_paragraph;
          var feed_range_five = feed[4].lead_paragraph;
          var feed_range_six = feed[5].lead_paragraph;
          var feed_range_seven = feed[6].lead_paragraph;
          var feed_range_eight = feed[7].lead_paragraph;
          var feed_range_nine = feed[8].lead_paragraph;
          var feed_range_ten = feed[9].lead_paragraph;
          var feed_range_eleven = feed[10].lead_paragraph;
          var feed_range_twelve = feed[11].lead_paragraph;
          var feed_range_thirteen = feed[12].lead_paragraph;
          var feed_range_fourteen = feed[13].lead_paragraph;
          var feed_range_fifteen = feed[14].lead_paragraph;
          var feed_range_sixteen = feed[15].lead_paragraph;
          var feed_range_seventeen = feed[16].lead_paragraph;
          var feed_range_eighteen = feed[17].lead_paragraph;
          var feed_range_nineteen = feed[18].lead_paragraph;
          var feed_range_twenty = feed[19].lead_paragraph;

        //   debugger;
          $('#news-one').append(feed_range_one);
          $('#news-two').append(feed_range_two);
          $('#news-three').append(feed_range_three);
          $('#news-four').append(feed_range_four);
          $('#news-five').append(feed_range_five);
          $('#news-six').append(feed_range_six);
          $('#news-seven').append(feed_range_seven);
          $('#news-eight').append(feed_range_eight);
          $('#news-nine').append(feed_range_nine);
          $('#news-ten').append(feed_range_ten);
          $('#news-eleven').append(feed_range_eleven);
          $('#news-twelve').append(feed_range_twelve);
          $('#news-thirteen').append(feed_range_thirteen);
          $('#news-fourteen').append(feed_range_fourteen);
          $('#news-fifteen').append(feed_range_fifteen);
          $('#news-sixteen').append(feed_range_sixteen);
          $('#news-seventeen').append(feed_range_seventeen);
          $('#news-eighteen').append(feed_range_eighteen);
          $('#news-nineteen').append(feed_range_nineteen);
          $('#news-twenty').append(feed_range_twenty);

          $('.webTicker').webTicker({
              height:'75px',
              duplicate:true,
              rssfrequency:0,
              startEmpty:false,
              hoverpause:false,
              transition: 'ease'
          });

    });

    var client_tweets;
    // API REQUEST TWO
    var request_trump = $.ajax({
        dataType: "json",
        url: 'http://localhost:3000/get-trumps-tweets',
        method: 'GET'
    }, function(){

    }).then(function(res){

        // user click to open modal
        trigger.onclick = function() {
            var values = Object.values(res);
            client_tweets = values;
            // using underscore to randomize the tweets
            var underscoreTweet = _.sample(client_tweets);
            console.log(underscoreTweet);
            modal.style.display = "block";
            var tweet_to_append = document.getElementById('put-shit-here');
            tweet_to_append.innerHTML = underscoreTweet.content;
        }
    });

});
