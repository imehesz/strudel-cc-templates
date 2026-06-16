/*
STRUDELCC_TITLE: Simple Trance
STRUDELCC_AUTHOR: Switch Angel
STRUDELCC_GENRE: Trance
STRUDELCC_COVER_IMG: https://i.imgur.com/ozJ5J2H.jpeg
STRUDELCC_TAGS: trance, electronic, techno, loop
STRUDELCC_DESC: Some description for the simple trance track.
STRUDELCC_PUBLISHED: Jun 15th, 2026
STRUDELCC_URL: https://strudel.cc/#CnNldENwbSgxNDQvNCkKJDogcygiYmQ6MiE0IikuZGVjKC4zKS5kdWNrKCIzOjQ6NSIpLmR1Y2thdHRhY2soLjE2KQogIC5kdWNrZGVwdGgoLjgpCgokOiBzKCJ3aGl0ZSExNiIpLmRlYyh0cmkucmFuZ2UoMC4wNSwuMTIpLmZhc3QoNCkpLmdhaW4oLjMpCgokOiBuKCI8MCAwIDAgMCAyIDQgMCA3IDg%2BKjE2Iikuc3ViKC03KS5yaWIoMCw0KQogIC5zKCJzYXd0b290aCIpLnNlZygxNikubyg0KS5kaW9kZSgxKQogIC5kZWxheShzbGlkZXIoMC4xMTcpKS5wYW4ocmFuZCk%3D
*/

setCpm(140/4)
// LET US TRANCE W/SWITCH ANGEL
$: s("bd:2!4")

$: n("<3@3 4 5 @3 6>*2".add("[-14,-21]")).scale("g:minor")
  .s("supersaw")
  .seg(16)

$: n("0@2 <-7 [-5 -2]>@3 <0 -3 2 1>@3".add(7)
  .add("<5 4 0 <0 2>>")
  )
  .scale("g:minor")
  .s("supersaw")
  .delay(.7).pan(rand)

$: s("pulse!16").dec(.1).fm(time).fmh(time).o(4)

$: s("sin:6").note("e2").scrub(rand.seg(16).rib(46,2))
  .delay(.8)
  .o(5)