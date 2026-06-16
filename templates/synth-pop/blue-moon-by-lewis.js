/*
STRUDELCC_TITLE: Blue Moon by New Order
STRUDELCC_AUTHOR: Lewis
STRUDELCC_GENRE: Synthpop
STRUDELCC_COVER_IMG: https://i.imgur.com/u7Utl6l.jpeg
STRUDELCC_TAGS: synthpop, song, electronic, 90s
STRUDELCC_DESC: Blue Moon by New Order.
STRUDELCC_PUBLISHED: Jun 15th, 2026
STRUDELCC_URL: https://strudel.cc/#CnNldGNwbSgxMzAvNCkKIApjb25zdCBraWNrMSA9IHNvdW5kKCI8W2JkIGJkIFtiZCo0XSBbYmQqNF1dIFtiZCo0XT4iKS5iYW5rKCJsaW5uIikuZGVjYXkoMC4xNSkKY29uc3Qga2ljazIgPSBzb3VuZCgiW2JkKjRdIikuYmFuaygibGlubiIpLmRlY2F5KDAuMTUpCgpjb25zdCBoYXRzMSA9IHNvdW5kKCJbb2ggb2gqMl0qNCIpLmJhbmsoImRteCIpLmRlY2F5KDAuMSkuZ2FpbigwLjEyKQpjb25zdCBoYXRzMiA9IHNvdW5kKCJbLSBvaF0qNCIpLmJhbmsoImRteCIpLmRlY2F5KDAuMikuc3VzdGFpbigwLjEpLmdhaW4oMC4xMikKCmNvbnN0IHNuYXJlID0gc3RhY2soCiAgc291bmQoIlstIHNkXSoyIikuYmFuaygibGlubiIpLmdhaW4oMC41KSwKICBzb3VuZCgiWy0gY3BdKjIiKS5iYW5rKCJsaW5uIikuZ2FpbigwLjEpCikKCmNvbnN0IGRydW1zMSA9IHN0YWNrKGtpY2sxLGhhdHMxLHNuYXJlKQpjb25zdCBkcnVtczIgPSBzdGFjayhraWNrMixoYXRzMixzbmFyZSkKY29uc3QgZHJ1bXMzID0gc3RhY2soCiAgc291bmQoImJkIGJkIGJkIGJkIC0iKS5iYW5rKCJsaW5uIikuZGVjYXkoMC4xNSksCiAgc291bmQoIm9oIG9oIG9oIG9oIC0iKS5iYW5rKCJkbXgiKS5kZWNheSgwLjIpLnN1c3RhaW4oMC4xKS5nYWluKDAuMikKKQoKY29uc3QgYmFzczEgPSBzdGFjaygKICBub3RlKCI8PFtmMSBmMioyXSoyIFtnMSBnMioyXSoyPiBbYzEgYzIqMl0qMiBbZDEgZDIqMl0qMiBbZDEgZDIqMl0qMj4qMiIpLAopLnNvdW5kKCI8c2luZSwgZ21fc3ludGhfYmFzc18xPiIpLmRlY2F5KDAuMikuc3VzdGFpbigwLjEpCgpjb25zdCBiYXNzMiA9IHN0YWNrKAogIG5vdGUoIjw8W2YxIGYyXSoyIFtnMSBnMl0qMj4gW2MxIGMyXSoyIFtkMSBkMl0qMiBbZDEgZDJdKjI%2BKjIiKSwKKS5zb3VuZCgiPHNpbmUsIGdtX3N5bnRoX2Jhc3NfMT4iKS5kZWNheSgwLjIpLnN1c3RhaW4oMC40KQoKCmNvbnN0IHN5bnRoID0gc3RhY2soCiAgbigiPFtbMiB%2BXSBbMiB%2BXSAyIDNdIFtbMyB%2BXSBbMyB%2BXSAzIDNdPkA0IFstMSB%2BXSAtMSAtMSBbMCB%2BXSAwIDAgWzAgfl0gMCAwIFswIH5dIDAgMCIpLAopLnNvdW5kKCI8Z21fbGVhZF8yX3Nhd3Rvb3RoPiIpLnNsb3coMikuc2NhbGUoImQ0Om1pbm9yIikuYXR0YWNrKDAuMDUpLmhwZigiPDEwMDAgMjAwMD4qMTIiKS5nYWluKCIwLjQiKQoKc3RhY2soCiAgYXJyYW5nZShbMTYsa2ljazFdLFsxNixkcnVtczFdLFsyLGRydW1zM10sWzE2LGRydW1zMl0sWzEsc2lsZW5jZV0pLnJvb20oMC4xKSwKICBhcnJhbmdlKFs4LHNpbGVuY2VdLFsyNCxzeW50aF0sWzE5LHNpbGVuY2VdKS5yb29tKDAuMDUpLAogIGFycmFuZ2UoWzE2LHNpbGVuY2VdLFsxNixiYXNzMV0sWzIsc2lsZW5jZV0sWzE2LGJhc3MyXSxbMSxzaWxlbmNlXSkKICApLl9waWFub3JvbGwoKQ%3D%3D
*/


setcpm(130/4)
 
const kick1 = sound("<[bd bd [bd*4] [bd*4]] [bd*4]>").bank("linn").decay(0.15)
const kick2 = sound("[bd*4]").bank("linn").decay(0.15)

const hats1 = sound("[oh oh*2]*4").bank("dmx").decay(0.1).gain(0.12)
const hats2 = sound("[- oh]*4").bank("dmx").decay(0.2).sustain(0.1).gain(0.12)

const snare = stack(
  sound("[- sd]*2").bank("linn").gain(0.5),
  sound("[- cp]*2").bank("linn").gain(0.1)
)

const drums1 = stack(kick1,hats1,snare)
const drums2 = stack(kick2,hats2,snare)
const drums3 = stack(
  sound("bd bd bd bd -").bank("linn").decay(0.15),
  sound("oh oh oh oh -").bank("dmx").decay(0.2).sustain(0.1).gain(0.2)
)

const bass1 = stack(
  note("<<[f1 f2*2]*2 [g1 g2*2]*2> [c1 c2*2]*2 [d1 d2*2]*2 [d1 d2*2]*2>*2"),
).sound("<sine, gm_synth_bass_1>").decay(0.2).sustain(0.1)

const bass2 = stack(
  note("<<[f1 f2]*2 [g1 g2]*2> [c1 c2]*2 [d1 d2]*2 [d1 d2]*2>*2"),
).sound("<sine, gm_synth_bass_1>").decay(0.2).sustain(0.4)


const synth = stack(
  n("<[[2 ~] [2 ~] 2 3] [[3 ~] [3 ~] 3 3]>@4 [-1 ~] -1 -1 [0 ~] 0 0 [0 ~] 0 0 [0 ~] 0 0"),
).sound("<gm_lead_2_sawtooth>").slow(2).scale("d4:minor").attack(0.05).hpf("<1000 2000>*12").gain("0.4")

stack(
  arrange([16,kick1],[16,drums1],[2,drums3],[16,drums2],[1,silence]).room(0.1),
  arrange([8,silence],[24,synth],[19,silence]).room(0.05),
  arrange([16,silence],[16,bass1],[2,silence],[16,bass2],[1,silence])
  )._pianoroll()