/*
STRUDELCC_TITLE: Industrial Template 0001
STRUDELCC_AUTHOR: Zero Hour 
STRUDELCC_GENRE: Industrial
STRUDELCC_COVER_IMG: https://i.imgur.com/t3Hwqzz.jpeg
STRUDELCC_TAGS: industrial, loop, electronic, techno
STRUDELCC_DESC: Some description for the industrial template.
STRUDELCC_PUBLISHED: Jun 15th, 2026
STRUDELCC_URL: https://strudel.cc/#c3RhY2soCiAgbm90ZSgiW2UxIGUxIGUyIGUxXSBbZjEgZTEgfiBlMV0gW2UxIGUxIGUyIGUxXSBbZzEgZjEgZDEgfl0iKQogICAgLnMoInNhdyIpCiAgICAubHBmKHNpbmUucmFuZ2UoMTAsIDIwMDApLnNsb3coOCkpCiAgICAubHBxKDMpCiAgICAuZGlzdChzbGlkZXIoMC44LDAsMywwLjIpKQogICAgLmNydXNoKDQpCiAgICAuYW1wKDAuNCkKICAgIC5kZWxheSgwLjIpCiAgICAuZ2FpbigwLjgpLAogICAgCiAgcygiYmQ6NCB%2BIGJkOjQgW34gYmQ6NF0iKQogICAgLmRpc3QoMC44KQogICAgLmFtcCgxLjIpCiAgICAuZ2FpbigwLjUpLAogICAgCiAgcygifiBzZDo1IH4gc2Q6NSIpCiAgICAuZGlzdCgxLjUpCiAgICAuY3J1c2goMykKICAgIC5hbXAoMS4zKQogICAgLmdhaW4oMC41KSwKICAgIAogIHMoImhoKDUsOCkiKQogICAgLmZhc3QoMikKICAgIC5wYW4ocmFuZCkgCiAgICAuYW1wKDAuNikKICAgIC5nYWluKDAuNSkKKS5jcG0oMTA1LzQp
*/
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