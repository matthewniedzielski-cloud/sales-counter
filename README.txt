
Sales Counter — szybki licznik sprzedaży (PWA)

Jak uruchomić (najprościej, bez kodowania):
1) Rozpakuj paczkę na komputerze.
2) Wejdź na stronę https://pages.github.com/ i utwórz repozytorium "sales-counter".
3) Wgraj pliki z tego folderu (index.html, sw.js, manifest.webmanifest, folder icons/).
4) Włącz GitHub Pages dla gałęzi main. Otrzymasz adres HTTPS.
5) Otwórz adres na telefonie (Android/iOS). Pojawi się baner "Dodaj do ekranu głównego".
   - Android: ⋮ -> "Dodaj do ekranu głównego".
   - iOS (Safari): Udostępnij -> "Dodaj do ekranu początkowego".
6) Aplikacja działa offline i zapisuje dane w localStorage. Liczniki resetują się automatycznie z nową datą (przycisk "Nowy dzień" ułatwia przełączenie).

Użycie:
- Stuknij w kafelek produktu, aby dodać +1 (domyślnie).
- Aby odjąć, naciśnij i przytrzymaj 1 sekundę przycisk ➕/➖ (tryb odejmowania). Ponowne dotknięcie wraca do dodawania.
- Ustawienia -> dodawaj/edytuj/usuń produkty. Zmiany zapisują się automatycznie.

Bezpieczeństwo danych: dane są lokalne w przeglądarce (localStorage) i NIE są wysyłane na serwer.
