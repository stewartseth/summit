$(function() {
    $('#tfa_535').before("<h1 id='thankyou'><center>Thank you for your interest in applying to Lebanon Valley College!</center></h1>");
    
    $('.section.pageSection  > .oneField:lt(6)').wrapAll("<div id='about' class='well'></div>");
    $('#about').before("<h1>About You</h1>");
    
    $('.section.pageSection  > .oneField:eq(5),.oneField:eq(6),.oneField:eq(7),.oneField:eq(8),.oneField:eq(9),.oneField:eq(10),.oneField:eq(11),.oneField:eq(12),.oneField:eq(13)').wrapAll("<div id='geographic' class='well'></div>");
    $('#geographic').before("<h1>Mailing Address</h1>");
    
    $('.oneField:eq(14),.htmlSection:eq(0),.htmlSection:eq(1),.oneField:eq(15),.oneField:eq(16)').wrapAll("<div id='citizenship' class='well'></div>");
    $('#citizenship').before("<h1>Citizenship</h1>");
    
    $('.oneField:eq(17),.oneField:eq(18),.oneField:eq(19),.oneField:eq(20),.oneField:eq(21),.oneField:eq(22),.oneField:eq(23),.oneField:eq(24),.oneField:eq(25)').wrapAll("<div id='mother' class='well'></div>");
    $('#mother').before("<h1>Parent/Guardian</h1>");
    
    $('.oneField:eq(26),.oneField:eq(27),.oneField:eq(28),.oneField:eq(29),.oneField:eq(30),.oneField:eq(31),.oneField:eq(32),.oneField:eq(33),.oneField:eq(34)').wrapAll("<div id='father' class='well'></div>");
	$('#Father').before("<h1>Parent/Guardian</h1>");
	
	$('.oneField:eq(35),.oneField:eq(36),.oneField:eq(37),.oneField:eq(38),.oneField:eq(39),.oneField:eq(40),.oneField:eq(41)').wrapAll("<div id='spouse' class='well'></div>");
    $('#spouse').before("<h1>Spouse</h1>");
    
    $('.oneField:eq(42)').wrapAll("<div id='legacy' class='well'></div>");
    $('#legacy').before("<h1>Legacy Information</h1>");
    
    $('.oneField:eq(43),.oneField:eq(44),.oneField:eq(45),.oneField:eq(46),.oneField:eq(47),.oneField:eq(48),.oneField:eq(49),.oneField:eq(50),.oneField:eq(51),.oneField:eq(52)').wrapAll("<div id='education' class='well'></div>");
    $('#education').before("<h1>Education</h1>");
    
    $('.oneField:eq(53),.oneField:eq(54),.htmlSection:eq(2),.htmlSection:eq(3),.oneField:eq(55),.oneField:eq(56)').wrapAll("<div id='official' class='well'></div>");
    $('#official').before("<h1>Make It Offical</h1>");

    

});