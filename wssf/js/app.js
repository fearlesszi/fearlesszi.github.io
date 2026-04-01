// --- 1. 左侧目录配置 ---
const categories = [
    { id: 'monohull', name: '单体帆船', icon: 'fa-sailboat' },
    { id: 'catamaran', name: '双体帆船', icon: 'fa-ship' },
    { id: 'event', name: '帆船赛事', icon: 'fa-trophy' },
    { id: 'gear', name: '帆船配件', icon: 'fa-anchor' },
    { id: 'community', name: '帆船社区', icon: 'fa-users' },
    { id: 'design', name: '帆船设计', icon: 'fa-pen-ruler' },
    { id: 'vlogger', name: '帆船博主', icon: 'fa-video' },
    { id: 'show', name: '船展', icon: 'fa-map-location-dot' },
    { id: 'other', name: '其他', icon: 'fa-circle-plus' }
];

// --- 2. 品牌数据源 ---
// 帮你自动生成 9个类目 x 10个 = 90个 空白占位符
let database = [
    // 单体帆船
    { category: 'monohull', name: 'Hanse Yachts', logo: 'images/hanse-logo.jpg', link: 'https://hanseyachts.com/gb/' },
    { category: 'monohull', name: 'Beneteau', logo: 'images/Beneteau-logo.jpg', link: 'https://www.beneteau.com/' },
    { category: 'monohull', name: 'Hallberg-Rassy', logo: 'images/hallberg-rassy-logo.jpg', link: 'https://www.hallberg-rassy.com/' },
    { category: 'monohull', name: 'Swan Yachts', logo: 'images/Swan-logo.jpg', link: 'https://www.nautorswan.com/' },
    { category: 'monohull', name: 'Oyster Yachts', logo: 'images/Oyster-logo.jpg', link: 'https://oysteryachts.com/' },
    { category: 'monohull', name: 'Jeanneau', logo: 'images/jeanneau-logo.jpg', link: 'https://www.jeanneau.com/' },
    { category: 'monohull', name: 'Amel Yachts', logo: 'images/Amel-logo.jpg', link: 'https://amel.fr/en/home/' },
    { category: 'monohull', name: 'Contest Yachts', logo: 'images/Contest-logo.jpg', link: 'https://www.contestyachts.com/' },
    { category: 'monohull', name: 'X-Yachts', logo: 'images/xyacht-logo.jpg', link: 'https://www.x-yachts.com/en/' },
    { category: 'monohull', name: 'KB Alubouw', logo: 'images/kb-logo.jpg', link: 'https://www.kbalubouw.nl/' },
    { category: 'monohull', name: 'KM Yachtbuilders', logo: 'images/km-logo.jpg', link: 'https://kmyachtbuilders.com/' },
    { category: 'monohull', name: 'Bavaria Yachts', logo: 'images/bavaria-logo.jpg', link: 'https://www.bavariayachts.com/' },
    { category: 'monohull', name: 'Arcona Yachts', logo: 'images/arcona-logo.jpg', link: 'https://www.arconayachts.se/' },
    { category: 'monohull', name: 'ICE Yachts', logo: 'images/ICE-logo.jpg', link: 'https://www.iceyachts.it/' },
    { category: 'monohull', name: 'Solaris Yachts', logo: 'images/solaris-logo.jpg', link: 'https://www.solarisyachts.com/' },
    { category: 'monohull', name: 'J Composites', logo: 'images/jcomposites-logo.jpg', link: 'https://www.jcomposites.eu/' },
    { category: 'monohull', name: 'Grand Soleil', logo: 'images/grandsoleil-logo.jpg', link: 'https://www.grandsoleil.net/' },
    { category: 'monohull', name: 'Pure Yachts', logo: 'images/pure-logo.jpg', link: 'https://www.pure.yachts/' },
    { category: 'monohull', name: 'Pogo Structures', logo: 'images/pogo-logo.jpg', link: 'https://www.pogostructures.com/' },
    { category: 'monohull', name: 'Northman', logo: 'images/northman-logo.jpg', link: 'https://northman.pl/' },
    { category: 'monohull', name: 'N’Fun Yacht', logo: 'images/nfun-logo.jpg', link: 'https://nfunyacht.com/' },
    { category: 'monohull', name: 'Catalina Yachts', logo: 'images/catalina-logo.jpg', link: 'https://www.catalinayachts.com/' },
    { category: 'monohull', name: 'RM Yachts', logo: 'images/rm-logo.jpg', link: 'https://www.rm-yachts.com/en/home/' },
    { category: 'monohull', name: 'Esse Boats', logo: 'images/esse-logo.jpg', link: 'https://esseboats.ch/en/' },
    { category: 'monohull', name: 'Bente Yachts', logo: 'images/bente-logo.jpg', link: 'https://benteyachts.com/' },
    { category: 'monohull', name: 'Haber Yachts', logo: 'images/haber-logo.jpg', link: 'https://haber-yachts.com/en/' },
    { category: 'monohull', name: 'Leonardo Yachts', logo: 'images/leonardo-logo.jpg', link: 'https://www.leonardoyachts.com/' },
    { category: 'monohull', name: 'Swallow Yachts', logo: 'images/swallow-logo.jpg', link: 'https://swallowyachts.com/' },
    { category: 'monohull', name: 'VIKO Yachts', logo: 'images/viko-logo.jpg', link: 'https://www.vikoyachts.com/' },
    { category: 'monohull', name: 'TES Yachts', logo: 'images/tes-logo.jpg', link: 'https://www.tes-yacht.pl/' },
    { category: 'monohull', name: 'XP-19', logo: 'images/xp19.jpg', link: 'https://xp-19.com/' },
    { category: 'monohull', name: 'CNB Yachts', logo: 'images/CNB-logo.jpg', link: 'https://www.cnbyachts.com/' },
    { category: 'monohull', name: 'Saffier Yachts', logo: 'images/saffier-logo.jpg', link: 'https://saffieryachts.com/' },
    { category: 'monohull', name: 'Dufour Yachts', logo: 'images/dufour-logo.jpg', link: 'https://www.dufour-yachts.com/en/' },
    { category: 'monohull', name: 'Zanon-Nautic', logo: 'images/zanon-nautic-logo.jpg', link: 'https://www.zanon-nautic.de/' },
    { category: 'monohull', name: 'Deltania Yachts', logo: 'images/deltania-logo.jpg', link: 'https://deltania-yachts.de/' },
    { category: 'monohull', name: 'Sarch', logo: 'images/sarch-logo.jpg', link: 'https://www.sarch.eu/' },
    { category: 'monohull', name: 'Far East Boats', logo: 'images/fareast-logo.jpg', link: 'https://www.fareastboats.com/' },
    { category: 'monohull', name: 'Dehler Yachts', logo: 'images/dehler-logo.jpg', link: 'https://dehler.com/' },
    { category: 'monohull', name: 'Spirit Yachts', logo: 'images/Spirit-logo.jpg', link: 'https://spirityachts.com/' },
    { category: 'monohull', name: 'Performance', logo: 'images/Performance-logo.jpg', link: 'https://www.performanceclassicyachts.com/' },
    { category: 'monohull', name: 'Baltic Yachts', logo: 'images/balticyachts-logo.jpg', link: 'https://www.balticyachts.fi/' },
    { category: 'monohull', name: 'Southern Wind Yachts', logo: 'images/sws-logo.jpg', link: 'https://www.sws-yachts.com/' },
    { category: 'monohull', name: 'Perini Navi', logo: 'images/perininavi-logo.jpg', link: 'https://www.perininavi.it/' },
    { category: 'monohull', name: 'Vitters Yachts', logo: 'images/vitters-logo.jpg', link: 'https://www.vitters.com/' },
    { category: 'monohull', name: 'McConaghy', logo: 'images/mcconaghy-logo.jpg', link: 'https://mcconaghyboats.com/' },
    { category: 'monohull', name: 'Meta Yachts', logo: 'images/meta-logo.jpg', link: 'https://meta-yachts.com/en/' },
    { category: 'monohull', name: 'Vismara', logo: 'images/vismara-logo.jpg', link: 'https://www.vismara-mc.com/' },
    { category: 'monohull', name: 'Wally', logo: 'images/wally-logo.jpg', link: 'https://www.wally.com/en-us/' },
    { category: 'monohull', name: 'Azuree', logo: 'images/azuree-logo.jpg', link: 'https://azuree.com.tr/' },
    { category: 'monohull', name: 'Neo Yachts', logo: 'images/neo-logo.jpg', link: 'https://neoyachts.com/' },
    { category: 'monohull', name: 'Ventis Yachts', logo: 'images/ventis-logo.jpg', link: 'https://www.ventis.nl/' },
    { category: 'monohull', name: 'Wauquiez', logo: 'images/wauquiez-logo.jpg', link: 'https://www.wauquiez.com/' },
    { category: 'monohull', name: 'Puffin', logo: 'images/puffin-logo.jpg', link: 'https://www.puffin.nl/' },
    { category: 'monohull', name: 'Hutting Yachts', logo: 'images/hutting-logo.jpg', link: 'https://www.hutting-yachts.com/' },
    { category: 'monohull', name: 'Viator Marine', logo: 'images/viator-logo.jpg', link: 'https://www.viatormarine.com/' },
    { category: 'monohull', name: 'Alubat', logo: 'images/alubat-logo.jpg', link: 'https://www.alubat.com/' },
    { category: 'monohull', name: 'Allures Yachting', logo: 'images/allures-logo.jpg', link: 'https://www.allures.com/en/' },
    { category: 'monohull', name: 'Garcia Yachts', logo: 'images/garcia-logo.jpg', link: 'https://www.garciayachts.com/en' },
    { category: 'monohull', name: 'Bestevaer Yachts', logo: 'images/bestevaer-logo.jpg', link: 'https://bestevaer.com/' },
    { category: 'monohull', name: 'Sunbeam Yachts', logo: 'images/sunbeam-logo.jpg', link: 'https://www.sunbeam-yachts.com/en/' },
    { category: 'monohull', name: 'Black Pepper', logo: 'images/blackpepper-logo.jpg', link: 'https://www.blackpepper.fr/' },
    { category: 'monohull', name: 'YYachts', logo: 'images/Y-logo.jpg', link: 'https://www.yyachts.de/en/' },
    { category: 'monohull', name: 'Najad Yachts', logo: 'images/najad-logo.jpg', link: 'https://najad.se/' },
    { category: 'monohull', name: 'Rustler Yachts', logo: 'images/rustler-logo.jpg', link: 'https://www.rustleryachts.com/' },
    { category: 'monohull', name: 'Tartan Yachts', logo: 'images/Tartan-logo.jpg', link: 'https://tartanyachts.com/' },
    { category: 'monohull', name: 'Southerly Yachts', logo: 'images/Southerly-logo.jpg', link: 'https://southerly-yachts.com/' },
    { category: 'monohull', name: 'Tofinou Yachts', logo: 'images/tofinou-logo.jpg', link: 'https://tofinou.com/' },
    { category: 'monohull', name: 'Moody Yachts', logo: 'images/Moody-logo.jpg', link: 'https://moody-yachts.com/gb/' },
    { category: 'monohull', name: 'Pegasus Yachts', logo: 'images/Pegasus-logo.jpg', link: 'https://pegasus-yachts.com/' },
    { category: 'monohull', name: 'Essence Yachts', logo: 'images/Essence-logo.jpg', link: 'https://www.essenceyachts.com/en/' },
    { category: 'monohull', name: 'Trintella Yachts', logo: 'images/Trintella-logo.jpg', link: 'https://www.trintellayachts.com/' },
    { category: 'monohull', name: 'Nauticat', logo: 'images/Nauticat-logo.jpg', link: 'https://nauticat.com/' },
    { category: 'monohull', name: 'Royal Huisman', logo: 'images/royalhuisman-logo.jpg', link: 'https://www.royalhuisman.com/' },
    { category: 'monohull', name: 'Sirius Yachts', logo: 'images/sirius-logo.jpg', link: 'https://www.sirius-yachts.com/' },

    // 双体帆船
    { category: 'catamaran', name: 'Antares', logo: 'images/Antares.jpg', link: 'https://antarescatamarans.com' },
   { category: 'catamaran', name: 'Aquila', logo: 'images/aquila.jpg', link: 'https://www.aquilaboats.com' },
   { category: 'catamaran', name: 'Astusboats', logo: 'images/astusboats.jpg', link: 'https://www.astusboats.com' },
   { category: 'catamaran', name: 'Aventura', logo: 'images/aventura.jpg', link: 'https://www.aventura-catamarans.com' },
   { category: 'catamaran', name: 'Balance', logo: 'images/Balance.jpg', link: 'https://balancecatamarans.com' },
   { category: 'catamaran', name: 'Bali', logo: 'images/bali.jpg', link: 'https://www.bali-catamarans.com' },
   { category: 'catamaran', name: 'Broadblue', logo: 'images/broadblue.jpg', link: 'https://www.broadblue.com' },
   { category: 'catamaran', name: 'Catana', logo: 'images/catana.jpg', link: 'https://catana.com' },
   { category: 'catamaran', name: 'Catamarans', logo: 'images/catamarans.jpg', link: 'https://www.catamarans.com/' },
   { category: 'catamaran', name: 'Cervetti', logo: 'images/cervetti.jpg', link: 'https://cervetti-catamarans.com' },
   { category: 'catamaran', name: 'Comar', logo: 'images/comar.jpg', link: 'https://www.comaryachts.it' },
   { category: 'catamaran', name: 'Corsairmarine', logo: 'images/corsairmarine.jpg', link: 'https://corsairmarine.com' },
   { category: 'catamaran', name: 'Dazcat', logo: 'images/dazcat.jpg', link: 'https://dazcat.com' },
   { category: 'catamaran', name: 'Dragonfly', logo: 'images/dragonfly.jpg', link: 'https://dragonfly.dk' },
   { category: 'catamaran', name: 'Dufourcats', logo: 'images/dufourcats.jpg', link: 'https://www.dufour-catamarans.com' },
   { category: 'catamaran', name: 'Excess', logo: 'images/excess.jpg', link: 'https://excess-catamarans.com' },
   { category: 'catamaran', name: 'Fountaine-Pajot', logo: 'images/fountaine-pajot.jpg', link: 'https://www.catamarans-fountaine-pajot.com' },
   { category: 'catamaran', name: 'Gunboat', logo: 'images/gunboat.jpg', link: 'https://www.gunboat.com' },
   { category: 'catamaran', name: 'HH', logo: 'images/hh.jpg', link: 'https://www.hhcatamarans.com' },
   { category: 'catamaran', name: 'Heysea', logo: 'images/heysea.jpg', link: 'https://www.heysea.com' },
   { category: 'catamaran', name: 'IC', logo: 'images/ic.jpg', link: 'https://www.independentcatamaran.com' },
   { category: 'catamaran', name: 'Island-Spirit', logo: 'images/Island-spirit.jpg', link: 'https://islandspiritcatamarans.com' },
   { category: 'catamaran', name: 'Ita', logo: 'images/ita.jpg', link: 'https://www.itacatamarans.com' },
   { category: 'catamaran', name: 'Kinetic', logo: 'images/kinetic.jpg', link: 'https://www.kineticyachts.com' },
   { category: 'catamaran', name: 'Knysna', logo: 'images/knysna.jpg', link: 'https://knysnayachtco.com' },
   { category: 'catamaran', name: 'Lagoon', logo: 'images/lagoon.jpg', link: 'https://www.catamarans-lagoon.com' },
   { category: 'catamaran', name: 'Leopard', logo: 'images/leopard.jpg', link: 'https://www.leopardcatamarans.com' },
   { category: 'catamaran', name: 'Libertist', logo: 'images/Libertist.jpg', link: 'https://libertist.eu' },
   { category: 'catamaran', name: 'Lightwave', logo: 'images/lightwave.jpg', link: 'https://www.lightwaveyachts.com' },
   { category: 'catamaran', name: 'Maverick', logo: 'images/maverick.jpg', link: 'https://maverickyachts.co.za' },
   { category: 'catamaran', name: 'Max-Cruise', logo: 'images/Max-cruise.jpg', link: 'https://maxcruisemarine.com' },
   { category: 'catamaran', name: 'Mazarin', logo: 'images/mazarin.jpg', link: 'https://www.mazarin.com' },
   { category: 'catamaran', name: 'Moonyacht', logo: 'images/moonyacht.jpg', link: 'https://moonyacht.pl' },
   { category: 'catamaran', name: 'Nautitech', logo: 'images/nautitech.jpg', link: 'https://www.nautitechcatamarans.com' },
   { category: 'catamaran', name: 'Neel', logo: 'images/neel.jpg', link: 'https://www.neel-trimarans.com' },
   { category: 'catamaran', name: 'O', logo: 'images/o.jpg', link: 'https://www.o-yachts.com' },
   { category: 'catamaran', name: 'Odisea', logo: 'images/odisea.jpg', link: 'https://www.wamayachts.com' },
   { category: 'catamaran', name: 'ORC', logo: 'images/orc.jpg', link: 'https://ocean-rider-catamarans.com' },
   { category: 'catamaran', name: 'Outremer', logo: 'images/outremer.jpg', link: 'https://catamaran-outremer.com' },
   { category: 'catamaran', name: 'Privilege', logo: 'images/privilege.jpg', link: 'https://www.privilegemarine.com' },
   { category: 'catamaran', name: 'Rapido', logo: 'images/rapido.jpg', link: 'https://rapidotrimarans.com' },
   { category: 'catamaran', name: 'Royalcape', logo: 'images/royalcape.jpg', link: 'https://royalcape-catamarans.com' },
   { category: 'catamaran', name: 'Seawind', logo: 'images/seawind.jpg', link: 'https://www.seawindcats.com' },
   { category: 'catamaran', name: 'Slyder', logo: 'images/slyder.jpg', link: 'https://slyder-catamarans.com' },
   { category: 'catamaran', name: 'Stfrancis', logo: 'images/stfrancis.jpg', link: 'https://stfranciscatamarans.com' },
   { category: 'catamaran', name: 'Sunreef', logo: 'images/sunreef.jpg', link: 'https://sunreef-yachts.com' },
   { category: 'catamaran', name: 'Swisscat', logo: 'images/swisscat.jpg', link: 'http://catamaran-swisscat.com' },
   { category: 'catamaran', name: 'Trimaran-Tricat', logo: 'images/trimaran-tricat.jpg', link: 'https://www.trimaran-tricat.com' },
   { category: 'catamaran', name: 'Vaan', logo: 'images/vaan.jpg', link: 'https://vaanyachts.nl' },
   { category: 'catamaran', name: 'Vision', logo: 'images/vision.jpg', link: 'https://visionyachts.com' },
   { category: 'catamaran', name: 'Voyage', logo: 'images/voyage.jpg', link: 'https://voyageyachts.com' },
   { category: 'catamaran', name: 'Windelo', logo: 'images/windelo.jpg', link: 'https://www.windelo-catamaran.com' },
   { category: 'catamaran', name: 'Xquisite', logo: 'images/xquisite.jpg', link: 'https://xquisiteyachts.com' },

    // 帆船赛事
    { category: 'event', name: 'Classe Mini', logo: 'images/classemini.jpg', link: 'https://www.classemini.com/' },
    { category: 'event', name: 'Falmouth Classics regatta', logo: 'images/FCR.jpg', link: 'https://www.falmouthclassics.org.uk/' },
    { category: 'event', name: 'Mini Globe Race', logo: 'images/MGR.jpg', link: 'https://classglobe580.com/' },
    { category: 'event', name: 'Cowes Classics Regatta', logo: 'images/CowesCR.jpg', link: 'https://www.cowesclassicsregatta.org/' },
    { category: 'event', name: 'Classic Channel Regatta', logo: 'images/CCR.jpg', link: 'https://www.classic-channel-regatta.eu/' },
    { category: 'event', name: 'R2AK', logo: 'images/r2ak.jpg', link: 'https://r2ak.com/' },
    { category: 'event', name: 'Seventy48', logo: 'images/seventy48.jpg', link: 'https://seventy48.com/' },
    { category: 'event', name: 'Jester Challenge', logo: 'images/jesterchallenge.jpg', link: 'https://jesterchallenge.org/' },
    { category: 'event', name: 'Mini Transat', logo: 'images/minitransat.jpg', link: 'https://minitransat.fr/' },
    { category: 'event', name: 'Golden Globe Race', logo: 'images/GGR.jpg', link: 'https://goldengloberace.com/' },
    { category: 'event', name: 'Ocean Globe Race', logo: 'images/OGR.jpg', link: 'https://oceangloberace.com/' },
    { category: 'event', name: 'Baja Ha-Ha', logo: 'images/bajahah.jpg', link: 'https://www.baja-haha.com/' },
    { category: 'event', name: 'The Atlantic Cup', logo: 'images/The-Atlantic-Cup.jpg', link: 'https://www.atlanticcup.org/' },
    { category: 'event', name: 'World ARC', logo: 'images/world-arc.jpg', link: 'https://www.worldcruising.com/worldarc/' },
    { category: 'event', name: 'ARC Plus', logo: 'images/acrplus.jpg', link: 'https://www.worldcruising.com/arc_plus/' },
    { category: 'event', name: 'ARC', logo: 'images/AtlanticRallyCruisers.jpg', link: 'https://www.worldcruising.com/arc/' },

    // 帆船配件
    { category: 'gear', name: 'Seldén', logo: 'images/selden.jpg', link: 'https://www.seldenmast.com/' },
    { category: 'gear', name: 'North Sails', logo: 'images/northsails.jpg', link: 'https://www.northsails.com/' },
    { category: 'gear', name: 'Wilford', logo: 'images/wilford.jpg', link: 'http://www.wilfordsails.com/' },
    { category: 'gear', name: 'Elvstrøm Sails', logo: 'images/elvstromsails.jpg', link: 'https://www.elvstromsails.com/' },
    { category: 'gear', name: 'Marlow Ropes', logo: 'images/marlowropes.jpg', link: 'https://www.marlowropes.com/' },
    { category: 'gear', name: 'Blue Shark', logo: 'images/blueshark.jpg', link: 'https://www.blueshark.cc/' },
    { category: 'gear', name: 'Harken', logo: 'images/harken.jpg', link: 'https://www.harken.com/' },
    { category: 'gear', name: 'Lewmar', logo: 'images/lewmar.jpg', link: 'https://www.lewmar.com/' },
    { category: 'gear', name: 'Antal', logo: 'images/antal.jpg', link: 'https://www.antal.it/' },
    { category: 'gear', name: 'Karver Systems', logo: 'images/karver.jpg', link: 'https://www.karver-systems.com/' },
    { category: 'gear', name: 'Lofrans', logo: 'images/lofrans.jpg', link: 'https://www.lofrans.com/' },
    { category: 'gear', name: 'Maxwell Marine', logo: 'images/maxwellmarine.jpg', link: 'https://www.maxwellmarine.com/' },
    { category: 'gear', name: 'B&G', logo: 'images/bandg.jpg', link: 'https://www.bandg.com/' },
    { category: 'gear', name: 'Raymarine', logo: 'images/raymarine.jpg', link: 'https://www.raymarine.com/' },
    { category: 'gear', name: 'Victron Energy', logo: 'images/victronenergy.jpg', link: 'https://www.victronenergy.com/' },
    { category: 'gear', name: 'Mastervolt', logo: 'images/mastervolt.jpg', link: 'https://www.mastervolt.com/' },
    { category: 'gear', name: 'Fischer Panda', logo: 'images/fischerpanda.jpg', link: 'https://www.fischerpanda.de/' },
    { category: 'gear', name: 'Cummins Onan', logo: 'images/cumminsonan.jpg', link: 'https://www.cummins.com/generators/marine' },
    { category: 'gear', name: 'Volvo Penta', logo: 'images/volvopenta.jpg', link: 'https://www.volvopenta.com/' },
    { category: 'gear', name: 'Yanmar Marine', logo: 'images/yanmarmarine.jpg', link: 'https://www.yanmar.com/global/marine/' },
    { category: 'gear', name: 'VETUS', logo: 'images/vetus.jpg', link: 'https://www.vetus.com/' },
    { category: 'gear', name: 'Torqeedo', logo: 'images/torqeedo.jpg', link: 'https://www.torqeedo.com/' },
    { category: 'gear', name: 'Oceanvolt', logo: 'images/oceanvolt.jpg', link: 'https://oceanvolt.com/' },
    { category: 'gear', name: 'ePropulsion', logo: 'images/epropulsion.jpg', link: 'https://www.epropulsion.com/' },

    // 帆船社区
    { category: 'community', name: 'Cruisers Forum', logo: 'images/cruisersforum.jpg', link: 'https://www.cruisersforum.com/' },
    { category: 'community', name: 'Sailing Anarchy', logo: 'images/sailinganarchy.jpg', link: 'https://forums.sailinganarchy.com/' },
    { category: 'community', name: 'YBW Forums', logo: 'images/ybwforums.jpg', link: 'https://forums.ybw.com/' },
    { category: 'community', name: 'SailNet', logo: 'images/sailnet.jpg', link: 'https://www.sailnet.com/' },
    { category: 'community', name: 'YCA', logo: 'images/youngcruisers.jpg', link: 'https://www.youngcruisers.org/' },
    { category: 'community', name: 'Boat Design Net', logo: 'images/boatdesignnet.jpg', link: 'https://www.boatdesign.net/' },
    { category: 'community', name: 'Downeast Boat Forum', logo: 'images/downeastboatforum.jpg', link: 'https://downeastboatforum.com/' },
    { category: 'community', name: 'Ribnet', logo: 'images/ribnet.jpg', link: 'https://www.rib.net/' },

    // 帆船设计

    // 帆船博主

    // 船展
    { category: 'show', name: 'Southampton International Boat Show', logo: 'images/southamptonboatshow.jpg', link: 'https://www.southamptonboatshow.com/' },
    { category: 'show', name: 'Annapolis Boat Shows', logo: 'images/annapolisboatshows.jpg', link: 'https://www.annapolisboatshows.com/' },
    { category: 'show', name: 'Newport International Boat Show', logo: 'images/newportboatshow.jpg', link: 'https://www.newportboatshow.com/' },
    { category: 'show', name: 'Sanctuary Cove International Boat Show', logo: 'images/sanctuary-cove-boat-show.jpg', link: 'https://www.sanctuarycoveboatshow.com.au/' },
    { category: 'show', name: 'British Motor Yacht Show', logo: 'images/bmysuk.jpg', link: 'https://www.britishmotoryachtshow.com/' },
    { category: 'show', name: 'Barclays Jersey Boat Show', logo: 'images/jerseyboatshow.jpg', link: 'https://www.jerseyboatshow.com/' },
    { category: 'show', name: 'Palma International Boat Show', logo: 'images/pibs.jpg', link: 'https://www.palmainternationalboatshow.com/' },
    { category: 'show', name: 'Palm Beach International Boat Show', logo: 'images/pbibs.jpg', link: 'https://www.pbboatshow.com/' },
    { category: 'show', name: 'Thailand International Boat Show', logo: 'images/thailandinternationalboatshow.jpg', link: 'https://www.thailandinternationalboatshow.com/' },
    { category: 'show', name: 'Adelaide Multihull Show', logo: 'images/adelaideboatshow.jpg', link: 'https://www.adelaideboatshow.com.au/' },
    { category: 'show', name: 'Art Explora Festival', logo: 'images/artexplora.jpg', link: 'https://www.artexplora.org/' },
    { category: 'show', name: 'Miami International Boat Show', logo: 'images/Miami-International-Boat-Show.jpg', link: 'https://www.miamiyachtshow.com/' },
    { category: 'show', name: 'Boot Düsseldorf', logo: 'images/boot-usseldorf.jpg', link: 'https://www.boot.com/' },
    { category: 'show', name: 'Grand Pavois de La Rochelle', logo: 'images/grand-pavois.jpg', link: 'https://www.grand-pavois.com/' },
    { category: 'show', name: 'International Multihull Show', logo: 'images/multicoque-online.jpg', link: 'https://www.multicoque-online.com/' },
    { category: 'show', name: 'Sanya International Boat Show', logo: 'images/boatingsanya.jpg', link: 'https://www.boatingsanya.com/' },
    { category: 'show', name: 'Fort Lauderdale International Boat Show', logo: 'images/flibs.jpg', link: 'https://www.flibs.com/' },
    { category: 'show', name: 'CNR Avrasya Boat Show (EURASIA Boat Show)', logo: 'images/CNR-Avrasya-Boat-Show.jpg', link: 'https://www.cnravrasyaboatshow.com/' },
    { category: 'show', name: 'Monaco Yacht Show', logo: 'images/Monaco-Yacht-Show.jpg', link: 'https://www.monacoyachtshow.com/' },
    { category: 'show', name: 'Genoa International Boat Show', logo: 'images/Genoa-International-Boat-Show.jpg', link: 'https://www.salonenautico.com/en/' },
    { category: 'show', name: 'Cannes Yachting Festival', logo: 'images/Cannes-Yachting-Festival.jpg', link: 'https://www.cannesyachtingfestival.com/' },
    { category: 'show', name: 'Navalshore (formerly Marintec South America)', logo: 'images/Navalshore.jpg', link: 'https://www.navalshore.com.br/' },
    { category: 'show', name: 'London Luxury Afloat', logo: 'images/london-luxury-afloat.jpg', link: 'https://www.londonluxuryafloat.com/' },
    { category: 'show', name: 'Sydney International Boat Show', logo: 'images/Sydney-International-Boat-Show.jpg', link: 'https://www.sydneyboatshow.com.au/' },
    { category: 'show', name: 'Guangzhou Asia International Boat Exhibition', logo: 'images/arwse.jpg', link: 'https://www.arwse.com/' },
    { category: 'show', name: 'Boatica Cape Town', logo: 'images/Boatica-Cape-Town.jpg', link: 'https://boatshow.za.messefrankfurt.com/capetown/en.html' },
    { category: 'show', name: 'Singapore Yacht Festival', logo: 'images/Singapore-Yacht-Festival.jpg', link: 'https://www.singaporyachtfestival.com/' },
    { category: 'show', name: 'Shanghai International Boat Show', logo: 'images/cibs.jpg', link: 'https://www.boatshowchina.com/' },
    { category: 'show', name: 'Dubai International Boat Show', logo: 'images/Dubai-International-Boat-Show.jpg', link: 'https://www.boatshowdubai.com/' },
    // 其他
    { category: 'other', name: '船旗注册筛选器', logo: 'images/flagofregistry.jpg', link: 'https://pnuo.com/wssf/frf/' }
];

// --- 3. 核心逻辑：渲染与切换 ---
let currentCategory = categories[0].id; // 默认选中第一个

// 初始化页面
function init() {
    renderSidebar();
    renderContent(currentCategory);
}

// 渲染左侧菜单
function renderSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `menu-btn ${cat.id === currentCategory ? 'active' : ''}`;
        btn.innerHTML = `<i class="fa-solid ${cat.icon} fa-fw"></i> ${cat.name}`;
        
        btn.onclick = () => {
            // 更新选中状态
            document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 更新数据展示
            currentCategory = cat.id;
            renderContent(cat.id);
        };
        
        sidebar.appendChild(btn);
    });
}

// 渲染右侧内容
function renderContent(categoryId) {
    const grid = document.getElementById('brands-grid');
    const titleEl = document.getElementById('current-category-title');
    const countEl = document.getElementById('count-display');
    
    grid.innerHTML = ''; // 清空当前网格

    // 找到当前分类的详细信息用于改标题
    const catInfo = categories.find(c => c.id === categoryId);
    titleEl.innerHTML = `<i class="fa-solid ${catInfo.icon}"></i> ${catInfo.name}`;

    // 筛选当前分类的数据
    const filteredData = database.filter(item => item.category === categoryId);
    countEl.textContent = `共 ${filteredData.length} 个项目`;

    // 渲染卡片
    filteredData.forEach(item => {
        const card = document.createElement('a');
        card.className = 'brand-card';
        card.href = item.link;
        card.target = '_blank'; // 新标签页打开
        
        card.innerHTML = `
            <div class="brand-logo-wrapper">
                <img src="${item.logo}" alt="${item.name}" class="brand-logo" loading="lazy">
            </div>
            <div class="brand-name" title="${item.name}">${item.name}</div>
        `;
        
        grid.appendChild(card);
    });
}

// 执行初始化
init();
