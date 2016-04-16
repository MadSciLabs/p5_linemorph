var _d;

var _count = 0;
var START = false;
var target;

var _pic = [];
//var loc[];

var line1, line2, line3;

function setup() {
  
  loc = [
    createVector(223,68),
createVector(183,73),
createVector(134,122),
createVector(129,162),
createVector(128,232),
createVector(118,264),
createVector(134,312),
createVector(164,375),
createVector(194,411),
createVector(242,410),
createVector(248,372),
createVector(275,349),
createVector(319,337),
createVector(331,241),
createVector(330,166),
createVector(329,108),
createVector(309,76),
createVector(252,63),
createVector(192,82),
createVector(185,152),
createVector(185,156),
createVector(98,150),
createVector(81,170),
createVector(99,159),
createVector(156,167),
createVector(196,179),
createVector(190,213),
createVector(161,234),
createVector(114,227),
createVector(98,189),
createVector(144,199),
createVector(175,213),
createVector(184,268),
createVector(173,311),
createVector(203,338),
createVector(234,310),
createVector(231,215),
createVector(223,194),
createVector(246,201),
createVector(266,207),
createVector(298,180),
createVector(280,163),
createVector(245,164),
createVector(219,174),
createVector(219,147),
createVector(236,136),
createVector(295,128),
createVector(306,142),
createVector(277,126),
createVector(229,133),
createVector(220,135),
createVector(215,143),
createVector(221,359),
createVector(249,355),
createVector(212,397),
createVector(150,392)
    
];
  
  
  line1 = [
createVector(223,68),
createVector(183,73),
createVector(134,122),
createVector(129,162),
createVector(128,232),
createVector(118,264),
createVector(134,312),
createVector(164,375),
createVector(194,411),
createVector(242,410),
createVector(248,372),
createVector(275,349),
createVector(319,337),
createVector(331,241),
createVector(330,166),
createVector(329,108),
createVector(309,76),
createVector(252,63),
createVector(192,82),
createVector(185,152),
createVector(185,156),
createVector(98,150),
createVector(81,170),
createVector(99,159),
createVector(156,167),
createVector(196,179),
createVector(190,213),
createVector(161,234),
createVector(114,227),
createVector(98,189),
createVector(144,199),
createVector(175,213),
createVector(184,268),
createVector(173,311),
createVector(203,338),
createVector(234,310),
createVector(231,215),
createVector(223,194),
createVector(246,201),
createVector(266,207),
createVector(298,180),
createVector(280,163),
createVector(245,164),
createVector(219,174),
createVector(219,147),
createVector(236,136),
createVector(295,128),
createVector(306,142),
createVector(277,126),
createVector(229,133),
createVector(220,135),
createVector(215,143),
createVector(221,359),
createVector(249,355),
createVector(212,397),
createVector(150,392)//,
//createVector(278,393)
];

  line2 = [
createVector(264,75),
createVector(304,74),
createVector(316,76),
createVector(339,79),
createVector(334,192),
createVector(348,169),
createVector(385,149),
createVector(412,171),
createVector(431,223),
createVector(407,259),
createVector(363,263),
createVector(339,232),
createVector(345,306),
createVector(349,344),
createVector(306,386),
createVector(238,403),
createVector(170,399),
createVector(94,309),
createVector(91,246),
createVector(87,162),
createVector(99,130),
createVector(142,116),
createVector(198,97),
createVector(153,78),
createVector(110,104),
createVector(61,151),
createVector(19,251),
createVector(120,243),
createVector(144,220),
createVector(195,224),
createVector(210,239),
createVector(130,257),
createVector(212,243),
createVector(223,257),
createVector(227,277),
createVector(212,303),
createVector(190,357),
createVector(212,371),
createVector(237,371),
createVector(249,388),
createVector(257,369),
createVector(284,363),
createVector(275,312),
createVector(259,240),
createVector(288,238),
createVector(318,219),
createVector(283,201),
createVector(256,220),
createVector(275,201),
createVector(330,217),
createVector(338,429),
createVector(247,426),
createVector(162,426),
createVector(180,456),
createVector(263,454),
createVector(310,433)
];

  line3 = [
createVector(108,231),
createVector(89,307),
createVector(82,365),
createVector(72,406),
createVector(89,413),
createVector(99,395),
createVector(106,349),
createVector(118,309),
createVector(131,349),
createVector(123,394),
createVector(124,415),
createVector(146,418),
createVector(157,334),
createVector(232,344),
createVector(292,353),
createVector(280,425),
createVector(279,443),
createVector(294,442),
createVector(310,385),
createVector(318,346),
createVector(334,406),
createVector(341,449),
createVector(361,443),
createVector(348,394),
createVector(337,340),
createVector(333,324),
createVector(383,338),
createVector(411,346),
createVector(391,336),
createVector(423,340),
createVector(383,323),
createVector(433,329),
createVector(376,317),
createVector(428,303),
createVector(335,305),
createVector(287,279),
createVector(191,252),
createVector(147,245),
createVector(166,209),
createVector(151,189),
createVector(138,174),
createVector(136,154),
createVector(128,175),
createVector(116,175),
createVector(110,147),
createVector(96,173),
createVector(87,199),
createVector(99,230),
createVector(93,283),
createVector(89,306),
createVector(117,204),
createVector(121,197),
createVector(128,216),
createVector(113,213),
createVector(134,196),
createVector(146,196),
createVector(100,187)
];


  // The shape

  createCanvas(500, 500);
  
  //loc = line1;
  target = line1;
}


function draw() {
  
  background(255);
  
  smooth();
  noFill();
  stroke(0, 0, 0);

  
  beginShape();
  for (var i=0; i<loc.length; i++)
  {
    curveVertex(loc[i].x, loc[i].y);
    
    if (START) {
      var _d = createVector(target[i].x,target[i].y);
      _d.sub(loc[i]);
    
      if (abs(_d.mag()) > 1) {
        _d.mult(.025);
      }

      //_d.x = _d.x/1000;
      //_d.y = _d.y/1000;   
      loc[i].add(_d);  
    }
    
  }
  endShape();
  
  fill(100, 100, 100);
  //int _i = 0;
  
  textSize(22);
  text("Press Mouse to Morph", 10, 30); 

}

  function mouseClicked() {

     println(mouseX + " " + mouseY);
     _count++;
     
     switch (_count%3) {
      
       case 1:
         target = line2;
         break;
       
       case 2:
         target = line3;
         break;
         
       case 0:
         target = line1;
         break;
     }
     
     START = true;
  }
