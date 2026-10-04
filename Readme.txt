PROIECT: PREZENTARE C#
======================

Acest proiect este un site educativ despre limbajul de programare C#, realizat cu HTML, CSS si JavaScript. Contine sase pagini legate prin acelasi meniu.

CUM DESCHIZI SITE-UL
--------------------
Deschide index.html intr-un browser. Pentru videoclipul YouTube din despre.html, foloseste un server local precum Live Server in Visual Studio Code. Deschiderea directa ca fisier local poate impiedica redarea videoclipului.

1. HTML - STRUCTURA PAGINILOR

HTML defineste structura si continutul vizibil al fiecarei pagini. Elementele header si nav formeaza antetul si meniul, main contine continutul principal, iar section si article grupeaza informatiile.

In head se afla titlul paginii, setarile pentru ecrane mobile si legatura catre style.css. Atributul lang="ro" indica limba continutului. Elementele h1, h2 si h3 sunt titluri, iar p marcheaza paragrafe.

Linkurile a duc la celelalte pagini. Clasele si ID-urile conecteaza HTML-ul cu CSS-ul si JavaScript-ul. De exemplu, id="codeInput" identifica editorul de cod.

2. PAGINILE SITE-ULUI

index.html
Este pagina principala. Introduce tema site-ului si ofera linkuri catre celelalte subiecte.

despre.html
Prezinta originea limbajului C#, informatii introductive, avantaje si dezavantaje, plus un videoclip YouTube.

caracteristici.html
Prezinta patru caracteristici: usurinta de citire, protectia impotriva greselilor, curatarea automata a memoriei si folosirea pe mai multe dispozitive.

exemplu.html
Contine un editor demonstrativ de cod C#, explicatii pentru cateva instructiuni si butoane pentru rulare si resetare.

aplicatii.html
Prezinta utilizari C# pentru aplicatii desktop cu Windows Forms si WPF, site-uri cu ASP.NET, aplicatii mobile si jocuri cu Unity.

contact.html
Ofera o descriere a proiectului, numele autorului si subiectul prezentarii.

3. CSS - ASPECTUL SITE-ULUI

Fisierul style.css controleaza culorile, dimensiunile, spatierea si asezarea elementelor. Variabilele din :root, precum --bg si --primary, pastreaza culorile folosite in site.

Selectorul * stabileste box-sizing: border-box. Clase precum .container, .topbar si .nav controleaza latimea continutului si meniul. .page-content, .feature-item si .app-card definesc aspectul continutului si al cardurilor.

Clasele .code-layout si .editor-panel aranjeaza explicatiile si editorul. Selectorii #codeInput si #outputArea stilizeaza campul de cod si zona rezultatului. Regulile @media adapteaza asezarea pentru latimi sub 860 si 560 de pixeli.

4. JAVASCRIPT - EDITORUL DEMONSTRATIV

Evenimentul DOMContentLoaded porneste scriptul dupa ce browserul a construit structura HTML a paginii.

Codul cauta elementele dupa ID-urile codeInput, outputArea, runCodeBtn si resetCodeBtn. Cand le gaseste pe pagina exemplu.html, completeaza editorul cu programul demonstrativ.

Butonul Ruleaza citeste codul si cauta apeluri de forma Console.WriteLine("text"). Textul dintre ghilimele apare in zona rezultatului. Daca exista mai multe apeluri, rezultatele sunt afisate pe linii separate.

Daca editorul este gol sau nu contine un apel recunoscut, pagina afiseaza un mesaj. Butonul Reseteaza restaureaza codul si mesajul initial.

IMPORTANT: script.js simuleaza doar rezultatul acestor apeluri. Editorul nu este un compilator C# si nu executa alte instructiuni ale limbajului.

5. CUM LUCREAZA FISIERELE IMPREUNA

Toate paginile HTML incarca style.css si script.js. CSS-ul ofera un aspect unitar, iar script.js activeaza editorul numai pe exemplu.html, unde exista campurile necesare.

Nu este necesara instalarea unor pachete. Pastreaza fisierele in acelasi folder, deoarece paginile folosesc linkuri relative catre stiluri, script si celelalte pagini.

Pe scurt:
- HTML = structura si continutul paginii.
- CSS = aspectul si asezarea elementelor.
- JavaScript = interactiunile din pagina.
