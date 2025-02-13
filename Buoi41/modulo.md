https://wiki.vnoi.info/algo/math/modulo

42^17 mod 3233


42^1 = 42
42^2 = 1764
42^4 = 3111696

42^4 # 1550 (mod 3233)
(42^4)^2 # 1550^2 (mod 3233)     : a đồng dư với b => a mũ n đồng dư với b mũ n
(42^8) # 381 (mod 3233)
(42^8)^2 # 381^2 (mod 3233)
(42^16) # 2909 (mod 3233)
(42^16)*42 # 2909*42 (mod 3233)   : a đồng dư với b => a*c đồng dư với b*c
(42^17) # 2557 (mod 3233)