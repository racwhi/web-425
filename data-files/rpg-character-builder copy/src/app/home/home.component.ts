import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Welcome to RPG Character Builder!</h1>

      <p>
        In this application, you can create and customize your own RPG
        characters. The sky is your limit, so use your creativity to build
        characters representing your gaming style . How would your character
        look!? It's up for you to decide. Whether it's a powerful warrior or a
        character you just happen to think of for the day . This application
        allows you to choose from may different things to create your character.
        If you can think of it , you can create it. You can also customize
        skills, abilities, and attributes. With our easy-to-use/ build/create
        interface, you can save your favorite characters and revisit them
        anytime to make changes or expand . Do you feel like joining other
        gamers to show off your characters? Well, you're in the right website
        application along with countless gamers who have created new characters
        for their adventures. Dive into your imagination and let your characters
        come to life! What would you decide to create today! As mentioned
        before, use your imagination! The sky is your limit! If you can think of
        it , you can create it here at RPG character builder! Sometimes, we need
        to create our own characters on paper and then construct them online; if
        that is your preference, you are welcome to do so, and once you're
        finished, bring your character alive by creating them here on this
        website. You will be happy that you have visited this site to create
        your one-of-a-kind RPG character. Your character is a click away. If you
        don't know where to start...start here.
      </p>

      <div class="characters-container">
        <div class="character">
          <img src="assets/images/character1.png" alt="Character 1 Example" />
          <p>Character 1 Example</p>
        </div>
        <div class="character">
          <img src="assets/images/character2.png" alt="Character 2 Example" />

          <p>Character 2 Example</p>
        </div>
        <div class="character">
          <img src="assets/images/character3.png" alt="Character 3 Example" />
          <p>Character 3 Example</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .characters-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }
      .character {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }
      .character img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      .character p {
        margin-top: 10px;
      }
    `,
  ],
})
export class HomeComponent {}
