**Scripts: async, defer**  
In modern sites, scripts are usually "heavier" than HTML: they weigh more, take longer to process.  
When the browser loads HTML and reaches the `<script> ... </script>` tag, it cannot continue building the DOM. It must execute the script first. The same thing happens with external scripts `<script src = "..."> </script>`: the browser has to wait for the script to load, execute it, and only then process the rest of the page.

This leads to two important problems:
* Scripts do not see DOM elements below themselves, so you cannot add handlers to them, etc.
* If there is a large script at the top of the page, it "blocks" the page. Users do not see the page content until it loads and starts:
```html
<p>...содержимое перед скриптом...</p>

<script src="https://javascript.com/script.js"></script>

<!-- Это не отобразится, пока скрипт не загрузится -->
<p>...содержимое после скрипта...</p>
```

We can put the script at the bottom of the page. Then he will be able to see the elements above him and will not interfere with the display of the page content:
```html
<body>
  ...всё содержимое над скриптом...

  <script src="https://javascript.com/script.js"></script>
</body>
```

**Attribute defer**  
The defer attribute tells the browser to keep processing the page and load the script in the background, and then run that script when it loads.  
```html
<p>...содержимое до скрипта...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("Дерево DOM готово после скрипта с 'defer'!")); // (2)
</script>

<script defer src="https://javascript.com/script.js"></script>

<!-- отображается сразу же -->
<p>...содержимое после скрипта...</p>
```

* The defer scripts never block the page.
* The defer scripts are always executed when the DOM tree is ready, but before the DOMContentLoaded event.

(!) The defer attribute is only for external scripts
The defer attribute will be ignored if there is no src in the `<script>` tag.

**Attribute async**  
The async attribute means that the script is completely independent:

* The page does not wait for asynchronous scripts, the content is processed and displayed.
* The DOMContentLoaded event and asynchronous scripts don't wait for each other: DOMContentLoaded can happen before async script
* Other scripts do not wait for async, and casync scripts do not wait for other scripts.

So if we have multiple async scripts, they can be executed in any order. The first one to load will be launched first.  

**Dynamically loaded scripts**  
We can also add a script dynamically using JavaScript:  
```js
let script = document.createElement('script');
script.src = "/article/script-async-defer/script.js";
script.async = false; // true by default
document.body.append(script); // (*)
```

The script will start loading as soon as it is added to the document (*).  

Dynamically loaded scripts behave like "async" by default.
I.e:
* They are not waiting for anyone, and no one is waiting for them.
* The script that is loaded first is launched first (in the order of loading).

In practice, defer is used for scripts that need access to the entire DOM and / or their relative execution order is important.  
And async is good for independent scripts such as counters and ads, the relative order of which is irrelevant.