// Javascript
var images = [
'./no_bg/img (1).png',
'./no_bg/img (2).png',
'./no_bg/img (3).png',
'./no_bg/img (4).png',
'./no_bg/img (5).png',
'./no_bg/img (6).png',
'./no_bg/img (7).png',
'./no_bg/img (8).png',
'./no_bg/img (9).png',
'./no_bg/img (10).png',
'./no_bg/img (11).png',
'./no_bg/img (12).png',
'./no_bg/img (13).png',
'./no_bg/img (14).png',
'./no_bg/img (15).png',
'./no_bg/img (16).png',
'./no_bg/img (17).png',
'./no_bg/img (18).png',
'./no_bg/img (19).png',
'./no_bg/img (20).png',
'./no_bg/img (21).png',
'./no_bg/img (22).png',
'./no_bg/img (23).png',
'./no_bg/img (24).png',
'./no_bg/img (25).png',
'./no_bg/img (26).png',
'./no_bg/img (27).png',
'./no_bg/img (28).png',
'./no_bg/img (29).png',
'./no_bg/img (30).png',
'./no_bg/img (31).png',
'./no_bg/img (32).png',
'./no_bg/img (33).png',
'./no_bg/img (34).png',
'./no_bg/img (35).png',
'./no_bg/img (36).png',
'./no_bg/img (37).png',
'./no_bg/img (38).png',
'./no_bg/img (39).png',
'./no_bg/img (40).png',
'./no_bg/img (41).png',
'./no_bg/img (42).png',
'./no_bg/img (43).png',
'./no_bg/img (44).png',
'./no_bg/img (45).png',
'./no_bg/img (46).png',
'./no_bg/img (47).png',
'./no_bg/img (48).png',
'./no_bg/img (49).png',
'./no_bg/img (50).png',
'./no_bg/img (51).png',
'./no_bg/img (52).png',
'./no_bg/img (53).png',
'./no_bg/img (54).png',
'./no_bg/img (55).png',
'./no_bg/img (56).png',
'./no_bg/img (57).png',
'./no_bg/img (58).png',
'./no_bg/img (59).png',
'./no_bg/img (60).png',
'./no_bg/img (61).png',
'./no_bg/img (62).png',
'./no_bg/img (63).png',
'./no_bg/img (64).png',
'./no_bg/img (65).png',
'./no_bg/img (66).png',
'./no_bg/img (67).png',
'./no_bg/img (68).png',
'./no_bg/img (69).png',
'./no_bg/img (70).png',
'./no_bg/img (71).png',
'./no_bg/img (72).png',
'./no_bg/img (73).png',
'./no_bg/img (74).png',
'./no_bg/img (75).png',
'./no_bg/img (76).png',
'./no_bg/img (77).png',
'./no_bg/img (78).png',
'./no_bg/img (79).png',
'./no_bg/img (80).png',
'./no_bg/img (81).png',
'./no_bg/img (82).png',
'./no_bg/img (83).png',
'./no_bg/img (84).png',
'./no_bg/img (85).png',
'./no_bg/img (86).png',
'./no_bg/img (87).png',
'./no_bg/img (88).png',
'./no_bg/img (89).png',
'./no_bg/img (90).png',
'./no_bg/img (91).png',
'./no_bg/img (92).png',
'./no_bg/img (93).png',
'./no_bg/img (94).png',
'./no_bg/img (95).png',
'./no_bg/img (96).png',
'./no_bg/img (97).png',
'./no_bg/img (98).png',
'./no_bg/img (99).png',
'./no_bg/img (100).png',
'./no_bg/img (101).png',
'./no_bg/img (102).png',
'./no_bg/img (103).png',
'./no_bg/img (104).png',
'./no_bg/img (105).png',
'./no_bg/img (106).png',
'./no_bg/img (107).png',
'./no_bg/img (108).png',
'./no_bg/img (109).png',
'./no_bg/img (110).png',
'./no_bg/img (111).png',
'./no_bg/img (112).png',
'./no_bg/img (113).png',
'./no_bg/img (114).png',
'./no_bg/img (115).png',
'./no_bg/img (116).png',
'./no_bg/img (117).png',
'./no_bg/img (118).png',
'./no_bg/img (119).png',
'./no_bg/img (120).png',
'./no_bg/img (121).png',
'./no_bg/img (122).png',
'./no_bg/img (123).png',
'./no_bg/img (124).png',
'./no_bg/img (125).png',
'./no_bg/img (126).png',
'./no_bg/img (127).png',
'./no_bg/img (128).png',
'./no_bg/img (129).png',
'./no_bg/img (130).png',
'./no_bg/img (131).png',
'./no_bg/img (132).png',
'./no_bg/img (133).png',
'./no_bg/img (134).png',
'./no_bg/img (135).png',
'./no_bg/img (136).png',
'./no_bg/img (137).png',
'./no_bg/img (138).png',
'./no_bg/img (139).png',
'./no_bg/img (140).png',
'./no_bg/img (141).png',
'./no_bg/img (142).png',
'./no_bg/img (143).png',
'./no_bg/img (144).png',
'./no_bg/img (145).png',
'./no_bg/img (146).png',
'./no_bg/img (147).png',
];

var m = [
'./no_bg_m/1.jpeg',
'./no_bg_m/2.jpeg',
];

document.getElementById("my_button").addEventListener("click", function() {
  document.getElementById("preview").src = images[Math.floor(Math.random()*images.length)]
});
document.getElementById("my_button_m").addEventListener("click", function() {
  document.getElementById("preview").src = m[Math.floor(Math.random()*m.length)]
})
