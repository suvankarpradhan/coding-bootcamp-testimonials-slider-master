$('.next').on('click',()=>{
    $('.profile-img>img').attr('src','images/image-john.jpg');
    $('.about-text').text(`“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`);
    $('.profile-name').html('<p>John Tarkpor &nbsp<span>Junior Front-end Developer</span></p>')
})
$('.prev').on('click',()=>{
    $('.profile-img>img').attr('src','images/image-tanya.jpg');
    $('.about-text').text(`“ I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”`);
    $('.profile-name').html('<p>Tanya Sinclair &nbsp <br /><span>UX Engineer</span></p>')
})