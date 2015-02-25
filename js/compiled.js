$(document).ready(function() {
	$("div.step_hidden").each(function(index) {
		$(this).css({'display':'none'});
	});
	//Step1
	$("#btnNext_step1").click(function () {
		return_step1=validFields("step1", true);
		if(return_step1==true){
			addParticipants();
			$("#step1").slideUp("slow");
			$("#step2").slideDown("slow");
		}
		
	});
	//Step2
	$("#btnPrevious_step2").click(function () {
		$("#step2").slideUp("slow");
		$("#step1").slideDown("slow");
	});
	$("#btnNext_step2").click(function () {
		return_step2=validFields("step2", true);
		if(return_step2==true){
			$("#step2").slideUp("slow");
			$("#step3").slideDown("slow");
		}
		
	});
	//Step3
	$("#btnPrevious_step3").click(function () {
		$("#step3").slideUp("slow");
		$("#step2").slideDown("slow");
	});
	$("#btnNext_step3").click(function () {
		return_step3=validFields("step3", true);
		if(return_step3==true){
			$("#step3").slideUp("slow");
			//Generate Summary
			generateSumary();
			$("#step4").slideDown("slow");
		}
	});
	//Step4
	$("#btnPrevious_step4").click(function () {
		$("#step4").slideUp("slow");
		$("#step3").slideDown("slow");
	});
	$("#btnNext_step4").click(function () {
		return_step4=validFields("step4", true);
		if(return_step4==true){
			$("#step4").slideUp("slow");
			$("#step5").slideDown("slow");
		}
	});
	//Step5
	$("#btnNext_step5").click(function () {
		return_step5=validFields("step5", true);
		if(return_step5==true){
			$("#step5").slideUp("slow");
			$("#step6").slideDown("slow");
		}
	});
});

/*==Valid Fields==*/
function validFields(step, validEmails){
	var counter = 0;
	$("#"+step+" input.required,#"+step +" select.required").each(function(index) {
		contentField = jQuery(this).val();	
		if(contentField == '' || contentField == null || contentField == '0'){
			$(this).css({'background-color':'#fbe8e8','border-color':'#e31010'});
			if(counter == 0){
				jQuery(this).focus();
			}
			counter++;
		}else{
			$(this).css({'background-color':'#fff','border-color':'#ccc'});
		}
	});

	if(counter > 0){
		$("#"+step+" .error").html("<label>Por favor, llene todos los campos requeridos.</label>").slideDown();
		validA= false;
	}else{
		$("#"+step+" .error").html("");
		validA= true;
	}	

	if(validEmails==true){
		$("#"+step+" input.validEmail").each(function(index) {
			contentField = jQuery(this).val();
			two = validateEmail(contentField);
			if(!two){
				$(this).css({'background-color':'#fbe8e8','border-color':'#e31010'});
				$("#"+step+" .error").html("<label>Por favor, ingrese un E-mail Correcto.</label>").slideDown();
				validB= false;
			}else{
				$(this).css({'background-color':'#fff','border-color':'#ccc'});
				$("#"+step+" .error").html("");
				validB= true;
			}
		});	
	}
	if((validEmails==true && validA==true && validB==true) || (validEmails==false && validA==true)){
		return true;
	}else{
		return false;
	}
}

/*==Add Dynamic Fields==*/
function addParticipants(){
	total=$("#numberParticipants").val();
	conca="";
	if(total==0){
		conca+=
		'<div class="row">'+
			'<div class="large-12 medium-12 columns">'+
				'<h4>No hay Participantes</h4>'+
			'</div>'+
		'</div>';
	}
	else if(total>0){
		for (var i = 1; i <= total; i++) {			
			conca+=
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<h4>Participante#'+i+'</h4>'+
					'<input type="hidden" value="Participante#'+i+'"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Nombre" name="name_participant_'+i+'" id="name_participant_'+i+'" class="required"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Puesto" name="job_participant_'+i+'" id="job_participant_'+i+'"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Direcci&oacute;n" name="address_participant_'+i+'" id="address_participant_'+i+'" class="required"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Pa&iacute;s" name="country_participant_'+i+'" id="country_participant_'+i+'" class="required"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Tel&eacute;fono" name="telephone_participant_'+i+'" id="telephone_participant_'+i+'" class="required"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="Celular" name="cel_participant_'+i+'" id="cel_participant_'+i+'"/>'+
				'</div>'+
			'</div>'+
			'<div class="row">'+
				'<div class="large-12 medium-12 columns">'+
					'<input type="text" placeholder="E-mail" name="email_participant_'+i+'" id="email_participant_'+i+'" class="required validEmail"/>'+
				'</div><hr>'+
			'</div>';
		};
	}
	$("#participants").html(conca);
}

/*==Email Validator==*/
function validateEmail(email){
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	isValid = emailPattern.test(email);
	if(isValid){
		return true;
	}else{
		return false;
	}
}

/*==Generate Summary==*/
function generateSumary(){
	conca="<table><tbody>";
	jQuery("form#payment_online input[type='text'], form#payment_online input[type='hidden']").each(function(key, value) {
		value = $(this).val();
		name= $(this).attr("placeholder");
		tipo=$(this).attr("type");

		if(tipo=="hidden"){
			conca+="<tr><td colspan='2'><strong>"+value+"</strong></td></tr>";
		}else{
			conca+="<tr><td>"+name+":</td><td>"+value+"</td></tr>";
		}
	});
	conca+="</tbody></table>";
	$("#summary").html(conca);
}