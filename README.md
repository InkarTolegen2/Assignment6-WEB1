# Assignment 6. jQuery (Selectors, Effects, Animations)

**Name:** Ingkar Tolegen
**Group:** SE-2540

**GitHub Pages:** https://inkartolegen2.github.io/Assignment6-WEB1/
**URL:**  https://inkartolegen2.github.io/Assignment6-WEB1/

---

## Task 0. Setup
Include jQuery from a CDN, write a `$(document).ready()` function and print "jQuery is ready!" in the console.



![Task 0](images/Task%200.png)



## Task 1. Selectors & CSS
Display a name, a headline and an introduction. Use tag, ID and class selectors, update the text with `.text()` and `.html()`, change styles with `.css()` and add buttons to switch between light and dark themes.

Light theme:



![Task 1 light](images/task1.light.png)



Dark theme:



![Task 1 dark](images/task1.dark.png)



## Task 2. Visibility Methods
Create an "About Me" section with a biography, a status message and fun facts. Add Hide, Show and Toggle buttons to control their visibility.

Initial view:



![Task 2](images/task2.png)



After Hide:



![Task 2 hide](images/task2.hide.png)



After Show:



![Task 2 show](images/task2.show.png)



After Toggle:



![Task 2 toggle](images/task2.toggle.png)



## Task 3. Fade Methods
Display two images and control them with `.fadeIn()`, `.fadeOut()` and `.fadeToggle()`.

Initial view:



![Task 3](images/task3.png)



After Fade Out:



![Task 3 out](images/task3.out.png)



After Fade In:



![Task 3 in](images/task3.in.png)



## Task 4. Slide Methods
Create three clickable headings with collapsible panels below them. The panels open and close smoothly with `.slideUp()`, `.slideDown()` and `.slideToggle()`.

All panels closed:



![Task 4](images/task4.png)



Panels opened:



![Task 4 opened](images/task4.2.png)



## Task 5. Add & Remove Elements
Display a list of four technical skills with a text input and three buttons: Add Skill (`.append()`), Prepend Skill (`.prepend()`) and Remove Skill (`.remove()`). Empty skills cannot be added.

Initial list:



![Task 5](images/task5.png)



After adding a skill:



![Task 5 add](images/task5.add.png)



After prepending a skill:



![Task 5 prepend](images/task5.prepend.png)



Error for an empty field:



![Task 5 error](images/task5.remove.png)



## Task 6. Modifying Attributes
Add a social media link and a button that changes its destination with `.attr()`.

Before:



![Task 6 before](images/task6.png)



After:



![Task 6 after](images/task6.change.png)



## Task 7. Form Interaction
Create a form with Name and Email inputs. The entered values are displayed live below the form using `.val()` and `.text()`.

Empty form:



![Task 7](images/task7.png)



Live output:



![Task 7 typed](images/task7.input.png)



## Task 8. Basic Animation
Create skill bars for three technical skills (HTML 90%, CSS 75%, JavaScript 60%) and an "Animate My Skills" button. The bars start with zero width, grow to different target widths with `.animate()` and return to zero on the second click.

Zero width:



![Task 8](images/task8.png)



After animation:



![Task 8 animated](images/task8.animate.png)



---

## Summary
I built a personal portfolio page with jQuery. First I connected jQuery from a CDN and practiced selectors, `.text()`, `.html()` and `.css()` for themes. Then I added effects (hide/show/toggle, fade and slide), DOM manipulation (adding and removing skills with validation, changing a link with `.attr()`, a live form) and finally animated skill bars with `.animate()`.

While working I fixed several problems: buttons disappeared because they were placed inside the hidden element, and the skill bars did not work because of a class name typo. I tested every task in the browser and made screenshots for the report. The project is uploaded to GitHub and published with GitHub Pages.