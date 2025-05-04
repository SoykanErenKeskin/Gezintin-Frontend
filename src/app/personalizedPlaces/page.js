"use client";
import Navbar from "../home_components/Navbar";
import Footer from "../home_components/Footer";
import { useState, useMemo } from "react";
import venuesData from "../data/venues.json";
import { ChevronUp, ChevronDown } from "lucide-react";

const cities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];

export default function HomePage() {
  const maxSelect = 8;
  const [city, setCity] = useState("");
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 16;

  // sayfa değişiminde konum 0,0
  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  // Şehir seçimi ve mekan listesinin alımı
  const filtered = useMemo(() => {
    if (!city) return [];
    return venuesData.filter((v) => v.city === city);
  }, [city]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const toggleSelect = (venue) => {
    const already = selected.some((item) => item.id === venue.id);
    if (!already && selected.length >= maxSelect) return;
    setSelected((prev) =>
      already ? prev.filter((item) => item.id !== venue.id) : [...prev, venue]
    );
  };

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // City change with confirmation
  const handleCityChange = (newCity) => {
    if (selected.length > 0) {
      if (
        !window.confirm(
          "Şehri değiştirirsen mevcut seçilen mekanlar sıfırlanacak. Devam etmek ister misin?"
        )
      )
        return setCity(city);
      setSelected([]);
    }
    setCity(newCity);
    setPage(1);
  };

  return (
    <div className="mt-16 p-0">
      <div className="space-y-12 container mx-auto px-8 mt-20 md:mt-16">
        <Navbar />
        <div className="flex gap-x-5 py-10 h-full">
          {/* Mekan Listesi */}
          <div className="w-2/3 md:w-3/4">
            {/* Şehir Seç */}
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setPage(1);
                handleCityChange(e.target.value);
              }}
              className="w-full px-4 py-2 bg-text text-xl border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="">Şehir seçiniz</option>
              {cities.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>

            {city ? (
              filtered.length === 0 ? (
                <p className="text-text-secondary pb-96">
                  <span className="font-semibold">{city}</span> için mekan
                  bulunamadı.
                </p>
              ) : (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {paginated.map((venue) => {
                      const isSelected = selected.some(
                        (item) => item.id === venue.id
                      );
                      const canSelectMore = selected.length < maxSelect;
                      const roundedStars = Math.round(venue.rating);
                      return (
                        <div
                          key={venue.id}
                          className="bg-text/70 shadow-xl backdrop-blur-xl rounded-lg overflow-hidden"
                        >
                          <img
                            src={venue.photo}
                            alt={venue.name}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-text-secondary">
                              {venue.name}
                            </h3>
                            {/* Round-based star rating */}
                            <div className="flex space-x-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={
                                    i < roundedStars
                                      ? "text-xl text-yellow-400"
                                      : "text-xl text-gray-300"
                                  }
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            {/* Seç/Kaldır Butonu */}
                            <button
                              onClick={() => toggleSelect(venue)}
                              disabled={!isSelected && !canSelectMore}
                              className={`mt-4 px-4 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                isSelected
                                  ? "bg-red-500 text-white"
                                  : canSelectMore
                                  ? "bg-secondary text-white"
                                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
                              }`}
                            >
                              {isSelected
                                ? "Kaldır"
                                : canSelectMore
                                ? "Seç"
                                : "Mekan Limiti Doldu"}
                            </button>

                            {/* Detayları Aç/Kapa */}
                            <button
                              onClick={() => toggleExpand(venue.id)}
                              className="w-full flex justify-center mt-2 text-sm text-text-secondary/70 hover:text-text-secondary hover:cursor-pointer"
                            >
                              {expanded.includes(venue.id) ? (
                                <div className="flex items-center gap-x-2">
                                  <p>Detayı Kapat</p>
                                  <ChevronUp size={16} />
                                </div>
                              ) : (
                                <div className="flex items-center gap-x-2">
                                  <p>Daha fazla detay gör</p>
                                  <ChevronDown size={16} />
                                </div>
                              )}
                            </button>

                            {expanded.includes(venue.id) && (
                              <div className="flex justify-evenly mt-2 text-sm text-text-secondary/80">
                                <p>Açılış: {venue.openTime}</p>
                                <p>Kapanış: {venue.closeTime}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sayfalama */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-secondary ${
                          page === i + 1
                            ? "bg-black text-white"
                            : "bg-white text-gray-700 border border-text-secondary"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <p className="pb-96 text-text-secondary/60">
                Lütfen yukarıdan bir şehir seçin.
              </p>
            )}
          </div>

          {/* Seçilen Mekanlar */}
          <div className="fixed top-30 right-1 md:right-2 lg:relative lg:top-auto lg:right-auto flex flex-col items-center w-1/3 md:w-1/4 h-max bg-text/70 backdrop-blur-md p-2 sm:p-6 rounded-lg shadow-xl">
            <h2 className="text-md md:text-xl font-semibold mb-4 text-text-secondary">
              Seçilen Mekanlar ({selected.length}/{maxSelect})
            </h2>
            {selected.length === 0 ? (
              <p className="text-sm md:text-lg text-text-secondary/60">
                Henüz seçim yok.
              </p>
            ) : (
              <ul className="space-y-4 w-full">
                {selected.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="hidden lg:flex w-12 h-12 object-cover rounded-md"
                      />
                      <span className="text-xs sm:text-sm md:text-lg text-text-secondary">
                        {item.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            `${item.name} silmek istediğine emin misin?`
                          )
                        ) {
                          toggleSelect(item);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
