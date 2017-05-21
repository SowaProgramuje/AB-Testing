# AB-Testing

##Program do przeprowadzania testów AB - wciąż w fazie dewelopmentu

Celem jest stworzenie wtyczki w JS, która umożliwi testowanie różnych elementów na stronach internetowych 

Można testować:
* kolory buttonów: za pomocą funkcji testColor(colorA, colorB, elementId) podając agrumenty: colorA, colorB oraz id testowanego elementu
* kolory czcionek: za pomocą funkcji testTextColor(colorA, colorB, elementId) podając agrumenty: colorA, colorB oraz id testowanego elementu
* display itemu: za pomocą funkcji testDisplay(elementId) podając id testowanego elementu
* treści tesktowe: za pomocą funkcji testTekst(textA, textB, elementId) podając argumenty: textA, textB oraz id testowanego elementu
* obrazy: za pomocą funkcji testImage(imageSrcA, imageSrcB, elementId) podając argumenty: imageSrcA, imageSrcB oraz id testowanego elementu
* iframe: za pomocą funkcji testIframe(iframeSrcA, iframeSrcB, elementId) podając argumenty: iframeSrcA, iframeSrcB oraz id testowanego elementu
* video: za pomocą funkcji testVideo(videoSrcA, videoSrcB, elementId) podając argumenty: videoSrcA, videoSrcB oraz id testowanego elementu

Dodatkowo:
* na testowanym elemencie uruchamiana jest fukcja, która nasłuchuje na kliknięcia na dany element i zapisuje dane o kliknięciach w local storage 
* w local storage zapisywane są dane o użytkowiniku tj. data otwarcia sesji, strefa czasowa użytkownika, język przeglądarki oraz wymiary okna przeglądarki
* można uruchamiać testy tylko na konkretnych rozdzielczościach ekranu 
* mozna uruchamiać testy tylko na konkretnej przeglądarce
