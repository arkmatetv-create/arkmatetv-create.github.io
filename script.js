const SUPPORTED_LANGS = ['en', 'tr'];
const SUPPORTED_PLATFORMS = ['ios', 'macos'];

const COPY = {
  en: {
    common: {
      nav_features: 'Features',
      nav_screenshots: 'Screenshots',
      nav_support: 'Support',
      nav_privacy: 'Privacy',
      nav_product: 'Product Tour',
      platform_ios: 'iOS + iPad',
      platform_macos: 'macOS',
      review_eyebrow: 'App Review ready',
      review_title: 'Clear, content-safe positioning.',
      review_text: 'Arkmate TV is presented as a player. The website and screenshots avoid promising channels, subscriptions or media ownership.',
      review_button: 'See Product Tour',
      support_eyebrow: 'Support and compliance',
      support_title: 'Contact, privacy and store-safe messaging in one place.',
      support_contact_title: 'Contact support',
      support_contact_text: 'Questions, review follow-up or customer issues can be sent directly by email.',
      support_privacy_title: 'Privacy policy',
      support_privacy_text: 'The privacy page is ready for App Store metadata and customer-facing links.',
      legal_title: 'Important',
      legal_text: 'Arkmate TV does not provide media content, channels or playlists. Users connect their own legal source.'
    },
    platforms: {
      ios: {
        label: 'iOS + iPad',
        heroImage: 'images/ios/ipad-live-demo.png',
        heroAlt: 'Arkmate TV running on iPad',
        eyebrow: 'iPhone and iPad IPTV player',
        title: 'Arkmate TV',
        lead: 'A clean Xtream and M3U player for iPhone and iPad, with AirPlay, Wi-Fi Cast, favorites, history and controls that feel natural on touch screens.',
        primary: 'View iOS Screenshots',
        secondary: 'Open Product Tour',
        note: 'Arkmate TV does not provide content. Bring your own playlist or Xtream credentials.',
        featuresEyebrow: 'Built for mobile playback',
        featuresTitle: 'Everything your own IPTV library needs on iPhone and iPad.',
        featuresText: 'Use a secure login flow, move through live TV, movies and series quickly, and send playback to a bigger screen when you need it.',
        detailsEyebrow: 'Player tools',
        detailsTitle: 'Control the viewing session without getting lost in menus.',
        detailsText: 'Arkmate TV keeps the common playback actions close: cast, lock, aspect ratio, language, buffering and playlist switching.',
        screenshotsEyebrow: 'Real product visuals',
        screenshotsTitle: 'iPhone and iPad screenshots arranged for the site.',
        screenshotsText: 'The page uses the prepared iOS store images from the local folder and supports the raw iPad player screenshot where AirPlay and Wi-Fi Cast are visible.',
        glances: [
          ['AirPlay', 'Send playback to Apple TV or compatible screens.'],
          ['Wi-Fi Cast', 'Use network casting controls from the player.'],
          ['iPad + iPhone', 'Landscape player, touch lists and mobile login flow.']
        ],
        facts: [
          ['Input', 'Xtream API and M3U', 'Sign in with your own server details or playlist link.'],
          ['Casting', 'AirPlay and Wi-Fi Cast', 'Move playback from the phone or tablet to a larger screen.'],
          ['Library', 'Live, movies and series', 'Keep channels, VOD and episodes in one familiar flow.'],
          ['Store', 'PRO, restore and offers', 'Subscription, restore purchase and offer-code paths are visible.']
        ],
        features: [
          ['Xtream and M3U login', 'Add your own server URL, username and password, or open a playlist link when your provider supports it.'],
          ['Live TV with categories', 'Browse channel groups, favorites and history quickly on iPhone or across the wider iPad layout.'],
          ['Movies and series', 'Move through VOD, episodes and saved items without mixing them with live channels.'],
          ['AirPlay and Wi-Fi Cast', 'Cast the current stream to supported displays directly from the player controls.'],
          ['Player controls', 'Use brightness, volume, lock, aspect ratio, channel list and now-next program information in the playback view.'],
          ['Arkmate PRO', 'Show free trial, subscription status, restore purchases, redeem offer code and manage subscription actions clearly.']
        ],
        details: [
          ['Cast', 'AirPlay + Wi-Fi Cast', 'The player surfaces casting where viewers naturally look for it, next to playback controls.'],
          ['Touch', 'iPhone and iPad layouts', 'Compact iPhone screens and wider iPad grids use the same library logic with layouts that fit each device.'],
          ['Control', 'Buffer and quality settings', 'Users can tune playback behavior from settings without leaving the app flow.'],
          ['Account', 'Playlist and language tools', 'Switch playlists, change language, restore purchases and manage the subscription area.'],
          ['Library', 'Favorites and history', 'Frequently watched items stay close, so returning to a channel or category feels fast.'],
          ['Review', 'Demo-safe screenshots', 'Prepared visuals avoid real channel branding and keep the store message focused on the player.']
        ],
        gallery: [
          ['Easy setup', 'Sign in with your own Xtream credentials.', 'images/ios/store_login_ios.png', 'large'],
          ['Fast live TV', 'Browse channel groups and start playback quickly.', 'images/ios/store_live_ios.png', 'wide'],
          ['Smart settings', 'Subscription, language, playback and connected device options.', 'images/ios/store_settings_ios.png', 'wide'],
          ['iPad player', 'AirPlay, Wi-Fi Cast, lock, aspect ratio and program controls.', 'images/ios_ipad_player.png', 'wide contain'],
          ['Movies', 'Organized VOD browsing with a touch-first grid.', 'images/ios/store_movies_ios.png', 'wide'],
          ['Series', 'Episodes and saved shows stay easy to reach.', 'images/ios/store_series_ios.png', 'wide']
        ],
        tourTitle: 'iPhone and iPad product tour',
        tourText: 'A short store-safe walkthrough for the iOS app experience: login, library, playback, casting and subscription tools.',
        tourSteps: [
          ['Start with your own source', 'Users add their own Xtream credentials or playlist. Arkmate TV stays positioned as the player, not the content provider.', 'images/ios/store_login_ios.png'],
          ['Browse on touch screens', 'Live TV, movies and series are separated clearly so the app feels natural on both iPhone and iPad.', 'images/ios/store_live_ios.png'],
          ['Cast and control playback', 'AirPlay, Wi-Fi Cast, lock, aspect ratio and now-next information are shown as player features.', 'images/ios_ipad_player.png'],
          ['Manage account options', 'PRO subscription, restore purchase, offer codes, language and buffer settings are presented in one clean settings area.', 'images/ios/store_settings_ios.png']
        ]
      },
      macos: {
        label: 'macOS',
        heroImage: 'images/hero_en.png',
        heroAlt: 'Arkmate TV running on macOS',
        eyebrow: 'Xtream IPTV player for macOS',
        title: 'Arkmate TV',
        lead: 'A polished macOS player for your own Xtream service, with live TV, movies, series, downloads, recordings and keyboard-friendly playback.',
        primary: 'View macOS Screenshots',
        secondary: 'Open Product Tour',
        note: 'Arkmate TV does not provide media content. Users supply their own Xtream API credentials.',
        featuresEyebrow: 'Built for desktop viewing',
        featuresTitle: 'The existing Mac experience stays intact.',
        featuresText: 'The macOS page keeps the original GitHub site structure while making the iOS and Mac choices clear from the first screen.',
        detailsEyebrow: 'Desktop tools',
        detailsTitle: 'A Mac-first player for everyday IPTV workflows.',
        detailsText: 'Fast navigation, fullscreen playback, downloads and recording tools remain the core Mac story.',
        screenshotsEyebrow: 'macOS visuals',
        screenshotsTitle: 'The original Mac screenshots remain available.',
        screenshotsText: 'Mac visuals use the existing GitHub Pages assets so the older page is preserved instead of replaced.',
        glances: [
          ['macOS 12+', 'Monterey or later.'],
          ['Apple Silicon + Intel', 'Desktop support for modern Macs.'],
          ['Demo Mode', 'Safe review flow for App Store checks.']
        ],
        facts: [
          ['System', 'macOS 12+', 'Works with Monterey or later.'],
          ['Hardware', 'Apple Silicon and Intel', 'Designed for both current Mac architectures.'],
          ['Playback', 'Live, movies and series', 'Use a desktop library view for your own Xtream service.'],
          ['Tools', 'Downloads and recording', 'Keep supported streams available for local viewing.']
        ],
        features: [
          ['Xtream API login', 'Connect with your own Xtream credentials and keep the normal login flow intact.'],
          ['Live TV with EPG', 'Browse channels quickly, keep favorites close and view program guide details when available.'],
          ['Movies and series', 'Navigate organized VOD and series libraries with desktop-friendly browsing.'],
          ['Player controls', 'Use subtitles, audio tracks, fullscreen, keyboard shortcuts and responsive playback controls.'],
          ['Downloads and recording', 'Store supported playback locally with download and recording tools built for desktop usage.'],
          ['Demo mode for review', 'A separate demo entry point lets App Review test navigation and playback without user credentials.']
        ],
        details: [
          ['Desktop', 'Wide library views', 'Large channel and VOD grids make browsing more comfortable on a Mac display.'],
          ['Playback', 'Keyboard and fullscreen', 'Mac controls focus on quick navigation, fullscreen playback and familiar desktop gestures.'],
          ['Storage', 'Downloads and recordings', 'Supported media can be handled with local desktop workflows.'],
          ['Review', 'Demo path', 'The Mac app remains clear about being a player and includes a demo flow for review.'],
          ['Library', 'Favorites and continue watching', 'Frequently used items and series progress remain easy to reach.'],
          ['Settings', 'Clean configuration', 'Account, playback and app settings stay in a focused desktop panel.']
        ],
        gallery: [
          ['Fast live TV', 'Browse channels instantly.', 'images/store_live.png', 'large'],
          ['Powerful player', 'Smooth playback controls.', 'images/store_player.png', 'wide'],
          ['Movie library', 'Organized content browsing.', 'images/store_movies.png', 'wide'],
          ['Smart settings', 'Customize the experience.', 'images/store_settings.png', 'wide'],
          ['Series and favorites', 'Access saved content quickly.', 'images/store_series.png', 'wide']
        ],
        tourTitle: 'macOS product tour',
        tourText: 'The original Mac story remains available: own credentials, Mac browsing, playback, downloads and demo mode.',
        tourSteps: [
          ['Connect your Xtream account', 'Users sign in with their own provider credentials. Arkmate TV does not include channels or playlists.', 'images/store_live.png'],
          ['Browse the library', 'Live TV, movies and series are separated in a desktop-friendly layout.', 'images/store_movies.png'],
          ['Play with Mac controls', 'Fullscreen, keyboard use, subtitles and audio tools are shown as Mac playback benefits.', 'images/store_player.png'],
          ['Use review-safe demo mode', 'Demo Mode keeps App Review testing focused on navigation and playback without customer credentials.', 'images/store_settings.png']
        ]
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lead: 'Arkmate TV is a player app. It does not provide channels, media libraries or IPTV subscriptions.',
      cards: [
        ['Information users provide', 'Users may enter server URLs, usernames, passwords or playlist links from their own IPTV provider. This information is used to connect the app to the user-selected source.'],
        ['Content responsibility', 'Arkmate TV does not host, sell or distribute media content. Users are responsible for using legal playlists and services.'],
        ['Purchases', 'On iPhone and iPad, subscription, restore purchase and offer-code flows are handled through Apple systems where applicable.'],
        ['Support', 'Support requests sent to arkmatetv@gmail.com are used only to answer the request and follow up when needed.']
      ]
    }
  },
  tr: {
    common: {
      nav_features: 'Özellikler',
      nav_screenshots: 'Ekran Görüntüleri',
      nav_support: 'Destek',
      nav_privacy: 'Gizlilik',
      nav_product: 'Ürün Turu',
      platform_ios: 'iOS + iPad',
      platform_macos: 'macOS',
      review_eyebrow: 'App Review hazır',
      review_title: 'Net ve mağazaya uygun konumlandırma.',
      review_text: 'Arkmate TV bir oynatıcı olarak anlatılır. Site ve görseller kanal, abonelik ya da medya sahipliği vaadi vermez.',
      review_button: 'Ürün Turunu Aç',
      support_eyebrow: 'Destek ve uyumluluk',
      support_title: 'İletişim, gizlilik ve mağazaya uygun açıklamalar tek yerde.',
      support_contact_title: 'Destek',
      support_contact_text: 'Sorular, inceleme notları veya müşteri destek talepleri doğrudan e-posta ile iletilebilir.',
      support_privacy_title: 'Gizlilik politikası',
      support_privacy_text: 'Gizlilik sayfası App Store metadatası ve kullanıcı bağlantıları için hazırdır.',
      legal_title: 'Önemli',
      legal_text: 'Arkmate TV medya içeriği, kanal veya oynatma listesi sağlamaz. Kullanıcı kendi yasal kaynağını bağlar.'
    },
    platforms: {
      ios: {
        label: 'iOS + iPad',
        heroImage: 'images/ios/ipad-live-demo.png',
        heroAlt: 'iPad üzerinde çalışan Arkmate TV',
        eyebrow: 'iPhone ve iPad IPTV oynatıcı',
        title: 'Arkmate TV',
        lead: 'iPhone ve iPad için temiz bir Xtream ve M3U oynatıcı. AirPlay, Wi-Fi Cast, favoriler, geçmiş ve dokunmatik ekrana uygun kontrollerle gelir.',
        primary: 'iOS Görsellerini İncele',
        secondary: 'Ürün Turunu Aç',
        note: 'Arkmate TV içerik sağlamaz. Kendi oynatma listenizi veya Xtream bilgilerinizi kullanırsınız.',
        featuresEyebrow: 'Mobil izleme için hazır',
        featuresTitle: 'Kendi IPTV arşiviniz iPhone ve iPad’de düzenli dursun.',
        featuresText: 'Güvenli giriş akışı, hızlı canlı TV gezintisi, film ve dizi bölümleri, büyük ekrana aktarma ve dokunmatik oynatıcı tek uygulamada.',
        detailsEyebrow: 'Oynatıcı araçları',
        detailsTitle: 'İzleme sırasında gereken kontroller elinizin altında.',
        detailsText: 'Arkmate TV; cast, kilit, görüntü oranı, dil, buffer ve oynatma listesi değiştirme gibi araçları sade bir akışta tutar.',
        screenshotsEyebrow: 'Gerçek ürün görselleri',
        screenshotsTitle: 'iPhone ve iPad görselleri site için yeniden düzenlendi.',
        screenshotsText: 'Sayfa, bu klasördeki hazırlanmış iOS store görsellerini kullanır; AirPlay ve Wi-Fi Cast görünen iPad oynatıcı ekranı da destekleyici olarak eklendi.',
        glances: [
          ['AirPlay', 'Oynatmayı Apple TV veya uyumlu ekranlara aktarın.'],
          ['Wi-Fi Cast', 'Ağ üzerinden yayın aktarma kontrollerini kullanın.'],
          ['iPad + iPhone', 'Yatay oynatıcı, dokunmatik listeler ve mobil giriş akışı.']
        ],
        facts: [
          ['Giriş', 'Xtream API ve M3U', 'Kendi sunucu bilgilerinizi veya oynatma listesi bağlantınızı ekleyin.'],
          ['Aktarma', 'AirPlay ve Wi-Fi Cast', 'Yayını telefondan ya da tabletten daha büyük ekrana taşıyın.'],
          ['Arşiv', 'Canlı, film ve dizi', 'Kanal, VOD ve bölümleri tanıdık bir akışta gezinin.'],
          ['Mağaza', 'PRO, geri yükleme ve kod', 'Abonelik, satın alma geri yükleme ve teklif kodu akışları görünürdür.']
        ],
        features: [
          ['Xtream ve M3U girişi', 'Sunucu URL’si, kullanıcı adı ve şifreyle bağlanın; sağlayıcınız destekliyorsa oynatma listesi bağlantısını da kullanın.'],
          ['Kategorili canlı TV', 'Kanal grupları, favoriler ve geçmiş iPhone’da hızlı, iPad’de geniş düzende rahat görünür.'],
          ['Film ve dizi bölümleri', 'VOD, bölümler ve kayıtlı öğeler canlı kanallarla karışmadan ayrı alanlarda durur.'],
          ['AirPlay ve Wi-Fi Cast', 'Geçerli yayını desteklenen ekranlara doğrudan oynatıcı kontrollerinden aktarın.'],
          ['Oynatıcı kontrolleri', 'Parlaklık, ses, kilit, görüntü oranı, kanal listesi ve şimdi-sonra bilgisi oynatma ekranında yer alır.'],
          ['Arkmate PRO', 'Ücretsiz deneme, abonelik durumu, satın alma geri yükleme, teklif kodu ve abonelik yönetimi net gösterilir.']
        ],
        details: [
          ['Cast', 'AirPlay + Wi-Fi Cast', 'Aktarma kontrolleri, izleyicinin doğal olarak aradığı yerde, oynatıcı araçlarının yanında durur.'],
          ['Dokunmatik', 'iPhone ve iPad düzenleri', 'Kompakt iPhone ekranı ve geniş iPad gridleri aynı arşiv mantığını farklı ekranlara uyarlar.'],
          ['Kontrol', 'Buffer ve kalite ayarları', 'Kullanıcılar oynatma davranışını uygulama akışından kopmadan ayarlayabilir.'],
          ['Hesap', 'Liste ve dil araçları', 'Oynatma listesi değiştirme, dil seçimi, satın alma geri yükleme ve abonelik alanı tek yerde toplanır.'],
          ['Arşiv', 'Favoriler ve geçmiş', 'Sık izlenen kanala veya kategoriye geri dönmek hızlı hissettirir.'],
          ['İnceleme', 'Demo güvenli görseller', 'Hazırlanan görseller gerçek kanal markası kullanmaz ve mağaza mesajını oynatıcıda tutar.']
        ],
        gallery: [
          ['Kolay kurulum', 'Kendi Xtream bilgilerinizle giriş yapın.', 'images/ios/store_login_ios.png', 'large'],
          ['Hızlı canlı TV', 'Kanal gruplarını gezin ve oynatmayı hızlı başlatın.', 'images/ios/store_live_ios.png', 'wide'],
          ['Akıllı ayarlar', 'Abonelik, dil, oynatma ve bağlı cihaz seçenekleri.', 'images/ios/store_settings_ios.png', 'wide'],
          ['iPad oynatıcı', 'AirPlay, Wi-Fi Cast, kilit, görüntü oranı ve program kontrolleri.', 'images/ios_ipad_player.png', 'wide contain'],
          ['Filmler', 'Dokunmatik ekrana uygun VOD grid düzeni.', 'images/ios/store_movies_ios.png', 'wide'],
          ['Diziler', 'Bölümler ve kayıtlı içerikler kolay ulaşılır kalır.', 'images/ios/store_series_ios.png', 'wide']
        ],
        tourTitle: 'iPhone ve iPad ürün turu',
        tourText: 'iOS uygulaması için kısa ve mağazaya uygun akış: giriş, arşiv, oynatıcı, aktarma ve abonelik araçları.',
        tourSteps: [
          ['Kendi kaynağınızla başlayın', 'Kullanıcı kendi Xtream bilgilerini veya oynatma listesini ekler. Arkmate TV içerik sağlayıcı değil, oynatıcı olarak konumlanır.', 'images/ios/store_login_ios.png'],
          ['Dokunmatik ekranda gezin', 'Canlı TV, film ve diziler ayrıdır; uygulama hem iPhone hem iPad üzerinde doğal hissettirir.', 'images/ios/store_live_ios.png'],
          ['Yayını aktarın ve kontrol edin', 'AirPlay, Wi-Fi Cast, kilit, görüntü oranı ve şimdi-sonra bilgisi oynatıcı özelliği olarak anlatılır.', 'images/ios_ipad_player.png'],
          ['Hesap seçeneklerini yönetin', 'PRO abonelik, satın alma geri yükleme, teklif kodu, dil ve buffer ayarları temiz bir ayarlar alanında yer alır.', 'images/ios/store_settings_ios.png']
        ]
      },
      macos: {
        label: 'macOS',
        heroImage: 'images/hero_en.png',
        heroAlt: 'macOS üzerinde çalışan Arkmate TV',
        eyebrow: 'macOS için Xtream IPTV oynatıcı',
        title: 'Arkmate TV',
        lead: 'Kendi Xtream hizmetiniz için hazırlanmış macOS oynatıcı. Canlı TV, film, dizi, indirme, kayıt ve klavye dostu oynatma akışı sunar.',
        primary: 'macOS Görsellerini İncele',
        secondary: 'Ürün Turunu Aç',
        note: 'Arkmate TV medya içeriği sağlamaz. Kullanıcı kendi Xtream API bilgilerini girer.',
        featuresEyebrow: 'Masaüstü izleme için hazır',
        featuresTitle: 'Mevcut Mac deneyimi korunuyor.',
        featuresText: 'macOS sayfası eski GitHub site yapısını korur; iOS ve Mac seçimi ilk ekrandan net görünür.',
        detailsEyebrow: 'Masaüstü araçları',
        detailsTitle: 'Günlük IPTV akışları için Mac odaklı oynatıcı.',
        detailsText: 'Hızlı gezinme, tam ekran oynatma, indirme ve kayıt araçları Mac tarafının ana hikayesi olarak kalır.',
        screenshotsEyebrow: 'macOS görselleri',
        screenshotsTitle: 'Orijinal Mac ekran görüntüleri korunuyor.',
        screenshotsText: 'Mac görselleri mevcut GitHub Pages varlıklarını kullanır; eski sayfa tamamen kaybolmaz.',
        glances: [
          ['macOS 12+', 'Monterey veya üzeri.'],
          ['Apple Silicon + Intel', 'Modern Mac mimarileri için destek.'],
          ['Demo Modu', 'App Store incelemesi için güvenli akış.']
        ],
        facts: [
          ['Sistem', 'macOS 12+', 'Monterey veya üzeri sürümlerde çalışır.'],
          ['Donanım', 'Apple Silicon ve Intel', 'Güncel Mac mimarileri için tasarlanmıştır.'],
          ['Oynatma', 'Canlı, film ve dizi', 'Kendi Xtream hizmetinizi masaüstü arşiv görünümünde kullanın.'],
          ['Araçlar', 'İndirme ve kayıt', 'Desteklenen yayınları yerel izleme akışına alın.']
        ],
        features: [
          ['Xtream API girişi', 'Kendi Xtream bilgilerinizle bağlanın ve normal giriş akışını koruyun.'],
          ['EPG ile canlı TV', 'Kanalları hızlı gezin, favorilere ulaşın ve varsa program rehberi detaylarını görün.'],
          ['Film ve dizi arşivi', 'VOD ve dizi kitaplıklarını masaüstüne uygun bir düzende gezinin.'],
          ['Oynatıcı kontrolleri', 'Altyazı, ses seçenekleri, tam ekran, klavye kısayolları ve tepkisel kontrolleri kullanın.'],
          ['İndirme ve kayıt', 'Desteklenen oynatmaları masaüstüne uygun indirme ve kayıt araçlarıyla saklayın.'],
          ['İnceleme için demo modu', 'Ayrı demo girişi, App Review ekibinin kullanıcı bilgisi olmadan akışı test etmesini sağlar.']
        ],
        details: [
          ['Masaüstü', 'Geniş arşiv görünümleri', 'Büyük kanal ve VOD gridleri Mac ekranında gezinmeyi rahatlatır.'],
          ['Oynatma', 'Klavye ve tam ekran', 'Mac kontrolleri hızlı gezinme, tam ekran ve masaüstü alışkanlıklarına odaklanır.'],
          ['Depolama', 'İndirme ve kayıt', 'Desteklenen medya yerel masaüstü akışlarıyla yönetilebilir.'],
          ['İnceleme', 'Demo yolu', 'Mac uygulaması oynatıcı olduğunu net anlatır ve inceleme için demo akışı sunar.'],
          ['Arşiv', 'Favoriler ve devam et', 'Sık kullanılan öğeler ve dizi ilerlemesi kolay ulaşılır kalır.'],
          ['Ayarlar', 'Temiz yapılandırma', 'Hesap, oynatma ve uygulama ayarları odaklı bir panelde durur.']
        ],
        gallery: [
          ['Hızlı canlı TV', 'Kanalları anında gezin.', 'images/store_live.png', 'large'],
          ['Güçlü oynatıcı', 'Akıcı oynatma kontrolleri.', 'images/store_player.png', 'wide'],
          ['Film arşivi', 'Düzenli içerik gezintisi.', 'images/store_movies.png', 'wide'],
          ['Akıllı ayarlar', 'Deneyimi özelleştirin.', 'images/store_settings.png', 'wide'],
          ['Diziler ve favoriler', 'Kayıtlı içeriğe hızlı ulaşın.', 'images/store_series.png', 'wide']
        ],
        tourTitle: 'macOS ürün turu',
        tourText: 'Orijinal Mac hikayesi korunur: kendi bilgileriniz, Mac arşiv görünümü, oynatma, indirme ve demo modu.',
        tourSteps: [
          ['Xtream hesabınızı bağlayın', 'Kullanıcı kendi sağlayıcı bilgileriyle giriş yapar. Arkmate TV kanal veya oynatma listesi içermez.', 'images/store_live.png'],
          ['Arşivde gezin', 'Canlı TV, film ve diziler masaüstüne uygun düzende ayrılır.', 'images/store_movies.png'],
          ['Mac kontrolleriyle oynatın', 'Tam ekran, klavye kullanımı, altyazı ve ses araçları Mac oynatma faydaları olarak gösterilir.', 'images/store_player.png'],
          ['Demo moduyla inceletin', 'Demo Modu, App Review testlerini müşteri bilgisi olmadan gezinme ve oynatma üzerinde tutar.', 'images/store_settings.png']
        ]
      }
    },
    privacy: {
      title: 'Gizlilik Politikası',
      lead: 'Arkmate TV bir oynatıcı uygulamasıdır. Kanal, medya arşivi veya IPTV aboneliği sağlamaz.',
      cards: [
        ['Kullanıcının girdiği bilgiler', 'Kullanıcı kendi IPTV sağlayıcısından aldığı sunucu URL’si, kullanıcı adı, şifre veya oynatma listesi bağlantısını girebilir. Bu bilgiler uygulamayı kullanıcının seçtiği kaynağa bağlamak için kullanılır.'],
        ['İçerik sorumluluğu', 'Arkmate TV medya içeriği barındırmaz, satmaz veya dağıtmaz. Kullanıcı yasal oynatma listeleri ve hizmetler kullanmaktan sorumludur.'],
        ['Satın almalar', 'iPhone ve iPad tarafında abonelik, satın alma geri yükleme ve teklif kodu akışları uygun olduğunda Apple sistemleri üzerinden yürütülür.'],
        ['Destek', 'arkmatetv@gmail.com adresine gönderilen destek talepleri yalnızca talebi yanıtlamak ve gerektiğinde takip etmek için kullanılır.']
      ]
    }
  }
};

const state = {
  lang: 'en',
  platform: 'ios'
};

function getQueryValue(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function normaliseLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : 'en';
}

function normalisePlatform(platform) {
  return SUPPORTED_PLATFORMS.includes(platform) ? platform : 'ios';
}

function initialLang() {
  const fromUrl = getQueryValue('lang');
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;

  const stored = localStorage.getItem('arkmate-site-lang');
  if (SUPPORTED_LANGS.includes(stored)) return stored;

  const browserLang = navigator.language?.slice(0, 2);
  return browserLang === 'tr' ? 'tr' : 'en';
}

function initialPlatform() {
  const fromUrl = getQueryValue('platform');
  if (SUPPORTED_PLATFORMS.includes(fromUrl)) return fromUrl;

  const stored = localStorage.getItem('arkmate-site-platform');
  return normalisePlatform(stored);
}

function text(key) {
  return COPY[state.lang].common[key] || COPY.en.common[key] || key;
}

function platformCopy() {
  return COPY[state.lang].platforms[state.platform];
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.textContent = content;
  return node;
}

function renderList(targetId, items, renderer) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.replaceChildren(...items.map(renderer));
}

function updateUrl() {
  const params = new URLSearchParams(window.location.search);
  params.set('lang', state.lang);
  params.set('platform', state.platform);
  const next = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history.replaceState({}, '', next);
}

function updateLinks() {
  const page = document.body.dataset.page;
  const prefix = page === 'privacy' ? '../' : '';
  const query = `lang=${state.lang}&platform=${state.platform}`;
  const tourHref = `${prefix}promo_video.html?${query}`;
  document.querySelectorAll('.tour-link').forEach((link) => {
    link.setAttribute('href', tourHref);
  });

  document.querySelectorAll('[data-home-hash]').forEach((link) => {
    const hash = link.dataset.homeHash || '';
    link.setAttribute('href', page === 'home' ? hash : `${prefix}index.html?${query}${hash}`);
  });

  document.querySelectorAll('a[data-privacy-link]').forEach((link) => {
    link.setAttribute('href', page === 'privacy' ? `./?${query}` : `${prefix}privacy/?${query}`);
  });
}

function renderCommonText() {
  document.documentElement.lang = state.lang;
  document.body.dataset.platform = state.platform;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (text(key)) node.textContent = text(key);
  });

  document.querySelectorAll('[data-platform-button]').forEach((button) => {
    const key = button.dataset.platformButton;
    button.textContent = key === 'ios' ? text('platform_ios') : text('platform_macos');
    button.classList.toggle('is-active', key === state.platform);
    button.setAttribute('aria-pressed', String(key === state.platform));
  });

  const select = document.getElementById('language-select');
  if (select) select.value = state.lang;
}

function renderHome() {
  const data = platformCopy();

  const heroImage = document.getElementById('hero-image');
  if (heroImage) {
    heroImage.src = data.heroImage;
    heroImage.alt = data.heroAlt;
  }

  setText('hero-eyebrow', data.eyebrow);
  setText('hero-title', data.title);
  setText('hero-lead', data.lead);
  setText('hero-primary', data.primary);
  setText('hero-secondary', data.secondary);
  setText('hero-note', data.note);
  setText('features-eyebrow', data.featuresEyebrow);
  setText('features-title', data.featuresTitle);
  setText('features-text', data.featuresText);
  setText('details-eyebrow', data.detailsEyebrow);
  setText('details-title', data.detailsTitle);
  setText('details-text', data.detailsText);
  setText('screenshots-eyebrow', data.screenshotsEyebrow);
  setText('screenshots-title', data.screenshotsTitle);
  setText('screenshots-text', data.screenshotsText);

  renderList('hero-glance', data.glances, ([title, body]) => {
    const item = element('div', 'glance-item');
    item.append(element('strong', '', title), element('span', '', body));
    return item;
  });

  renderList('fact-strip', data.facts, ([tag, title, body]) => {
    const item = element('article', 'fact-card');
    item.append(element('em', '', tag), element('strong', '', title), element('span', '', body));
    return item;
  });

  renderList('feature-grid', data.features, ([title, body]) => {
    const item = element('article', 'feature-card');
    item.append(element('h3', '', title), element('p', '', body));
    return item;
  });

  renderList('detail-grid', data.details, ([tag, title, body]) => {
    const item = element('article', 'detail-card');
    item.append(element('small', '', tag), element('h3', '', title), element('p', '', body));
    return item;
  });

  renderList('shot-grid', data.gallery, ([title, body, image, classes]) => {
    const item = element('article', `shot-card ${classes || ''}`.trim());
    const media = element('div', 'shot-media');
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.loading = 'lazy';
    media.append(img);
    const copy = element('div', 'shot-copy');
    copy.append(element('h3', '', title), element('p', '', body));
    item.append(media, copy);
    return item;
  });
}

function renderPromo() {
  const data = platformCopy();
  setText('tour-eyebrow', data.eyebrow);
  setText('tour-title', data.tourTitle);
  setText('tour-text', data.tourText);

  renderList('tour-steps', data.tourSteps, ([title, body, image]) => {
    const item = element('article', 'tour-step');
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.loading = 'lazy';
    item.append(img, element('h2', '', title), element('p', '', body));
    return item;
  });
}

function renderPrivacy() {
  const data = COPY[state.lang].privacy;
  setText('privacy-title', data.title);
  setText('privacy-lead', data.lead);

  renderList('privacy-grid', data.cards, ([title, body]) => {
    const item = element('article', 'privacy-card');
    item.append(element('h2', '', title), element('p', '', body));
    return item;
  });
}

function renderPage() {
  renderCommonText();
  updateLinks();

  const page = document.body.dataset.page;
  if (page === 'home') renderHome();
  if (page === 'promo') renderPromo();
  if (page === 'privacy') renderPrivacy();

  localStorage.setItem('arkmate-site-lang', state.lang);
  localStorage.setItem('arkmate-site-platform', state.platform);
  updateUrl();

  if (window.location.hash) {
    window.requestAnimationFrame(() => window.requestAnimationFrame(scrollToHash));
  }
}

function scrollToHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (target) target.scrollIntoView({ block: 'start' });
}

function setLanguage(lang) {
  state.lang = normaliseLang(lang);
  renderPage();
}

function setPlatform(platform) {
  state.platform = normalisePlatform(platform);
  renderPage();
}

state.lang = initialLang();
state.platform = initialPlatform();

document.getElementById('language-select')?.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

document.querySelectorAll('[data-platform-button]').forEach((button) => {
  button.addEventListener('click', () => setPlatform(button.dataset.platformButton));
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const hash = link.getAttribute('href');
  const target = hash ? document.querySelector(hash) : null;
  if (!target) return;

  event.preventDefault();
  window.history.pushState({}, '', `${window.location.pathname}${window.location.search}${hash}`);
  scrollToHash();
});

renderPage();
