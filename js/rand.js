$(document).ready(function() {

  var frases = new Array(
    'Um conciliador é alguém que alimenta um crocodilo, esperando ser devorado por último. -- Winston Churchill',
    "Uma ideia não e responsavel pelas pessoas que acreditam	nela.	-- Don Marquis",
    "A perfeita coragem é fazer sem testemunhas aquilo que outro só seria capaz de fazer com o mundo a observar --La Rochefoucauld",
    "Um homem bem educado e aquele que nunca fere os sentimentos de outras pessoas - sem querer. -- Oscar Wilde"
  );

  setInterval(frasesRand, 10000);

  function frasesRand() {
    //setTimeout(frasesRand,30000);
    randno = frases[Math.floor( Math.random() * frases.length )];
    // $('footer span').text( randno ).fadeIn(3000);

    $(this).find("footer span").animate({opacity:0})
        .queue(function(){$(this).text("randno"); $(this).dequeue()})
        .animate({opacity:1});  
  }

});
