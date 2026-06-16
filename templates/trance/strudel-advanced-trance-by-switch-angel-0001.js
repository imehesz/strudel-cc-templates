/*
STRUDELCC_TITLE: Advenced Trance
STRUDELCC_AUTHOR: Switch Angel
STRUDELCC_GENRE: Trance
STRUDELCC_COVER_IMG: https://i.imgur.com/ozJ5J2H.jpeg
STRUDELCC_TAGS: trance, electronic, techno, loop
STRUDELCC_DESC: Some description for the advanced trance track.
STRUDELCC_PUBLISHED: Jun 15th, 2026
STRUDELCC_URL: https://strudel.cc/#Ly8gc2FtcGxlcygnaHR0cDovL2xvY2FsaG9zdDo1NDMyJykKc2V0Q3BtKDE0MC80KQovLyBMRVQgVVMgVFJBTkNFIFcvU1dJVENIIEFOR0VMCiQ6IHMoImJkOjIhNCIpCgokOiBuKCI8M0AzIDQgNSBAMyA2PioyIi5hZGQoIlstMTQsLTIxXSIpKS5zY2FsZSgiZzptaW5vciIpCiAgLnMoInN1cGVyc2F3IikKICAuc2VnKDE2KQoKJDogbigiMEAyIDwtNyBbLTUgLTJdPkAzIDwwIC0zIDIgMT5AMyIuYWRkKDcpCiAgLmFkZCgiPDUgNCAwIDwwIDI%2BPiIpCiAgKQogIC5zY2FsZSgiZzptaW5vciIpCiAgLnMoInN1cGVyc2F3IikKICAuZGVsYXkoLjcpLnBhbihyYW5kKQoKJDogcygicHVsc2UhMTYiKS5kZWMoLjEpLmZtKHRpbWUpLmZtaCh0aW1lKS5vKDQpCgokOiBzKCJzaW46NiIpLm5vdGUoImUyIikuc2NydWIocmFuZC5zZWcoMTYpLnJpYig0NiwyKSkKICAuZGVsYXkoLjgpCiAgLm8oNSk%3D 
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