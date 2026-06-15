stack(
  note("[e1 e1 e2 e1] [f1 e1 ~ e1] [e1 e1 e2 e1] [g1 f1 d1 ~]")
    .s("saw")
    .lpf(sine.range(10, 2000).slow(8))
    .lpq(3)
    .dist(slider(0.8,0,3,0.2))
    .crush(4)
    .amp(0.4)
    .delay(0.2)
    .gain(0.8),
    
  s("bd:4 ~ bd:4 [~ bd:4]")
    .dist(0.8)
    .amp(1.2)
    .gain(0.5),
    
  s("~ sd:5 ~ sd:5")
    .dist(1.5)
    .crush(3)
    .amp(1.3)
    .gain(0.5),
    
  s("hh(5,8)")
    .fast(2)
    .pan(rand) 
    .amp(0.6)
    .gain(0.5)
).cpm(105/4)