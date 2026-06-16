/*
STRUDELCC_TITLE: Simple Techno
STRUDELCC_AUTHOR: Char Stiles
STRUDELCC_GENRE: Techno
STRUDELCC_COVER_IMG: https://i.imgur.com/h0zrRAO.jpeg
STRUDELCC_TAGS: chill, electronic, techno, loop
STRUDELCC_DESC: Some description for the simple techno track.
STRUDELCC_PUBLISHED: Jun 15th, 2026
STRUDELCC_URL: https://strudel.cc/#CnZhciBjcG0gPSAyODsKc3RhY2soCiAgc291bmQoImJkITQiKQogICAgLmJhbmsoIlJvbGFuZFRSOTA5IikKICAgIC5nYWluKDAuMzUpCiAgICAucm9vbSgwLjA1KQogICwKICAKICBub3RlKGAKICBbPGcyQDAuNSBnMkAwLjUgZzJAMC41IGcyQDAuNT4gZzNdCiAgWyBkIzJAMC41IGQjMkAwLjUgZCMyQDAuNSBkIzJAMC41IGQjMkAwLjUgZCMyQDAuNSBdCiAgW2MyQDAuNSBjMkAwLjUgYzJAMC41IF0KICBbZCMyQDAuNSBnIzFAMC41IGMyIGMyXQogIGApCiAgICAuc2xvdyg0KQogICAgLnNvdW5kKCJzYXd0b290aCIpCiAgICAuZ2FpbigwLjM1KQogICAgLmNsaXAoMSkKICAgIC5ldWNsaWRSb3QoNSwxNiwyKQogICAgLmF0dGFjaygwLjIpCiAgICAucmVsZWFzZSgwLjAxKQogICAgLnJvb20oMC45MikKICAsCiAgCiAgc291bmQoIn4gaGggfiBbaGggaGhdIH4gaGggfiBoaCIpCiAgICAuYmFuaygiUm9sYW5kVFI5MDkiKQogICAgLmdhaW4oMC4wOCkKICAgIC5jcnVzaCg1KQogICwKICAKICBzb3VuZCgifiBzZCB%2BIFtzZCB%2BIH4gc2RdIikKICAgIC5iYW5rKCJSb2xhbmRUUjkwOSIpCiAgICAuZ2FpbigiMC4xNSAwLjE1IDAuMTUgMC4xNSAwLjA5IikKICAsCiAgCikuY3BtKGNwbSk%3D
*/

var cpm = 28;
stack(
  sound("bd!4")
    .bank("RolandTR909")
    .gain(0.35)
    .room(0.05)
  ,
  
  note(`
  [<g2@0.5 g2@0.5 g2@0.5 g2@0.5> g3]
  [ d#2@0.5 d#2@0.5 d#2@0.5 d#2@0.5 d#2@0.5 d#2@0.5 ]
  [c2@0.5 c2@0.5 c2@0.5 ]
  [d#2@0.5 g#1@0.5 c2 c2]
  `)
    .slow(4)
    .sound("sawtooth")
    .gain(0.35)
    .clip(1)
    .euclidRot(5,16,2)
    .attack(0.2)
    .release(0.01)
    .room(0.92)
  ,
  
  sound("~ hh ~ [hh hh] ~ hh ~ hh")
    .bank("RolandTR909")
    .gain(0.08)
    .crush(5)
  ,
  
  sound("~ sd ~ [sd ~ ~ sd]")
    .bank("RolandTR909")
    .gain("0.15 0.15 0.15 0.15 0.09")
  ,
  
).cpm(cpm)