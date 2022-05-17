document.querySelector("#search").addEventListener("change", function () {
  var find = document.querySelector("#search").value;
  showResults(find);
});

function showResults(find) {
  console.log(find)

var response = fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAMjU5KvjETeycpR-3F9lfx3R6BEl_z6GA&type=video&part=snippet&maxResults=20&q=${find}`);

  response.then((data) => {
    data.json().then((data1) => {
      var results=data1.items;
      document.querySelector("#results").innerHTML=""
      results.forEach(video => {
          var box=document.createElement("div");

          var img=document.createElement("img");
          img.setAttribute("src",video.snippet.thumbnails.high.url)
          
          var title=document.createElement("h4");
          title.innerText=video.snippet.title
          
          var channel=document.createElement("h5");
          channel.innerText=video.snippet.channelTitle
          
                    box.addEventListener("click",function(){
                      window.location.href="showVideo.html";
                      localStorage.setItem("video",JSON.stringify(video))
                    })
          box.append(img,title,channel);

          document.querySelector("#results").append(box)
      });
    });
  });
}








var video=JSON.parse(localStorage.getItem("video"));

  document.querySelector("#frame").setAttribute("src",`https://www.youtube.com/embed/${video.id.videoId}`)
  document.querySelector("#title").innerHTML=video.snippet.title;
  document.querySelector("#channel").innerHTML=video.snippet.channelTitle;
  document.querySelector("#description").innerHTML=video.snippet.description;

