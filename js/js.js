$(function() {
    //$( "#wfPgIndex-1" ).wrap( "<div class='well'></div>" );
    

    //$('.wForm').before('<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">60%</div></div>');


     
    $('#tfa_860-D, #tfa_924-D, #tfa_725-D, #tfa_657-D, #tfa_662-D, #tfa_782-D, #tfa_1092-D, #tfa_1094, #tfa_3356-D').wrapAll("<div id='about' class='well'></div>");
    $('#about').before("<h1 id='thankyou'><center>Thank you for your interest in applying to Lebanon Valley College!</center></h1>");

    $('#tfa_1-D, #tfa_2-D, #tfa_3-D, #tfa_4-D, #tfa_5-D, #tfa_7-D, #tfa_984-D, #tfa_981-D, #tfa_982, #tfa_10-D, #tfa_11-D, #tfa_12-D, #tfa_480-D, #tfa_13-D, #tfa_532-D, #tfa_533-D, #tfa_534-D').wrapAll("<div id='geographic' class='well'></div>");
    $('#geographic').before("<h1>About You</h1>");
    $("#tfa_5").attr("placeholder","MM/DD/YYYY");
    $("#tfa_533").attr("placeholder","123-456-7890");
    $("#tfa_534").attr("placeholder","123-456-7890");
    $("#tfa_532").attr("placeholder","student@email.com");
 
    $('#tfa_537-D, #tfa_541, #tfa_542, #tfa_558-D, #tfa_543-D, #tfa_3388-D').wrapAll("<div id='citizenship' class='well'></div>");
    $('#citizenship').before("<h1>Citizenship</h1>");
  
    $('#tfa_564-D, #tfa_570-D, #tfa_576-D, #tfa_577-D, #tfa_578-D, #tfa_579-D, #tfa_580-D, #tfa_581-D, #tfa_584-D').wrapAll("<div id='parent1' class='well'></div>");
    $('#parent1').before("<h1 id='parent1_h1'>Parent/Guardian</h1>");
    
    $('#tfa_593-D, #tfa_605-D, #tfa_612-D, #tfa_614-D, #tfa_616-D, #tfa_618-D, #tfa_620-D, #tfa_624-D, #tfa_630-D').wrapAll("<div id='parent2' class='well'></div>");
	$('#parent2').before("<h1 id='parent2_h1' >Parent/Guardian</h1>");
	
	$('#tfa_633-D, #tfa_634-D, #tfa_640-D, #tfa_641-D, #tfa_642-D, #tfa_643-D').wrapAll("<div id='spouse' class='well' style='display: none;'></div>");
    $('#spouse').before("<h1 id='spouse_h1' style='display:none;'>Spouse</h1>");

    $('#tfa_647-D, #tfa_987-D, #tfa_988-D, #tfa_989-D').wrapAll("<div id='legacy' class='well'></div>");
    $('#tfa_987-D, #tfa_988-D, #tfa_989-D').wrapAll("<div id='legacy_info' ></div>");
    $('#legacy').before("<h1>Legacy Information</h1>");

    $('#tfa_839-D, #tfa_1415, #tfa_1476, #tfa_1478-D, #tfa_1539, #tfa_1600, #tfa_1602-D, #tfa_1663, #tfa_1724, #tfa_842-D').wrapAll("<div id='college' class='well'></div>");
    $('#tfa_991-D, #tfa_1787, #tfa_1848, #tfa_1726-D, #tfa_1022, #tfa_1083, #tfa_1108-D, #tfa_1169, #tfa_1230, #tfa_1232-D, #tfa_1293, #tfa_1354').wrapAll("<div id='highschool' class='well'></div>");
    $('#college').before("<h1>Education</h1>");
    
    $('#tfa_839-D, #tfa_1415, #tfa_1476').wrapAll("<div id='college1' ></div>");
    $('#tfa_1478-D, #tfa_1539, #tfa_1600').wrapAll("<div id='college2' ></div>");
    $('#tfa_1602-D, #tfa_1663, #tfa_1724').wrapAll("<div id='college3' ></div>");
    $('#college').after("<div id='add_college' class='add_another'><a href='javascript:void(null);' onclick='addSchool(\"college\"); return false;'><span>Add Another College</span></a></div>");
    $('#college2').hide();
    $('#college3').hide();

    $('#tfa_991-D, #tfa_1787, #tfa_1848').wrapAll("<div id='highschool1' ></div>");
    $('#tfa_1726-D, #tfa_1022, #tfa_1083').wrapAll("<div id='highschool2' ></div>");
    $('#tfa_1108-D, #tfa_1169, #tfa_1230').wrapAll("<div id='highschool3' ></div>");
    $('#tfa_1232-D, #tfa_1293, #tfa_1354').wrapAll("<div id='highschool4' ></div>");
    $('#highschool').after("<div id='add_highschool' class='add_another'><a href='javascript:void(null);' onclick='addSchool(\"highschool\"); return false;'><span>Add Another High School</span></a></div>");
    $('#highschool2').hide();
    $('#highschool3').hide();
    $('#highschool4').hide();

    $('#tfa_1084-D, #tfa_1850-D, #tfa_1852-D, #tfa_1854-D').wrapAll("<div id='awards' class='well'></div>");
    $('#awards').before("<h1>Honors and Awards</h1>");
    $('#awards').after("<div id='add_award' class='add_another'><a href='javascript:void(null);' onclick='addAward(); return false;'><span>Add Another Award</span></a></div>");
    $('#tfa_1850-D').hide();
    $('#tfa_1852-D').hide();
    $('#tfa_1854-D').hide();

    $('#tfa_1085-D, #tfa_1089-D, #tfa_1859-D, #tfa_1881-D, #tfa_1867-D, #tfa_1885-D, #tfa_1875-D, #tfa_1925-D, #tfa_1895-D, #tfa_1929-D, #tfa_1903-D, #tfa_1933-D, #tfa_1911-D, #tfa_1889-D, #tfa_1919-D, #tfa_1937-D').wrapAll("<div id='activities' class='well'></div>");
    $('#tfa_1085-D, #tfa_1089-D').wrapAll("<div id='activity1' ></div>");
    $('#tfa_1859-D, #tfa_1881-D').wrapAll("<div id='activity2' ></div>");
    $('#tfa_1867-D, #tfa_1885-D').wrapAll("<div id='activity3' ></div>");
    $('#tfa_1875-D, #tfa_1925-D').wrapAll("<div id='activity4' ></div>");
    $('#tfa_1895-D, #tfa_1929-D').wrapAll("<div id='activity5' ></div>");
    $('#tfa_1903-D, #tfa_1933-D').wrapAll("<div id='activity6' ></div>");
    $('#tfa_1911-D, #tfa_1889-D').wrapAll("<div id='activity7' ></div>");
    $('#tfa_1919-D, #tfa_1937-D').wrapAll("<div id='activity8' ></div>");
    $('#activities').before("<h1>Activities</h1>");
    $('#activities').after("<div id='add_activity' class='add_another'><a href='javascript:void(null);' onclick='addActivity(); return false;'><span>Add Another Activity</span></a></div>");
    $('#activity2').hide();
    $('#activity3').hide();
    $('#activity4').hide();
    $('#activity5').hide();
    $('#activity6').hide();
    $('#activity7').hide();
    $('#activity8').hide();  

    $('#tfa_1105, #tfa_1106, #tfa_1097-D').wrapAll("<div id='essay' class='well'></div>");
    $('#essay').before("<h1>Essay</h1>");  
    $('#tfa_2323-D, #tfa_2324').wrapAll("<div  class='well'></div>");
    
    $('#tfa_845').wrapAll("<div id='official' class='well'></div>");
    $('#official').before("<h1>Make it Offical</h1>");  
/*
    //$('.oneField:eq(71),.oneField:eq(72)').wrapAll("<div id='honors_awards' class='well'></div>");
    //$('#honors_awards').before("<h1>Honors/Awards</h1>");
    /*
    $('.oneField:eq(53),.oneField:eq(54),.htmlSection:eq(2),.htmlSection:eq(3),.oneField:eq(55),.oneField:eq(56)').wrapAll("<div id='official' class='well'></div>");
    $('#official').before("<h1>Make It Offical</h1>");*/
    
    $('.wFormContainer').before('<div id="header" style="background-color: #002F5D">' +
		'<div id="logo">' +
			'<div id="LVCLogo">' +
            	'<img src="http://www.lvc.edu/admission/application/images/StudentApplication.png" height="70px" alt="LVC Logo" border="0" /></a>' +
			'</div>' +
    	'</div>' +
	'</div>');

studentTypeSelector();
spouseEnabler();
legacyEnabler();
earlyDecision();

$( "#tfa_860" ).change(function() {
  studentTypeSelector();
  earlyDecision();
});
$( "#tfa_5" ).focus(function() {
  $( "div.kalendae.k-floating" ).css("top", "+=50px");
});
$( "#tfa_659, #tfa_658" ).change(function() {
  earlyDecision();
});
$( "#tfa_985, #tfa_986" ).change(function() {
  spouseEnabler();
});
$( "#tfa_651, #tfa_652" ).change(function() {
  legacyEnabler();
});

$( "#tfa_847, #tfa_848" ).change(function() {
  troubleMaker("suspension");
});

$( "#tfa_850, #tfa_851" ).change(function() {
  troubleMaker("felony");
});

//College
// Month
$("#tfa_1368 option:first").text("Month");
$("#tfa_1429 option:first").text("Month");
$("#tfa_1492 option:first").text("Month");
$("#tfa_1553 option:first").text("Month");
$("#tfa_1616 option:first").text("Month");
$("#tfa_1677 option:first").text("Month"); 
// Year
$("#tfa_1398 option:first").text("Year");
$("#tfa_1459 option:first").text("Year");
$("#tfa_1522 option:first").text("Year");
$("#tfa_1583 option:first").text("Year");
$("#tfa_1646 option:first").text("Year");
$("#tfa_1707 option:first").text("Year"); 
// HS
$("#tfa_1801 option:first").text("Month");
$("#tfa_1740 option:first").text("Month");
$("#tfa_1036 option:first").text("Month");
$("#tfa_992 option:first").text("Month");
$("#tfa_1122 option:first").text("Month");
$("#tfa_1183 option:first").text("Month"); 
$("#tfa_1246 option:first").text("Month");
$("#tfa_1307 option:first").text("Month"); 
// Year
$("#tfa_1770 option:first").text("Year");
$("#tfa_1831 option:first").text("Year");
$("#tfa_1005 option:first").text("Year");
$("#tfa_1066 option:first").text("Year"); 
$("#tfa_1152 option:first").text("Year");
$("#tfa_1213 option:first").text("Year");
$("#tfa_1276 option:first").text("Year");
$("#tfa_1337 option:first").text("Year"); 


});
function addSchool(level) {
    if (level == 'college') {
        if (document.querySelector("#college2").style.display == "none") {
            $("#college2").show();
        } else if (document.querySelector("#college3").style.display == "none") {
            $("#college3").show();
            $('#add_college').hide();
        }
    } else if (level == 'highschool') {
        if (document.querySelector("#highschool2").style.display == "none") {
            $("#highschool2").show();
        } else if (document.querySelector("#highschool3").style.display == "none") {
            $("#highschool3").show();
        } else if (document.querySelector("#highschool4").style.display == "none") {
            $("#highschool4").show();
            $('#add_highschool').hide();
        }
    }
}

function addAward() {
    if (document.querySelectorAll(".oneField")[91].style.display == "none") {
        document.querySelectorAll(".oneField")[91].style.display = "block"
    } else if (document.querySelectorAll(".oneField")[92].style.display == "none") {
        document.querySelectorAll(".oneField")[92].style.display = "block"
    } else if (document.querySelectorAll(".oneField")[93].style.display == "none") {
        document.querySelectorAll(".oneField")[93].style.display = "block"
        $('#add_award').hide();
    }
}

function addActivity() {
    if (document.querySelector("#activity2").style.display == "none") {
        $("#activity2").show();
    } else if (document.querySelector("#activity2").style.display == "none") {
        $("#activity2").show();
    } else if (document.querySelector("#activity3").style.display == "none") {
        $("#activity3").show();
    } else if (document.querySelector("#activity4").style.display == "none") {
        $("#activity4").show();
    } else if (document.querySelector("#activity5").style.display == "none") {
        $("#activity5").show();
    } else if (document.querySelector("#activity6").style.display == "none") {
        $("#activity6").show();
    } else if (document.querySelector("#activity7").style.display == "none") {
        $("#activity7").show();
    } else if (document.querySelector("#activity8").style.display == "none") {
        $("#activity8").show();
        $('#add_activity').hide();
    } 
}
function studentTypeSelector() {
    if ($("#tfa_860").children("option").filter(":selected").text() == 'First Time Freshman') {
    	$("#tfa_1092-D").show();
        $("#tfa_1094").show();
        $("#tfa_1106").hide();
        $("#tfa_1105").show();
        $("#college").hide();
        $("#add_college").hide();
        $("#tfa_2897").show();
        document.getElementById("tfa_2897").disabled=false;
        $("#tfa_2923").show();
        document.getElementById("tfa_2923").disabled=false;
        $("#tfa_2936").show();
        document.getElementById("tfa_2936").disabled=false;
        if ($("#tfa_924").children("option").filter(":selected").text() == 'Athletic Training') {
            $("#tfa_924").val("");
        }

    } else if ($("#tfa_860").children("option").filter(":selected").text() == 'Transfer Student') {
        $("#tfa_1105").hide();
        $("#tfa_1106").show();
        $("#college").show();
        $("#add_college").show();
        $("#tfa_2897").hide();
        document.getElementById("tfa_2897").disabled=true;
        $("#tfa_2923").hide();
        document.getElementById("tfa_2923").disabled=true;
        $("#tfa_2936").hide();
        document.getElementById("tfa_2936").disabled=true;
        if ($("#tfa_924").children("option").filter(":selected").text() == 'Athletic Training') {
            $("#tfa_924").val("");
        } else if ($("#tfa_924").children("option").filter(":selected").text() == 'Physical Therapy') {
            $("#tfa_924").val("");
        } 
        if ($("#tfa_725").children("option").filter(":selected").text() == 'Athletic Training') {
            $("#tfa_725").val("");
        }
    } else {

    }
}
function earlyDecision() {
    if($('#tfa_659').is(':checked') || $("#tfa_860").children("option").filter(":selected").text() == 'Transfer Student') {
        $("#tfa_1092-D").hide();
        $("#tfa_1094").hide();
        $("#tfa_1095").attr('checked', true);
    } else if ($("#tfa_658").is(':checked') && $("#tfa_860").children("option").filter(":selected").text() == 'First Time Freshman' ) {
        $("#tfa_1092-D").show();
        $("#tfa_1094").show();
        $("#tfa_1095").attr('checked', false);
    } else {
        $("#tfa_1092-D").show();
        $("#tfa_1094").show();
    }
}
function spouseEnabler() {
    if($('#tfa_985').is(':checked')) {
        $("#parent1").hide();
        $("#parent2").hide();
        $("#parent1_h1").hide();
        $("#parent2_h1").hide();
        $("#spouse").show();
        $("#spouse_h1").show();
    } else if ($("#tfa_986").is(':checked')) {
        $("#spouse").hide();
        $("#spouse_h1").hide();
        $("#parent1").show();
        $("#parent2").show();
        $("#parent1_h1").show();
        $("#parent2_h1").show();
    } else {
        $("#spouse").hide();
        $("#spouse_h1").hide();
        $("#parent1").hide();
        $("#parent2").hide();
        $("#parent1_h1").hide();
        $("#parent2_h1").hide();
    }
}
function legacyEnabler() {
    if($('#tfa_651').is(':checked')) {
        $("#legacy_info").show();
    } else if ($("#tfa_652").is(':checked')) {
        $("#legacy_info").hide();
    } else {
        $("#legacy_info").hide();
    }
}
function troubleMaker(crime) {
    if (crime == 'suspension') {
        if($('#tfa_847').is(':checked')) {
            $("#tfa_1103-D").show();
        } else if ($("#tfa_848").is(':checked')) {
            $("#tfa_1103-D").hide();
        } 
    } else if (crime == 'felony') {
        //tfa_850, #tfa_851
        if($('#tfa_850').is(':checked')) {
            $("#tfa_1101-D").show();
        } else if ($("#tfa_851").is(':checked')) {
            $("#tfa_1101-D").hide();
        } 
    }

}








