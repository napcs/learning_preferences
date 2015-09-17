# Learning Preferences App

This app gives teachers ideas of activities they can do in classes to
appeal to learner's learning preferences. It shows you an activity and
asks you if you do that activity or not. It then sorts your answers
into two piles. One pile of things you do and another of things you don't.

Then you have an idea of activities you could do, as well as an idea of the
various preferences you tend to support. It also gives you insight into
preferences you don't support.

I can't take credit for this game. It was something I learned about when I took
a course from Deb Walsh, a fantastic professional developer and teacher.

## Design

The design of the app is somewhat simplistic. There's a UI component that
wrangles the sub components. There's a Card, a Pile, and a Chooser.

### Card

The basic component. It just represents a card with an activity that a teacher
either does or doesn't do in the classroom.

~~~
+------------------+
|                  |
|    Card text     |
|                  |
+------------------+

~~~

### Chooser

Cards are thrown into the chooser from the UI. The user chooses a card and the card is sorted into an appropriate pile.

~~~
        +------------------+
        |                  |
        |    Card text     |
        |                  |
        +------------------+

+---------------+   +-----------------+
|   I do this   |   | I don't do this |
+---------------+   +-----------------+
~~~

There's a "do" pile and a "don't" pile. When no more cards are left to be sorted, the two
piles are rendered.

### Pile

A pile is just a pile of cards. It's given a collection
of cards.

~~~
+--------------------------------------------+
|  +------------------+ +------------------+ |
|  |                  | |                  | |
|  |    Card text     | |    Card text     | |
|  |                  | |                  | |
|  +------------------+ +------------------+ |
|  +------------------+ +------------------+ |
|  |                  | |                  | |
|  |    Card text     | |    Card text     | |
|  |                  | |                  | |
|  +------------------+ +------------------+ |
+--------------------------------------------+
~~~

### The UI

Initially, the UI shows the Chooser until there's no more cards left to choose.
Then it displays the cards into two piles.

~~~

   Things you do              Things you could do
   +-----------------------+  +-----------------------+
   | +--------+ +--------+ |  | +--------+ +--------+ |
   | |        | |        | |  | |        | |        | |
   | |  Card  | |  Card  | |  | |  Card  | |  Card  | |
   | |        | |        | |  | |        | |        | |
   | +--------+ +--------+ |  | +--------+ +--------+ |
   | +--------+ +--------+ |  | +--------+ +--------+ |
   | |        | |        | |  | |        | |        | |
   | |  Card  | |  Card  | |  | |  Card  | |  Card  | |
   | |        | |        | |  | |        | |        | |
   | +--------+ +--------+ |  | +--------+ +--------+ |
   +-----------------------+  +-----------------------+
~~~