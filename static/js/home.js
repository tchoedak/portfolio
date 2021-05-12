$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat tenzin.human<br/>" + 
      "><span class='caret'>$</span> interests: python, SQL, databases, data pipelines, software engineering<br/> ^100" +
      "><span class='caret'>$</span> job: data engineer at <a href='http://www.doximity.com/'>Doximity</a><br/> ^100" +
      "><span class='caret'>$</span> alias: tchoedak <br/> ^100" +
      "><span class='caret'>$</span> github: <a href='http://www.github.com/tchoedak/'>tchoedak</a><br/> ^100" +
      "><span class='caret'>$</span> linkedin: <a href='https://www.linkedin.com/in/tenzin-choedak-a06ba282/'>tenzin-choedak</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
