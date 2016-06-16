
var jBrands_card = '#cc-number';
// var jBrands_code = '#cc-cvc';
// var jBrands_date = '#cc-exp';

jQuery(function ($) {

  $(jBrands_card).payment('formatCardNumber');
  // $(jBrands_code).payment('formatCardCVC');
  // $(jBrands_date).payment('formatCardExpiry');

  $(jBrands_card).blur(function(){
    $(this).toggleClass('invalid', !$.payment.validateCardNumber($(this).val()) );
  });
  $(jBrands_card).focus(function(){
    $(this).removeClass('invalid');
  });

  // $(jBrands_code).blur(function(){
  //   var cardType = $.payment.cardType($(jBrands_card).val());
  //   $(this).toggleClass('invalid', !$.payment.validateCardCVC($(this).val(), cardType) );
  // });
  // $(jBrands_code).focus(function(){
  //   $(this).removeClass('invalid');
  // });
  //
  // $(jBrands_date).blur(function(){
  //   $(this).toggleClass('invalid', !$.payment.validateCardExpiry($(jBrands_date).payment('cardExpiryVal')) );
  // });
  // $(jBrands_date).focus(function(){
  //   $(this).removeClass('invalid');
  // });

})
