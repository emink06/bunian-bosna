'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "2807a569cd5df872db664de4297aaa64",
"assets/AssetManifest.json": "2a54aeefe9d818a9438b58600ce644d4",
"assets/AssetManifest.bin.json": "7de342934b03e2309294bb8905a6b91b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/Logo.svg": "d22e1a97d35958896b780096880ce63d",
"assets/assets/images/Logo.png": "5a82101fe642ee76edcec2e62229c352",
"assets/assets/translations/en.json": "90f701b91f7a7b0fda5932515e655b37",
"assets/assets/translations/bs.json": "4614a2f9991c12a12197fc65f52def36",
"assets/FontManifest.json": "3d773c7a659b47538c1498d4c63b0a1d",
"assets/fonts/MaterialIcons-Regular.otf": "4a6a7ba4aa505a6b97a2676c182dd691",
"assets/AssetManifest.bin": "83e5496ec09e99c8b0085cbbd7e55daf",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "66b365ef383a7d93653d571f554b6da3",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"version.json": "d5a5e9ce30774bb070b64a981c89efdd",
"main.dart.js": "6e64d9569a7878b660a305c820721e1e",
".git/index": "2db9a72c985821cf51ffc0378538c690",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/48/1ea3e0ff775c2187b25a47ed3cfc17f013ba8e": "cd2f3fc60479921bf93a6c59411ab7a4",
".git/objects/fd/4e922ada66ffdb8c6360e2f225e275a9db6336": "5897ba0a75d40b6065456787784a1213",
".git/objects/3b/991cec8262b8984ddf742de3fe15d3e70ff413": "a4e73aa0a724826d7459037800b62060",
".git/objects/3b/a4605907dd258b451682a9feedd8d35199103c": "dd7a08c7a933666a153c87d6ff0f6ad5",
".git/objects/65/5f56d7a95f78481ee5a1a97fd84757fe1e7f97": "fed603149dfc9176938c9754d4f69541",
".git/objects/51/b6c7cd030abc5a722a6a8ba922529b7459c77a": "f2f9559ef2a15bac76c89c793ea7e70d",
".git/objects/51/0a8595111dfc30a1d6d5bbb71c19e13a9bca10": "52b079bdc6336874132fbae732723f56",
".git/objects/51/9295d9f804bf3f80c9fa56580e151ddd9347c1": "11f480f5f2ea90911c2e0e351e811dc7",
".git/objects/a5/92a3f8148163247a4dbd46d6553ec83bb07ed8": "61b3191eb7c964a72615f71fa122268f",
".git/objects/9d/d60d4f45f43b6f2d0b2088054688b5b5c4c30b": "b3bae0737bdf168d82c8bb52b6a38f75",
".git/objects/88/e3459132ca50c0be250dfc0edead4dca88a61a": "8746487b1ad5e3ecb552c00cdf7cc78d",
".git/objects/f8/b9b169b03dfc8a6691c3bcb6522d82400ff064": "6c2b90e1cec135d8d9b65ff0c543c577",
".git/objects/42/9e1bb139edb328e15e4a6d6781130b0bab3bb7": "306c7824c5719990a79ad184420070e8",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/de/44aeb3de7dfd10fe7bd204302face21ccf59c9": "2fd1364a22efb1bb17d112194642d913",
".git/objects/15/649ddc62f3fb9df57a4f909e7eae17afdf832d": "e5ef807bb8f9f6460146ebb94409b81d",
".git/objects/9c/bb34b7306cb1a3446e96ed08d93699397d7011": "427e86658d489403f36b80c9958ab0cc",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/02/00edc6c5c69ac522d2fab88dc897bf3737854b": "65222866c68214320742ec922888809b",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/93/9a7d71c4c09aa01f0aa3e2ec46c9f93d248d80": "2b64b3fb783e8091513c961825b59f4b",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4b/64eddc398596e973ee3c2861f15a0d6b49bc11": "cc452855c0f25fe95e27c169e1014118",
".git/objects/4b/f2a61a75414a780bdb9d570b92fbeafe75102a": "bf0775d10cfb98aa93d1c7d4993a322c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d0/18b02c81df975e74e88c965370d1bfb9fbebde": "4b8f4b9025fbca88d5c5bc199451b59f",
".git/objects/6a/543aa3c7a2276424b06a1bbdc16d17ad7f413b": "d572c3a459802e6751f918a07dea3686",
".git/objects/bf/5b6d58393fade0f3bc536550a848b6588d5b81": "3c172625f72fdfd22533522a27542846",
".git/objects/bf/aeedb0e9ee91ac7e4259a7dd80cc7cbadc432c": "4f6a06947bb4f98878f565070aa01a1b",
".git/objects/c1/247b877fe4b2344b0142c81dfc2a81df112e23": "ca0a573dbe647578b603c62f128f37d7",
".git/objects/c1/3e3a41886cb4c651aa915e0d54c2fef5e817b6": "98ad7e754d036493e236bfe348511d5a",
".git/objects/c1/e3abb31382f8f1e6822bde5848904e0fdefc00": "631fd7fdc3edc91fa56a85f7d733dc16",
".git/objects/33/9836ca1bd44b05063e11456ec7e8e8572cbc3f": "e1cb2694bbf89c09eaf2a9e86c642cc5",
".git/objects/0f/aa87d6155873bd90ae8cde773206e08ecfdbe2": "6fc93f829a909b1f8e9cf2ff8cb29c3f",
".git/objects/72/8bd2e29692de9d76467963f3606fbe0d5cfe40": "65ebe73d6dcc13e030869f002adb9c79",
".git/objects/ab/0aa35702bc6aa0d1cb399caaa82784cefdde56": "f46e8e4bbfa45ca20981b3c50f39b9ef",
".git/objects/e6/fb44e875a78e1a2652aaf88d05ceb42fe8a2e1": "adcfb659c7665599f29775de3d3e9d6e",
".git/objects/94/cd482026ba37a243a718907f61e46f1d2c7963": "98b423d9211cff80ead818205b84b123",
".git/objects/94/d1e88ba9549db16d77dbb688b6a1af566d8df6": "03d4e43f572dd219c5bc515284867997",
".git/objects/49/61d86c1a5d6379daa2c697b469f808d5d38981": "2834d3a8f8a1bd3ee1168d4ee50baa64",
".git/objects/e4/53e0ff7d2587be795e27a51163085442590566": "58e699c7d77e11458999bf9a6af7f6bd",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/12/b96eb8c815ffb643e0af680d1945304a18b1a9": "e84054db54a47edefc68036cb4ae9bd8",
".git/objects/c7/d41609838965c3d036590ab88ecf8e745aeed7": "f87bdd463c0b7f187b9278ddc002d333",
".git/objects/9b/70e3e8aa13d716f9ceaf4e1b7a93e343448ce7": "6fe828cdc7e2d1b870798a7cb64d5fbd",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/ae/d7def8e7ec1ee456515ea87111552e2fca98b7": "50218b7ee4c5169ede30becdd771034e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/39/a64a6ae3be4b3255a324156d12a3aa50e368be": "d799a04b50fc32e94b4c03def084fdd4",
".git/objects/6c/0816c25267d49d5e30a7c3e9f770eec6851ecd": "ebf373307ad93b74c114c035308f8e36",
".git/objects/e3/40869711e7327d09b39014951c3910a066b70e": "243382cf9e27d39cf324bbce283c2250",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e3/82e24b66694771af8a97b166a575dbcf8c763b": "fd93928576621fe32062c4c673456a25",
".git/objects/0e/a0a63f749a482e966b57432ab5971d74131386": "5d6b5bd3aef22b51052570791ee632cc",
".git/objects/c9/7445547e38554591dbb91ea098a7426b521f3f": "33365415609d0795bab16be9d0b31260",
".git/objects/c5/cd06e65917de74c9da2c3a6a7d894033098415": "93f2ff524f354b5d953ec42457ed4617",
".git/objects/c5/e2193eaeb2da4b1234d9322205b0a7114f8f2e": "ad4bd3a4bbd410c17ed6b190a7ef21c3",
".git/objects/c5/195ad07bd23f0f3057208ef4ba23495f813996": "a5a960bb5922a816ebeed74a46a3e1d4",
".git/objects/74/eef806896f1146555bb96833b8b01983a547ad": "a60e39ea21c440e7f27f97515a1f27c9",
".git/objects/df/e4a68ef1afbb96f7b96e24810240604ac64742": "abc83d3cd9e08e25be79cdbe8ba2d128",
".git/objects/df/305f16d1d8cbd122b1654e2e48046187132d87": "142c76707ee86ad14d00a439268fcb1a",
".git/objects/79/b5809fa5ca09ead9eaea53de8c447fb6f8c536": "140341922273b33a39eee42fda84126b",
".git/objects/8a/b483324793ec5405d94e79859cb8e40c18d01b": "90878e2acb2b5e5b705045fc99ec073a",
".git/objects/db/29532241853132e83da36afd0bc513cc547f1b": "7e2203f31ee8e9be5de2dec3460a4f94",
".git/objects/47/c59f2c370fafb401dbc43cd7ab4ffe95d16686": "7d018702e53472fc5c1ff5ce54e9a423",
".git/objects/b2/3dc82ce4f4d2df0b6d7dbbdf1aa6a291c98ebd": "6b037ce138a06e04e2988081af0c6095",
".git/objects/2c/5711478420d5a84bb84ce8bf00d9506964c58d": "7c0c0ba9ff004b7bbeb7cf254891c686",
".git/objects/2c/81f570cbf7044a57cbc6197fc81d13f57b14de": "1bbaa31d999817609a6685b67859dee2",
".git/objects/70/665d0708c49340c261b4399370272404107e1e": "5dd51833d2a7e86f5dc5dd7997ba6211",
".git/objects/89/10a368095572bb5470f786a66bc383f7bf9efc": "8c336d715ba1f8982f629185f8c526f1",
".git/objects/2f/a00ccea5cbf020edd66bde9b7ecf0838e51eb7": "e5dec628b8c019588a0379d90b4a93b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ad/a60d6eef295521a9a47f1dbde96a820b14b8e5": "711e2566941447594f3fe5d33a6c7d2b",
".git/objects/09/cf9a8bf9508943abb735dbd032ec090ed37566": "0c46de2e603e83cd0c11b58bf842fdc5",
".git/objects/09/98349a74b0e0a5978c8bce3b8746a3b8a74121": "464e19687978330772816693702fdd4d",
".git/objects/da/9eac78e1cf91fde7b99272be75d4e6400c5361": "ff2125182e91c5171778fcf06326dd30",
".git/objects/da/ae4cc672336d2443e866264239fd7942443bab": "9be93e34f5e4f17c9b797275a85b0acb",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/4c/a31c02b8d0295aa2339f018fa49f79c4625373": "796c12865daea734c73b7fa90523c11b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/2b/db8167d3768bdb63177a59864acf5dce23c860": "6d6dbebde2bf5a03ffc0e05496bd3c67",
".git/objects/71/7e9605016a82c21f42da8030ab9caad0fd6acc": "1f01eceb69d0404f94fcfe79578c8189",
".git/objects/e5/6a040e02861ff1ddec30cdbdedd0e0c02423ce": "518aae1ec74cbdbe6f0332b8ce9d0cd3",
".git/objects/60/b698f7b82aef14ff5464b549e64b5f08c83d73": "f27a7b8d56bb697f7d22380d272f17fc",
".git/objects/f4/1e7938edf6dd28fed7c8ddb7460f0914711c49": "48849fd056d90f7f9f870159644dbb96",
".git/objects/aa/322d282e25db0bc2823ecda5be7e2ed3c145de": "73b4661b847808272b2b3414e154a8f3",
".git/objects/aa/6c9867536ef2901538599f8e6b723135eafffe": "eefbf467451be69b1348266dc61145cf",
".git/objects/7c/fe2028ac926f2588c2e4f6955b9cafba344cc4": "ac162c63bf85375c7cbda13a32c4b285",
".git/objects/18/47328fdbcae189786c6e7938c36a58fb18c989": "a057c93365e730c61feb7c13f2a5fbfd",
".git/objects/bc/5d31090acea3c6c0813adbbd0058981954def1": "de28766c144fb94f00408e849b04d924",
".git/objects/32/60dc90261648f61db0a1e8595b399fcd25ffa2": "dda65ce6e6fc5c2a888bfbea944951f4",
".git/objects/56/a630ca582679cb34bf965a961aa5b0e21aa33a": "3a614cd644f5bc1ae870bc2c53519e89",
".git/objects/56/14fdd3a9781043429c7da4e86c8912fa87dbcf": "1decf929aa4f085e5495901db1d5a5be",
".git/objects/5d/70d6204bde510c33d71beaa9cd183ddda19494": "8320f6fd67cb99e2ab2bd8cf50de63d1",
".git/objects/5d/c90182d67afdaf0b48d497703df03c01225007": "85e770b8783a45b5909f9c8d541ff933",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/ea/e42957e7394014cc6e50882c2b7d878f35ed63": "adee978f273a7c92ae3f88e4dc76ba57",
".git/objects/01/042fc01866ea6b3ac188f67c0837c4352f9599": "2dcd7ef2264fd84d0be2d826aaaaafbd",
".git/objects/97/3a6896a838951bf80bf5d3ad3d3f4b5ceb8b84": "c872d90fef89c8b365b838983cf80892",
".git/objects/31/c7db67df7c71ca21b5b67d6f34d179397e1e02": "c6d30d0b9a1b2f35049f2cebad4fc416",
".git/objects/31/618b99ce9295d6f3a02ec280157bbfd89ae1e6": "2ef5f2deacd7fcda7ce0b8e1c35d3226",
".git/objects/0c/f3af3a1dd5acd70e04e587742667114e60dcae": "80c4405d3f8284fe92ca27562d00bcef",
".git/objects/0c/912886a53ed09b29799102ab45ca11ea6e1394": "4e8a074be116b300946e5eb9845a4824",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/d2/c770b8ac9863121dd9ea2596e31d1e8f5303de": "479dbcd355a03154f54a5141b1212e86",
".git/objects/62/706924329ffe2a22f99c796dfacffca62a91fd": "29c454fdc54c4535d8b237cf733584b2",
".git/objects/e1/b401e268cb7001e35d2932c3ed1dae9de2672c": "a7767dea87c1888ceb974043e42527d6",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/7c6d372809bcf1b30a100c68a67a774b2c36c8": "97f3863c827b62168c76170851582ff1",
".git/objects/90/1f90a864c9b3843a2856c3f0d124ae40aa8b04": "65a63839e33131cd22691d2d1950bf52",
".git/objects/ac/5724644da02fb922ed7b52b9e25e877fcd48c6": "8309b4f9fc4b10ad9505a06c76949526",
".git/objects/d6/1c8cd0b08690013aa504a1dbd20c97c8494a86": "2ad0d88320f5c0bc3c7b0a51ac2a50a1",
".git/objects/a7/ca6b5a6702d676bef6dae8573d926e2c7d93ef": "913aab717551c30d8c13e7f60dc0700a",
".git/objects/af/150b1d0ab956e511862587cc9e1d502597a0cb": "4fd1fdc4b19f07a0cd096d5e625dbbd7",
".git/objects/af/854374add8e183eef22df17c94348da2409990": "eb69e5ea0b7c50a436ecce06d2d0d8be",
".git/objects/40/eb257d9b0c96090478e9218356c2d3457f5e87": "ac2039f3f0221b81b4068688c06a3697",
".git/objects/c3/8a3aaac7b4169b29bf6c508569d7369829ea57": "080aee2d3c85c758320f4fae1a9a738a",
".git/objects/c3/26b89c914c655f8c95ace5a777e5c7c99e92ec": "0c5f02904d7929599b9c16a6fd0aff99",
".git/objects/fe/8d9b13b162699528e011508999b45cec0ffb0e": "54863e39fb84552043d09613416c4794",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/3fc876c0f61e93fb62c769cd1530ce55135ac8": "3b9211907f52a6fee8b50d3c01f79a24",
".git/objects/4f/1f7eb8a32ee53ce421531db10c607ee0be9c96": "1786268f9eda133a93e6bb879e65e498",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/78/c61c2ba2d97392a7b882b2c67c8f58a26b3c89": "1b0a0c206a473baa977b32d516ac24ba",
".git/objects/5b/6835a5c67a2ae281fcee1ffa64fd96e01b4953": "76a2b76e81d70167bd0f080dbddee8af",
".git/objects/5b/b9e00cbaaf2d938fea964473e323101061d684": "f53b4bb0dbb28409a9c35f1cbc79333d",
".git/objects/69/bd3513bc73dda717923539e4649a8d5faddbf6": "84031898b93b602f3473d44906d3961f",
".git/objects/b1/b788a7c86a2a1527838a2fa618cbcae0bc7c7b": "a6d0a4f8ea2805cfc0748d96e45b8c84",
".git/objects/3e/249e2daeaa6272c7d2fca25c51c898e02b83f0": "acdfb1c25c247ab7a1ae57f627f312ef",
".git/objects/f0/865cdbc95a22c46f06eaf4aac3c9930d20b702": "d7ef27651b9b89cd5350248bbc72aefc",
".git/objects/58/ad7f3ce06f1c06ded785a8a38027d227ee7d3e": "6efa53aab0d5bc927898378aa5226445",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/0b/ea891f4ccf8ae07d7139ba5e3cd216d1652ca2": "5ec1a1ad53e51f2edca0527d8240d9d8",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/1a/7a17ff55a8d884dcc79c98740b80e436f1ef6f": "527d42f63e7d9cefce04c4210de8171d",
".git/objects/d7/8547b669e35b8dd3654846c3426477a242b694": "80937688131e8cbdf21959de7066bc33",
".git/objects/07/1e27030c5c340fe03a47f5dd47c03d4aeaebd2": "c28f0964cbddd90866da97bbf2a87fcb",
".git/objects/e0/15e04cb2341aa108a70f02c8b3251192f9927f": "9d411bf6a7a5e6c146603d8756d0e8c3",
".git/objects/e0/257e79eeb35ec5ab248294ba27941e3c11132d": "eeb9e9550a42dbf41193e58d1979e6a8",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/b5/1bf78dcd63f8735fe48f016c17eca798e3f88d": "ff88bf7fc971bd3b0c6a939c218f7af8",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/bb/b317a18b2f4d73df617aed4a32c2ae380221db": "83a45717b028c44aa63ecf69246ef3ac",
".git/objects/fa/2f7708ef71b5414869e5be91ed383b37a2afcb": "662aea0e8c763beed88c1a2f1f575faa",
".git/objects/27/8525043b84a2d1eb851542d9dad86b7d7d6f09": "b5dd5557e2a90f88a86bdc02555c7448",
".git/objects/37/49018d0ec1de22b17e5775272b43d592310114": "97639393c62d2e526d34b27cfe886b88",
".git/objects/03/73099a59d18fa83fa9a6de89fc07ffdb45dafe": "45ab66f4853a2c000868a380f8175f5e",
".git/objects/f5/965fc19782ac59ba21a5bc0c6c5097ebf63074": "f1382785b8447f0356a90ba2842178ca",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/3a/1a8e5cc0bc9aa588b5e266ee8e5033879f4e8a": "7b332c6415b658b29338c896f78e6959",
".git/objects/cc/416f72dd4c89142a41ba23f7bb89e749dbec81": "63a2aaa1a6ba4f442378462b36d819d1",
".git/objects/cc/f10f3818d1bbb2298a5d61e3f4c4ff78899821": "a69958361b4b3f6bc426e21cfc5505ce",
".git/objects/6e/813ed04a830151fc095835206ac7bfab1639f9": "6f730d88b7c93315d8e04ef733674043",
".git/objects/17/b14eb9d8b792f29f232e90258ee7894b0ec4ce": "3f6dece44923eb6a24426184c3262f8a",
".git/objects/17/16e5421bcfbc842cac4320f19c2c285d483b3b": "187104aa1ef3a74762b896c48c8253c4",
".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/logs/HEAD": "24e9a6aeaa322fce33cefb907479be14",
".git/logs/refs/heads/master": "24e9a6aeaa322fce33cefb907479be14",
".git/refs/heads/master": "a0bff5ded533fc88e03cc045b15db794",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "51ea57656a7a38027af7ff70a11e325a",
"index.html": "894dafa3aecad188d93885064caadc93",
"/": "894dafa3aecad188d93885064caadc93",
"icons/Icon-maskable-512.png": "e4ce7e089b3b7159891b1194d6a1fe38",
"icons/Icon-maskable-192.png": "ab8e427489a1cccc834a66d4d67525fa",
"icons/Icon-512.png": "e4ce7e089b3b7159891b1194d6a1fe38",
"icons/Icon-192.png": "ab8e427489a1cccc834a66d4d67525fa",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "36f441afefb43224363cf9793ec3a42d",
"flutter_bootstrap.js": "c08cb5d932760a51c6855788f62d4276",
"favicon.png": "6889c739bc807195a3a7ac25e465c5c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
