let data=
[
    {
        id:1,
        movie_name:"Fighting for the win",
        image:"materials/Boxing.png",
        video:"materials/Fighting.mp4",
        genre:"sports"
    },
    {
        id:2,
        movie_name:"Riding Into The Sunset",
        image:"materials/Riding.png",
        video:"materials/Bike Riding 1.mp4",
        genre:"traveling"
    },
    {
        id:3,
        movie_name:"Cricket Fever",
        image:"materials/Cricket.png",
        video:"materials/cricket.mp4",
        genre:"sports"
    },
    {
        id:4,
        movie_name:"Nature's Beauty",
        image:"materials/WaterFall.png",
        video:"materials/Waterfall.mp4",
        genre:"nature"
    },
    {
        id:5,
        movie_name:"Take a Hike",
        image:"materials/Hiking.png",
        video:"materials/Hiking.mp4",
        genre:"adventure"
    },
    {
        id:6,
        movie_name:"Underwater World",
        image:"materials/Underwater.png",
        video:"materials/Underwater.mp4",
        genre:"widlife"
    }
];



function display()
{
    var output=`<div class="row" id="mst">`,count=0;
    data.forEach(movie=> {
        output+=`
        <a class="vid col-md" target="_main">
                    <figure>
                        <img class="img" onclick="play(this);" data-title=${movie.movie_name} data-text="${movie.video}" src="${movie.image}">
                            <figcaption>${movie.movie_name}</figcaption>
                    </figure>   
                 </a>
                 `
        count++;
        if(count==3)
        {
            count=0;
            output+=`</div><div class="row" id="mst">`;
        }

    });
    if(count==1){
        output+=`<div class="col-md"></div><div class="col-md"></div>`
    }
    else if(count==2){
        output+=`<div class="col-md"></div>`
    }
    output+=`</div>`
    document.getElementById('mst').innerHTML=output;
}

function loadrecommend(title)
{
    var output="";
    data.forEach(movie=> {
        if((movie.movie_name).includes(title)==true)
        {
            document.getElementById("title").innerHTML=movie.movie_name;
            document.title=movie.movie_name;
            // return;
        }
        else{
        output+=`
        <div class="row">
                        <div class="col-md-5">
                            <img class="img" onclick="play(this);" data-title=${movie.movie_name} data-text="${movie.video}" src="${movie.image}">
                        </div>
                        <div class="col-md-*" style="display: flex; font-size:20px">${movie.movie_name}</div>  
                     </div>
                    </div>
                 `
                }
    });
    document.getElementById('rec').innerHTML=output;
};
//sending location of video and title
function play(imageElement)
{
    const imageText = imageElement.getAttribute('data-text');
    const imageTitle = imageElement.getAttribute('data-title');
    window.location.href = `play.html?text=${encodeURIComponent(imageText)}&title=${imageTitle}`;
}


//login page
function check() {
                let email = $('#email').val();
                let password = $('#password').val().trim();
                let accept1  = $('#accept').val()

                if (email.includes("@")==false || email.includes(".")==false ||email!=="user1@netflix.com") {
                    $('#email-error').text('Enter a valid email address');
                    $('#email').focus();
                    return false;
                } 
                else{
                    $('#email-error').text('');
                }
                if (password!="user1234"|| password=="") {
                    $('#password-error').text('Password must be at least 6 characters');
                    $('#password').focus();
                    return false;
                }
                return call();
            }
// signup page
function check1() {
    let name=$('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let cpassword=$('$confirm-password').val();
    if (name=="") {
        $('#error-message').text('Enter a valid email address');
        return false;
    } 
                else{
                    $('#error-message').text('');
                }
                if (email.includes("@")==false || email.includes(".")==false) {
                    $('#error-message').text('Enter a valid email address');
                    return false;
                } 
                else{
                    $('#error-message').text('');
                }

                if (password.length < 6) {
                    $('#error-message').text('Password must be at least 6 characters');
                    return false;
                }
                else{
                    $('#error-message').text('');
                }
                if (password===cpassword) {
                    $('#error-message').text('Password must be at least 6 characters');
                    return false;
                }
                else{
                    
                    return true;
                }
                
}
//password visibilty
function passvis() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

function call(){
    let output=`
    <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content" style="col-mdor: black;">
                  
                    <!-- Modal Header -->
                    <div class="modal-header row">
                        <div class="col-md-1"></div>
                      <h4 class="modal-title col-md-*">Terms and Conditions</h4>
                      <button type="button" class="close col-md-1" data-dismiss="modal">×</button>
                      <div class="col-md-1"></div>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                        By accessing and using <b>Netflix</b>, you agree to comply with the following terms and conditions. This website is intended for personal and non-commercial use, and users must be at least 13 years old to access its content. All logos, images, and text are the intellectual property of <b>Netflix</b> or its licensors, and unauthorized use, distribution, or modification of any content is strictly prohibited. Users are expected to engage responsibly and not participate in any illegal activities, hacking, or misuse of copyrighted material.

                        We may col-mdlect certain user data to enhance website functionality, but your privacy remains a priority, as outlined in our Privacy Policy. The website may include external links to third-party sites, such as Netflix, for which we hold no responsibility regarding their content or policies. While we strive to provide an optimal user experience, we do not guarantee that the website will always function without errors or interruptions. Therefore, we are not liable for any losses or damages resulting from the use of this website.
                        
                        These terms are subject to updates at any time, and any modifications will be reflected on this page. Continued use of the website after changes have been made implies acceptance of the updated terms. If you have any questions or concerns, please contact us at support <b>@netflix.com</b>.
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer row">
                        <div class="col-md-*"></div>
                        <button type="submit" class="btn btn-success col-md-3" id="accept" value="accept">Accept</button>
                      <button type="button" class="btn btn-danger col-md-3" data-dismiss="modal">Close</button>
                      <!-- <div class="col-md-1"></div> -->
                    </div>
                    
                  </div>
                </div>
              </div>
    `;
    document.getElementById("modal").innerHTML=output;
    var acc=$('#accept').val();
    if(acc=="accept"){
        return true;
    }
    else{
        return false;
    }
}