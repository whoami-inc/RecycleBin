/*!
  Copyright 2016 iyortml
*/

/* Dragable */
$(function() {
	$( "#me-bin-main" ).draggable();
});

/* Restore down */
$(document).ready(function(){
    $("#me-restore-down").click(function(){
		$("#me-maximize").show();
        $("#me-bin-main").animate({width: '60%', height: '70%'}, "slow");
		$("#me-restore-down").hide();
    });
	$("#me-maximize").click(function(){
		$("#me-restore-down").show();
        $("#me-bin-main").animate({top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%'}, "slow");
		$("#me-maximize").hide();
    });
	$("#me-manimize").click(function(){
		$("#bin-minim").show();
        $("#me-bin-main").hide();
    });
	$("#bin-minim").click(function(){
        $("#me-bin-main").show("slow");
		$("#bin-minim").hide();
    });
});

/* Bin show|hide */
$(document).ready(function(){
	$("#btn-bin").dblclick(function(){
		$("#me-bin-main").show("slow");
		$("#bin-minim").hide();
	});
});
$(document).ready(function(){
	$("#btn-bin-x").click(function(){
		$("#me-bin-main").hide();
		$("#bin-minim").hide();
	});
});

/* Bin Beranda */
$(document).ready(function(){
	$("#btn-bin0").click(function(){
		$("#me-bin-label").show("slow");
		$("#me-bin").hide();
		$("#me-bin-tampilan").hide();
	});
});

/* Bin Main */
$(document).ready(function(){
	$("#btn-bin1").click(function(){
		$("#me-bin").show("slow");
		$("#me-bin-tampilan").hide();
		$("#me-bin-label").hide();
	});
});

/* Bin Delete */
$(document).ready(function(){
	$("#btn-hps1").click(function(){
		$("#hps1").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps2").click(function(){
		$("#hps2").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps3").click(function(){
		$("#hps3").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps4").click(function(){
		$("#hps4").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps5").click(function(){
		$("#hps5").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps6").click(function(){
		$("#hps6").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps7").click(function(){
		$("#hps7").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps8").click(function(){
		$("#hps8").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps9").click(function(){
		$("#hps9").hide();
		$(".hopuse").show();
	});
});
$(document).ready(function(){
	$("#btn-hps10").click(function(){
		$("#hps10").hide();
		$(".hopuse").show();
	});
});

/* Kembalikan Delete */
$(document).ready(function(){
	$("#hps-kembalikan").click(function(){
		$("#hps1").show("slow");
		$("#hps2").show("slow");
		$("#hps3").show("slow");
		$("#hps4").show("slow");
		$("#hps5").show("slow");
		$("#hps6").show("slow");
		$("#hps7").show("slow");
		$("#hps8").show("slow");
		$("#hps9").show("slow");
		$("#hps10").show("slow");
		$("#hps-kembalikan").hide();
	});
});

function hpsKembali(){
	alert("Sukses di kembalikan! klik OK");
}

/* Bin Tampilan */
$(document).ready(function(){
	$("#btn-bin2").click(function(){
		$("#me-bin-tampilan").show("slow");
		$("#me-bin").hide();
		$("#me-bin-label").hide();
	});
});

/* Tampilan Bin Head */
function meBinOrange() {
    var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meBinCyan() {
    var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "cyan";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
function meBinIndigo() {
    var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "indigo ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meBinDimgray() {
    var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "dimgray ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}
function meBinCrimson() {
    var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "crimson ";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "white";
}

/* Tampilan Bin Background */
function meBinOrangeBG() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "orange";
}
function meBinCyanBG() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "cyan";
}
function meBinIndigoBG() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "indigo ";
}
function meBinDimgrayBG() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "dimgray ";
}
function meBinCrimsonBG() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "crimson ";
}

/*Reset Bin*/
function meBinResetAll() {
    var x = document.getElementsByClassName("me-bin-tengah");
    x[0].style.background = "white ";
    x[0].style.color = "#1d1d1d";
	var x = document.getElementsByClassName("me-bin-kehed");
    x[0].style.background = "orange";
    x[0].style.opacity = "0.6";
    x[0].style.filter = "alpha(opacity=60)";
    x[0].style.color = "#1d1d1d";
}
